export default function LegalPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold text-white">Jurídico</h1>
        <p className="mt-4 text-slate-300">Nossas áreas de atuação para proteger você e o seu patrimônio.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {[
            "Trabalhista",
            "Previdenciário",
            "Juizados Especiais",
            "Família",
            "Tributário Imobiliário",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8">
              <h2 className="text-xl font-semibold text-white">{item}</h2>
              <p className="mt-3 text-slate-400">Atendimento personalizado e soluções jurídicas estratégicas.</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-emerald-500/20 bg-slate-900/80 p-8 text-slate-100">
          <h2 className="text-2xl font-semibold text-white">Agendar atendimento</h2>
          <p className="mt-3 text-slate-400">Fale com um especialista para uma consultoria jurídica detalhada.</p>
          <a href="/contato" className="mt-6 inline-flex rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            Agendar atendimento
          </a>
        </div>
      </div>
    </main>
  );
}
