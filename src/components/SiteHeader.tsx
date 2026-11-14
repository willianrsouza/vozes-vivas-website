import { Link } from "@tanstack/react-router";

const Tri = () => <span className="inline-block size-7 bg-foreground [clip-path:polygon(0_0,100%_100%,0_100%)]" />;

const nav = [
  { l: "Agenda", i: <Tri /> },
  { l: "Ensaios", i: <span className="inline-block size-7 rounded-full bg-foreground" /> },
  { l: "Poetas", i: <span className="inline-block size-7 bg-foreground [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]" /> },
  { l: "Ingressos", i: <span className="inline-block size-6 bg-foreground" /> },
  { l: "Ouvir", i: <span className="inline-block size-6 bg-foreground [clip-path:polygon(0_0,100%_50%,0_100%)]" /> },
];

export function SiteHeader() {
  return (
    <header className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 gap-y-6 pt-6 sm:gap-x-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:gap-8">
      <div className="flex min-w-0 items-center gap-2 text-lg sm:gap-3 sm:text-2xl xl:w-72 xl:text-3xl"><span className="size-5 shrink-0 rounded-full bg-foreground sm:size-7" />Buscar</div>
      <nav aria-label="Menu principal" className="order-3 col-span-2 flex min-w-0 flex-wrap gap-x-5 gap-y-4 border-l-8 border-foreground pb-6 pl-3 text-xl sm:pl-4 sm:text-2xl lg:order-none lg:col-span-1 lg:pb-14 xl:gap-8 xl:text-3xl [&_a]:min-w-0 [&_a_span]:shrink-0">
        {nav.map((n) => n.l === "Ensaios" ? (
          <Link key={n.l} to="/ensaios" activeProps={{ "aria-current": "page" }} className="flex items-center gap-3 hover:opacity-60">{n.i}{n.l}</Link>
        ) : <a key={n.l} href="#" className="flex items-center gap-3 hover:opacity-60">{n.i}{n.l}</a>)}
      </nav>
      <div className="flex shrink-0 items-start gap-2 border-l-8 border-foreground pl-2 sm:gap-6 sm:pl-3">
        <Link to="/" className="font-display text-2xl leading-none -rotate-3 sm:text-4xl">VOZES<br />VIVAS</Link>
        <span className="shrink-0 text-xs">English</span>
      </div>
    </header>
  );
}
