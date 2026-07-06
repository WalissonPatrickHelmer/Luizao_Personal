# Landing Page — Luiz Octávio Netto (Luizão Personal)

## Como usar
Abra `index.html` em qualquer navegador. Para publicar, envie a pasta inteira
(`index.html`, `css/`, `js/`, `img/`) para qualquer hospedagem estática.

## Ajuste de "página muito escura" (baseado na referência BearFit enviada)
O que estava apagando a energia da página:
- **Fotos com filtro pesado:** todas as imagens tinham `grayscale(55%)` +
  escurecimento + um overlay preto por cima — isso deixava toda foto cinza e
  sem vida. Troquei por `saturate(1.15)` (realça a cor real da foto) e um
  overlay bem mais leve, só para dar unidade visual.
- **Ícones quase invisíveis:** os círculos de ícone (stat bar, cards de
  Programas, Método) eram vermelho a 10% de opacidade — muito sutil. Agora são
  vermelho sólido com leve brilho (glow), do jeito que a referência usa verde
  sólido nos badges dela.
- **Vermelho pouco vibrante:** o vermelho da marca foi de `#e30613` para
  `#ff2d3d` — mais vivo, mais próximo da energia que a referência tem com o
  verde-limão.
- **Preto muito seco:** o fundo saiu de um preto puro (`#050505`) para um
  quase-preto levemente mais claro (`#0a0a0d`), e o Hero ganhou um brilho
  vermelho suave (radial glow) atrás da foto, pra dar profundidade — como a
  referência faz com o fundo verde-escuro atrás das fotos.

A identidade (preto + vermelho + Bebas Neue/Poppins) continua a mesma — só
ficou mais viva, sem precisar copiar a paleta verde-limão da referência.

## Estrutura
Sem mudanças estruturais nesta rodada — só paleta e tratamento visual.

## Fontes e ícones
Carregados via CDN (Google Fonts, Font Awesome, AOS.js).
