export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold text-white">O Grupo AJIC</h1>
        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          O Grupo AJIC reúne serviços de assessoria jurídica, imobiliária e contábil para empresas e pessoas.
          Atuamos com transparência, qualidade e foco em resultados.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8">
            <h2 className="text-xl font-semibold text-white">Missão</h2>
            <p className="mt-3 text-slate-300">Prestar serviços completos e humanizados, com excelência técnica e atendimento próximo.</p>
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8">
            <h2 className="text-xl font-semibold text-white">Visão</h2>
            <p className="mt-3 text-slate-300">Ser referência regional em soluções jurídicas, imobiliárias e contábeis.</p>
          </div>
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8">
            <h2 className="text-xl font-semibold text-white">Valores</h2>
            <p className="mt-3 text-slate-300">Ética, transparência, agilidade e compromisso com o cliente.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
