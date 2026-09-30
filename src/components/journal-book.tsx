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
  const token = useRef(0);
  const [page, setPage] = useState(0);
  const total = contents.length;

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return 0;
    const width = el.clientWidth;
    el.style.setProperty("--opening", `${width}px`);
    return width;
  }, []);

  const go = useCallback((index: number) => {
    const el = track.current;
    if (!el) return;
    const next = Math.max(0, Math.min(total - 1, index));
    const width = measure() || el.clientWidth;
    const left = next * width;
    const distance = Math.abs(next - pageRef.current);
    const instant = reducedMotion() || distance !== 1;
    const id = ++token.current;

    pageRef.current = next;
    setPage(next);
    lock.current = true;

    el.classList.add("is-jumping");
    void el.offsetWidth;

    if (instant) {
      el.scrollLeft = left;
    } else {
      el.scrollTo({ left, behavior: "smooth" });
    }

    const opening = contents[next]?.id;
    if (opening && opening !== "cover") {
      if (window.location.hash.slice(1) !== opening) {
        history.replaceState(null, "", `#${opening}`);
      }
    } else if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const settle = () => {
      if (token.current !== id) return;
      el.scrollLeft = left;
      el.classList.remove("is-jumping");
      lock.current = false;
    };

    window.setTimeout(settle, instant ? 80 : 860);
    el.addEventListener("scrollend", settle, { once: true });
  }, [contents, measure, total]);

  useEffect(() => {
    const el = track.current;
    if (!el) return;

    measure();

    const sync = () => {
      const width = Math.max(el.clientWidth, 1);
      const i = Math.round(el.scrollLeft / width);
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
      go(pageRef.current + (event.deltaY > 0 ? 1 : -1));
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

    let lastWidth = 0;
    const onResize = () => {
      const width = measure();
      if (width === lastWidth && Math.abs(el.scrollLeft - pageRef.current * width) < 2) return;
      lastWidth = width;
      if (lock.current) return;
      el.classList.add("is-jumping");
      el.scrollLeft = pageRef.current * width;
      window.requestAnimationFrame(() => el.classList.remove("is-jumping"));
      sync();
    };

    el.addEventListener("scroll", sync, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("click", onClick);
    window.addEventListener("keydown", onKey);
    window.addEventListener("hashchange", jumpHash);
    window.addEventListener("resize", onResize);
    jumpHash();
    sync();

    const observer = new ResizeObserver(onResize);
    observer.observe(el);

    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", sync);
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("click", onClick);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("hashchange", jumpHash);
      window.removeEventListener("resize", onResize);
    };
  }, [contents, go, measure, total]);

  return (
    <div className="journal-book" data-opening={contents[page]?.id ?? ""}>
      <span className="journal-ribbon" aria-hidden="true" />
      <div className="journal-track" ref={track} tabIndex={0} aria-label="Altar journal">
        {children}
      </div>
      <nav className="journal-rail" aria-label="Openings of the journal">
        <button className="page-turn" type="button" onClick={() => go(page - 1)} disabled={page === 0} aria-label="Previous opening">
          Back
        </button>
        <div className="journal-contents">
          <p className="journal-now" aria-live="polite">{contents[page]?.label}</p>
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
        </div>
        <button className="page-turn" type="button" onClick={() => go(page + 1)} disabled={page === total - 1} aria-label="Next opening">
          Turn
        </button>
      </nav>
      <p className="journal-hint" aria-hidden="true">Turn the page</p>
    </div>
  );
}
