import Link from "next/link";

export type IndexItem = {
  mark: string;
  title: string;
  text?: string;
  href?: string;
  aside?: string;
};

export function IndexList({ items, compact = false }: { items: IndexItem[]; compact?: boolean }) {
  return (
    <ul className={`index${compact ? " index-compact" : ""}`}>
      {items.map((item) => {
        const body = (
          <>
            <span className="index-mark">{item.mark}</span>
            <span className="index-body">
              <span className="index-title">{item.title}</span>
              {item.text && <span className="index-text">{item.text}</span>}
            </span>
            <span className="index-aside">{item.aside ?? (item.href ? "Enter" : "")}</span>
          </>
        );
        return (
          <li key={item.title}>
            {item.href ? <Link href={item.href} className="index-row">{body}</Link> : <div className="index-row">{body}</div>}
          </li>
        );
      })}
    </ul>
  );
}
