// Plain image wrapper; no scroll parallax.
export function Parallax({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`overflow-hidden ${className}`}><div className="h-full w-full">{children}</div></div>;
}
