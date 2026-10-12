// Sideways-scrolling testimonial videos. Pass src (and poster) for real videos; without src a placeholder shows.
export type Vid = { name: string; role: string; src?: string; poster?: string };
export function VideoRail({ items }: { items: Vid[] }) {
  return (
    <ul tabIndex={0} aria-label="Testimonial videos" className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
      {items.map((v, i) => (
        <li key={i} className="group w-[72vw] shrink-0 snap-start md:w-80">
          <div className="aspect-[9/16] overflow-hidden rounded-2xl bg-white/80 transition-colors group-hover:bg-white">
            {v.src ? (
              <video controls preload="none" poster={v.poster} className="h-full w-full object-cover"><source src={v.src} /></video>
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-3 text-muted">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-black text-ink transition-transform group-hover:scale-110">▶</span>
                [TESTIMONIAL VIDEO]
              </div>
            )}
          </div>
          <p className="mt-3 font-semibold">{v.name}</p><p className="text-sm text-body">{v.role}</p>
        </li>
      ))}
    </ul>
  );
}
