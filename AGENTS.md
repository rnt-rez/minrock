# Instruções do Agente — Doca Minrock

## Desenvolvimento Local
* Servidor em segundo plano: `astro dev --background`
* Gestão do servidor: `astro dev stop`, `astro dev status`, `astro dev logs`.

## 🚦 Protocolo de Execução & Portões (Lifecycle Gates)
Herdado deterministicamente de [estaleiro/governance/lifecycle-gates.md](file:///c:/Users/Renato/git/estaleiro/governance/lifecycle-gates.md):
1. **Novas Demandas Estruturais (Gate 1):** Conduzir entrevista rápida com base em `estaleiro/skills/design-doc/SKILL.md` antes de criar/alterar arquivos.
2. **Auditoria Pré-Commit (Gate 2 & 3):** Validar a suíte de 5 camadas em `estaleiro/skills/qa-checker/SKILL.md` (`npm run qa` = `astro check` + `astro build`, validação visual/a11y) e segurança em `estaleiro/skills/devsecops-sentinel/SKILL.md`.
3. **Isolamento de Git (Gate 4):** `git status` mandatório no diretório local da doca; zero arquivos cruzados; zero push sem autorização expressa.

## 🛡️ Governança & Fronteira
* Mantenha o código estritamente autocontido nesta pasta (`src/`, `public/`, `tests/`).
* Proibido registrar tarefas de outras docas no `PROGRESS.md` local (Anti-Context Bleed).

## ⏱️ Cadência Modular & Atomicidade (Token Efficiency Gate)
* **Proibição de Avalanche de Escopo:** Proibido agrupar múltiplos subsistemas independentes em um único ciclo de execução.
* **Lotes Coesos (1 a 2 tópicos por ciclo):** Decomponha demandas em fases modulares com foco cirúrgico.
* **Checkpoints Atômicos no Git:** Cada fase requer aprovação no `npm run qa` (`astro check && astro build`) e commit isolado.
* **Preservação de Contexto & FinOps:** Diffs enxutos protegem a janela de contexto e evitam queima desnecessária de tokens.

