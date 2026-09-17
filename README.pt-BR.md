# 🪨 Minrock — Tema Minimalista para Astro & Obsidian

> **"Ideias brutas do seu cofre pessoal, lapidadas com precisão em um blog estático ultrarrápido."**  
> *"O Minrock é a rocha sólida onde o conhecimento descansa; o ScatterLeaf é a brisa suave onde as ideias e conversas flutuam."*

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![Versão: v0.2.1](https://img.shields.io/badge/Vers%C3%A3o-v0.2.1-brightgreen.svg?style=flat-square)](https://github.com/rnt-rez/minrock/releases)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)
[![Obsidian](https://img.shields.io/badge/Obsidian-Pronto-7C3AED?style=flat-square&logo=obsidian&logoColor=white)](https://obsidian.md)
[![PRs Bem-vindos](https://img.shields.io/badge/PRs-bem--vindos-brightgreen.svg?style=flat-square)](https://github.com/rnt-rez/minrock/pulls)
[![English](https://img.shields.io/badge/English-README.md-blue?style=flat-square)](README.md)

**Minrock** é um tema estático opinativo, centrado em tipografia e ultraleve para [Astro 7](https://astro.build), lapidado sob medida para escritores técnicos, desenvolvedores e engenheiros que organizam seu conhecimento no [Obsidian](https://obsidian.md). Construído sob o princípio da **soberania digital**, o projeto existe para democratizar o acesso e o posicionamento pessoal na web aberta: um espaço soberano para chamar de seu, sem interferências de feeds algorítmicos, sem barreiras técnicas e com custo financeiro zero.

> *"A ideia do projeto é propiciar e democratizar o acesso e o posicionamento das pessoas na web, garantindo um espaço soberano para chamar de seu: sem interferências, sem grandes dificuldades e com custo zero."*  
> — **Renato Rezende**, Criador do Minrock

[🇺🇸 Read this documentation in English](README.md)

---

## ✨ Principais Diferenciais

* **💎 Geração Estática Pura (SSG):** Todo o HTML é pré-compilado em tempo de build, garantindo velocidade máxima e custo zero de servidor em tempo de execução.
* **🌐 Soberania Digital & Posicionamento Pessoal:** Um espaço soberano na web aberta—livre de feeds algorítmicos, sem dependência de plataformas proprietárias e com custo financeiro zero.
* **✍️ Arquitetura Centrada em Tipografia (*Typography-First*):** Ritmo vertical milimétrico, entrelinha calibrada e hierarquia de tipos pensada para leitura profunda e confortável.
* **🎨 4 Paletas Cromáticas Calibradas:**
  * ☀️ **Clean White:** Visual editorial limpo e moderno para ambientes bem iluminados.
  * 📜 **Warm Paper (Cream):** Tom acolhedor de papel aquecido, perfeito para leitura prolongada sem fadiga ocular.
  * ⚓ **Slate Navy:** Modo escuro profissional inspirado em ferramentas modernas como Linear e Vercel.
  * 🌌 **Midnight:** Preto OLED puro (`#000000`) com iluminação neon reativa e sutil nos cards.
* **🗃️ Integração Amigável com o Obsidian Vault CMS:** Suporte nativo a *Page Bundles* em Markdown com suporte a colagem direta de prints e imagens locais (`Ctrl + V`).
* **🍃 Pronto para ScatterLeaf:** Suporte ao sistema nativo de comentários sem iframes movido a GitHub Discussions via `<scatter-leaf>`, com Cloudflare Edge Broker e Modo Camaleão.
* **💻 Blocos de Código Refinados:** Destaque de sintaxe harmonizado com temas claros e escuros, numeração de linhas e botão de cópia rápida.
* **♿ Acessibilidade Universal:** Em conformidade estrita com padrões WCAG 2.1/2.2 Nível AA, anel de foco visível (`:focus-visible`) e ausência total de deslocamentos bruscos de tela (*layout shifts*).

---

## 🚀 Inicialização Rápida

Crie o seu blog em segundos através do comando oficial do Astro CLI:

```bash
npx create-astro@latest --template rnt-rez/minrock
```

Ou clone o repositório localmente:

```bash
git clone https://github.com/rnt-rez/minrock.git meu-blog
cd meu-blog
npm install
npm run dev
```

Abra `http://localhost:4321` no seu navegador para ver o blog rodando ao vivo.

---

## 📂 Estrutura do Projeto

```text
minrock/
├── src/
│   ├── config/
│   │   └── site.ts            # Título do blog, bio do autor, links sociais e navegação
│   ├── content/
│   │   └── blog/              # Seus artigos em Markdown (compatíveis com o Obsidian)
│   ├── components/            # Header, Footer, ThemeToggle, ArticleCard
│   ├── layouts/               # BaseLayout, PostLayout
│   ├── pages/                 # index, blog, about, 404
│   └── styles/                # Variáveis CSS globais e as 4 paletas cromáticas
├── astro.config.mjs           # Configuração do Astro 7
├── package.json
└── tsconfig.json
```

---

## 🛠️ Configurações & Conteúdo

### 1. Metadados do Site (`src/config/site.ts`)
Personalize o seu blog em um único arquivo de configuração intuitivo:

```typescript
export const siteConfig = {
  title: 'Minrock',
  description: 'Tema minimalista para Astro 7 centrado em tipografia para escritores técnicos.',
  author: 'Renato Rezende',
  siteUrl: 'https://minrock.vercel.app',
  defaultTheme: 'cream', // Tema padrão inicial: 'white' | 'cream' | 'slate' | 'midnight'
  comments: {
    enabled: true,
    provider: 'scatterleaf',
    repo: 'rnt-rez/minrock',
    category: 'General',
    theme: 'auto',        // Modo Camaleão com detecção de contraste
    lang: 'auto',
    clientId: 'Ov23lifOPhm1GvMlBOEW',
    broker: 'https://scatterleaf-broker.renato-rezende-rrz.workers.dev'
  }
};
```

### 2. Publicando Diretamente do Obsidian
Basta salvar suas notas Markdown dentro de `src/content/blog/` com os metadados no topo (*frontmatter*):

```markdown
---
title: "Construindo Sistemas Resilientes"
description: "Um mergulho profundo em arquitetura de microsserviços."
pubDate: 2026-09-15
tags: ["engenharia", "arquitetura", "devops"]
---

Seu conteúdo em Markdown aqui...
```

### 3. Sistema de Comentários (Modular & Opcional)

O Minrock respeita integralmente a sua soberania digital: o sistema de comentários é 100% opcional, sem dependências forçadas e isolado no componente [`src/components/Comments.astro`](src/components/Comments.astro).

* **Para Desativar:** Mude para `comments.enabled = false` em `src/config/site.ts`. Quando desativado, o Astro remove completamente qualquer HTML ou script de comentários do seu build estático (0 bytes de JS, 0 requisições de rede).
* **Para Ativar o ScatterLeaf:**
  1. Habilite o **GitHub Discussions** no seu repositório público do GitHub.
  2. Ajuste `comments.repo` para o seu próprio repositório (`seu-usuario/seu-repositorio`).
  3. *(Opcional)* Para permitir que leitores publiquem notas diretamente pelo blog, conecte seu Edge Broker na Cloudflare e seu GitHub OAuth Client ID (consulte o [Guia do ScatterLeaf](https://github.com/rnt-rez/scatterleaf)).
* **Para Usar Outro Provedor (Giscus, Utterances, Disqus, etc.):** Você tem soberania e liberdade total! Basta abrir [`src/components/Comments.astro`](src/components/Comments.astro) e colar o script ou widget do seu provedor favorito dentro do componente. Sem nenhum aprisionamento (*vendor lock-in*).

---

## 📜 Comandos Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento em `http://localhost:4321` |
| `npm run check` | Checagem estática de tipos Astro e TypeScript |
| `npm run build` | Compila o site estático completo para a pasta `dist/` |
| `npm run preview` | Executa o preview local dos arquivos estáticos compilados |
| `npm run qa` | Suíte de verificação básica (check de tipos + build de produção) |
| `npm run audit:google` | Auditoria Google Search (SERP Snippets, Schema.org e Indexação) |
| `npm run audit:wcag` | Auditoria de Acessibilidade e Semântica WCAG 2.1/2.2 AA |
| `npm run audit:security` | Auditoria DevSecOps de segurança e varredura de credenciais |

---

## 🤝 Contribuições

Contribuições, sugestões de melhoria e relatos de problemas são muito bem-vindos! Sinta-se à vontade para abrir uma issue ou enviar um Pull Request.

---

## 📄 Licença

Este projeto é distribuído sob a licença [MIT License](LICENSE).

---

<p align="center">
  <em>Crafted with pride in Brazil 🇧🇷 by <a href="https://github.com/rnt-rez">Renato Rezende</a>. Lapidado para a soberania digital na web global.</em>
</p>
