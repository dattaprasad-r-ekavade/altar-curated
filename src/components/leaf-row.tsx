import Link from "next/link";
import type { IndexItem } from "@/components/index-list";

export function LeafRow({
  label,
  items,
}: {
  label: string;
  items: IndexItem[];
}) {
  return (
    <div className="leaf-row" aria-label={label}>
      {items.map((item) => {
        const body = (
          <>
            <span className="leaf-card-mark">{item.mark}</span>
            <h3>{item.title}</h3>
            {item.text && <p>{item.text}</p>}
            <span className="leaf-card-aside">{item.aside ?? (item.href ? "Turn" : "")}</span>
          </>
        );
        return item.href ? (
          <Link className="leaf-card" href={item.href} key={item.title}>
            {body}
          </Link>
        ) : (
          <article className="leaf-card" key={item.title}>
            {body}
          </article>
        );
      })}
    </div>
  );
}
