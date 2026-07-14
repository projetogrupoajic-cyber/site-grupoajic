export default function RentPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold text-white">Imóveis Locação</h1>
        <p className="mt-4 text-slate-300">Encontre imóveis para locação com clareza e praticidade.</p>

        <section className="mt-10 rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8">
          <h2 className="text-2xl font-semibold text-white">Filtros</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              "Cidade",
              "Bairro",
              "Valor",
              "Tipo",
            ].map((filter) => (
              <input key={filter} className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder={filter} />
            ))}
          </div>
        </section>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <article key={index} className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-white">Imóvel para locação {index + 1}</h3>
                <p className="text-slate-400">Cidade, Bairro • 2 quartos • 85m²</p>
                <p className="text-emerald-400 font-semibold">R$ 3.200 / mês</p>
                <p className="text-slate-500 text-sm">Locação com suporte jurídico e gestão de contrato.</p>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-10 rounded-3xl border border-emerald-500/20 bg-slate-900/80 p-8 text-slate-100">
          <h2 className="text-2xl font-semibold text-white">Quero anunciar meu imóvel para locação</h2>
          <p className="mt-3 text-slate-400">Preencha os dados do seu imóvel e nossa equipe entrará em contato.</p>
          <form className="mt-6 grid gap-4">
            <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Nome" />
            <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Telefone" />
            <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="WhatsApp" />
            <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Endereço do imóvel" />
            <textarea className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Mensagem" rows={4} />
            <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400" type="submit">
              Enviar anúncio
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
