# ADIVINHA GAME

O Adivinha Game é um site inspirado em jogos de adivinhação, como Termo e Pokedle, no qual o objetivo do usuário é descobrir qual jogo está sendo apresentado com base em dicas disponibilizadas pela plataforma.

A cada tentativa, o jogador utiliza as informações fornecidas para formular suas hipóteses e encontrar a resposta correta, colocando à prova seus conhecimentos sobre o universo dos games. A proposta é oferecer uma experiência interativa, divertida e desafiadora, incentivando o raciocínio, a memória e a descoberta de novos jogos.

## Como executar

Pré-requisito: [Node.js](https://nodejs.org/) instalado (versão 20 ou mais nova).

```bash
npm install
npm run dev
```

Depois é só abrir o endereço que aparece no terminal (normalmente http://localhost:5173).

Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # abre a versão de produção gerada pelo build
```

## Fonte dos dados

- **Listagem principal (10 jogos):** arquivo JSON em [`public/jogos.json`](public/jogos.json), carregado com `fetch` dentro de um `useEffect` (função `buscarJogos` em `src/data/jogos.ts`). Cada jogo tem os atributos do type `Jogo` (`src/types.ts`): id, nome, gênero, nota, classificação, ano, plataformas, empresa, sinopse, comentário, capa e mapa. Os textos foram escritos por mim, com base nas informações públicas de cada jogo.
- **Listagem secundária (3 modos de jogo):** vetor local em `src/data/modos.ts`.
- **Imagens:** as capas (`public/capas/`) foram tiradas da Steam e da Wikipédia e reduzidas para 40x60 pixels; as imagens do modo Mapa ficam em `public/mapas/`.

Enquanto o JSON não chega, a tela do jogo mostra um esqueleto da grade com a mensagem "Carregando jogos...". Se a requisição falhar, aparece uma mensagem de erro com o botão "Tentar de novo".

## Estrutura

```
public/
  jogos.json        dados da listagem principal
  capas/  mapas/    imagens dos jogos
src/
  App.tsx           estado da página, fetch e composição dos componentes
  App.css           estilos (mobile first, media queries em 768px e 1024px)
  types.ts          types Jogo e Modo
  data/jogos.ts     busca dos jogos (fetch) e sorteio do jogo secreto
  data/modos.ts     vetor local dos modos
  components/       componentes da interface
```

## Autor

João Lucas Schneider

## Link vídeo com apresentação da Fase 1

https://www.youtube.com/watch?v=MUl1XNIRLQw
