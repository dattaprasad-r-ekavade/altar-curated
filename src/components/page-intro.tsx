export function PageIntro({
  kicker,
  title,
  em,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  em?: string;
  lede?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="intro">
      <p className="kicker">{kicker}</p>
      <h1>
        {title}
        {em && <> <em>{em}</em></>}
      </h1>
      {lede && <p className="lede">{lede}</p>}
      {children}
    </header>
  );
}
