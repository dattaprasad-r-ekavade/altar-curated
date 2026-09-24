export function PrototypeBanner({ children }: { children: React.ReactNode }) {
  return (
    <div className="prototype-banner" role="status">
      <span aria-hidden="true">✦</span>
      <p><strong>Prototype only.</strong> {children}</p>
    </div>
  );
}
