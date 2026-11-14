import { Link, createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";
import recital from "@/assets/show1.jpg";
import performance from "@/assets/show3.jpg";

export const Route = createFileRoute("/ensaios")({
  head: () => ({
    meta: [
      { title: "Ensaios — Vozes Vivas" },
      { name: "description", content: "A palavra encontra a voz, o corpo e a música. Conheça os ensaios de poesia do Vozes Vivas." },
      { property: "og:title", content: "Ensaios — Vozes Vivas" },
      { property: "og:description", content: "Poesia em voz alta e em movimento: encontros entre palavra, corpo e música." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnsaiosPage,
});

function EnsaiosPage() {
  return (
    <div className="min-h-screen bg-background px-4 pb-24 font-sans text-foreground sm:px-6">
      <SiteHeader />

      <main>
        <section className="mt-12 grid gap-8 border-t border-foreground pt-5 md:grid-cols-2">
          <div>
            <h1 className="text-6xl sm:text-7xl">Ensaios</h1>
            <Button asChild variant="link" className="mt-2 h-auto justify-start whitespace-normal p-0 text-left text-base font-normal text-foreground sm:text-lg">
              <Link to="/">
                <span aria-hidden="true" className="h-5 w-7 shrink-0 bg-foreground [clip-path:polygon(0_0,70%_0,100%_50%,70%_100%,0_100%)]" />
                <span>Confira os próximos encontros na nossa <strong>Agenda</strong></span>
              </Link>
            </Button>
          </div>
          <p className="text-2xl leading-tight sm:text-3xl">
            No Vozes Vivas, a poesia é um lugar de encontro. A palavra atravessa a voz, o corpo e a música, sem se limitar às fronteiras entre as formas de arte.
            <span aria-hidden="true" className="ml-2 inline-block size-6 rounded-full bg-foreground" />
          </p>
        </section>

        <img src={hero} alt="Poeta em cena, durante um recital de poesia" width={1600} height={944} className="-mx-4 mt-8 aspect-[2.45/1] w-[calc(100%+2rem)] max-w-none object-cover sm:-mx-6 sm:w-[calc(100%+3rem)]" />

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <div aria-hidden="true" className="hidden md:block" />
          <div className="space-y-6 text-2xl leading-tight sm:text-3xl">
            <p>Acreditamos que a criação não precisa caber em categorias. Quando a poesia encontra outras linguagens, surgem novas maneiras de sentir, de escutar e de olhar o mundo.</p>
            <p>Os ensaios são esse espaço aberto: o verso ainda em construção, a voz que experimenta, o gesto que procura seu ritmo. Entre a leitura e a cena, cada encontro é uma oportunidade de compartilhar a palavra e descobrir o que ela pode se tornar. Aqui, a poesia permanece viva.</p>
          </div>
        </section>

        <section aria-label="Linguagens dos ensaios" className="mt-12 grid gap-8 md:grid-cols-2">
          <article className="border-t border-foreground pt-8">
            <img src={recital} alt="Cena de recital" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
            <h2 className="mt-4 text-3xl italic sm:text-4xl">Ensaios / Poesia falada</h2>
          </article>
          <article className="border-t border-foreground pt-8">
            <img src={performance} alt="Expressão corporal em cena" loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
            <h2 className="mt-4 text-3xl italic sm:text-4xl">Ensaios / Poesia e corpo</h2>
          </article>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}