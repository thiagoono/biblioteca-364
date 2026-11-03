# 🎨 Design Tokens & Design System — Biblioteca 364

Este documento formaliza as decisões de design e os **Design Tokens** do projeto **Biblioteca 364**, baseados no protótipo de alta fidelidade desenvolvido no Stitch (Projeto ID: `7443121401243266377`).

---

## 1. Conceito Visual: "New Editorial"

A identidade visual da Biblioteca 364 é fundamentada na estética **"New Editorial"** — uma fusão entre a tradição literária clássica e a utilidade digital moderna.

- **Atmosfera:** Arquivo de prestígio, sóbrio, intelectual e acolhedor.
- **Estrutura:** Layouts de alto contraste, linhas divisórias finas (hairlines), tipografia marcante e espaçamento generoso.
- **Formas:** Arestas vivas e nítidas (`border-radius: 0`), refletindo o corte reto de livros físicos encadernados.

---

## 2. Paleta de Cores (Color Tokens)

| Token | Hex | Papel Semântico | Aplicação |
|---|---|---|---|
| `--color-primary` | `#610000` | Vermelho Carmesim Profundo | Ações primárias, botões de destaque, links ativos e identidade da marca |
| `--color-primary-container` | `#8b0000` | Carmesim Intenso | Estados de foco/hover de ações primárias e cabeçalhos |
| `--color-primary-fixed` | `#ffdad4` | Carmesim Claro | Fundos sutis de status ativos e badges |
| `--color-secondary` | `#5f5e5e` | Grafite / Carvão Suave | Textos secundários, metadados (autores, datas) |
| `--color-tertiary` | `#735c00` | Ouro Antigo / Mostarda | Destaques editoriais, coleções especiais e acentos |
| `--color-tertiary-container` | `#cca730` | Dourado Quente | Badges de destaque e marcadores |
| `--color-background` | `#faf9f8` | Papel Pergaminho Claro | Fundo geral da aplicação (evita fadiga visual) |
| `--color-surface` | `#ffffff` | Branco Puro | Superfície de cards, modais e formulários |
| `--color-surface-container` | `#eeeeed` | Cinza Papel Leve | Fundos de seções alternadas e agrupamentos |
| `--color-on-background` | `#1a1c1c` | Carvão Escuro / Preto Tinta | Tipografia principal e títulos com alto contraste |
| `--color-outline` | `rgba(26, 28, 28, 0.12)` | Linha Fina (Hairline) | Divisórias de 1px entre seções e cartões |

### Cores Semânticas de Disponibilidade

| Status | Cor | Hex | Significado |
|---|---|---|---|
| **Disponível** | Ponto Carvão / Verde Editorial | `#1a1c1c` / `#2d6a4f` | Exemplar livre para empréstimo imediato |
| **Solicitado** | Carmesim Itálico | `#610000` | Exemplar com pedido pendente de aprovação |
| **Emprestado** | Cinza Mudo / Riscado | `#8e706b` / `#5f5e5e` | Exemplar em posse de outro leitor |

---

## 3. Tipografia (Typography Tokens)

O sistema utiliza pareamento tipográfico de alto contraste entre uma **Serifada Literária** e uma **Grotesca Neutra Funcional**:

- **Família Serifada (Títulos e Momentos Literários):** `'Playfair Display', Georgia, serif`
- **Família Sem Serifa (Interface, Corpo e Metadados):** `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`

| Nível | Família | Tamanho Desktop | Tamanho Mobile | Peso | Line-Height | Tracking |
|---|---|---|---|---|---|---|
| `display-lg` | Playfair Display | `3rem` (48px) | `2rem` (32px) | 700 | 1.1 | -0.02em |
| `headline-lg` | Playfair Display | `2rem` (32px) | `1.5rem` (24px) | 700 | 1.2 | normal |
| `headline-md` | Playfair Display | `1.5rem` (24px) | `1.25rem` (20px) | 600 | 1.3 | normal |
| `body-lg` | Inter | `1.125rem` (18px) | `1rem` (16px) | 400 | 1.6 | normal |
| `body-md` | Inter | `1rem` (16px) | `0.875rem` (14px) | 400 | 1.5 | normal |
| `label-lg` | Inter | `0.875rem` (14px) | `0.75rem` (12px) | 600 | 1.2 | +0.05em (Caixa Alta) |
| `label-md` | Inter | `0.75rem` (12px) | `0.6875rem` (11px) | 500 | 1.2 | normal |

---

## 4. Espaçamento e Grid (Spacing Tokens)

Base modular baseada na unidade de **8px (0.5rem)**:

- `unit`: `0.5rem` (8px)
- `stack-xs`: `0.25rem` (4px)
- `stack-sm`: `1rem` (16px)
- `stack-md`: `2rem` (32px)
- `stack-lg`: `4rem` (64px)
- `container-max`: `1280px`
- `gutter`: `1.5rem` (24px)
- `margin-desktop`: `4rem` (64px)
- `margin-mobile`: `1rem` (16px)

---

## 5. Bordas, Sombras e Formas (Elevation & Shape Tokens)

- **Shape Principal:** `0px` (cantos retos/sharp). Botões, cards e campos de formulário mantêm ângulos retos para simular livros e encadernações.
- **Shape Badges:** `0.125rem` (2px) ou `0.25rem` (4px) para diferenciação discreta.
- **Borda Hairline:** `1px solid rgba(26, 28, 28, 0.12)`.
- **Elevação Tonal:** A hierarquia é dada por contraste de fundos (#FAF9F8 vs #FFFFFF) e divisórias finas em vez de sombras pesadas.
- **Sombra Interativa:** `0 4px 20px rgba(0, 0, 0, 0.05)` exclusiva para estados de *hover* em cards clicáveis.
