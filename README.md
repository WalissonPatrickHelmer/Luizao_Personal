# Landing Page — Luiz Octávio Netto (Luizão Personal)

## Como usar
Abra `index.html` em qualquer navegador. Para publicar, envie a pasta inteira
(`index.html`, `css/`, `js/`, `img/`) para qualquer hospedagem estática
(Netlify, Vercel, GitHub Pages, cPanel, etc.).

## Estrutura da página (v3 — reestruturada com base nas referências)
1. **Hero** — headline + CTA + foto
2. **Barra de estatísticas** — 4 indicadores logo abaixo do hero (novo, estilo referência)
3. **Realidade sem filtros**
4. **Sobre / Quem é Luiz** — agora com checklist de entregáveis
5. **Conheça o Especialista** — card de destaque só dele (adaptado da "grade de treinadores"
   das referências, já que ele trabalha sozinho)
6. **Programas** — 4 cards (Emagrecimento, Performance, Força, Mentalidade), novo,
   estilo dos cards de ícone das referências — sem foto, pra não repetir imagem
7. **O Método**
8. **Rotina**
9. **Lifestyle**
10. **Resultados** — agora com 1 antes/depois em destaque (featured, como na referência
    IronForge) + 2 fotos secundárias
11. **Depoimentos**
12. **CTA final**
13. **Footer**

Sem preço/mensalidade (conforme decidido) e sem grade de equipe (ele é sozinho).

## O que mudou visualmente
- Cards com cantos arredondados (10-14px) — visual mais moderno, menos "afiado"
  que a v2, mantendo o preto/vermelho e a tipografia Bebas Neue + Poppins.
- Ícones em círculo vermelho translúcido, no padrão das referências.
- Contador "+5.000" saiu do "Sobre" e foi para a barra de estatísticas, logo
  após o hero (mais visível, mais cedo na página).

## Edição rápida
- **WhatsApp:** https://wa.me/5531995242422 — aparece em vários botões, inclusive
  nos cards de "Programas". Buscar/substituir se mudar o número.
- **Estatísticas:** editar direto no bloco `<section class="stat-bar">` no index.html.
- **Programas:** cada `.program-card` é independente — copiar o bloco pra adicionar mais.
- **Depoimentos / Resultados:** mesma lógica de antes, documentada abaixo.
- **Cores/fontes:** tudo em `:root` no topo do `css/style.css`.

## Fontes e ícones
Carregados via CDN (Google Fonts, Font Awesome, AOS.js) — precisa de internet no
navegador do visitante, sem custo e sem chave de API.
