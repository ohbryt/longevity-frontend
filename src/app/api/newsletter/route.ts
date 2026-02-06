import { NextRequest, NextResponse } from "next/server";
import { getResend, AUDIENCE_ID, FROM_EMAIL } from "@/lib/resend";
import { welcomeEmailHtml } from "@/lib/email-templates";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 주소를 입력해 주세요." },
        { status: 400 },
      );
    }

    const resend = getResend();

    // Check if already subscribed
    const { data: existing } = await resend.contacts.list({
      audienceId: AUDIENCE_ID,
    });

    const alreadyExists = existing?.data?.some(
      (c) => c.email === email && !c.unsubscribed,
    );

    if (alreadyExists) {
      return NextResponse.json(
        { error: "이미 구독 중인 이메일입니다." },
        { status: 409 },
      );
    }

    // Add contact to Resend audience
    await resend.contacts.create({
      email,
      audienceId: AUDIENCE_ID,
    });

    // Send welcome email
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "Longevity Lab 구독을 환영합니다",
      html: welcomeEmailHtml(),
    });

    return NextResponse.json({ message: "구독이 완료되었습니다." });
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." },
      { status: 500 },
    );
  }
}
