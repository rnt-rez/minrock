var S = Object.defineProperty;
var L = (_, d, e) => d in _ ? S(_, d, { enumerable: !0, configurable: !0, writable: !0, value: e }) : _[d] = e;
var g = (_, d, e) => L(_, typeof d != "symbol" ? d + "" : d, e);
const I = `
:host {
  display: block;
  font-family: var(--sl-font, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);
  color: var(--sl-text);
  line-height: 1.5;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

/* Foco Visível para Acessibilidade (A11y) */
:focus-visible {
  outline: 2px solid var(--sl-accent) !important;
  outline-offset: 2px !important;
}

/* Container Principal */
.sl-container {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 12px);
  padding: 1.5rem;
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
}

/* Header & Contador */
.sl-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--sl-border);
}

.sl-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  color: var(--sl-text);
}

.sl-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.15rem 0.6rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  background: var(--sl-surface);
  color: var(--sl-accent);
  border: 1px solid var(--sl-border);
}

.sl-brand-tag {
  font-size: 0.75rem;
  color: var(--sl-text-muted);
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.sl-brand-tag a {
  color: var(--sl-accent);
  text-decoration: none;
  font-weight: 500;
}

.sl-brand-tag a:hover {
  text-decoration: underline;
}

/* Caixa de Escrita de Novo Comentário (Composer) */
.sl-composer {
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 10px);
  padding: 0;
  margin-bottom: 1.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  overflow: hidden;
}

/* Abas do Composer: Escreva / Prévia e Controle Tipográfico Aa */
.sl-composer-tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.03));
  border-bottom: 1px solid var(--sl-border);
  padding: 0.25rem 0.5rem;
}

.sl-tabs-group {
  display: flex;
  gap: 0.25rem;
}

.sl-tab {
  background: transparent;
  border: none;
  padding: 0.4rem 0.75rem;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--sl-text-muted);
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.15s ease;
}

.sl-tab:hover {
  color: var(--sl-text);
}

.sl-tab.sl-tab-active {
  background: var(--sl-surface);
  color: var(--sl-accent);
  font-weight: 600;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.sl-font-toggle {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-font-toggle:hover {
  border-color: var(--sl-border);
  color: var(--sl-text);
}

.sl-font-toggle.sl-mono-active {
  background: var(--sl-bg);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
}

/* Área de Texto com Auto-grow */
.sl-composer-body {
  padding: 0.75rem;
}

.sl-textarea {
  width: 100%;
  min-height: 85px;
  background: transparent;
  border: none;
  color: var(--sl-text);
  font-family: inherit;
  font-size: 0.95rem;
  line-height: 1.5;
  resize: vertical;
  outline: none;
  display: block;
}

.sl-textarea.sl-monospace {
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace !important;
  font-size: 0.9rem;
}

.sl-textarea::placeholder {
  color: var(--sl-text-muted);
}

/* Área de Prévia do Markdown */
.sl-preview-area {
  min-height: 85px;
  padding: 0.5rem;
  color: var(--sl-text);
  font-size: 0.95rem;
  line-height: 1.6;
  word-break: break-word;
}

.sl-preview-area.sl-monospace {
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace !important;
}

.sl-preview-empty {
  color: var(--sl-text-muted);
  font-style: italic;
}

.sl-composer-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.75rem;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.02));
  border-top: 1px solid var(--sl-border);
}

.sl-composer-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Botões */
.sl-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.45rem 0.9rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1px solid transparent;
}

.sl-btn-primary {
  background: var(--sl-accent);
  color: #ffffff;
}

.sl-btn-primary:hover {
  background: var(--sl-accent-hover);
}

.sl-btn-secondary {
  background: var(--sl-bg);
  color: var(--sl-text);
  border-color: var(--sl-border);
}

.sl-btn-secondary:hover {
  border-color: var(--sl-text-muted);
}

/* Botão Verde de Login do GitHub */
.sl-btn-github {
  background: #238636;
  color: #ffffff;
  border: 1px solid rgba(240, 246, 252, 0.1);
  font-weight: 600;
}

.sl-btn-github:hover {
  background: #2ea043;
}

.sl-btn-github svg {
  fill: currentColor;
}

/* Status do Usuário Logado e Broker */
.sl-user-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--sl-text);
  font-weight: 500;
}

.sl-user-avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--sl-border);
  object-fit: cover;
}

.sl-btn-logout {
  background: transparent;
  border: none;
  color: var(--sl-text-muted);
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.sl-btn-logout:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
}

.sl-broker-status {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--sl-text-muted);
}

.sl-broker-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #22c55e;
}

.sl-broker-dot.sl-broker-standalone {
  background: #f59e0b;
}

/* Lista de Comentários e Threads */
.sl-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Card de Comentário */
.sl-card {
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 10px);
  padding: 1.1rem;
  box-shadow: 0 1px 2px rgba(0,0,0,0.03);
  position: relative;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.sl-card:hover {
  border-color: var(--sl-accent);
}

/* Destaque pulsante para Deep Linking (#comment-123) */
.sl-card.sl-highlight {
  border-color: var(--sl-accent);
  box-shadow: 0 0 0 3px var(--sl-accent-glow, rgba(146, 64, 14, 0.2));
}

.sl-card-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.65rem;
  gap: 0.5rem;
}

.sl-author-info {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.sl-avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--sl-border);
  flex-shrink: 0;
}

.sl-author-top-row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  flex-wrap: wrap;
}

.sl-author-name {
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--sl-text);
  text-decoration: none;
}

.sl-author-name:hover {
  color: var(--sl-accent);
  text-decoration: underline;
}

.sl-author-badge {
  font-size: 0.7rem;
  font-weight: 700;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  background: var(--sl-accent);
  color: var(--sl-accent-contrast, #ffffff);
}

.sl-card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sl-date {
  font-size: 0.75rem;
  color: var(--sl-text-muted);
}

.sl-edited-tag {
  font-size: 0.75rem;
  color: var(--sl-text-muted);
  font-style: italic;
}

/* Menu de Três Pontinhos (•••) */
.sl-menu-container {
  position: relative;
}

.sl-menu-btn {
  background: transparent;
  border: none;
  color: var(--sl-text-muted);
  cursor: pointer;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-size: 0.9rem;
  line-height: 1;
  transition: all 0.15s ease;
}

.sl-menu-btn:hover {
  background: var(--sl-bg);
  color: var(--sl-text);
}

.sl-dropdown {
  position: absolute;
  right: 0;
  top: 100%;
  margin-top: 0.25rem;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 50;
  min-width: 140px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.sl-dropdown-item {
  background: transparent;
  border: none;
  text-align: left;
  padding: 0.5rem 0.75rem;
  font-size: 0.8rem;
  color: var(--sl-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.15s ease;
}

.sl-dropdown-item:hover {
  background: var(--sl-bg);
  color: var(--sl-accent);
}

.sl-dropdown-item.sl-danger:hover {
  color: #ef4444;
}

/* Corpo do Comentário com Markdown */
.sl-body {
  font-size: 0.95rem;
  color: var(--sl-text);
  line-height: 1.6;
  margin-bottom: 0.75rem;
  word-break: break-word;
}

.sl-body p {
  margin: 0 0 0.5rem 0;
}

.sl-body p:last-child {
  margin-bottom: 0;
}

.sl-body code {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  font-size: 0.85em;
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, monospace;
}

.sl-body pre {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  padding: 0.75rem;
  border-radius: 6px;
  overflow-x: auto;
  font-size: 0.85em;
  margin: 0.5rem 0;
}

.sl-body pre code {
  background: transparent;
  border: none;
  padding: 0;
}

.sl-body blockquote {
  margin: 0.5rem 0;
  padding-left: 0.75rem;
  border-left: 3px solid var(--sl-accent);
  color: var(--sl-text-muted);
}

.sl-card-body a,
.sl-body a {
  color: var(--sl-accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  transition: opacity 0.15s ease;
}

.sl-card-body a:hover,
.sl-body a:hover {
  opacity: 0.85;
}

/* Menções de Nicknames (@usuario) Estilo Chip / Tag */
.sl-mention {
  color: var(--sl-mention-color, var(--sl-accent)) !important;
  font-weight: 600;
  font-size: 0.88em;
  text-decoration: none !important;
  background: var(--sl-mention-bg, rgba(88, 166, 255, 0.14));
  padding: 0.12rem 0.45rem;
  border-radius: 5px;
  border: 1px solid var(--sl-mention-border, rgba(88, 166, 255, 0.28));
  display: inline-flex;
  align-items: center;
  line-height: 1.3;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: background 0.15s ease, border-color 0.15s ease, color 0.15s ease;
}

.sl-mention:hover {
  background: var(--sl-mention-hover, rgba(88, 166, 255, 0.25));
  border-color: var(--sl-accent);
  color: var(--sl-accent-hover, var(--sl-accent)) !important;
}

/* Rodapé do Card (Reações, Responder e Áudio) */
.sl-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 0.5rem;
}

.sl-actions-left {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
}

.sl-reaction-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.8rem;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-reaction-btn:hover {
  border-color: var(--sl-accent);
  color: var(--sl-text);
}

.sl-reaction-btn.sl-active {
  background: var(--sl-accent);
  color: var(--sl-accent-contrast, #ffffff);
  border-color: var(--sl-accent);
  font-weight: 600;
}

.sl-actions-right {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-left: auto;
  flex-wrap: wrap;
}

/* Botão de Tradução Consolidado (Canto Inferior Direito ao lado de Ouvir) */
.sl-translate-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  background: transparent;
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  line-height: 1.3;
  text-decoration: none;
  white-space: nowrap;
}

.sl-translate-btn:hover {
  background: var(--sl-bg);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
}

.sl-translate-btn.sl-translated {
  background: var(--sl-mention-bg, rgba(88, 166, 255, 0.14));
  border-color: var(--sl-mention-border, var(--sl-accent));
  color: var(--sl-mention-color, var(--sl-accent));
  font-weight: 600;
}

/* Botão de Responder (Estilo LinkedIn / Reddit) */
.sl-reply-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  background: transparent;
  border: 1px solid transparent;
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-reply-btn:hover {
  background: var(--sl-bg);
  border-color: var(--sl-border);
  color: var(--sl-accent);
}

/* Botão de Áudio (Web Speech API) */
.sl-audio-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.75rem;
  background: transparent;
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-audio-btn:hover {
  color: var(--sl-accent);
  border-color: var(--sl-accent);
}

.sl-audio-btn.sl-audio-playing {
  background: var(--sl-accent);
  color: var(--sl-accent-contrast, #ffffff);
  border-color: var(--sl-accent);
  animation: sl-pulse 1.5s infinite;
}

@keyframes sl-pulse {
  0% { opacity: 1; }
  50% { opacity: 0.7; }
  100% { opacity: 1; }
}

/* Respostas Aninhadas (Threads Estilo LinkedIn com Linha Guia) */
.sl-thread {
  margin-top: 0.75rem;
  padding-left: 1.5rem;
  border-left: 2px solid var(--sl-border);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.sl-reply-card {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 8px);
  padding: 0.85rem;
}

.sl-reply-card .sl-avatar {
  width: 26px;
  height: 26px;
}

/* Caixa de Resposta Inline */
.sl-inline-composer {
  margin-top: 0.75rem;
  padding: 0.75rem;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: 8px;
}

.sl-inline-composer textarea {
  width: 100%;
  min-height: 60px;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 0.5rem;
  color: var(--sl-text);
  font-family: inherit;
  font-size: 0.85rem;
  resize: vertical;
  outline: none;
  display: block;
}

.sl-inline-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

/* ========================================================
   DEFINIÇÕES DE TEMAS
   ======================================================== */

/* 0. Auto / Camaleão (Herda ou Auto-computa do Blog) */
:host([theme="auto"]),
:host(:not([theme])) {
  --sl-bg: var(--page-bg, var(--color-bg, #ffffff));
  --sl-surface: var(--page-card-bg, var(--color-surface, #ffffff));
  --sl-tab-bg: var(--page-tab-bg, rgba(0, 0, 0, 0.03));
  --sl-text: var(--page-text, var(--color-text, #1c1917));
  --sl-text-muted: var(--page-text-muted, #78716c);
  --sl-border: var(--page-border, var(--color-border, #e7e5e4));
  --sl-accent: var(--page-accent, var(--color-accent, #92400e));
  --sl-accent-hover: var(--page-accent-hover, var(--color-accent-hover, #b45309));
  --sl-accent-contrast: #ffffff;
  --sl-accent-glow: rgba(146, 64, 14, 0.25);
  --sl-mention-color: var(--page-accent, var(--color-accent, #92400e));
  --sl-mention-bg: rgba(146, 64, 14, 0.12);
  --sl-mention-border: rgba(146, 64, 14, 0.25);
}

/* 1. Cream (Warm Paper / Marginalia) */
:host([theme="cream"]) {
  --sl-bg: #f7f4ea;
  --sl-surface: #ffffff;
  --sl-tab-bg: #f0ebe0;
  --sl-text: #2c2724;
  --sl-text-muted: #78716c;
  --sl-border: #ded7c6;
  --sl-accent: #92400e;
  --sl-accent-hover: #b45309;
  --sl-accent-contrast: #ffffff;
  --sl-accent-glow: rgba(146, 64, 14, 0.25);
  --sl-mention-color: #92400e;
  --sl-mention-bg: rgba(146, 64, 14, 0.1);
  --sl-mention-border: rgba(146, 64, 14, 0.25);
}

/* 2. Midnight (Dark OLED) */
:host([theme="midnight"]) {
  --sl-bg: #0d1117;
  --sl-surface: #161b22;
  --sl-tab-bg: #090d13;
  --sl-text: #e6edf3;
  --sl-text-muted: #8b949e;
  --sl-border: #30363d;
  --sl-accent: #58a6ff;
  --sl-accent-hover: #79c0ff;
  --sl-accent-contrast: #0d1117;
  --sl-accent-glow: rgba(88, 166, 255, 0.25);
  --sl-mention-color: #79c0ff;
  --sl-mention-bg: rgba(56, 139, 253, 0.16);
  --sl-mention-border: rgba(56, 139, 253, 0.35);
}

/* 3. Slate (Ardósia Naval / Vercel-style) */
:host([theme="slate"]) {
  --sl-bg: #0f172a;
  --sl-surface: #1e293b;
  --sl-tab-bg: #0b1120;
  --sl-text: #f8fafc;
  --sl-text-muted: #94a3b8;
  --sl-border: #334155;
  --sl-accent: #38bdf8;
  --sl-accent-hover: #0ea5e9;
  --sl-accent-contrast: #0f172a;
  --sl-accent-glow: rgba(56, 189, 248, 0.25);
  --sl-mention-color: #7dd3fc;
  --sl-mention-bg: rgba(56, 189, 248, 0.16);
  --sl-mention-border: rgba(56, 189, 248, 0.35);
}

/* 4. Clean White (Minimalista) */
:host([theme="clean-white"]) {
  --sl-bg: #ffffff;
  --sl-surface: #f8fafc;
  --sl-tab-bg: #f1f5f9;
  --sl-text: #0f172a;
  --sl-text-muted: #64748b;
  --sl-border: #e2e8f0;
  --sl-accent: #2563eb;
  --sl-accent-hover: #1d4ed8;
  --sl-accent-contrast: #ffffff;
  --sl-accent-glow: rgba(37, 99, 235, 0.2);
  --sl-mention-color: #1d4ed8;
  --sl-mention-bg: rgba(37, 99, 235, 0.1);
  --sl-mention-border: rgba(37, 99, 235, 0.25);
}

/* 5. Terminal (Monospace CRT) */
:host([theme="terminal"]) {
  --sl-bg: #0a0e14;
  --sl-surface: #010409;
  --sl-tab-bg: #000000;
  --sl-text: #00ff66;
  --sl-text-muted: #009933;
  --sl-border: #00ff6633;
  --sl-accent: #00ff66;
  --sl-accent-hover: #33ff88;
  --sl-accent-contrast: #000000;
  --sl-accent-glow: rgba(0, 255, 102, 0.3);
  --sl-mention-color: #33ff88;
  --sl-mention-bg: rgba(0, 255, 102, 0.16);
  --sl-mention-border: rgba(0, 255, 102, 0.35);
  --sl-font: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, monospace;
}

/* 6. High Contrast (Acessibilidade Visual Máxima) */
:host([theme="high-contrast"]) {
  --sl-bg: #000000;
  --sl-surface: #0a0a0a;
  --sl-tab-bg: #141414;
  --sl-text: #ffffff;
  --sl-text-muted: #cccccc;
  --sl-border: #ffffff;
  --sl-accent: #ffff00;
  --sl-accent-hover: #ffff66;
  --sl-accent-contrast: #000000;
  --sl-accent-glow: rgba(255, 255, 0, 0.5);
  --sl-mention-color: #ffff00;
  --sl-mention-bg: rgba(255, 255, 0, 0.2);
  --sl-mention-border: rgba(255, 255, 0, 0.5);
}

/* 7. Protanopia & Deuteranopia (Daltonismo Calibrado) */
:host([theme="protanopia"]) {
  --sl-bg: #0e1726;
  --sl-surface: #1b263b;
  --sl-tab-bg: #0d1b2a;
  --sl-text: #e0e1dd;
  --sl-text-muted: #a0abbd;
  --sl-border: #415a77;
  --sl-accent: #f4d03f;
  --sl-accent-hover: #f7dc6f;
  --sl-accent-contrast: #0e1726;
  --sl-accent-glow: rgba(244, 208, 63, 0.3);
  --sl-mention-color: #f7dc6f;
  --sl-mention-bg: rgba(244, 208, 63, 0.16);
  --sl-mention-border: rgba(244, 208, 63, 0.35);
}

/* Respeito a Preferência de Redução de Movimento */
@media (prefers-reduced-motion: reduce) {
  * {
    transition: none !important;
    animation: none !important;
  }
}
`;
class R {
  constructor(d, e) {
    g(this, "baseUrl");
    g(this, "getToken");
    this.baseUrl = d.replace(/\/+$/, ""), this.getToken = e;
  }
  getAuthHeaders() {
    const d = this.getToken(), e = {
      "Content-Type": "application/json"
    };
    return d && (e.Authorization = `Bearer ${d}`), e;
  }
  /**
   * Auto-Discovery de IDs do repositório e categoria no GitHub
   */
  async discover(d, e = "General") {
    const t = await fetch(
      `${this.baseUrl}/api/discovery?repo=${encodeURIComponent(d)}&category=${encodeURIComponent(e)}`
    );
    if (!t.ok) {
      const r = await t.json().catch(() => ({}));
      throw new Error(r.error || `Falha no Auto-Discovery: HTTP ${t.status}`);
    }
    return await t.json();
  }
  /**
   * Leitura de discussões e comentários com cache de borda
   */
  async fetchDiscussions(d, e) {
    const t = await fetch(
      `${this.baseUrl}/api/discussions?repo=${encodeURIComponent(d)}&term=${encodeURIComponent(e)}`,
      {
        headers: this.getAuthHeaders()
      }
    );
    if (!t.ok) {
      const r = await t.json().catch(() => ({}));
      throw new Error(r.error || `Falha ao carregar discussões: HTTP ${t.status}`);
    }
    return await t.json();
  }
  /**
   * Troca segura de código OAuth por token de acesso
   */
  async exchangeOAuthCode(d, e) {
    const t = await fetch(`${this.baseUrl}/api/oauth/access_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: d, redirect_uri: e })
    });
    if (!t.ok) {
      const o = await t.json().catch(() => ({}));
      throw new Error(o.error_description || o.error || `Erro ao trocar código: HTTP ${t.status}`);
    }
    const r = await t.json();
    if (!r.access_token)
      throw new Error(r.error_description || r.error || "Token de acesso não retornado.");
    return r.access_token;
  }
  /**
   * Busca perfil do usuário logado diretamente da API do GitHub usando o Bearer token
   */
  async fetchGitHubUserProfile(d) {
    const e = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${d}`,
        Accept: "application/vnd.github.v3+json"
      }
    });
    if (!e.ok)
      throw new Error(`Falha ao obter perfil do usuário: HTTP ${e.status}`);
    const t = await e.json();
    return {
      login: t.login,
      avatarUrl: t.avatar_url,
      name: t.name,
      url: t.html_url
    };
  }
  /**
   * Criação de nova discussão no GitHub
   */
  async createDiscussion(d, e, t, r) {
    const o = await fetch(`${this.baseUrl}/api/discussions`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ repositoryId: d, categoryId: e, title: t, body: r })
    });
    if (!o.ok) {
      const a = await o.json().catch(() => ({}));
      throw new Error(a.error || `Erro ao criar discussão: HTTP ${o.status}`);
    }
    return await o.json();
  }
  /**
   * Envio de comentário ou réplica
   */
  async addComment(d, e, t) {
    const r = await fetch(`${this.baseUrl}/api/comments`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ discussionId: d, body: e, replyToId: t })
    });
    if (!r.ok) {
      const o = await r.json().catch(() => ({}));
      throw new Error(o.error || `Erro ao enviar comentário: HTTP ${r.status}`);
    }
    return await r.json();
  }
  /**
   * Edição in-place de comentário
   */
  async updateComment(d, e) {
    const t = await fetch(`${this.baseUrl}/api/comments`, {
      method: "PATCH",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ commentId: d, body: e })
    });
    if (!t.ok) {
      const r = await t.json().catch(() => ({}));
      throw new Error(r.error || `Erro ao editar comentário: HTTP ${t.status}`);
    }
    return await t.json();
  }
  /**
   * Exclusão in-place de comentário
   */
  async deleteComment(d) {
    const e = await fetch(`${this.baseUrl}/api/comments?id=${encodeURIComponent(d)}`, {
      method: "DELETE",
      headers: this.getAuthHeaders()
    });
    if (!e.ok) {
      const t = await e.json().catch(() => ({}));
      throw new Error(t.error || `Erro ao excluir comentário: HTTP ${e.status}`);
    }
    return await e.json();
  }
  /**
   * Adiciona ou remove reação de emoji
   */
  async toggleReaction(d, e, t) {
    const o = {
      "👍": "THUMBS_UP",
      "👎": "THUMBS_DOWN",
      "😄": "LAUGH",
      "🎉": "HOORAY",
      "😕": "CONFUSED",
      "❤️": "HEART",
      "🚀": "ROCKET",
      "👀": "EYES"
    }[e] || e, a = await fetch(`${this.baseUrl}/api/reactions`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ subjectId: d, content: o, action: t })
    });
    if (!a.ok) {
      const l = await a.json().catch(() => ({}));
      throw new Error(l.error || `Erro ao atualizar reação: HTTP ${a.status}`);
    }
    return await a.json();
  }
}
class P extends HTMLElement {
  constructor() {
    super();
    g(this, "_repo", "");
    g(this, "_category", "General");
    g(this, "_theme", "cream");
    g(this, "_lang", "pt");
    g(this, "_inputPosition", "top");
    g(this, "_broker", "");
    g(this, "_clientId", "");
    g(this, "_comments", []);
    g(this, "_isLoading", !1);
    g(this, "_isBrokerConnected", !1);
    // Sessão de Autenticação
    g(this, "_currentUser", null);
    g(this, "_authToken", null);
    g(this, "_brokerClient", null);
    g(this, "_discussionId", null);
    g(this, "_repositoryId", null);
    g(this, "_categoryId", null);
    // Estados de Interface do Editor e Interações
    g(this, "_activeTab", "write");
    g(this, "_fontMode", "default");
    g(this, "_composerText", "");
    g(this, "_replyingToId", null);
    g(this, "_replyText", "");
    g(this, "_editingId", null);
    g(this, "_openMenuId", null);
    g(this, "_speakingId", null);
    g(this, "_themeObserver", null);
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return [
      "repo",
      "category",
      "theme",
      "lang",
      "mapping",
      "input-position",
      "broker",
      "client-id"
    ];
  }
  get repo() {
    return this._repo;
  }
  set repo(e) {
    this.setAttribute("repo", e);
  }
  get category() {
    return this._category;
  }
  set category(e) {
    this.setAttribute("category", e);
  }
  get theme() {
    return this._theme;
  }
  set theme(e) {
    this.setAttribute("theme", e);
  }
  get broker() {
    return this._broker;
  }
  set broker(e) {
    this.setAttribute("broker", e);
  }
  get clientId() {
    return this._clientId;
  }
  set clientId(e) {
    this.setAttribute("client-id", e);
  }
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(e) {
    this._isLoading = e, this.render();
  }
  connectedCallback() {
    this.syncAttributes(), this.initAuthSession(), this.setupOAuthListener(), this.checkUrlForOAuthCode(), this._theme === "auto" && (this.detectAndApplyAutoPalette(), this.setupAutoThemeObserver()), this.loadComments(), this.render();
  }
  disconnectedCallback() {
    this._themeObserver && (this._themeObserver.disconnect(), this._themeObserver = null);
  }
  attributeChangedCallback(e, t, r) {
    t !== r && (e === "theme" && r ? (this._theme = r, this._theme === "auto" ? (this.detectAndApplyAutoPalette(), this.setupAutoThemeObserver()) : (this._themeObserver && (this._themeObserver.disconnect(), this._themeObserver = null), this.clearAutoPaletteProperties())) : e === "repo" && r ? (this._repo = r, this.loadComments()) : e === "category" && r ? (this._category = r, this.loadComments()) : e === "lang" && r ? this._lang = r : e === "broker" && r ? (this._broker = r, this.initBrokerClient(), this.loadComments()) : e === "client-id" && r ? this._clientId = r : e === "input-position" && (r === "top" || r === "bottom") && (this._inputPosition = r), this.render());
  }
  syncAttributes() {
    this._repo = this.getAttribute("repo") || "", this._category = this.getAttribute("category") || "General", this._theme = this.getAttribute("theme") || "cream", this._lang = this.getAttribute("lang") || "pt", this._broker = this.getAttribute("broker") || "", this._clientId = this.getAttribute("client-id") || "";
    const e = this.getAttribute("input-position");
    (e === "top" || e === "bottom") && (this._inputPosition = e), this.hasAttribute("theme") || this.setAttribute("theme", this._theme), this.initBrokerClient();
  }
  /**
   * Identifica a paleta de cores do site hospedeiro (body/container/CSS vars) e replica harmoniosamente
   */
  detectAndApplyAutoPalette() {
    if (!(typeof window > "u"))
      try {
        const e = (n) => {
          if (!n || n === "transparent" || n === "rgba(0, 0, 0, 0)")
            return null;
          if (n.startsWith("#")) {
            let s = n.slice(1);
            if ((s.length === 3 || s.length === 4) && (s = s.split("").map((p) => p + p).join("")), s.length >= 6)
              return {
                r: parseInt(s.substring(0, 2), 16),
                g: parseInt(s.substring(2, 4), 16),
                b: parseInt(s.substring(4, 6), 16)
              };
          }
          const u = n.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
          return u ? {
            r: parseInt(u[1], 10),
            g: parseInt(u[2], 10),
            b: parseInt(u[3], 10)
          } : null;
        }, t = window.getComputedStyle(document.documentElement), r = window.getComputedStyle(document.body), o = this.parentElement || document.body, a = window.getComputedStyle(o), l = (n) => {
          for (const u of n) {
            const s = a.getPropertyValue(u).trim() || r.getPropertyValue(u).trim() || t.getPropertyValue(u).trim();
            if (s) {
              const p = e(s);
              if (p) return p;
            }
          }
          return null;
        };
        let i = l([
          "--sl-bg",
          "--page-bg",
          "--color-bg",
          "--background",
          "--color-background",
          "--bg-color",
          "--body-bg",
          "--bg"
        ]);
        if (!i) {
          let n = this;
          for (; n; ) {
            const u = window.getComputedStyle(n).backgroundColor, s = e(u);
            if (s) {
              i = s;
              break;
            }
            n = n.parentElement;
          }
        }
        i || (i = e(r.backgroundColor) || e(t.backgroundColor) || { r: 255, g: 255, b: 255 });
        let b = l([
          "--sl-text",
          "--page-text",
          "--color-text",
          "--text-color",
          "--color-foreground",
          "--foreground",
          "--text"
        ]);
        if (!b) {
          let n = this;
          for (; n; ) {
            const u = window.getComputedStyle(n).color, s = e(u);
            if (s) {
              b = s;
              break;
            }
            n = n.parentElement;
          }
        }
        let c = l([
          "--sl-accent",
          "--page-accent",
          "--color-accent",
          "--color-primary",
          "--primary",
          "--accent",
          "--brand"
        ]);
        if (!c) {
          const n = document.querySelector("a");
          n && (c = e(window.getComputedStyle(n).color));
        }
        const f = document.documentElement.classList.contains("dark") || document.body.classList.contains("dark") || document.documentElement.getAttribute("data-theme") === "dark" || document.body.getAttribute("data-theme") === "dark" || document.body.getAttribute("data-page-theme") === "midnight" || document.body.getAttribute("data-page-theme") === "slate" || document.body.getAttribute("data-page-theme") === "terminal", w = 0.2126 * i.r + 0.7152 * i.g + 0.0722 * i.b, $ = f || w < 128;
        b || (b = $ ? { r: 230, g: 237, b: 243 } : { r: 28, g: 25, b: 23 }), c || (c = $ ? { r: 88, g: 166, b: 255 } : { r: 146, g: 64, b: 14 });
        let v, x, m, C, T, A, E;
        if ($) {
          const n = Math.min(255, Math.round(i.r + 15)), u = Math.min(255, Math.round(i.g + 18)), s = Math.min(255, Math.round(i.b + 22));
          v = `rgb(${n}, ${u}, ${s})`, x = "rgba(0, 0, 0, 0.35)", m = "rgba(255, 255, 255, 0.12)", C = `rgba(${b.r}, ${b.g}, ${b.b}, 0.62)`, T = `rgb(${Math.min(255, c.r + 30)}, ${Math.min(255, c.g + 30)}, ${Math.min(255, c.b + 30)})`, A = `rgba(${c.r}, ${c.g}, ${c.b}, 0.16)`, E = `rgba(${c.r}, ${c.g}, ${c.b}, 0.35)`;
        } else
          v = "rgba(255, 255, 255, 0.96)", x = "rgba(0, 0, 0, 0.035)", m = "rgba(0, 0, 0, 0.12)", C = `rgba(${b.r}, ${b.g}, ${b.b}, 0.65)`, T = `rgb(${c.r}, ${c.g}, ${c.b})`, A = `rgba(${c.r}, ${c.g}, ${c.b}, 0.12)`, E = `rgba(${c.r}, ${c.g}, ${c.b}, 0.28)`;
        const h = `rgb(${c.r}, ${c.g}, ${c.b})`;
        this.style.setProperty("--sl-bg", `rgb(${i.r}, ${i.g}, ${i.b})`), this.style.setProperty("--sl-surface", v), this.style.setProperty("--sl-tab-bg", x), this.style.setProperty("--sl-border", m), this.style.setProperty("--sl-text", `rgb(${b.r}, ${b.g}, ${b.b})`), this.style.setProperty("--sl-text-muted", C), this.style.setProperty("--sl-accent", h), this.style.setProperty("--sl-accent-hover", h), this.style.setProperty("--sl-mention-color", T), this.style.setProperty("--sl-mention-bg", A), this.style.setProperty("--sl-mention-border", E);
      } catch (e) {
        console.warn("🍃 [ScatterLeaf] Erro ao auto-computar paleta do tema:", e);
      }
  }
  setupAutoThemeObserver() {
    typeof window > "u" || (this._themeObserver && this._themeObserver.disconnect(), this._themeObserver = new MutationObserver(() => {
      this._theme === "auto" && this.detectAndApplyAutoPalette();
    }), this._themeObserver.observe(document.documentElement, {
      attributes: !0,
      attributeFilter: ["class", "data-theme", "style"]
    }), this._themeObserver.observe(document.body, {
      attributes: !0,
      attributeFilter: ["class", "data-theme", "data-page-theme", "style"]
    }), window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      this._theme === "auto" && this.detectAndApplyAutoPalette();
    }));
  }
  clearAutoPaletteProperties() {
    [
      "--sl-bg",
      "--sl-surface",
      "--sl-tab-bg",
      "--sl-border",
      "--sl-text",
      "--sl-text-muted",
      "--sl-accent",
      "--sl-accent-hover",
      "--sl-mention-color",
      "--sl-mention-bg",
      "--sl-mention-border"
    ].forEach((t) => this.style.removeProperty(t));
  }
  initBrokerClient() {
    this._broker ? this._brokerClient = new R(this._broker, () => this._authToken) : (this._brokerClient = null, this._isBrokerConnected = !1);
  }
  /**
   * Recupera sessão de autenticação prévia salva no sessionStorage
   */
  initAuthSession() {
    try {
      const e = sessionStorage.getItem("scatterleaf_token"), t = sessionStorage.getItem("scatterleaf_user");
      e && t && (this._authToken = e, this._currentUser = JSON.parse(t));
    } catch {
      this._authToken = null, this._currentUser = null;
    }
  }
  /**
   * Escuta mensagens de retorno do popup OAuth
   */
  setupOAuthListener() {
    window.addEventListener("message", async (e) => {
      e.data && e.data.type === "scatterleaf-oauth-code" && e.data.code && await this.exchangeOAuthCode(e.data.code);
    });
  }
  /**
   * Suporte para retorno por redirecionamento direto com ?code=...
   */
  async checkUrlForOAuthCode() {
    if (typeof window > "u") return;
    const t = new URLSearchParams(window.location.search).get("code");
    if (t) {
      if (window.opener) {
        window.opener.postMessage({ type: "scatterleaf-oauth-code", code: t }, "*"), window.close();
        return;
      }
      const r = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, r), await this.exchangeOAuthCode(t);
    }
  }
  /**
   * Troca o código retornado pelo OAuth pelo token seguro via Edge Broker
   */
  async exchangeOAuthCode(e) {
    if (!this._brokerClient) {
      console.warn("🍃 [ScatterLeaf] Broker URL não configurada para efetuar troca de token.");
      return;
    }
    try {
      this._isLoading = !0, this.render();
      const t = window.location.origin + window.location.pathname, r = await this._brokerClient.exchangeOAuthCode(e, t), o = await this._brokerClient.fetchGitHubUserProfile(r);
      this._authToken = r, this._currentUser = o, sessionStorage.setItem("scatterleaf_token", r), sessionStorage.setItem("scatterleaf_user", JSON.stringify(o)), this._isLoading = !1, this.render(), this.dispatchEvent(
        new CustomEvent("scatterleaf-login", {
          detail: { user: o },
          bubbles: !0,
          composed: !0
        })
      );
    } catch (t) {
      this._isLoading = !1, this.render();
      const r = t instanceof Error ? t.message : "Falha na autenticação";
      alert(`🍃 [ScatterLeaf Auth] ${r}`);
    }
  }
  /**
   * Inicia o fluxo de login em 1 clique via popup
   */
  loginWithGitHub() {
    if (!this._clientId) {
      if (confirm(
        this._lang === "pt" ? `🍃 ScatterLeaf Playground:
Nenhum "client-id" do GitHub OAuth configurado ainda.
Deseja simular um login local de teste (@rnt-rez)?` : `🍃 ScatterLeaf Playground:
No "client-id" configured yet.
Do you want to simulate a local test login (@rnt-rez)?`
      )) {
        const c = {
          login: "rnt-rez",
          avatarUrl: "https://github.com/rnt-rez.png",
          name: "Renato Rezende",
          url: "https://github.com/rnt-rez"
        };
        this._currentUser = c, this._authToken = "mock_token_local", sessionStorage.setItem("scatterleaf_token", this._authToken), sessionStorage.setItem("scatterleaf_user", JSON.stringify(c)), this.render();
      }
      return;
    }
    const e = encodeURIComponent(window.location.origin + window.location.pathname), t = encodeURIComponent("public_repo read:user"), r = `https://github.com/login/oauth/authorize?client_id=${this._clientId}&scope=${t}&redirect_uri=${e}`, o = 600, a = 700, l = window.screen.width / 2 - o / 2, i = window.screen.height / 2 - a / 2;
    window.open(
      r,
      "scatterleaf-oauth-popup",
      `width=${o},height=${a},top=${i},left=${l},scrollbars=yes,status=yes`
    );
  }
  /**
   * Encerra a sessão do usuário
   */
  logout() {
    sessionStorage.removeItem("scatterleaf_token"), sessionStorage.removeItem("scatterleaf_user"), this._authToken = null, this._currentUser = null, this.render(), this.dispatchEvent(
      new CustomEvent("scatterleaf-logout", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  getCurrentTerm() {
    return typeof window > "u" ? "general" : window.location.pathname || "general";
  }
  /**
   * Carrega comentários: tenta o Edge Broker primeiro; se offline, faz fallback gracioso para mock
   */
  async loadComments() {
    var e;
    if (!this._broker || !this._repo) {
      this.loadMockComments(), this._isBrokerConnected = !1;
      return;
    }
    this._isLoading = !0, this.render();
    try {
      if (this._brokerClient || this.initBrokerClient(), this._brokerClient) {
        const t = await this._brokerClient.discover(this._repo, this._category);
        this._repositoryId = t.repositoryId, this._categoryId = ((e = t.defaultCategory) == null ? void 0 : e.id) || null;
        const r = this.getCurrentTerm(), o = await this._brokerClient.fetchDiscussions(this._repo, r);
        o.discussion && (this._discussionId = o.discussion.id), this._comments = (o.comments || []).map((a) => ({
          ...a,
          originalLang: a.originalLang || this.detectTextLanguage(a.body),
          replies: (a.replies || []).map((l) => ({
            ...l,
            originalLang: l.originalLang || this.detectTextLanguage(l.body)
          }))
        })), this._isBrokerConnected = !0;
      }
    } catch (t) {
      console.warn("🍃 [ScatterLeaf] Broker offline ou inacessível. Usando mock local:", t), this._isBrokerConnected = !1, this.loadMockComments();
    } finally {
      this._isLoading = !1, this.render();
    }
  }
  loadMockComments() {
    this._comments = [
      {
        id: "1",
        author: {
          login: "rnt-rez",
          avatarUrl: "https://github.com/rnt-rez.png",
          url: "https://github.com/rnt-rez",
          isAuthor: !0
        },
        body: "Bem-vindo ao **ScatterLeaf**! 🍃 Este é um comentário nativo renderizado diretamente via Shadow DOM, com zero iframes e suporte a Markdown.",
        createdAt: "há 10 minutos",
        originalLang: "pt",
        reactions: [
          { content: "👍", count: 4, viewerHasReacted: !0 },
          { content: "❤️", count: 6, viewerHasReacted: !1 },
          { content: "🚀", count: 2, viewerHasReacted: !1 }
        ],
        replies: [
          {
            id: "1-1",
            author: {
              login: "sarah-eng",
              avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
              url: "https://github.com",
              isAuthor: !1
            },
            body: "@rnt-rez This is brilliant! Having native Shadow DOM makes the scroll buttery smooth without any iframe stutter.",
            createdAt: "há 5 minutos",
            originalLang: "en",
            reactions: [{ content: "❤️", count: 2, viewerHasReacted: !0 }],
            parentId: "1"
          },
          {
            id: "1-2",
            author: {
              login: "rnt-rez",
              avatarUrl: "https://github.com/rnt-rez.png",
              url: "https://github.com/rnt-rez",
              isAuthor: !0
            },
            body: "@sarah-eng Exato! A rolagem da página não sofre com os pulos visuais de redimensionamento do iframe.",
            createdAt: "há 2 minutos",
            originalLang: "pt",
            reactions: [{ content: "🚀", count: 1, viewerHasReacted: !1 }],
            parentId: "1"
          }
        ]
      },
      {
        id: "2",
        author: {
          login: "carlos-dev",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: "¡Excelente proyecto! El tema Warm Paper (**Cream**) queda fenomenal para leer artículos largos.",
        createdAt: "há 8 minutos",
        originalLang: "es",
        reactions: [{ content: "🎉", count: 3, viewerHasReacted: !1 }],
        replies: []
      }
    ];
  }
  /**
   * Parser ultraleve de Markdown client-side (Zero dependências externas)
   */
  parseMarkdown(e) {
    if (!e) return "";
    let t = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return t = t.replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>"), t = t.replace(/`([^`]+)`/g, "<code>$1</code>"), t = t.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"), t = t.replace(/__([^_]+)__/g, "<strong>$1</strong>"), t = t.replace(/\*([^*]+)\*/g, "<em>$1</em>"), t = t.replace(/_([^_]+)_/g, "<em>$1</em>"), t = t.replace(/~~([^~]+)~~/g, "<del>$1</del>"), t = t.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    ), t = t.replace(
      /(^|[^"'])(https?:\/\/[^\s<]+)/g,
      '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>'
    ), t = t.replace(
      /@([a-zA-Z0-9-_]+)/g,
      '<a href="https://github.com/$1" target="_blank" rel="noopener noreferrer" class="sl-mention">@$1</a>'
    ), t = t.replace(/\n\n/g, "</p><p>"), t = t.replace(/\n/g, "<br />"), `<p>${t}</p>`;
  }
  /**
   * Detector heurístico ultrarrápido de idioma do texto do comentário (para voz poliglota e tradução)
   */
  detectTextLanguage(e) {
    if (!e || e.trim().length === 0) return this._lang;
    const t = e.toLowerCase().replace(/[*_`#]/g, "").replace(/https?:\/\/\S+/g, "").replace(/@\w+/g, ""), r = (t.match(/\b(o|a|os|as|de|do|da|em|um|uma|para|com|não|que|isso|este|esta|muito|bom|bem|projeto|comentário|genial|manteiga|artigo|leitura)\b/g) || []).length * 2 + (t.match(/[ãõéêáàçíú]/g) || []).length * 3, o = (t.match(/\b(the|and|this|is|that|with|for|you|have|not|but|from|are|was|they|will|all|would|there|what|out|about|who|get|which|go|me|when|make|can|like|time|no|just|know|take|people|into|year|your|good|some|could|them|see|other|than|then|now|look|only|come|its|over|think|also|back|after|use|two|how|our|work|first|well|way|even|new|want|because|any|these|give|day|most|us|welcome|native|having|scroll|stutter)\b/g) || []).length * 2, a = (t.match(/\b(el|la|los|las|de|del|en|un|una|por|con|para|esto|este|esta|muy|bien|es|son|pero|como|más|sus|le|ya|o|fue|ha|sí|porque|cuando|sin|sobre|ser|tiene|también|me|hasta|hay|donde|quien|desde|todo|nos|durante|todos|uno|les|ni|contra|otros|ese|eso|ante|ellos|mí|antes|algunos|qué|unos|yo|otro|otras|otra|él|tanto|esa|estos|mucho|quienes|nada|muchos|cual|poco|ella|estar|estas|algunas|algo|nosotros|queda|excelente|artículos)\b/g) || []).length * 2 + (t.match(/[¿¡ñ]/g) || []).length * 4, l = (t.match(/\b(le|la|les|de|du|des|en|et|un|une|pour|avec|dans|que|qui|est|sont|sur|ce|cette|ces|mais|ou|donc|or|ni|car|très|bien)\b/g) || []).length * 2 + (t.match(/[œçèêàâôûëï]/g) || []).length * 3, i = Math.max(r, o, a, l);
    return i < 2 ? this._lang : i === r ? "pt" : i === o ? "en" : i === a ? "es" : i === l ? "fr" : this._lang;
  }
  getVisitorLang() {
    return typeof navigator < "u" && navigator.language ? navigator.language.split("-")[0].toLowerCase() : this._lang;
  }
  getLanguageName(e, t) {
    return (t === "pt" ? {
      pt: "Português",
      en: "Inglês",
      es: "Espanhol",
      fr: "Francês",
      de: "Alemão"
    } : {
      pt: "Portuguese",
      en: "English",
      es: "Spanish",
      fr: "French",
      de: "German"
    })[e] || e.toUpperCase();
  }
  toggleTranslate(e) {
    const t = (r) => {
      for (const o of r) {
        if (o.id === e) {
          if (o.isShowingTranslation)
            o.isShowingTranslation = !1;
          else {
            if (!o.translatedBody) {
              const a = {
                1: "Welcome to **ScatterLeaf**! 🍃 This is a native comment rendered directly via Shadow DOM, with zero iframes and Markdown support.",
                "1-1": "@rnt-rez Isso é genial! Ter Shadow DOM nativo deixa a rolagem suave como manteiga, sem nenhum engasgo de iframe.",
                "1-2": "@sarah-eng Exactly! Page scrolling does not suffer from visual jumping caused by iframe resizing.",
                2: "Excelente projeto! O tema Warm Paper (**Cream**) fica fenomenal para ler artigos longos."
              };
              o.translatedBody = a[e] || `[Tradução automática]: ${o.body}`;
            }
            o.isShowingTranslation = !0;
          }
          return !0;
        }
        if (o.replies && t(o.replies))
          return !0;
      }
      return !1;
    };
    t(this._comments), this.render();
  }
  toggleSpeak(e, t, r) {
    if (typeof window > "u" || !("speechSynthesis" in window)) {
      alert(
        this._lang === "pt" ? "Seu navegador não possui suporte à síntese de voz (Web Speech API)." : "Your browser does not support Speech Synthesis (Web Speech API)."
      );
      return;
    }
    if (this._speakingId === e) {
      window.speechSynthesis.cancel(), this._speakingId = null, this.render();
      return;
    }
    window.speechSynthesis.cancel(), this._speakingId = e, this.render();
    const o = t.replace(/[*_`#]/g, "").replace(/https?:\/\/\S+/g, "link"), a = new SpeechSynthesisUtterance(o), i = r && {
      pt: "pt-BR",
      en: "en-US",
      es: "es-ES",
      fr: "fr-FR",
      de: "de-DE",
      it: "it-IT"
    }[r] || r || (this._lang === "pt" ? "pt-BR" : "en-US");
    if (a.lang = i, "speechSynthesis" in window) {
      const b = window.speechSynthesis.getVoices(), c = i.slice(0, 2).toLowerCase(), f = b.find(
        (w) => w.lang.replace("_", "-").toLowerCase().startsWith(c)
      );
      f && (a.voice = f);
    }
    a.rate = 1, a.onend = () => {
      this._speakingId = null, this.render();
    }, a.onerror = () => {
      this._speakingId = null, this.render();
    }, window.speechSynthesis.speak(a);
  }
  render() {
    if (!this.shadowRoot) return;
    const e = this._comments.reduce(
      (a, l) => {
        var i;
        return a + 1 + (((i = l.replies) == null ? void 0 : i.length) || 0);
      },
      0
    ), t = this._lang === "pt" ? "Comentários" : "Comments", r = this.renderComposer(), o = this._isLoading ? `<div style="text-align: center; padding: 2.5rem; color: var(--sl-text-muted);">
           <span style="font-size: 1.5rem; display: block; margin-bottom: 0.5rem; animation: spin 1s infinite linear;">🍃</span>
           ${this._lang === "pt" ? "Carregando notas na brisa..." : "Floating notes in the breeze..."}
         </div>` : this.renderCommentsList();
    this.shadowRoot.innerHTML = `
      <style>${I}</style>
      <div class="sl-container" part="container">
        <header class="sl-header" part="header">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <h3 class="sl-title">
              <span>💬</span>
              <span>${t}</span>
              <span class="sl-badge" part="badge">${e}</span>
            </h3>
            ${this._broker ? `<span class="sl-broker-status" title="${this._isBrokerConnected ? "Conectado ao Cloudflare Edge Broker" : "Broker configurado mas offline (Mock local ativo)"}">
                    <span class="sl-broker-dot ${this._isBrokerConnected ? "" : "sl-broker-standalone"}"></span>
                    <span>${this._isBrokerConnected ? "Broker Borda" : "Mock Local"}</span>
                  </span>` : ""}
          </div>
          <span class="sl-brand-tag" part="brand">
            🍃 <a href="https://github.com/rnt-rez/scatterleaf" target="_blank" rel="noopener noreferrer">ScatterLeaf</a>
          </span>
        </header>

        ${this._inputPosition === "top" ? r : ""}
        ${o}
        ${this._inputPosition === "bottom" ? r : ""}
      </div>
    `, this.attachEvents();
  }
  /**
   * Renderiza a Caixa de Escrita Principal (com Abas Escreva / Prévia, Aa e Autenticação)
   */
  renderComposer() {
    const e = this._activeTab === "write", t = this._fontMode === "monospace", r = this._lang === "pt" ? "Deixe sua reflexão marginal ou comentário..." : "Leave your marginal note or comment...", o = this._lang === "pt" ? "Escreva" : "Write", a = this._lang === "pt" ? "Prévia" : "Preview", l = this._lang === "pt" ? "Nada para pré-visualizar ainda." : "Nothing to preview yet.", i = this._lang === "pt" ? "Entre com GitHub" : "Sign in with GitHub", b = this._lang === "pt" ? "Publicar nota" : "Post note";
    return `
      <div class="sl-composer" part="composer">
        <!-- Barra de Abas e Controle de Tipografia Aa -->
        <div class="sl-composer-tabs">
          <div class="sl-tabs-group" role="tablist">
            <button class="sl-tab ${e ? "sl-tab-active" : ""}" id="tab-write" role="tab" aria-selected="${e}">
              ${o}
            </button>
            <button class="sl-tab ${e ? "" : "sl-tab-active"}" id="tab-preview" role="tab" aria-selected="${!e}">
              ${a}
            </button>
          </div>
          <button class="sl-font-toggle ${t ? "sl-mono-active" : ""}" id="btn-font-toggle" title="Alternar fonte monoespaçada / texto" aria-label="Alternar tipografia">
            <span>Aa</span>
          </button>
        </div>

        <!-- Área de Edição / Prévia -->
        <div class="sl-composer-body">
          ${e ? `<textarea class="sl-textarea ${t ? "sl-monospace" : ""}" id="composer-textarea" placeholder="${r}" part="textarea">${this._composerText}</textarea>` : `<div class="sl-preview-area ${t ? "sl-monospace" : ""}" part="preview-area">
                  ${this._composerText ? this.parseMarkdown(this._composerText) : `<span class="sl-preview-empty">${l}</span>`}
                </div>`}
        </div>

        <!-- Rodapé do Composer (Usuário Autenticado vs Visitante) -->
        <div class="sl-composer-footer">
          ${this._currentUser ? `
            <div class="sl-user-badge">
              <img class="sl-user-avatar" src="${this._currentUser.avatarUrl}" alt="${this._currentUser.login}" />
              <span>@${this._currentUser.login}</span>
              <button class="sl-btn-logout" id="btn-logout" title="Sair da sessão">
                ${this._lang === "pt" ? "Sair" : "Logout"}
              </button>
            </div>
            <div class="sl-composer-actions">
              <button class="sl-btn sl-btn-primary" id="btn-submit" part="submit-btn">
                <span>🍃</span>
                <span>${b}</span>
              </button>
            </div>
          ` : `
            <span style="font-size: 0.75rem; color: var(--sl-text-muted);">
              Markdown suportado
            </span>
            <div class="sl-composer-actions">
              <button class="sl-btn sl-btn-github" id="btn-login-submit" part="submit-btn">
                <svg height="16" width="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                <span>${i}</span>
              </button>
            </div>
          `}
        </div>
      </div>
    `;
  }
  /**
   * Renderiza a Lista Completa com Threads e Respostas Aninhadas
   */
  renderCommentsList() {
    return this._comments.length === 0 ? `
        <div class="sl-empty" part="empty">
          <span class="sl-empty-icon">🍃</span>
          <p>${this._lang === "pt" ? "Nenhum comentário por aqui ainda. Seja o primeiro a semear uma reflexão!" : "No comments here yet. Be the first to scatter an idea!"}</p>
        </div>
      ` : `
      <div class="sl-list" part="list">
        ${this._comments.map((e) => this.renderCommentCard(e)).join("")}
      </div>
    `;
  }
  /**
   * Renderiza um Card de Comentário Individual
   */
  renderCommentCard(e, t = !1) {
    const r = e.author.isAuthor ? `<span class="sl-author-badge" part="author-badge">${this._lang === "pt" ? "Autor" : "Author"}</span>` : "", o = this._speakingId === e.id, a = this._replyingToId === e.id, l = this._editingId === e.id, i = this._openMenuId === e.id, b = o ? this._lang === "pt" ? "⏸️ Pausar" : "⏸️ Pause" : this._lang === "pt" ? "🔊 Ouvir" : "🔊 Listen", c = this._lang === "pt" ? "Responder" : "Reply", f = this.getVisitorLang(), w = e.originalLang || "pt", $ = w !== f, v = this.getLanguageName(w, f), x = e.isShowingTranslation && e.translatedBody ? e.translatedBody : e.body;
    return `
      <article class="sl-card ${t ? "sl-card-reply" : ""}" id="comment-${e.id}" part="card">
        <!-- Cabeçalho do Card (Avatar ancorado no topo!) -->
        <div class="sl-card-header">
          <div class="sl-author-info">
            <a href="${e.author.url}" target="_blank" rel="noopener noreferrer">
              <img class="sl-avatar" src="${e.author.avatarUrl}" alt="${e.author.login}" part="avatar" />
            </a>
            <div class="sl-author-top-row">
              <a class="sl-author-name" href="${e.author.url}" target="_blank" rel="noopener noreferrer" part="author-name">
                ${e.author.login}
              </a>
              ${r}
              <span class="sl-date" part="date">${e.createdAt}</span>
              ${e.isEdited ? `<span class="sl-edited-badge">(${this._lang === "pt" ? "editado" : "edited"})</span>` : ""}
            </div>
          </div>

          <!-- Menu de Contexto In-Place (•••) -->
          <div class="sl-menu-wrapper">
            <button class="sl-menu-btn" data-menu-id="${e.id}" aria-label="Opções do comentário">
              •••
            </button>
            ${i ? `
              <div class="sl-dropdown-menu" part="dropdown-menu">
                <button class="sl-dropdown-item btn-edit" data-comment-id="${e.id}">
                  <span>✏️</span>
                  <span>${this._lang === "pt" ? "Editar" : "Edit"}</span>
                </button>
                <button class="sl-dropdown-item btn-copy-link" data-comment-id="${e.id}">
                  <span>🔗</span>
                  <span>${this._lang === "pt" ? "Copiar link" : "Copy link"}</span>
                </button>
                <button class="sl-dropdown-item sl-dropdown-danger btn-delete" data-comment-id="${e.id}">
                  <span>🗑️</span>
                  <span>${this._lang === "pt" ? "Excluir" : "Delete"}</span>
                </button>
              </div>
            ` : ""}
          </div>
        </div>

        <!-- Corpo do Comentário ou Editor In-Place -->
        ${l ? `
          <div class="sl-edit-mode">
            <textarea class="sl-textarea" id="edit-textarea-${e.id}">${e.body}</textarea>
            <div class="sl-edit-actions">
              <button class="sl-btn sl-btn-secondary btn-cancel-edit" data-comment-id="${e.id}">
                ${this._lang === "pt" ? "Cancelar" : "Cancel"}
              </button>
              <button class="sl-btn sl-btn-primary btn-save-edit" data-comment-id="${e.id}">
                ${this._lang === "pt" ? "Salvar" : "Save"}
              </button>
            </div>
          </div>
        ` : `
          <div class="sl-card-body" part="card-body">
            ${e.bodyHtml || this.parseMarkdown(x)}
          </div>
        `}

        <!-- Rodapé do Card: Reações, Responder e Ações da Direita (Traduzir + Áudio) -->
        <div class="sl-card-footer">
          <div class="sl-actions-left">
            ${e.reactions.map(
      (m) => `
              <button class="sl-reaction-btn ${m.viewerHasReacted ? "sl-reacted" : ""}" data-comment-id="${e.id}" data-emoji="${m.content}" part="reaction-btn">
                <span>${m.content}</span>
                <span>${m.count}</span>
              </button>
            `
    ).join("")}

            ${t ? "" : `
              <button class="sl-reply-btn" data-reply-to="${e.id}" part="reply-btn">
                <span>↩️</span>
                <span>${c}</span>
              </button>
            `}
          </div>

          <div class="sl-actions-right">
            ${$ ? `
              <button class="sl-translate-btn btn-toggle-translate ${e.isShowingTranslation ? "sl-translated" : ""}" data-comment-id="${e.id}" part="translate-btn" title="${e.isShowingTranslation ? this._lang === "pt" ? "Ver original" : "See original" : this._lang === "pt" ? "Traduzir comentário" : "Translate comment"}">
                <span>${e.isShowingTranslation ? "✨" : "🌐"}</span>
                <span>${e.isShowingTranslation ? this._lang === "pt" ? `Traduzido do ${v} • Ver original` : `Translated from ${v} • See original` : this._lang === "pt" ? `Publicado em ${v} • Traduzir` : `Published in ${v} • Translate`}</span>
              </button>
            ` : ""}

            <button class="sl-audio-btn ${o ? "sl-audio-playing" : ""}" data-speak-id="${e.id}" data-text="${encodeURIComponent(x)}" data-lang="${e.isShowingTranslation ? f : w}" part="audio-btn">
              <span>${b}</span>
            </button>
          </div>
        </div>

        <!-- Formulário de Resposta Aninhada Inline -->
        ${a ? `
          <div class="sl-inline-composer">
            <textarea id="reply-textarea-${e.id}" placeholder="Respondendo para @${e.author.login}...">${this._replyText}</textarea>
            <div class="sl-inline-footer">
              <button class="sl-btn sl-btn-secondary btn-cancel-reply" data-comment-id="${e.id}">
                ${this._lang === "pt" ? "Cancelar" : "Cancel"}
              </button>
              <button class="sl-btn sl-btn-primary btn-send-reply" data-comment-id="${e.id}">
                ${this._lang === "pt" ? "Responder" : "Reply"}
              </button>
            </div>
          </div>
        ` : ""}

        <!-- Respostas Aninhadas (Threads Estilo LinkedIn com Linha Guia) -->
        ${!t && e.replies && e.replies.length > 0 ? `
          <div class="sl-thread">
            ${e.replies.map((m) => this.renderCommentCard(m, !0)).join("")}
          </div>
        ` : ""}
      </article>
    `;
  }
  /**
   * Vinculação de Eventos Interativos do Shadow DOM
   */
  attachEvents() {
    if (!this.shadowRoot) return;
    const e = this.shadowRoot.getElementById("tab-write"), t = this.shadowRoot.getElementById("tab-preview"), r = this.shadowRoot.getElementById("composer-textarea");
    r && r.addEventListener("input", () => {
      this._composerText = r.value, r.style.height = "auto", r.style.height = `${r.scrollHeight}px`;
    }), e && e.addEventListener("click", () => {
      this._activeTab = "write", this.render();
    }), t && t.addEventListener("click", () => {
      r && (this._composerText = r.value), this._activeTab = "preview", this.render();
    });
    const o = this.shadowRoot.getElementById("btn-font-toggle");
    o && o.addEventListener("click", () => {
      this._fontMode = this._fontMode === "default" ? "monospace" : "default", this.render();
    });
    const a = this.shadowRoot.getElementById("btn-login-submit");
    a && a.addEventListener("click", () => {
      this.loginWithGitHub();
    });
    const l = this.shadowRoot.getElementById("btn-logout");
    l && l.addEventListener("click", () => {
      this.logout();
    });
    const i = this.shadowRoot.getElementById("btn-submit");
    i && i.addEventListener("click", async () => {
      const h = this._composerText.trim();
      if (!h) {
        alert(
          this._lang === "pt" ? "Por favor, escreva uma reflexão antes de publicar." : "Please write a note before posting."
        );
        return;
      }
      await this.handlePostComment(h);
    }), this.shadowRoot.querySelectorAll(".sl-reaction-btn").forEach((h) => {
      h.addEventListener("click", async (n) => {
        const u = n.currentTarget, s = u.getAttribute("data-comment-id"), p = u.getAttribute("data-emoji");
        s && p && await this.handleToggleReaction(s, p);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reply-btn:not(.btn-toggle-translate)").forEach((h) => {
      h.addEventListener("click", (n) => {
        const s = n.currentTarget.getAttribute("data-reply-to");
        if (!this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        if (this._replyingToId === s)
          this._replyingToId = null;
        else {
          this._replyingToId = s;
          const p = this._comments.find((y) => y.id === s);
          this._replyText = p ? `@${p.author.login} ` : "";
        }
        this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-send-reply").forEach((h) => {
      h.addEventListener("click", async (n) => {
        var k;
        const s = n.currentTarget.getAttribute("data-comment-id"), p = (k = this.shadowRoot) == null ? void 0 : k.getElementById(`reply-textarea-${s}`);
        if (!p) return;
        const y = p.value.trim();
        !y || !s || await this.handlePostReply(s, y);
      });
    }), this.shadowRoot.querySelectorAll(".btn-cancel-reply").forEach((h) => {
      h.addEventListener("click", () => {
        this._replyingToId = null, this._replyText = "", this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-toggle-translate").forEach((h) => {
      h.addEventListener("click", (n) => {
        const s = n.currentTarget.getAttribute("data-comment-id");
        s && this.toggleTranslate(s);
      });
    }), this.shadowRoot.querySelectorAll(".sl-audio-btn").forEach((h) => {
      h.addEventListener("click", (n) => {
        const u = n.currentTarget, s = u.getAttribute("data-speak-id"), p = u.getAttribute("data-text"), y = u.getAttribute("data-lang") || void 0;
        if (s && p) {
          const k = decodeURIComponent(p);
          this.toggleSpeak(s, k, y);
        }
      });
    }), this.shadowRoot.querySelectorAll(".sl-menu-btn").forEach((h) => {
      h.addEventListener("click", (n) => {
        n.stopPropagation();
        const s = n.currentTarget.getAttribute("data-menu-id");
        this._openMenuId = this._openMenuId === s ? null : s, this.render();
      });
    }), this.shadowRoot.addEventListener("click", () => {
      this._openMenuId && (this._openMenuId = null, this.render());
    }), this.shadowRoot.querySelectorAll(".btn-edit").forEach((h) => {
      h.addEventListener("click", (n) => {
        n.stopPropagation();
        const s = n.currentTarget.getAttribute("data-comment-id");
        this._editingId = s, this._openMenuId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-save-edit").forEach((h) => {
      h.addEventListener("click", async (n) => {
        var k;
        const s = n.currentTarget.getAttribute("data-comment-id"), p = (k = this.shadowRoot) == null ? void 0 : k.getElementById(`edit-textarea-${s}`);
        if (!p || !s) return;
        const y = p.value.trim();
        y && await this.handleSaveEdit(s, y);
      });
    }), this.shadowRoot.querySelectorAll(".btn-cancel-edit").forEach((h) => {
      h.addEventListener("click", () => {
        this._editingId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-delete").forEach((h) => {
      h.addEventListener("click", async (n) => {
        n.stopPropagation();
        const s = n.currentTarget.getAttribute("data-comment-id");
        if (!s) return;
        const p = this._lang === "pt" ? "Tem certeza que deseja excluir esta nota?" : "Are you sure you want to delete this note?";
        confirm(p) && await this.handleDelete(s);
      });
    }), this.shadowRoot.querySelectorAll(".btn-copy-link").forEach((h) => {
      h.addEventListener("click", (n) => {
        n.stopPropagation();
        const s = n.currentTarget.getAttribute("data-comment-id"), p = `${window.location.href.split("#")[0]}#comment-${s}`;
        navigator.clipboard.writeText(p).then(() => {
          alert(
            this._lang === "pt" ? "Link copiado para a área de transferência!" : "Link copied to clipboard!"
          );
        }), this._openMenuId = null, this.render();
      });
    });
  }
  /**
   * Operações de Mutação conectadas ao Broker (ou Fallback Mock)
   */
  async handlePostComment(e) {
    const t = this._currentUser || {
      login: "rnt-rez",
      avatarUrl: "https://github.com/rnt-rez.png",
      url: "https://github.com/rnt-rez"
    };
    if (this._brokerClient && this._authToken)
      try {
        if (!this._discussionId && this._repositoryId && this._categoryId) {
          const o = await this._brokerClient.createDiscussion(
            this._repositoryId,
            this._categoryId,
            this.getCurrentTerm()
          );
          this._discussionId = o.id;
        }
        if (this._discussionId) {
          const o = await this._brokerClient.addComment(this._discussionId, e), a = {
            id: o.id,
            author: {
              login: o.author.login,
              avatarUrl: o.author.avatarUrl,
              url: o.author.url,
              isAuthor: !0
            },
            body: o.body,
            bodyHtml: o.bodyHTML,
            createdAt: this._lang === "pt" ? "agora mesmo" : "just now",
            originalLang: this.detectTextLanguage(e),
            reactions: [{ content: "❤️", count: 1, viewerHasReacted: !0 }],
            replies: []
          };
          this._comments.unshift(a), this._composerText = "", this._activeTab = "write", this.render();
          return;
        }
      } catch (o) {
        console.error("Falha ao enviar comentário via broker:", o);
      }
    const r = {
      id: String(Date.now()),
      author: {
        login: t.login,
        avatarUrl: t.avatarUrl,
        url: t.url || `https://github.com/${t.login}`,
        isAuthor: !0
      },
      body: e,
      createdAt: this._lang === "pt" ? "agora mesmo" : "just now",
      originalLang: this.detectTextLanguage(e),
      reactions: [{ content: "❤️", count: 1, viewerHasReacted: !0 }],
      replies: []
    };
    this._comments.unshift(r), this._composerText = "", this._activeTab = "write", this.render(), this.dispatchEvent(
      new CustomEvent("comment-added", {
        detail: r,
        bubbles: !0,
        composed: !0
      })
    );
  }
  async handlePostReply(e, t) {
    const r = this._currentUser || {
      login: "rnt-rez",
      avatarUrl: "https://github.com/rnt-rez.png",
      url: "https://github.com/rnt-rez"
    };
    if (this._brokerClient && this._authToken && this._discussionId)
      try {
        const a = await this._brokerClient.addComment(
          this._discussionId,
          t,
          e
        ), l = this._comments.find((i) => i.id === e);
        if (l) {
          l.replies || (l.replies = []), l.replies.push({
            id: a.id,
            author: {
              login: a.author.login,
              avatarUrl: a.author.avatarUrl,
              url: a.author.url,
              isAuthor: !1
            },
            body: a.body,
            bodyHtml: a.bodyHTML,
            createdAt: this._lang === "pt" ? "agora mesmo" : "just now",
            originalLang: this.detectTextLanguage(t),
            reactions: [{ content: "👍", count: 1, viewerHasReacted: !0 }],
            parentId: e
          }), this._replyingToId = null, this._replyText = "", this.render();
          return;
        }
      } catch (a) {
        console.error("Falha ao enviar réplica via broker:", a);
      }
    const o = this._comments.find((a) => a.id === e);
    if (o) {
      o.replies || (o.replies = []);
      const a = {
        id: `${e}-${Date.now()}`,
        author: {
          login: r.login,
          avatarUrl: r.avatarUrl,
          url: r.url || `https://github.com/${r.login}`,
          isAuthor: !1
        },
        body: t,
        createdAt: this._lang === "pt" ? "agora mesmo" : "just now",
        originalLang: this.detectTextLanguage(t),
        reactions: [{ content: "👍", count: 1, viewerHasReacted: !0 }],
        parentId: e
      };
      o.replies.push(a), this._replyingToId = null, this._replyText = "", this.render(), this.dispatchEvent(
        new CustomEvent("reply-added", {
          detail: a,
          bubbles: !0,
          composed: !0
        })
      );
    }
  }
  async handleSaveEdit(e, t) {
    if (this._brokerClient && this._authToken)
      try {
        await this._brokerClient.updateComment(e, t);
      } catch (r) {
        console.error("Falha ao editar comentário via broker:", r);
      }
    for (const r of this._comments) {
      if (r.id === e) {
        r.body = t, r.isEdited = !0;
        break;
      }
      if (r.replies) {
        const o = r.replies.find((a) => a.id === e);
        if (o) {
          o.body = t, o.isEdited = !0;
          break;
        }
      }
    }
    this._editingId = null, this.render();
  }
  async handleDelete(e) {
    if (this._brokerClient && this._authToken)
      try {
        await this._brokerClient.deleteComment(e);
      } catch (t) {
        console.error("Falha ao excluir comentário via broker:", t);
      }
    this._comments = this._comments.filter((t) => t.id === e ? !1 : (t.replies && (t.replies = t.replies.filter((r) => r.id !== e)), !0)), this._openMenuId = null, this.render();
  }
  async handleToggleReaction(e, t) {
    let r;
    for (const l of this._comments) {
      if (l.id === e) {
        r = l;
        break;
      }
      if (l.replies) {
        const i = l.replies.find((b) => b.id === e);
        if (i) {
          r = i;
          break;
        }
      }
    }
    if (!r) return;
    const o = r.reactions.find((l) => l.content === t);
    if (!o) return;
    const a = o.viewerHasReacted ? "remove" : "add";
    if (this._brokerClient && this._authToken)
      try {
        await this._brokerClient.toggleReaction(e, t, a);
      } catch (l) {
        console.error("Falha ao registrar reação via broker:", l);
      }
    a === "remove" ? (o.count -= 1, o.viewerHasReacted = !1) : (o.count += 1, o.viewerHasReacted = !0), this.render();
  }
}
typeof window < "u" && !customElements.get("scatter-leaf") && customElements.define("scatter-leaf", P);
export {
  P as ScatterLeaf
};
//# sourceMappingURL=scatterleaf.js.map
