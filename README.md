# Landing Page — Luiz Octávio Netto (Luizão Personal)

## Como usar
Abra `index.html` em qualquer navegador. Para publicar, envie a pasta inteira
(`index.html`, `css/`, `js/`, `img/`) para qualquer hospedagem estática.

## Correções desta versão
- **Scroll lateral no mobile (bug raiz):** o botão do Hero tinha um texto longo
  com `white-space: nowrap`, e por estar dentro de um grid sem `min-width: 0`,
  isso forçava a seção inteira a ficar mais larga que a tela — causando o corte
  de texto e a barra de rolagem lateral. Corrigido: botões agora quebram linha
  em telas pequenas, e um `min-width: 0` de segurança foi aplicado a todos os
  elementos para evitar esse tipo de "estouro" em qualquer seção futura.
  Testado sem overflow em 320px, 360px, 375px, 390px, 414px e 1440px.
- **Foto da galeria "Sobre" cortando a cabeça:** ajustado o enquadramento
  (object-position) para manter o rosto visível.
- **Foto do "Especialista" mostrando só o topo da cabeça:** a legenda antiga
  ("Seu corpo não está mais pesado...") estava no TOPO da imagem original, e o
  ajuste anterior tentava escondê-la empurrando o corte pra baixo — só que
  isso empurrou o rosto pra fora do quadro também. Agora a imagem foi
  recortada de verdade (removendo a faixa de legenda) e exibida com
  enquadramento normal, sem gambiarra de CSS.
- **Animações lentas:** duração do AOS reduzida de 800ms para 450ms, atrasos
  entre elementos reduzidos, e o contador "+5.000" acelerado de 1,8s para 1s.

## Estrutura
Ver histórico de versões anteriores — estrutura de seções não mudou nesta
rodada, só correções de bug e performance.

## Fontes e ícones
Carregados via CDN (Google Fonts, Font Awesome, AOS.js) — precisa de internet
no navegador do visitante, sem custo e sem chave de API.
