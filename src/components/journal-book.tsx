"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Opening = { id: string; label: string };

function reducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function Spread({
  id,
  label,
  cover = false,
  tone,
  children,
}: {
  id: string;
  label: string;
  cover?: boolean;
  tone?: "dark" | "lavender" | "deep";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`spread${cover ? " spread-cover" : ""}${tone ? ` ${tone}` : ""}`}
      aria-label={label}
    >
      {children}
    </section>
  );
}

export function JournalBook({
  children,
  contents,
}: {
  children: React.ReactNode;
  contents: Opening[];
}) {
  const track = useRef<HTMLDivElement>(null);
  const pageRef = useRef(0);
  const lock = useRef(false);
  const [page, setPage] = useState(0);
  const total = contents.length;

  const go = useCallback((index: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(total - 1, index));
    const child = el.children[next] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({
      left: child.offsetLeft,
      behavior: reducedMotion() ? "auto" : "smooth",
    });
  }, [total]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    const sync = () => {
      const i = Math.round(el.scrollLeft / Math.max(el.clientWidth, 1));
      const clamped = Math.max(0, Math.min(total - 1, i));
      pageRef.current = clamped;
      setPage(clamped);
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey) return;
      if (window.matchMedia("(max-width: 760px)").matches) return;
      const vertical = Math.abs(event.deltaY) >= Math.abs(event.deltaX);
      if (!vertical) return;
      const spread = el.children[pageRef.current] as HTMLElement | undefined;
      if (spread && spread.scrollHeight > spread.clientHeight + 8) {
        const canDown = event.deltaY > 0 && spread.scrollTop + spread.clientHeight < spread.scrollHeight - 2;
        const canUp = event.deltaY < 0 && spread.scrollTop > 2;
        if (canDown || canUp) return;
      }
      event.preventDefault();
      if (lock.current) return;
      if (Math.abs(event.deltaY) < 8) return;
      lock.current = true;
      go(pageRef.current + (event.deltaY > 0 ? 1 : -1));
      window.setTimeout(() => {
        lock.current = false;
      }, reducedMotion() ? 120 : 720);
    };

    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (event.key === "ArrowRight" || event.key === "PageDown") {
        event.preventDefault();
        go(pageRef.current + 1);
      }
      if (event.key === "ArrowLeft" || event.key === "PageUp") {
        event.preventDefault();
        go(pageRef.current - 1);
      }
      if (event.key === "Home") {
        event.preventDefault();
        go(0);
      }
      if (event.key === "End") {
        event.preventDefault();
        go(total - 1);
      }
    };

    const onClick = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest("a[href^='#']");
      if (!link) return;
      const id = decodeURIComponent((link as HTMLAnchorElement).hash.slice(1));
      const index = contents.findIndex((item) => item.id === id);
      if (index >= 0) {
        event.preventDefault();
        go(index);
      }
    };

    const jumpHash = () => {
      const id = window.location.hash.slice(1);
      const index = contents.findIndex((item) => item.id === id);
      if (index >= 0) go(index);
    };

    el.addEventListener("scroll", sync, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("click", onClick);
    window.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", jumpHash);
    window.addEventListener("resize", sync);
    jumpHash();
    sync();

    return () => {
      el.removeEventListener("scroll", sync);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("hashchange", jumpHash);
      window.removeEventListener("resize", sync);
    };
  }, [contents, go, total]);

  return (
    <div className="journal-book" data-opening={contents[page]?.id ?? ""}>
      <div className="journal-track" ref={track} tabIndex={0} aria-label="Altar journal">
        {children}
      </div>
      <nav className="journal-rail" aria-label="Openings of the journal">
        <button className="page-turn" type="button" onClick={() => go(page - 1)} disabled={page === 0} aria-label="Previous opening">
          Back
        </button>
        <ol>
          {contents.map((item, index) => (
            <li key={item.id}>
              <button
                type="button"
                aria-label={item.label}
                aria-current={index === page ? "true" : undefined}
                onClick={() => go(index)}
              >
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ol>
        <button className="page-turn" type="button" onClick={() => go(page + 1)} disabled={page === total - 1} aria-label="Next opening">
          Turn
        </button>
      </nav>
      <p className="journal-hint" aria-hidden="true">Turn the page</p>
    </div>
  );
}
