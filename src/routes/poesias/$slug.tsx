import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { poems } from "@/data/poems";

export const Route = createFileRoute("/poesias/$slug")({
  loader: ({ params }) => {
    const poem = poems.find((p) => p.slug === params.slug);
    if (!poem) throw notFound();
    return poem;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Poesia"} — Vozes Vivas` },
      { name: "description", content: `Poesia de ${loaderData?.who ?? ""} no Vozes Vivas.` },
      { property: "og:title", content: loaderData?.title ?? "Poesia" },
      { property: "og:description", content: `Poesia de ${loaderData?.who ?? ""} no Vozes Vivas.` },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PoemPage,
});

const Hex = () => <span className="inline-block size-6 bg-foreground [clip-path:polygon(25%_0,75%_0,100%_50%,75%_100%,25%_100%,0_50%)]" />;

function PoemPage() {
  const poem = Route.useLoaderData();
  const others = poems.filter((p) => p.slug !== poem.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background px-4 pb-24 font-sans text-foreground sm:px-6">
      <SiteHeader />

      <section className="mt-14 grid gap-9 border-t border-foreground pt-10 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-2 text-2xl">
            <Hex />
            <span className="font-semibold">{poem.date.slice(0, 5)}</span>
          </div>
          <h1 className="mt-2 text-4xl">{poem.title}</h1>
          <p className="mt-1 text-2xl">{poem.who}</p>
          <a href="#" className="mt-1 block text-xl text-muted-foreground hover:opacity-60">{poem.handle}</a>
          <a href="#" className="mt-6 flex items-center gap-2 text-lg">
            <span className="inline-block size-5 bg-foreground [clip-path:polygon(50%_0,100%_50%,65%_50%,65%_100%,35%_100%,35%_50%,0_50%)]" />
            Compartilhar
          </a>
        </div>
        <div className="min-w-0 space-y-8 text-xl leading-relaxed [overflow-wrap:anywhere] sm:text-2xl">
          {poem.body.map((stanza, i) => (
            <p key={i} className="whitespace-pre-line">{stanza}</p>
          ))}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-4xl sm:text-6xl">Veja também</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((n) => (
            <Link key={n.slug} to="/poesias/$slug" params={{ slug: n.slug }} className="group min-w-0 border-t border-foreground pt-1">
              <div className="text-sm">Poema</div>
              <div className="mt-2 flex flex-wrap items-center gap-2 text-xl xl:text-2xl">
                <Hex />
                <span className="font-semibold">{n.date}</span> {n.wd}
              </div>
              <h3 className="mt-2 text-3xl group-hover:opacity-60">{n.title}</h3>
              <p className="mt-1 text-xl">{n.who}</p>
              <p className="mt-6 text-muted-foreground">{n.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
