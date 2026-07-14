"use client";

import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const services = links.filter((l) => ["/imoveis/vendas", "/imoveis/locacao", "/juridico", "/contabil"].includes(l.href));
  
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 text-slate-100">
        <Link href="/" className="font-semibold text-lg text-emerald-300">
          Grupo AJIC
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 md:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="text-2xl leading-none">{menuOpen ? "×" : "☰"}</span>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-slate-300 transition hover:text-white">
            Home
          </Link>

          <Link href="/o-grupo" className="text-sm font-medium text-slate-300 transition hover:text-white">
            O Grupo
          </Link>

           <div className="relative group">
            <button
              type="button"
              aria-haspopup="true"
              className="flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-white focus:outline-none"
            >
              Serviços
              <span className="text-xs">▾</span>
            </button>

            <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-all duration-150 absolute left-0 z-50 mt-2 w-56 rounded-xl border border-slate-800 bg-slate-900 p-3 shadow-lg">
              <div className="grid gap-1">
                {services.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-slate-200 hover:bg-slate-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          
          <Link href="/contato" className="text-sm font-medium text-slate-300 transition hover:text-white">
            Contato
          </Link>
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/admin" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-500">
            Admin
          </Link>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-slate-800/70 bg-slate-950/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl border border-slate-700 px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-slate-900 hover:text-white"
            >
              Admin
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
