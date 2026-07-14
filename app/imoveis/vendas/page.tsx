export default function SalesPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="relative left-1/2 w-screen -translate-x-1/2 max-w-none overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/80 px-8 py-14">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/40 to-transparent" />
          <div className="absolute inset-0 backdrop-blur-sm" />
          <div className="relative mx-auto max-w-6xl">
            <h1 className="text-4xl font-bold text-white">Imóveis Venda</h1>
            <p className="mt-4 text-slate-300">Encontre imóveis para comprar com facilidade e segurança.</p>
          </div>
        </div>

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
                <h3 className="text-xl font-semibold text-white">Imóvel em destaque {index + 1}</h3>
                <p className="text-slate-400">Cidade, Bairro • 3 quartos • 120m²</p>
                <p className="text-emerald-400 font-semibold">R$ 1.150.000</p>
                <p className="text-slate-500 text-sm">Venda, Administração completa e suporte jurídico.</p>
              </div>
            </article>
          ))}
        </section>

        <div className="mt-10 rounded-3xl border border-emerald-500/20 bg-slate-900/80 p-8 text-slate-100">
          <h2 className="text-2xl font-semibold text-white">Tenho um imóvel para vender</h2>
          <p className="mt-3 text-slate-400">Conte-nos sobre seu imóvel e nós te ajudamos a vender.</p>
          <form className="mt-6 grid gap-4">
            <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Nome" />
            <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Telefone" />
            <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="WhatsApp" />
            <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Endereço do imóvel" />
            <textarea className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Mensagem" rows={4} />
            <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400" type="submit">
              Enviar pedido de avaliação
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
