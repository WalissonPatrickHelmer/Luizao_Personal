# Landing Page — Luiz Octávio Netto (Luizão Personal)

## Como usar
Abra `index.html` em qualquer navegador — não precisa de servidor nem instalação.
Para publicar, envie a pasta inteira (`index.html`, `css/`, `js/`, `img/`) para qualquer
hospedagem estática (Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Estrutura
```
/index.html
/css/style.css
/js/script.js
/img/  (14 fotos do Luiz + antes/depois, organizadas por seção, sem repetição)
```

## O que foi corrigido nesta versão
- **Botão do WhatsApp no menu:** agora é verde (igual ao padrão WhatsApp) em vez de
  vermelho — melhora a legibilidade e reforça a ação principal.
- **Foto sobreposta no Hero:** removida a foto pequena que ficava "grudada" em cima da
  foto principal e quebrava o layout. O Hero agora tem uma única foto limpa.
- **Fotos repetidas:** cada imagem agora aparece uma única vez no site. A galeria
  "Sobre" trocou a foto de bike (que cortava) pela nova foto de academia; a seção
  "Realidade" ganhou uma foto própria (antes reaproveitava a do Hero).
- **Foto da bike cortada:** movida para a seção "Lifestyle", agora exibida por inteiro
  (sem cortar rodas/guidão) em vez de esticada como fundo.
- **Foto da moto cortada:** mesma correção — agora aparece inteira, lado a lado com a
  foto da bike, na seção "Lifestyle".
- **Foto cortada atrás de "Chega de dar desculpas para sua saúde":** ajustada para
  aparecer completa (sem cortar rosto/corpo), com um degradê mais suave por trás do texto.
- **Novas seções adicionadas:**
  - **Resultados:** as 3 fotos de antes/depois enviadas agora aparecem de verdade
    (antes eram placeholders "Em breve").
  - **Rotina:** nova seção com 2 fotos inéditas do Luiz (corrida e dia a dia), para
    dar mais variedade sem repetir imagem.

## Edição rápida
- **WhatsApp:** o número https://wa.me/5531995242422 aparece em 3 lugares —
  botão do menu, CTA final e botão flutuante. Buscar/substituir se mudar o número.
- **Mais resultados:** para adicionar mais antes/depois, duplique um bloco
  `.result-photo` na seção `#resultados` do `index.html` e aponte para uma nova imagem
  em `/img`.
- **Depoimentos:** seção `#depoimentos` — duplique um `.testi-card` para adicionar mais.
- **Contador "+5.000":** controlado por `data-count="5000"` no HTML — só trocar o número.
- **Cores/fontes:** tudo centralizado em `:root` no topo do `css/style.css`.

## Fontes e ícones
Carregados via CDN (Google Fonts — Bebas Neue + Poppins, Font Awesome, AOS.js para
as animações de scroll). Isso exige conexão com a internet no navegador do visitante
— comportamento normal, sem custo, sem chave de API.
