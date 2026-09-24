import type { Metadata } from "next";

export const metadata: Metadata = { title: "Studio — Settings" };

const checklist = [
  ["Brand", "Approved logo, fonts, photography and site copy"],
  ["Publication", "Essay permissions and original/canonical links"],
  ["Community", "Moderation rules and member sign-in"],
  ["Commerce", "Prices, inventory, shipping regions and COD fees"],
  ["Policies", "Final returns, privacy and purchase terms"],
];

export default function AdminSettingsPage() {
  return <div className="admin-subpage">
    <div className="admin-subheading"><div><p className="eyebrow">Studio / Site settings</p><h1>Before the doors <em>open.</em></h1><p>A quiet checklist for the pieces that make the world ready.</p></div></div>
    <div className="settings-checklist">{checklist.map(([title, detail], i) => <div key={title}><span>0{i+1}</span><strong>{title}</strong><p>{detail}</p><small>Awaiting approval</small></div>)}</div>
    <div className="admin-form-preview"><p className="eyebrow">Site details / Layout preview</p><h2>Keep the essentials close.</h2><div className="admin-form-grid"><label>Publication link<input value="speckofrot.substack.com" readOnly /></label><label>Order contact<input placeholder="To be confirmed" disabled /></label><label>Shipping origin<input placeholder="To be confirmed" disabled /></label><label>COD availability<input value="Not enabled" readOnly /></label></div><div className="admin-form-bottom"><span>Settings cannot be edited until the backend and owner authentication are added.</span><button className="button button-disabled" type="button" disabled>Save settings</button></div></div>
  </div>;
}
