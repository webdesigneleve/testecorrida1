export const EVENTO = {
  nome: "Corrida InforsService 2026",
  nomeCurto: "Corrida InforsService",
  edicao: "21 de Novembro · Sábado",
  organizador: "InforsService Informática e Papelaria",
  dataLargada: "2026-11-21T00:00:00-03:00",
  dataExib: "Sábado, 21 de novembro de 2026",
  dataCurta: "Sáb · 21 Nov 2026",
  largada: "Horário em breve",
  local: "Em frente à InforsService",
  cidade: "Centro",
  localCompleto: "Tv. Altíno Costa, 1205 — Centro · Em frente à InforsService",
  enderecoKit: "Retirada e informações serão divulgadas pela organização",
  enderecoKitRef: "Acompanhe os canais oficiais para os detalhes",
  precoLote1: 85,
  precos: { "4km": 85 } as Record<string, number>,
  distancias: ["4km"] as const,
};

export function formatBRL(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export const UFS = [
  "PA", "RJ", "SP", "ES", "MG", "SC", "PR", "RS", "BA", "PE",
  "CE", "MA", "PI", "AM", "RR", "AP", "TO", "RO", "AC", "MS",
  "MT", "GO", "DF", "SE", "AL", "PB", "RN",
];

export const FAQ: { q: string; a: string }[] = [
  {
    q: "Qual é a distância da corrida?",
    a: "A Corrida InforsService terá um único percurso de 4 km. É uma prova pensada para quem está começando, para grupos de corrida e também para quem quer buscar ritmo e evolução.",
  },
  {
    q: "Quando e onde acontece a largada?",
    a: "A corrida acontece no sábado, 21 de novembro de 2026, com saída em frente à loja InforsService Informática e Papelaria, na Tv. Altíno Costa, 1205 — Centro. O horário de concentração será divulgado pela organização.",
  },
  {
    q: "O que está incluso no kit do atleta?",
    a: "O kit inclui camisa da corrida, medalha personalizada com o nome do atleta — gravação feita no dia do evento — caneta com gravação a laser, garrafa squeeze com gravação a laser e sacola.",
  },
  {
    q: "O que será servido no dia do evento?",
    a: "Antes da corrida, os atletas terão café da manhã e mingau. Após a prova, haverá água, entrega de medalha e troféus para os atletas premiados em suas categorias.",
  },
  {
    q: "Como funciona a medalha personalizada?",
    a: "A medalha terá a gravação do nome do atleta, feita pela organização no próprio dia do evento. Por isso, mantenha seus dados de inscrição corretos.",
  },
  {
    q: "Quais são as categorias de premiação?",
    a: "Haverá premiação Geral Masculino/Feminino, Top 5 Masculino/Feminino e Categoria LGBTQIA+. Consulte a seção Premiação nesta página para conferir os valores, troféus e brindes de cada colocação.",
  },
  {
    q: "Posso transferir minha inscrição?",
    a: "As regras de transferência, cancelamento e demais condições serão comunicadas pela organização no regulamento oficial do evento.",
  },
];

export const REGULAMENTO: string[] = [
  "Prova de corrida de rua em percurso único de 4 km, realizada no sábado, 21 de novembro de 2026.",
  "A saída acontece em frente à InforsService Informática e Papelaria, na Tv. Altíno Costa, 1205 — Centro.",
  "O atleta deve conferir se seus dados estão corretos: o nome informado será utilizado na gravação da medalha no dia do evento.",
  "A classificação e a premiação seguem as categorias divulgadas nesta página: Geral Masculino/Feminino, Top 5 Masculino/Feminino e LGBTQIA+.",
  "A organização poderá realizar ajustes operacionais de segurança ou percurso, sempre comunicando os inscritos pelos canais oficiais.",
  "Ao se inscrever, o atleta declara ciência do regulamento e autoriza o uso de imagem captada durante o evento para divulgação institucional.",
];

export const PREMIACAO = [
  {
    titulo: "Categoria Geral",
    publico: "Masculino & Feminino",
    destaque: "R$ 500,00 por categoria",
    colocacoes: [
      { pos: "1º", premio: "R$ 300,00 + troféu" },
      { pos: "2º", premio: "R$ 200,00 + troféu" },
      { pos: "3º", premio: "Troféu + brinde" },
    ],
  },
  {
    titulo: "Top 5",
    publico: "Masculino & Feminino",
    destaque: "Após os três primeiros",
    colocacoes: [
      { pos: "1º", premio: "Troféu" },
      { pos: "2º", premio: "Troféu" },
      { pos: "3º", premio: "Troféu" },
      { pos: "4º", premio: "Troféu" },
      { pos: "5º", premio: "Troféu" },
    ],
  },
  {
    titulo: "Categoria LGBTQIA+",
    publico: "Inclusão & celebração",
    destaque: "R$ 200,00 em premiação",
    colocacoes: [
      { pos: "1º", premio: "R$ 200,00 + troféu" },
      { pos: "2º", premio: "Troféu + brinde" },
      { pos: "3º", premio: "Troféu + brinde" },
    ],
  },
];
