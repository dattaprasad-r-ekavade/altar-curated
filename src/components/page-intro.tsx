export function PageIntro({
  kicker,
  title,
  em,
  lede,
  note,
  children,
}: {
  kicker: string;
  title: string;
  em?: string;
  lede?: string;
  note?: string;
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
      {note && <p className="hand date-line">{note}</p>}
      {children}
    </header>
  );
}
