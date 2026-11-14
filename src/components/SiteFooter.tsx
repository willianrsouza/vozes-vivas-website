export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-8 border-foreground pt-10">
      <div className="grid gap-8 md:grid-cols-2">
        <h2 className="min-w-0 text-3xl leading-tight sm:text-5xl">Envie a sua poesia para a nossa curadoria e apareça nos destaques das Poesias da Semana</h2>
        <div className="flex min-w-0 flex-col justify-end md:items-end">
          <a href="mailto:curadoria@vozesvivas.com.br" className="flex max-w-full items-center gap-3 text-xl hover:opacity-60 sm:text-3xl">
            <span className="h-4 w-5 shrink-0 bg-foreground [clip-path:polygon(0_0,70%_0,100%_50%,70%_100%,0_100%)]" />
            <span className="min-w-0 [overflow-wrap:anywhere]">curadoria@vozesvivas.com.br</span>
          </a>
          <p className="mt-4 text-lg text-muted-foreground">Respondemos todas as poesias recebidas.</p>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-foreground pt-4 text-sm text-muted-foreground">
        <span>VOZES VIVAS — Poesia ao vivo</span>
        <span>© 2026</span>
      </div>
    </footer>
  );
}
