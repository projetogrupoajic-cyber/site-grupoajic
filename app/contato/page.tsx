export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold text-white">Contato</h1>
        <p className="mt-3 text-slate-400">Fale conosco por telefone, WhatsApp ou deixe sua mensagem.</p>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8">
            <h2 className="text-xl font-semibold text-white">Informações de contato</h2>
            <div className="mt-6 space-y-4 text-slate-300">
              <p><span className="font-semibold text-slate-100">Endereço:</span> Rua Felipe Cardoso, 1667, Santa Cruz - RJ</p>
              <p><span className="font-semibold text-slate-100">Telefone:</span> (21) 3395-3340</p>
              <p><span className="font-semibold text-slate-100">Email:</span> ajic@ajic.com.br</p>
              <p><span className="font-semibold text-slate-100">WhatsApp:</span> <a className="text-emerald-300 hover:text-emerald-400" href="https://wa.me/552133953340">(21) 3395-3340</a></p>
            </div>
          </div>

          <form className="rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 text-slate-100">
            <h2 className="text-xl font-semibold text-white">Envie sua mensagem</h2>
            <div className="mt-6 grid gap-4">
              <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Nome" />
              <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Telefone" />
              <input className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" placeholder="Email" />
              <textarea className="w-full rounded-3xl border border-slate-800 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none focus:border-emerald-500" rows={5} placeholder="Mensagem" />
              <button className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400" type="submit">
                Enviar mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
