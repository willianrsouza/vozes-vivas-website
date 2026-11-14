import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { HomeCalendar } from "@/components/HomeCalendar";
import { poems } from "@/data/poems";
import { ensaios } from "@/data/ensaios";
import hero from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vozes Vivas — Poesia ao vivo" },
      { name: "description", content: "Saraus, recitais e encontros de poesia. Veja a agenda e garanta seu lugar." },
      { property: "og:title", content: "Vozes Vivas" },
      { property: "og:description", content: "Poesia falada, encenada e compartilhada." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const Tri = () => <span className="inline-block size-7 bg-foreground [clip-path:polygon(0_0,100%_100%,0_100%)]" />;

function Index() {
  return (
    <div className="min-h-screen bg-background px-4 pb-24 font-sans text-foreground sm:px-6">
      <SiteHeader />

      <section className="mt-14 grid gap-9 lg:grid-cols-[1.45fr_1fr]">
        <img src={hero} alt="Poeta recitando no palco" width={1600} height={944} className="h-full w-full object-cover" />
        <HomeCalendar />
      </section>

      <section className="mt-9 grid gap-5 md:grid-cols-[auto_minmax(0,1fr)] md:gap-8">
        <div className="flex items-start gap-2 text-3xl font-semibold lg:w-72 lg:text-4xl"><Tri />19.11</div>
        <div className="min-w-0 border-l-8 border-foreground pl-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl">Silêncio. Duplo Verso</h1>
          <p className="mt-4 text-3xl sm:text-4xl">Katia Mendes</p>
          <p className="mt-8 text-2xl">Sarau</p>
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-4xl sm:text-6xl lg:text-8xl">Poesias da Semana</h2>
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {poems.map((n) => (
            <Link key={n.slug} to="/poesias/$slug" params={{ slug: n.slug }} className="group min-w-0 border-t border-foreground pt-1">
              <div className="text-sm">Poema</div>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xl xl:text-2xl">
                <span className="inline-block size-6 bg-foreground [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]" />
                <span className="font-semibold">{n.date}</span> {n.wd}
              </div>
              <h3 className="mt-2 text-3xl group-hover:opacity-60">{n.title}</h3>
              <p className="mt-1 text-xl">{n.who}</p>
              <p className="mt-6 text-muted-foreground">{n.excerpt}</p>
            </Link>
          ))}
        </div>
        <a href="#" className="mt-16 flex items-center gap-3 text-xl"><span className="text-2xl tracking-tighter">•••</span>Mais</a>
      </section>

      <section id="agenda" aria-labelledby="ensaios-da-semana" className="mt-24 scroll-mt-6">
        <h2 id="ensaios-da-semana" className="text-4xl sm:text-6xl lg:text-8xl">Ensaios da Semana</h2>
        <div className="mt-16 grid gap-9 md:grid-cols-3">
          {ensaios.map((s) => (
            <Link key={s.slug} to="/ensaios/$slug" params={{ slug: s.slug }} className="group min-w-0">
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition group-hover:opacity-80" />
              <div className="mt-4 flex items-center gap-2 text-2xl font-semibold"><Tri />{s.date}</div>
              <h3 className="mt-2 text-4xl">{s.title}</h3>
              <p className="mt-1 text-xl">{s.who}</p>
              <p className="mt-3 text-muted-foreground">{s.tag}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
