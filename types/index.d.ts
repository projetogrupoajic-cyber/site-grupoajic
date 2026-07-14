export type Imovel = {
  id: string;
  titulo: string;
  descricao: string;
  tipo: "venda" | "locacao";
  cidade: string;
  bairro: string;
  valor: number;
  area: string;
  quartos: number;
  banheiros: number;
  garagem: number;
  status: string;
  destaque: boolean;
  publicado: boolean;
  fotos: string[];
};

export type Banner = {
  id: string;
  titulo: string;
  subtitulo: string;
  imagem: string;
  ativo: boolean;
};

export type Contato = {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
  criado_em: string;
};
