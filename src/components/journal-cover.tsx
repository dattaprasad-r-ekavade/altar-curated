import { Sprig } from "@/components/marks";

export function JournalCover({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  return (
    <div className={`journal-cover journal-cover-${size}`} role="img" aria-label="Typographic preview of the Reflections in Bloom journal cover">
      <span>Altar Curated</span>
      <Sprig />
      <strong>Reflections <em>in Bloom</em></strong>
      <small>a journal for becoming</small>
    </div>
  );
}
