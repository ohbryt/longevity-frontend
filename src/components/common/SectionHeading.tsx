export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold text-text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-text-muted">{subtitle}</p>
      )}
      <div className="divider-ornament mx-auto mt-5 max-w-[12rem]">
        <span className="text-sm text-warm-400">&loz;</span>
      </div>
    </div>
  );
}
