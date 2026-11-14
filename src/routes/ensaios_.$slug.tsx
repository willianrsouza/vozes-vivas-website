import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { ensaios } from "@/data/ensaios";

export const Route = createFileRoute("/ensaios_/$slug")({
  loader: ({ params }) => {
    const ensaio = ensaios.find((item) => item.slug === params.slug);
    if (!ensaio) throw notFound();
    return ensaio;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.title ?? "Ensaio indisponível"} — Vozes Vivas` },
      { name: "description", content: loaderData?.intro ?? "Ensaios de poesia no Vozes Vivas." },
      { property: "og:title", content: `${loaderData?.title ?? "Ensaio indisponível"} — Vozes Vivas` },
      { property: "og:description", content: loaderData?.intro ?? "Ensaios de poesia no Vozes Vivas." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnsaioPage,
});

function EnsaioPage() {
  const ensaio = Route.useLoaderData();
  const others = ensaios.filter((item) => item.slug !== ensaio.slug);

  return (
    <div className="min-h-screen bg-background px-4 pb-24 font-sans text-foreground sm:px-6">
      <SiteHeader />
      <main>
        <section className="mt-12 grid gap-8 border-t border-foreground pt-5 md:grid-cols-2">
          <div>
            <p className="flex items-center gap-2 text-xl font-semibold"><span aria-hidden="true" className="size-6 shrink-0 bg-foreground [clip-path:polygon(0_0,100%_100%,0_100%)]" />{ensaio.date}</p>
            <h1 className="mt-3 text-4xl sm:text-6xl">{ensaio.title}</h1>
            <p className="mt-3 text-2xl">{ensaio.who}</p>
            <p className="mt-3 text-lg text-muted-foreground">{ensaio.tag}</p>
            <Button asChild variant="link" className="mt-5 h-auto p-0 text-lg text-foreground">
              <Link to="/ensaios">← Ensaios</Link>
            </Button>
          </div>
          <p className="text-2xl leading-tight sm:text-3xl">{ensaio.intro}<span aria-hidden="true" className="ml-2 inline-block size-6 rounded-full bg-foreground" /></p>
        </section>

        <img src={ensaio.img} alt={ensaio.title} width={1024} height={768} className="-mx-4 mt-8 aspect-[2.45/1] w-[calc(100%+2rem)] max-w-none object-cover sm:-mx-6 sm:w-[calc(100%+3rem)]" />

        <section aria-label="Sobre o ensaio" className="mt-8 grid gap-8 md:grid-cols-2">
          <div aria-hidden="true" className="hidden md:block" />
          <div className="space-y-6 text-2xl leading-tight sm:text-3xl">{ensaio.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </section>

        <section aria-labelledby="outros-ensaios" className="mt-16">
          <h2 id="outros-ensaios" className="text-4xl sm:text-5xl">Outros ensaios</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {others.map((item) => (
              <Link key={item.slug} to="/ensaios/$slug" params={{ slug: item.slug }} className="group border-t border-foreground pt-8">
                <img src={item.img} alt={item.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition group-hover:opacity-80" />
                <p className="mt-4 text-lg">{item.date}</p>
                <h3 className="mt-2 text-3xl italic sm:text-4xl">{item.title}</h3>
                <p className="mt-2 text-xl">{item.who}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}