export type Poem = {
  slug: string;
  date: string;
  wd: string;
  title: string;
  who: string;
  handle: string;
  excerpt: string;
  body: string[];
};

export const poems: Poem[] = [
  {
    slug: "carta",
    date: "05.11.2025",
    wd: "Qua",
    title: "Carta",
    who: "William Caym",
    handle: "@willovelll",
    excerpt:
      "Tenho em mim, um abismo de desejo, quase perverso, / de partilhar o pouco que me resta…",
    body: [
      "Tenho em mim, um abismo de desejo, quase perverso,\nde partilhar o pouco que me resta.",
      "Se, neste instante de leitura,\nteu olhar repousa sobre mim,\ndesejo a tua presença.",
      "Mas se a tenho,\ndesejo a minha ausência,\npara que tua alma\nnão encontre em mim os limites do teu desejo.",
    ],
  },
  {
    slug: "agricultura",
    date: "16.10.2025",
    wd: "Qui",
    title: "Agricultura",
    who: "William Caym",
    handle: "@willovelll",
    excerpt:
      "Tenho plantado flores celestes, / regado, gentilmente o solo de suor…",
    body: [
      "Tenho plantado flores celestes,\nregado, gentilmente o solo de suor.",
      "Tenho ardido em insolação,\nàs luzes ultravioletas da tua pele,\ne mastigado os grãos colhidos no teu útero.",
    ],
  },
  {
    slug: "vo",
    date: "20.09.2025",
    wd: "Sáb",
    title: "Vó",
    who: "William Caym",
    handle: "@willovelll",
    excerpt:
      "Meu coração pulsa em compasso contido, / um milésimo de segundo atrasado, / como se me poupasse da pressa…",
    body: [
      "Meu coração pulsa em compasso contido,\num milésimo de segundo atrasado,\ncomo se me poupasse da pressa,\ncomo se aguardasse, suspenso,",
      "Na tentativa de evitar\na possibilidade de estar,\na um milésimo de segundo,\nà espera do seu próximo passo.",
      "Pois viver nesse intervalo de espera\nseria afastar-me do estado de ser.\nVisto que guardo em mim a gratidão de existir\ncomo extensão, apenas extensão, dos teus sonhos.",
      "Meu amor, que a tua partida\nseja o anúncio da nossa.",
    ],
  },
  {
    slug: "oracao",
    date: "04.03.2025",
    wd: "Ter",
    title: "Oração",
    who: "William Caym",
    handle: "@willovelll",
    excerpt:
      "Então, escrevi: “Onde canta o sabiá?”. / Um bem-te-vi passou assobiando, rasurando o meu verso.",
    body: [
      "Então, escrevi: “Onde canta o sabiá?”.",
      "Um bem-te-vi passou assobiando, rasurando o meu verso.",
    ],
  },
];
