import type { Metadata } from "next";
import { IndexList } from "@/components/index-list";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "The Studio", description: "Creative process and behind-the-scenes notes from Altar Curated." };

export default function StudioPage() {
  return (
    <div className="shell page leaf-sheet">
      <PageIntro kicker="The Studio · Where the making happens" title="A little room" em="for process." lede="Creative practice, videos and behind-the-scenes notes, as they find their shape." note="sketches, still smudged" />
      <IndexList items={[
        { mark: "I", title: "Behind the journal", text: "How Reflections in Bloom came to be.", aside: "Soon" },
        { mark: "II", title: "Films", text: "Process videos and conversations.", aside: "Soon" },
        { mark: "III", title: "About Altar", text: "The thinking and feeling behind this world.", href: "/about" },
      ]} />
    </div>
  );
}
