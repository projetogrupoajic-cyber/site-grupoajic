export default function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950/95 px-6 py-8 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-200">Grupo AJIC</p>
          <p className="text-sm">Assessoria Jurídica, Imobiliária e Contábil</p>
        </div>
        <p className="text-sm">© {new Date().getFullYear()} Grupo AJIC. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
