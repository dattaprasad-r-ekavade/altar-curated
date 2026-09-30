import type { Metadata } from "next";
import { IndexList } from "@/components/index-list";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Owner Desk — Settings" };

const checklist = [
  ["Brand", "Approved logo, fonts, photography and site copy"],
  ["Publication", "Essay permissions and original/canonical links"],
  ["Community", "Moderation rules and member sign-in"],
  ["Commerce", "Prices, inventory, shipping regions and COD fees"],
  ["Policies", "Final returns, privacy and purchase terms"],
];

export default function AdminSettingsPage() {
  return (
    <>
      <PageIntro kicker="Owner desk · Settings" title="Before the doors" em="open." lede="A quiet checklist for the pieces that make the world ready." />
      <IndexList items={checklist.map(([title, detail], index) => ({ mark: ["I", "II", "III", "IV", "V"][index], title, text: detail, aside: "Awaiting approval" }))} />
      <form className="panel" aria-label="Site details preview">
        <p className="kicker">Site details · Layout preview</p>
        <h2>Keep the essentials close.</h2>
        <div className="form-grid">
          <label className="field">Publication link<input value="speckofrot.substack.com" readOnly /></label>
          <label className="field">Order contact<input placeholder="To be confirmed" disabled /></label>
          <label className="field">Shipping origin<input placeholder="To be confirmed" disabled /></label>
          <label className="field">COD availability<input value="Not enabled" readOnly /></label>
        </div>
        <div className="form-foot">
          <p>Settings cannot be edited until the backend and owner authentication are added.</p>
          <button className="btn" type="button" disabled>Save settings</button>
        </div>
      </form>
    </>
  );
}
