# 🪨 PROGRESS — Minrock (Doca de Desenvolvimento)

> **Versão:** v0.1.0  
> **Última Atualização:** 15/09/2026  
> **Status:** 🟢 Scaffolding Inicial da Doca (Tema Astro 7 & Obsidian)  
> **Harness Central de Governança:** `..\estaleiro`  
> **Autor & Mantenedor:** Renato Rezende ([@rnt-rez](https://github.com/rnt-rez))

---

## 🎯 Foco da Sprint Atual (Fase 1: Scaffolding & Base do Tema)
* **Arquitetura Base:** Astro 7 SSG com tipografia refinada e zero bloat.
* **4 Paletas Cromáticas:** Light (Clean White), Cream (Warm Paper), Dark (Slate), Midnight (OLED Neon).
* **Obsidian Vault CMS:** Estrutura preparada para leitura direta de notas Markdown (`src/content/blog/`).
* **Slot do ScatterLeaf:** Preparação do contêiner `<scatter-leaf>` para homologação do sistema de comentários.

---

## 🟢 Entregas Consolidadas na Doca
1. **Governança Local:** `AGENTS.md` configurado (< 30 linhas) herdando os Lifecycle Gates do Estaleiro.
2. **READMEs Bilíngues:** `README.md` (EN) e `README.pt-BR.md` (PT) com assinatura oficial e hero tagline.
3. **Core Scaffolding:** Configuração do Astro 7, TypeScript, Content Collections com Zod e estilos globais.
4. **Artigos de Demonstração:** 3 starter posts em inglês sobre introdução, escrita técnica e cofre do Obsidian.
5. **Integração ScatterLeaf:** Componente preparado no layout de artigo para os testes de amanhã.

---

## 📋 Sequência de Etapas

### 🟢 Etapa 1: Scaffolding & Design System (Concluída — v0.1.0)
- [x] Criação de `package.json`, `astro.config.mjs`, `tsconfig.json` e `.gitignore`.
- [x] Design System com as 4 paletas calibradas em CSS puro (White, Cream, Slate, Midnight).
- [x] Layouts base (`BaseLayout.astro`, `Header.astro`, `Footer.astro`).
- [x] 3 artigos de demonstração com realce de sintaxe e tabelas.
- [x] Equiparação técnica com Astro 7.3.2, Node >=22.12.0 e assinatura de binários nativos no Windows.
- [x] Validação visual/funcional em navegador e suíte QA zerada (`0 errors, 0 warnings, 0 hints`).
- [x] Commit consolidado, tagueamento `v0.1.0` e push remoto realizado.

### 🟡 Etapa 2: Integração e Testes com ScatterLeaf (Amanhã)
- [ ] Importação do Web Component `<scatter-leaf>` no layout de post.
- [ ] Teste de alternância dinâmica de tema (Modo Camaleão) entre Minrock e ScatterLeaf.
- [ ] Validação de postagem de notas, threads e renderização sem iframes.

### ⚪ Etapa 3: Homologação no Catálogo Astro Themes
- [ ] Auditoria de acessibilidade WCAG e performance Lighthouse (100/100).
- [ ] Submissão ao diretório oficial `astro.build/themes`.

---

## 🛠️ Comandos Rápidos de Validação
```bash
npm run dev    # Servidor local de desenvolvimento
npm run check  # Checagem estática de tipos Astro (.astro e .ts)
npm run build  # Compilação estática SSG de produção
npm run qa     # Suíte de verificação completa (check + build)
```

