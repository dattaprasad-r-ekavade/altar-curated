export function PrototypeBanner({ children }: { children: React.ReactNode }) {
  return (
    <p className="preview-note" role="note">
      <span>Preview</span> {children}
    </p>
  );
}
