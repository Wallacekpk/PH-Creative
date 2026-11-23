# PH Creative · landing page

Site estático (HTML, CSS e JavaScript, sem build) publicado na Netlify.

## Onde editar

Quase tudo se edita em `site/assets/js/dados.js`:

- `WHATSAPP`: número com DDI e DDD, só dígitos.
- `HERO_VIDEO`: vídeo de fundo da primeira dobra (desktop e celular).
- `VIDEO_WORKS`: as molduras da galeria. Cada linha é uma moldura com estilo e proporção. Preencha `arquivo` com o caminho do MP4 (ex.: `videos/hardcopy-transportadora.mp4`) e, se quiser, `poster` com uma imagem de capa.
- `ESTILOS`: nomes, descrições, preços e prazos de cada estilo.

Textos fixos ficam em `site/index.html` e o visual em `site/assets/css/site.css`.

## Antes de divulgar

- Trocar o número provisório do WhatsApp.
- Preencher os campos entre [COLCHETES] (números, marcas, equipe, preços, prazos, FAQ, rodapé).
- Apagar a linha `<meta name="robots" content="noindex, nofollow">` do `index.html` para o Google poder indexar.

## Publicação

A Netlify lê o `netlify.toml`: publica a pasta `site/` e não roda build. Cada commit na branch `main` vira um deploy novo.
