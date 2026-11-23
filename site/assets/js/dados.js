/* ==================================================================
   PH CREATIVE · DADOS DA PÁGINA
   Este é o único arquivo que você precisa editar no dia a dia.
   Depois de editar, suba a pasta inteira de novo na Netlify.

   1) WHATSAPP
      Número com DDI e DDD, só dígitos. Exemplo: 5511999999999.
      Todos os botões da página usam este número.

   2) HERO_VIDEO (vídeo de fundo da primeira dobra)
      arquivo: endereço do MP4 em 1920 x 1080. Pode ser um arquivo da pasta
               videos/ (exemplo: 'videos/hero.mp4') ou um link https.
               Hoje aponta para o vídeo gerado no Higgsfield, hospedado lá.
      arquivoMobile: versão menor para celular (opcional, 1280 x 720)
      poster: imagem mostrada enquanto o vídeo carrega
      Vazio, a página mostra só a imagem do poster.

   3) VIDEO_WORKS (galeria de trabalhos)
      Para adicionar um vídeo:
        a) crie a pasta videos/ ao lado do index.html e coloque o MP4 nela
        b) copie uma linha da lista e troque os campos
        c) suba a pasta de novo na Netlify
      Campos:
        id: nome curto e único
        arquivo: caminho do MP4. Exemplo: 'videos/transportadora.mp4'
        poster: imagem de capa (opcional)
        estilo: igual ao nome de um item de ESTILOS
        titulo, duracao
        proporcao: '9:16', '4:5', '1:1' ou '16:9'
      Com arquivo preenchido, o item toca sozinho na galeria e abre com
      som ao clicar. A galeria duplica os itens para o movimento infinito.

   As 24 molduras abaixo estão VAZIAS, esperando os vídeos reais.
   Cada uma já tem estilo e proporção. Para preencher, coloque o
   caminho do MP4 em arquivo e, se quiser, uma imagem de capa em poster.
   Moldura sem arquivo e sem poster aparece vazia na página.
   ================================================================== */

window.PH_DADOS = {

  WHATSAPP: '5500000000000',

  /* false deixa as fileiras da galeria paradas */
  ANIMAR_FILEIRA: true,

  HERO_VIDEO: {
    arquivo: 'https://d2ol7oe51mr4n9.cloudfront.net/user_326iI80Rr18THZM0oooLK3Jst4g/d8b40d7a-f598-40f5-a39c-9c5139f723f1.mp4',
    arquivoMobile: 'https://d2ol7oe51mr4n9.cloudfront.net/user_326iI80Rr18THZM0oooLK3Jst4g/59df7a5e-9e2c-4cd9-9cd3-f4a6512072b0.mp4',
    poster: 'assets/img/hero-poster.jpg'
  },

  VIDEO_WORKS: [
    { id: 'trabalho-01', arquivo: '', poster: '', estilo: 'HardCopy', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-02', arquivo: '', poster: '', estilo: 'UGC', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-03', arquivo: '', poster: '', estilo: 'Cinematográfico', titulo: '', duracao: '', proporcao: '16:9' },
    { id: 'trabalho-04', arquivo: '', poster: '', estilo: 'Reels nativo', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-05', arquivo: '', poster: '', estilo: 'Motion', titulo: '', duracao: '', proporcao: '1:1' },
    { id: 'trabalho-06', arquivo: '', poster: '', estilo: 'Avatar de IA', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-07', arquivo: '', poster: '', estilo: 'Hard Motion', titulo: '', duracao: '', proporcao: '4:5' },
    { id: 'trabalho-08', arquivo: '', poster: '', estilo: 'UGC', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-09', arquivo: '', poster: '', estilo: 'VSL', titulo: '', duracao: '', proporcao: '16:9' },
    { id: 'trabalho-10', arquivo: '', poster: '', estilo: 'HardCopy', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-11', arquivo: '', poster: '', estilo: 'Cinematográfico', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-12', arquivo: '', poster: '', estilo: 'Reels nativo', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-13', arquivo: '', poster: '', estilo: 'Motion', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-14', arquivo: '', poster: '', estilo: 'Avatar de IA', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-15', arquivo: '', poster: '', estilo: 'Hard Motion', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-16', arquivo: '', poster: '', estilo: 'UGC', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-17', arquivo: '', poster: '', estilo: 'VSL', titulo: '', duracao: '', proporcao: '16:9' },
    { id: 'trabalho-18', arquivo: '', poster: '', estilo: 'HardCopy', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-19', arquivo: '', poster: '', estilo: 'Cinematográfico', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-20', arquivo: '', poster: '', estilo: 'Reels nativo', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-21', arquivo: '', poster: '', estilo: 'Motion', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-22', arquivo: '', poster: '', estilo: 'Avatar de IA', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-23', arquivo: '', poster: '', estilo: 'Hard Motion', titulo: '', duracao: '', proporcao: '9:16' },
    { id: 'trabalho-24', arquivo: '', poster: '', estilo: 'VSL', titulo: '', duracao: '', proporcao: '16:9' }
  ],

  /* Preços e prazos: troque os [R$ 00] e [PRAZO] pelos valores reais.
     recomendado: true destaca a linha na tabela de preços. */
  ESTILOS: [
    { nome: 'Reels nativo', descricao: 'Corte a cada 1,5 segundo, legenda palavra por palavra e gancho nos 3 primeiros segundos. Feito para parar o dedo no feed.', ideal: 'Perfis que querem alcance e seguidor novo', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'UGC', descricao: 'Uma pessoa real falando com a câmera sobre o seu produto, do jeito que um cliente falaria. Pode ser alguém da sua equipe ou um modelo indicado pela PH.', ideal: 'E-commerce, beleza e suplementos', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'HardCopy', descricao: 'Texto grande na tela, corte seco e oferta direta. É o formato que mais aparece em campanha de conversão.', ideal: 'Tráfego pago com objetivo de venda', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]', recomendado: true },
    { nome: 'Hard Motion', descricao: 'Copy direta com tipografia animada e transições marcadas. Ninguém precisa aparecer em cena.', ideal: 'Infoprodutos e lançamentos', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Motion', descricao: 'Animação para explicar aplicativo, serviço ou produto que não dá para filmar.', ideal: 'SaaS, aplicativos e serviços', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Avatar de IA', descricao: 'Apresentador criado com inteligência artificial, sem gravação e sem estúdio. Dá para testar várias versões do mesmo roteiro em pouco tempo.', ideal: 'Testar muitos ganchos com verba curta', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'Cinematográfico', descricao: 'Imagem com linguagem de filme, trilha escolhida a dedo e cor tratada. Para marcas que querem parecer premium no feed.', ideal: 'Marcas premium e institucional', avulso: '[R$ 00]', pacote5: '[R$ 00]', pacote10: '[R$ 00]', prazo: '[PRAZO]' },
    { nome: 'VSL', descricao: 'Vídeo de vendas longo, do roteiro à edição final, para apresentar a oferta do começo ao fechamento.', ideal: 'Ofertas de ticket alto e páginas de venda', avulso: 'Sob consulta', pacote5: 'Sob consulta', pacote10: 'Sob consulta', prazo: '[PRAZO]' }
  ]
};
