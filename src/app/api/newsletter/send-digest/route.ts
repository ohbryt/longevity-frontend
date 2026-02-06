import { NextRequest, NextResponse } from "next/server";
import { getResend, AUDIENCE_ID, FROM_EMAIL, CRON_SECRET } from "@/lib/resend";
import { digestEmailHtml } from "@/lib/email-templates";
import { getAllArticles } from "@/lib/content";

async function handleDigest(request: NextRequest) {
  try {
    // Authenticate: Vercel Cron or manual trigger with secret
    const authHeader = request.headers.get("authorization");
    if (!CRON_SECRET || authHeader !== `Bearer ${CRON_SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const resend = getResend();

    // Get latest articles (up to 5)
    const articles = getAllArticles().slice(0, 5);

    if (articles.length === 0) {
      return NextResponse.json({ message: "No articles to send." });
    }

    // Get all subscribers from audience
    const { data: contacts, error: listError } = await resend.contacts.list({
      audienceId: AUDIENCE_ID,
    });

    if (listError || !contacts?.data?.length) {
      return NextResponse.json({
        message: "No subscribers found.",
        error: listError?.message,
      });
    }

    const subscribers = contacts.data
      .filter((c) => !c.unsubscribed)
      .map((c) => c.email);

    if (subscribers.length === 0) {
      return NextResponse.json({ message: "No active subscribers." });
    }

    const html = digestEmailHtml(articles);
    const today = new Date();
    const subject = `[Longevity Lab] ${today.getMonth() + 1}월 ${today.getDate()}일 Weekly Research Digest`;

    // Send to each subscriber (Resend batch max 100)
    const batch = subscribers.map((to) => ({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    }));

    const BATCH_SIZE = 100;
    let totalSent = 0;
    for (let i = 0; i < batch.length; i += BATCH_SIZE) {
      const chunk = batch.slice(i, i + BATCH_SIZE);
      await resend.batch.send(chunk);
      totalSent += chunk.length;
    }

    return NextResponse.json({
      message: `Digest sent to ${totalSent} subscribers.`,
      articles: articles.length,
    });
  } catch (error) {
    console.error("Send digest error:", error);
    return NextResponse.json(
      { error: "Failed to send digest." },
      { status: 500 },
    );
  }
}

// Vercel Cron triggers GET requests
export const GET = handleDigest;
// Manual trigger via POST
export const POST = handleDigest;
