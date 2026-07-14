import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/o-grupo", label: "O Grupo" },
  { href: "/imoveis/vendas", label: "Imóveis Vendas" },
  { href: "/imoveis/locacao", label: "Imóveis Locação" },
  { href: "/juridico", label: "Jurídico" },
  { href: "/contabil", label: "Contábil" },
  { href: "/contato", label: "Contato" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 text-slate-100">
        <Link href="/" className="font-semibold text-lg text-emerald-300">
          Grupo AJIC
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-slate-300 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/contato" className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            Contato
          </Link>
          <Link href="/admin" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
            Admin
          </Link>
        </div>
      </div>
    </header>
  );
}
