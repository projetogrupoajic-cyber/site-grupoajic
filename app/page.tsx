import { Building2, Scale, Calculator, Phone, Mail, MapPin } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* Imagem de Fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/fachada.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0B3C5D]/90" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white">

        {/* Logo */}
        <img
          src="/images/logo.png"
          alt="Grupo AJIC"
          className="mx-auto w-56 mb-8"
        />

        <h1 className="text-5xl font-bold mb-6">
          Estamos preparando uma nova experiência.
        </h1>

        <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-8">
          Nosso novo website está sendo desenvolvido para oferecer uma navegação
          moderna, rápida e intuitiva, reunindo nossos serviços de Assessoria
          Jurídica, Imobiliária e Contábil em um único ambiente.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <Building2 className="mx-auto w-12 h-12 text-white mb-5" />

            <h2 className="text-2xl font-bold mb-3">
              IMÓVEIS
            </h2>

            <p>Compra</p>
            <p>Venda</p>
            <p>Locação</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <Scale className="mx-auto w-12 h-12 text-white mb-5" />

            <h2 className="text-2xl font-bold mb-3">
              JURÍDICO
            </h2>

            <p>Trabalhista</p>
            <p>Previdenciário</p>
            <p>Família</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <Calculator className="mx-auto w-12 h-12 text-white mb-5" />

            <h2 className="text-2xl font-bold mb-3">
              CONTÁBIL
            </h2>

            <p>Imposto de Renda</p>
            <p>Legalização</p>
            <p>Recursos Humanos</p>
          </div>

        </div>

        {/* Contato */}

        <div className="mt-16 space-y-4">

          <div className="flex items-center justify-center gap-3">
            <MapPin />
            <span>Rua Felipe Cardoso, 1667 - Santa Cruz - Rio de Janeiro</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Phone />
            <span>(21) 3395-3340</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Mail />
            <span>ajic@ajic.com.br</span>
          </div>

        </div>

        {/* Botão */}

        <a
          href="https://wa.me/552133953340"
          className="inline-block mt-12 bg-green-600 hover:bg-green-700 transition px-10 py-4 rounded-xl text-lg font-semibold"
        >
          Falar pelo WhatsApp
        </a>

      </div>

    </main>
  );
}