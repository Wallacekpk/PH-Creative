/* ==================================================================
   PH CREATIVE · DADOS DA PÁGINA
   Este é o único arquivo que você precisa editar no dia a dia.
   Depois de editar, suba a pasta inteira de novo na Netlify.

   1) WHATSAPP
      Número com DDI e DDD, só dígitos. Exemplo: 5511999999999.
      Todos os botões da página usam este número.

   2) HERO_VIDEO e CONTATO_VIDEO (vídeos de fundo do topo e do contato)
      arquivo / poster: versão do computador (16:9, 1920 x 1080)
      arquivoMobile / posterMobile: versão do celular (3:4, 720 x 960)
      Pode ser um arquivo da pasta videos/ ou um link https. Hoje os vídeos
      ficam hospedados no Higgsfield. Sem vídeo, aparece só a imagem.

   3) VIDEO_WORKS (galeria de trabalhos, em grade de 4 colunas)
      Para adicionar um vídeo:
        a) crie a pasta videos/ ao lado do index.html e coloque o MP4 nela
        b) copie uma linha da lista e troque os campos
        c) suba a pasta de novo na Netlify
      Campos:
        id: nome curto e único
        arquivo: caminho do MP4 completo, com som. Exemplo: 'videos/elite.mp4'
        previa: trecho curto e sem som que roda na grade (opcional)
        poster: imagem de capa (opcional)
        estilo: igual ao nome de um item de ESTILOS
        titulo, duracao (aparecem ao passar o mouse)
      Todas as molduras são verticais (9:16). Use vídeos verticais.
      Com arquivo preenchido, o vídeo toca sem som quando aparece na tela e
      abre com som ao clicar. O ideal são 4 vídeos (uma fileira).

   A galeria tem 4 vídeos verticais da PH. Os arquivos ficam na pasta
   videos/ e as capas em assets/img/trabalhos/. Para trocar um vídeo,
   substitua os arquivos e atualize a linha dele aqui. Para preencher, coloque o
   caminho do MP4 em arquivo e, se quiser, uma imagem de capa em poster.
   Moldura sem arquivo e sem poster aparece vazia na página.
   ================================================================== */

window.PH_DADOS = {

  WHATSAPP: '5500000000000',

  HERO_VIDEO: {
    arquivo: 'https://d2ol7oe51mr4n9.cloudfront.net/user_326iI80Rr18THZM0oooLK3Jst4g/d8b40d7a-f598-40f5-a39c-9c5139f723f1.mp4',
    poster: 'assets/img/hero-poster.jpg',
    arquivoMobile: 'https://d2ol7oe51mr4n9.cloudfront.net/user_326iI80Rr18THZM0oooLK3Jst4g/f618d7b9-90fb-4ebb-b875-4aed7c74da7f.mp4',
    posterMobile: 'assets/img/hero-poster-mobile.jpg'
  },

  /* fundo da seção de contato: no computador usa o mesmo vídeo do topo */
  CONTATO_VIDEO: {
    arquivo: 'https://d2ol7oe51mr4n9.cloudfront.net/user_326iI80Rr18THZM0oooLK3Jst4g/d8b40d7a-f598-40f5-a39c-9c5139f723f1.mp4',
    poster: 'assets/img/hero-poster.jpg',
    arquivoMobile: 'https://d2ol7oe51mr4n9.cloudfront.net/user_326iI80Rr18THZM0oooLK3Jst4g/da0a9a10-2e44-4034-bd9d-0fdbe3f09433.mp4',
    posterMobile: 'assets/img/contato-poster-mobile.jpg'
  },

  VIDEO_WORKS: [
    { id: 'elite', arquivo: 'videos/elite.mp4', previa: 'videos/elite-previa.mp4', poster: 'assets/img/trabalhos/elite.jpg', estilo: 'Elite', titulo: '', duracao: '0:54' },
    { id: 'magnetico', arquivo: 'videos/magnetico.mp4', previa: 'videos/magnetico-previa.mp4', poster: 'assets/img/trabalhos/magnetico.jpg', estilo: 'Magnético', titulo: '', duracao: '0:32' },
    { id: 'avatar-de-ia', arquivo: 'videos/avatar-de-ia.mp4', previa: 'videos/avatar-de-ia-previa.mp4', poster: 'assets/img/trabalhos/avatar-de-ia.jpg', estilo: 'Avatar de IA', titulo: '', duracao: '1:00' },
    { id: 'encapsulado', arquivo: 'videos/encapsulado.mp4', previa: 'videos/encapsulado-previa.mp4', poster: 'assets/img/trabalhos/encapsulado.jpg', estilo: 'Encapsulado', titulo: '', duracao: '0:41' }
  ],

  /* Estilos: os mesmos nomes das pastas do portfólio da PH no Drive.
     Preços e prazos: troque os [R$ 00] e [PRAZO] pelos valores reais.
     recomendado: true destaca a linha na tabela de preços (opcional). */
  ESTILOS: [
    { nome: 'Advogado', descricao: 'Criativos para advogados e escritórios de advocacia, com linguagem clara e que passa confiança para quem está procurando ajuda.', ideal: 'Advogados e escritórios', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Demonstrativo', descricao: 'O produto aparece funcionando na tela, do problema ao resultado, para o cliente entender em poucos segundos por que precisa dele.', ideal: 'Produtos que vendem quando aparecem em uso', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'IA', descricao: 'Vídeos produzidos com inteligência artificial, sem gravação e sem estúdio. Dá para testar várias versões do mesmo roteiro em pouco tempo.', ideal: 'Testar muitos ganchos com verba curta', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Elite', descricao: '[DESCRIÇÃO DO ESTILO ELITE]', ideal: '[IDEAL PARA]', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'TikTok Shop', descricao: 'Vídeos com a cara nativa do TikTok, pensados para vender o produto direto na loja do TikTok Shop.', ideal: 'Lojas que vendem pelo TikTok Shop', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'LATAM ES', descricao: 'Criativos em espanhol para anunciar em outros países da América Latina.', ideal: 'Campanhas em espanhol para a América Latina', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Magnético', descricao: '[DESCRIÇÃO DO ESTILO MAGNÉTICO]', ideal: '[IDEAL PARA]', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Cinematográfico', descricao: 'Imagem com linguagem de filme, trilha escolhida a dedo e cor tratada. Para marcas que querem parecer premium no feed.', ideal: 'Marcas premium e institucional', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Imóveis', descricao: 'Vídeos para apresentar imóveis e lançamentos, com foco em gerar contato de quem está procurando onde morar ou investir.', ideal: 'Imobiliárias, corretores e lançamentos', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Receitas', descricao: 'Criativos para produtos e infoprodutos de culinária, usando a própria receita como gancho.', ideal: 'Culinária e infoprodutos de receitas', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Geral', descricao: '[DESCRIÇÃO DO ESTILO GERAL]', ideal: '[IDEAL PARA]', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Encapsulados', descricao: 'Criativos para suplementos e produtos em cápsula, com copy direta e foco em conversão.', ideal: 'Suplementos e produtos em cápsula', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Expert', descricao: 'Criativos para experts e infoprodutores divulgarem cursos, mentorias e lançamentos.', ideal: 'Experts e infoprodutores', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' }
  ]
};
