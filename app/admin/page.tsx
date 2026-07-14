import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold text-white">Painel Administrativo</h1>
        <p className="mt-3 text-slate-400">Acesso rápido para gerenciar imóveis, banners, equipe e contatos.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {[
            { title: "Imóveis Venda", href: "/admin/imoveis/vendas" },
            { title: "Imóveis Locação", href: "/admin/imoveis/locacao" },
            { title: "Banners", href: "/admin/banners" },
            { title: "Equipe", href: "/admin/equipe" },
            { title: "Informações da Empresa", href: "/admin/configuracoes" },
            { title: "Contatos Recebidos", href: "/admin/contatos" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="block rounded-3xl border border-slate-800/80 bg-slate-900/80 p-8 text-slate-100 transition hover:border-emerald-500 hover:bg-slate-900">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-400">Acesse e gerencie este conteúdo.</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
