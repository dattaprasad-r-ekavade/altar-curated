import type { Metadata } from "next";
import { IndexList } from "@/components/index-list";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Owner Desk — Orders" };

export default function AdminOrdersPage() {
  return (
    <>
      <div className="head">
        <PageIntro kicker="Owner desk · Orders" title="Every order," em="clearly kept." lede="COD collection and fulfilment keep separate statuses." />
        <button type="button" className="btn" disabled>Export CSV</button>
      </div>
      <div className="stats stats-3">
        <div><span>Orders placed</span><strong>—</strong></div>
        <div><span>COD pending</span><strong>—</strong></div>
        <div><span>COD collected</span><strong>—</strong></div>
      </div>
      <div className="tabs"><span className="active">All</span><span>Awaiting confirmation</span><span>In transit</span><span>Completed</span></div>
      <IndexList items={[{ mark: "I", title: "Example order · AC-0001", text: "Reflections in Bloom · no customer data", href: "/order/preview", aside: "COD pending" }]} />
      <div className="panel">
        <p className="kicker">A clear handoff</p>
        <h2>Placed isn&apos;t paid.</h2>
        <p className="lede">Confirmed, packed, dispatched and delivered are tracked separately from cash collected.</p>
        <div className="quiet-actions"><button disabled type="button">Confirm order</button><button disabled type="button">Mark dispatched</button><button disabled type="button">Record COD received</button></div>
      </div>
    </>
  );
}
