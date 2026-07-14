import Link from "next/link";
import { Building2, Scale, Calculator, MapPin, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800" />
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              <Sparkles className="h-4 w-4" /> Soluções completas para sua empresa
            </span>
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Transformando negócios com expertise jurídica, imobiliária e contábil.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              O Grupo AJIC oferece atendimento personalizado e digital para gerar mais confiança, velocidade e resultados.
              Explore nossos serviços e fale com um especialista.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/o-grupo" className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
                Conheça o Grupo
              </Link>
              <Link href="/contato" className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500">
                Fale com um especialista
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-slate-950/30 backdrop-blur-xl">
            <div className="mb-8 rounded-3xl bg-slate-950/90 p-6 text-slate-100">
              <h2 className="text-xl font-semibold">Nossas áreas</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">Imóveis, jurídico e contábil com soluções integradas para cada etapa do seu negócio.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-5 text-center">
                <Building2 className="mx-auto h-10 w-10 text-emerald-400" />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Imóveis Vendas</h3>
                <p className="mt-2 text-xs text-slate-400">Imóveis para aquisição com opções residenciais e comerciais.</p>
                <a href="/imoveis/vendas" className="mt-4 inline-flex rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400">
                  Ver imóveis para venda
                </a>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5 text-center">
                <MapPin className="mx-auto h-10 w-10 text-cyan-400" />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Imóveis Locação</h3>
                <p className="mt-2 text-xs text-slate-400">Imóveis para alugar com opções para empresas e famílias.</p>
                <a href="/imoveis/locacao" className="mt-4 inline-flex rounded-full bg-cyan-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400">
                  Ver imóveis para locação
                </a>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5 text-center">
                <Scale className="mx-auto h-10 w-10 text-cyan-400" />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Jurídico</h3>
                <p className="mt-2 text-xs text-slate-400">Trabalhista, família e tributário</p>
                <a href="/juridico" className="mt-4 inline-flex rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400">
                  Saiba mais
                </a>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5 text-center">
                <Calculator className="mx-auto h-10 w-10 text-amber-400" />
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100">Contábil</h3>
                <p className="mt-2 text-xs text-slate-400">IR, RH e gestão fiscal</p>
                <a href="/contabil" className="mt-4 inline-flex rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-emerald-400">
                  Saiba mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
