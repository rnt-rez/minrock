var re = Object.defineProperty;
var ae = (y, u, e) => u in y ? re(y, u, { enumerable: !0, configurable: !0, writable: !0, value: e }) : y[u] = e;
var m = (y, u, e) => ae(y, typeof u != "symbol" ? u + "" : u, e);
const oe = `
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

button, input, textarea, select {
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
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

.sl-header-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Barra de Ferramentas e Filtro de Comentários (Toolbar - Estilo Minrock com Efeito Neon) */
.sl-toolbar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0.25rem;
  margin-bottom: 1.25rem;
  gap: 0.75rem;
}

.sl-search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 0 0.75rem;
  height: 36px;
  width: 280px;
  max-width: 100%;
  box-sizing: border-box;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
}

.sl-search-wrapper:hover {
  border-color: var(--sl-accent);
  box-shadow: 0 0 8px var(--sl-accent-glow, rgba(146, 64, 14, 0.2));
}

.sl-search-wrapper:focus-within {
  border-color: var(--sl-accent);
  box-shadow: 0 0 0 1px var(--sl-accent), 0 0 14px var(--sl-accent-glow, rgba(146, 64, 14, 0.35)), 0 2px 4px rgba(0, 0, 0, 0.06);
  background: var(--sl-surface);
}

.sl-search-svg {
  flex-shrink: 0;
  color: var(--sl-text-muted);
  transition: color 0.2s ease;
  user-select: none;
}

.sl-search-wrapper:focus-within .sl-search-svg,
.sl-search-wrapper:hover .sl-search-svg {
  color: var(--sl-accent);
}

.sl-search-input {
  width: 100%;
  height: 100%;
  border: none !important;
  outline: none !important;
  -webkit-appearance: none;
  appearance: none;
  box-shadow: none !important;
  background: transparent !important;
  border-radius: 4px;
  color: var(--sl-text);
  font-family: inherit;
  font-size: 0.84rem;
  box-sizing: border-box;
  padding: 0;
}

.sl-search-input:focus,
.sl-search-input:focus-visible {
  outline: none !important;
  box-shadow: none !important;
  border: none !important;
}

.sl-search-input::placeholder {
  color: var(--sl-text-muted);
  opacity: 0.75;
  font-size: 0.84rem;
}

.sl-search-kbd {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 18px;
  height: 18px;
  padding: 0 4px;
  border: 1px solid var(--sl-border);
  border-radius: 4px;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.04));
  color: var(--sl-text-muted);
  font-family: inherit;
  font-size: 0.6875rem;
  font-weight: 500;
  line-height: 1;
  user-select: none;
  pointer-events: none;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.05);
}

.sl-search-clear-btn {
  background: transparent;
  border: none;
  color: var(--sl-text-muted);
  font-size: 0.8125rem;
  cursor: pointer;
  padding: 0.2rem;
  margin-left: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: color 0.15s ease, background 0.15s ease;
  line-height: 1;
}

.sl-search-clear-btn:hover {
  color: var(--sl-text);
  background: var(--sl-card-bg-hover, rgba(0, 0, 0, 0.06));
}

/* Banner de Resultados da Busca */
.sl-search-banner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.03));
  border: 1px solid var(--sl-border);
  border-radius: 8px;
  padding: 0.5rem 0.85rem;
  margin-bottom: 1rem;
  font-size: 0.8rem;
  color: var(--sl-text-muted);
}

.sl-search-banner-clear {
  background: transparent;
  border: none;
  color: var(--sl-accent);
  font-size: 0.8rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  padding: 0;
}

.sl-search-banner-clear:hover {
  color: var(--sl-accent-hover);
}

@media (max-width: 640px) {
  .sl-header {
    flex-wrap: wrap;
    gap: 0.75rem;
  }
  .sl-toolbar {
    width: 100%;
  }
  .sl-search-wrapper {
    width: 100% !important;
  }
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
  position: relative;
  z-index: 20;
}

/* Abas do Composer: Escreva / Prévia e Controle Tipográfico Aa */
.sl-composer-tabs {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.03));
  border-bottom: 1px solid var(--sl-border);
  border-top-left-radius: calc(var(--sl-radius, 10px) - 1px);
  border-top-right-radius: calc(var(--sl-radius, 10px) - 1px);
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

.sl-composer-tabs-actions {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  position: relative;
}

.sl-code-menu-wrapper {
  position: relative;
}

.sl-code-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  font-weight: 700;
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace;
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.sl-code-toggle:hover {
  border-color: var(--sl-border);
  color: var(--sl-text);
  background: var(--sl-surface);
}

.sl-code-toggle.sl-code-toggle-active {
  background: var(--sl-bg);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
}

/* Popover do Seletor de Linguagens */
.sl-code-picker-popover {
  position: absolute;
  top: calc(100% + 6px);
  right: 0;
  width: 250px;
  max-width: 90vw;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 8px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  padding: 0.5rem;
  z-index: 100;
  animation: sl-fade-in 0.15s ease;
}

.sl-code-picker-title {
  font-size: 0.72rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--sl-text-muted);
  padding: 0.2rem 0.4rem 0.4rem;
  border-bottom: 1px solid var(--sl-border);
  margin-bottom: 0.35rem;
}

.sl-code-lang-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.25rem;
  max-height: 210px;
  overflow-y: auto;
}

.sl-code-lang-btn {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  padding: 0.3rem 0.45rem;
  cursor: pointer;
  text-align: left;
  transition: all 0.12s ease;
  width: 100%;
}

.sl-code-lang-btn:hover {
  background: var(--sl-bg);
  border-color: var(--sl-border);
}

.sl-code-lang-name {
  font-size: 0.78rem;
  color: var(--sl-text);
  font-weight: 500;
}

.sl-code-lang-tag {
  font-size: 0.68rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: var(--sl-accent);
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.05));
  padding: 0.1rem 0.3rem;
  border-radius: 4px;
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
  border-bottom-left-radius: calc(var(--sl-radius, 10px) - 1px);
  border-bottom-right-radius: calc(var(--sl-radius, 10px) - 1px);
  position: relative;
}

.sl-composer-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Emoji Picker e Ações Rápidas */
.sl-emoji-wrapper {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.sl-btn-emoji {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  font-size: 1.15rem;
  cursor: pointer;
  color: var(--sl-text);
  line-height: 1;
  transition: all 0.15s ease;
  box-sizing: border-box;
  flex-shrink: 0;
}

.sl-btn-emoji:hover,
.sl-btn-emoji.sl-btn-emoji-active {
  border-color: var(--sl-accent);
  background: var(--sl-card-bg-hover, rgba(255, 255, 255, 0.08));
  transform: scale(1.05);
}

.sl-emoji-popover {
  position: absolute;
  bottom: calc(100% + 12px);
  right: 0;
  width: 320px;
  max-width: calc(100vw - 36px);
  background: var(--sl-surface, var(--sl-bg));
  border: 1px solid var(--sl-border);
  border-radius: 10px;
  box-shadow: 0 16px 36px rgba(0, 0, 0, 0.38), 0 0 0 1px rgba(255, 255, 255, 0.06);
  padding: 0.6rem;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  animation: sl-fade-in 0.15s ease;
}

/* Header com Título e Botões de Navegação (Mobile / Scroll) */
.sl-emoji-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.35rem;
  border-bottom: 1px solid var(--sl-border);
}

.sl-emoji-title {
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--sl-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.sl-emoji-nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.sl-emoji-nav-btn {
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.04));
  border: 1px solid var(--sl-border);
  border-radius: 4px;
  padding: 0.22rem 0.45rem;
  font-size: 0.72rem;
  color: var(--sl-text);
  cursor: pointer;
  line-height: 1;
  transition: all 0.12s ease;
}

.sl-emoji-nav-btn:hover {
  background: var(--sl-accent-subtle, rgba(88, 166, 255, 0.2));
  border-color: var(--sl-accent);
  color: var(--sl-accent);
}

.sl-emoji-close-btn:hover {
  background: rgba(248, 81, 73, 0.15);
  border-color: rgba(248, 81, 73, 0.4);
  color: #f85149;
}

/* Seletor de Tom de Pele (Skin Tone / Estilo WhatsApp / Unicode Fitzpatrick) */
.sl-skin-tone-toggle-btn {
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.04));
  border: 1px solid var(--sl-border);
  border-radius: 4px;
  padding: 0.15rem 0.35rem;
  font-size: 0.88rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: all 0.15s ease;
}

.sl-skin-tone-toggle-btn:hover,
.sl-skin-tone-toggle-btn.sl-tone-active {
  border-color: var(--sl-accent);
  background: var(--sl-accent-subtle, rgba(88, 166, 255, 0.18));
  transform: scale(1.08);
}

.sl-skin-tone-panel {
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.04));
  border: 1px solid var(--sl-accent);
  border-radius: 8px;
  padding: 0.45rem 0.55rem;
  margin-bottom: 0.45rem;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  animation: sl-fade-in 0.12s ease;
}

.sl-skin-tone-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.71rem;
  font-weight: 600;
  color: var(--sl-accent);
}

.sl-skin-tone-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3px;
}

.sl-tone-btn {
  background: var(--sl-surface, var(--sl-bg));
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 0.22rem 0.35rem;
  font-size: 1.25rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  transition: transform 0.1s ease, border-color 0.15s ease, background 0.15s ease;
}

.sl-tone-btn:hover {
  transform: scale(1.22);
  border-color: var(--sl-accent);
  background: var(--sl-accent-subtle, rgba(88, 166, 255, 0.2));
}

.sl-tone-btn.sl-tone-selected {
  border-color: var(--sl-accent);
  background: var(--sl-accent-subtle, rgba(88, 166, 255, 0.25));
  box-shadow: 0 0 0 1px var(--sl-accent);
}

/* Área de Rolagem com Barra Visível (Mouse Wheel / Touchpad / Mobile) */
.sl-emoji-scroll {
  max-height: 195px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 0.35rem;
  scroll-behavior: smooth;
  scrollbar-width: thin;
  scrollbar-color: var(--sl-accent) var(--sl-tab-bg, rgba(0, 0, 0, 0.06));
}

.sl-emoji-scroll::-webkit-scrollbar {
  width: 6px;
}

.sl-emoji-scroll::-webkit-scrollbar-track {
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.06));
  border-radius: 4px;
}

.sl-emoji-scroll::-webkit-scrollbar-thumb {
  background: var(--sl-accent);
  border-radius: 4px;
}

.sl-emoji-category {
  margin-bottom: 0.55rem;
}

.sl-emoji-category:last-child {
  margin-bottom: 0;
}

.sl-emoji-category-title {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--sl-text-muted);
  margin-bottom: 0.25rem;
  display: block;
}

.sl-emoji-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 3px;
}

.sl-emoji-item {
  background: transparent;
  border: none;
  font-size: 1.25rem;
  padding: 0.28rem 0;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.1s ease, background 0.1s ease;
}

.sl-emoji-item:hover {
  background: var(--sl-accent-subtle, rgba(88, 166, 255, 0.18));
  transform: scale(1.22);
}

.sl-emoji-gif-btn {
  width: 100%;
  margin-top: 2px;
  padding: 0.4rem 0.5rem;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.04));
  border: 1px dashed var(--sl-border);
  border-radius: 6px;
  color: var(--sl-text-muted);
  font-size: 0.76rem;
  cursor: pointer;
  text-align: center;
  transition: all 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.35rem;
}

.sl-emoji-gif-btn:hover {
  color: var(--sl-accent);
  border-color: var(--sl-accent);
  background: var(--sl-card-bg-hover, rgba(255, 255, 255, 0.06));
}

/* Botões */
.sl-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  height: 36px;
  padding: 0 0.95rem;
  border-radius: 6px;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  transition: all 0.15s ease;
  border: 1px solid transparent;
  box-sizing: border-box;
  white-space: nowrap;
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
  gap: 0.45rem;
  font-size: 0.8125rem;
  color: var(--sl-text);
  font-weight: 500;
  line-height: 1;
}

.sl-user-avatar {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1px solid var(--sl-border);
  object-fit: cover;
  flex-shrink: 0;
}

.sl-user-name {
  display: inline-flex;
  align-items: center;
  line-height: 1;
  color: var(--sl-text);
  font-weight: 500;
}

.sl-btn-logout {
  background: transparent;
  border: 1px solid transparent;
  color: var(--sl-text-muted);
  font-family: inherit;
  font-size: 0.75rem;
  cursor: pointer;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  transition: all 0.15s ease;
  display: inline-flex;
  align-items: center;
  line-height: 1;
  vertical-align: middle;
}

.sl-btn-logout:hover {
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  border-color: rgba(239, 68, 68, 0.2);
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

.sl-body code,
.sl-card-body code:not(.sl-code-body),
.sl-preview-area code:not(.sl-code-body),
.sl-inline-code {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  padding: 0.12rem 0.4rem;
  border-radius: 4px;
  font-size: 0.85em;
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace;
  color: var(--sl-accent);
}

/* Bloco de Código Técnico Estruturado */
.sl-code-block {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 8px);
  margin: 0.75rem 0;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

.sl-code-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.35rem 0.75rem;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.03));
  border-bottom: 1px solid var(--sl-border);
  font-size: 0.75rem;
}

.sl-code-badge {
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--sl-accent);
  text-transform: lowercase;
  letter-spacing: 0.03em;
}

.sl-code-copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 4px;
  padding: 0.2rem 0.45rem;
  font-size: 0.72rem;
  font-weight: 500;
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-code-copy-btn:hover {
  background: var(--sl-surface);
  border-color: var(--sl-border);
  color: var(--sl-text);
}

.sl-code-copy-btn.sl-copied {
  color: #10b981;
  border-color: rgba(16, 185, 129, 0.3);
  background: rgba(16, 185, 129, 0.08);
}

.sl-code-pre {
  margin: 0 !important;
  padding: 0.75rem 0 !important;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  overflow-x: auto;
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace !important;
  font-size: 0.85rem !important;
  line-height: 1.6 !important;
}

.sl-code-body {
  display: table;
  width: 100%;
  border-collapse: collapse;
}

.sl-code-line {
  display: table-row;
  transition: background 0.1s ease;
}

.sl-code-line:hover {
  background: rgba(125, 125, 125, 0.06);
}

.sl-line-num {
  display: table-cell;
  text-align: right;
  padding: 0 0.85rem 0 0.75rem;
  color: var(--sl-text-muted);
  opacity: 0.55;
  user-select: none;
  -webkit-user-select: none;
  font-size: 0.78rem;
  vertical-align: top;
  border-right: 1px solid var(--sl-border);
  width: 1%;
  white-space: nowrap;
}

.sl-line-code {
  display: table-cell;
  padding-left: 0.85rem;
  padding-right: 0.85rem;
  white-space: pre;
  color: var(--sl-text);
  word-break: normal;
  overflow-wrap: normal;
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

/* Imagens e GIFs Animados Embutidos (Delimitação e Harmonia) */
.sl-card-body img:not(.sl-emoji-inline),
.sl-preview-area img:not(.sl-emoji-inline),
.sl-body img:not(.sl-emoji-inline) {
  max-width: 100%;
  max-height: 280px;
  min-height: 80px;
  height: auto;
  width: auto;
  object-fit: contain;
  border-radius: var(--sl-radius-md, 8px);
  margin: 0.6rem 0;
  display: block;
  box-shadow: var(--sl-shadow-sm, 0 2px 8px rgba(0, 0, 0, 0.15));
  border: 1px solid var(--sl-border);
  background: rgba(0, 0, 0, 0.05);
}

.sl-card-body img.sl-emoji-inline,
.sl-preview-area img.sl-emoji-inline,
.sl-body img.sl-emoji-inline {
  display: inline-block;
  vertical-align: -0.2em;
  height: 1.3em;
  width: auto;
  margin: 0 0.15em;
  box-shadow: none;
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

.sl-reaction-btn.sl-active,
.sl-reaction-btn.sl-reacted {
  background: var(--sl-accent);
  color: var(--sl-accent-contrast, #ffffff);
  border-color: var(--sl-accent);
  font-weight: 600;
}

/* ========================================================
   REATIVIDADE ESTILO LINKEDIN (FLUTUANTE E SUMMARY)
   ======================================================== */
.sl-reaction-container {
  position: relative;
  display: inline-flex;
  align-items: center;
}

.sl-reaction-trigger-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  font-size: 0.8rem;
  font-weight: 500;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.sl-reaction-trigger-btn:hover {
  border-color: var(--sl-accent);
  color: var(--sl-text);
  background: var(--sl-surface);
}

.sl-reaction-trigger-btn.sl-reacted {
  background: var(--sl-mention-bg, rgba(88, 166, 255, 0.14));
  border-color: var(--sl-accent);
  color: var(--sl-accent);
  font-weight: 600;
}

/* Popover Flutuante LinkedIn */
.sl-reaction-popover {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 0;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 9999px;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.28), 0 4px 10px -2px rgba(0, 0, 0, 0.15);
  display: none;
  align-items: center;
  padding: 4px 8px;
  gap: 6px;
  z-index: 60;
  backdrop-filter: blur(8px);
  animation: sl-popover-in 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  white-space: nowrap;
}

@keyframes sl-popover-in {
  from {
    opacity: 0;
    transform: translateY(6px) scale(0.92);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Mostrar ao passar o mouse no container ou se estiver ativo (mobile tap) */
.sl-reaction-container:hover .sl-reaction-popover,
.sl-reaction-container.sl-popover-open .sl-reaction-popover {
  display: flex;
}

/* Área de segurança invisível abaixo do popover para o mouse não perder o hover */
.sl-reaction-popover::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -10px;
  height: 10px;
}

/* Botões do Picker com micro-animação */
.sl-reaction-picker-item {
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.35rem;
  line-height: 1;
  padding: 4px 6px;
  border-radius: 50%;
  position: relative;
  transition: transform 0.15s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.12s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.sl-reaction-picker-item:hover {
  transform: translateY(-5px) scale(1.35);
  background: rgba(125, 125, 125, 0.12);
}

.sl-reaction-picker-item:active {
  transform: scale(0.95);
}

/* Tooltip elegante em cada emoji */
.sl-reaction-picker-item::before {
  content: attr(data-tooltip);
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background: rgba(15, 23, 42, 0.9);
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 2px 7px;
  border-radius: 4px;
  opacity: 0;
  pointer-events: none;
  transition: all 0.15s ease;
  white-space: nowrap;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}

.sl-reaction-picker-item:hover::before {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Resumo e Badges de Reações já recebidas */
.sl-reactions-summary {
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  flex-wrap: wrap;
}

.sl-reaction-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.2rem 0.45rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  user-select: none;
}

.sl-reaction-badge:hover {
  border-color: var(--sl-accent);
  color: var(--sl-text);
  transform: translateY(-1px);
}

.sl-reaction-badge.sl-reacted {
  background: var(--sl-mention-bg, rgba(88, 166, 255, 0.14));
  border-color: var(--sl-accent);
  color: var(--sl-accent);
  font-weight: 600;
}

/* ========================================================
   MODAL DE INSERÇÃO SEGURA DE MÍDIA (ANTI-NSFW / CONTEÚDO ADULTO)
   ======================================================== */
.sl-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  animation: sl-fade-in 0.15s ease-out forwards;
}

.sl-modal-box {
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 12px);
  width: 100%;
  max-width: 480px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.35), 0 8px 10px -6px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  animation: sl-scale-up 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes sl-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes sl-scale-up {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

.sl-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid var(--sl-border);
}

.sl-modal-title {
  font-size: 1rem;
  font-weight: 600;
  color: var(--sl-text);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sl-modal-close-btn {
  background: transparent;
  border: none;
  color: var(--sl-text-muted);
  cursor: pointer;
  font-size: 1.25rem;
  line-height: 1;
  padding: 0.25rem;
  border-radius: 4px;
}

.sl-modal-close-btn:hover {
  color: var(--sl-text);
}

.sl-modal-body {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sl-modal-notice {
  font-size: 0.78rem;
  color: var(--sl-text-muted);
  background: var(--sl-bg);
  border-left: 3px solid #22c55e;
  padding: 0.5rem 0.75rem;
  border-radius: 0 6px 6px 0;
  line-height: 1.4;
}

.sl-modal-input-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.sl-modal-label {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--sl-text);
}

.sl-modal-input {
  width: 100%;
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 0.6rem 0.75rem;
  font-size: 0.85rem;
  color: var(--sl-text);
  outline: none;
  transition: border-color 0.15s ease;
}

.sl-modal-input:focus {
  border-color: var(--sl-accent);
}

.sl-modal-input:disabled,
.sl-modal-input.sl-modal-input-disabled {
  opacity: 0.45;
  cursor: not-allowed;
  background: rgba(125, 125, 125, 0.08);
  border-style: dashed;
}

.sl-modal-label-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.25rem;
}

.sl-tag-exclusive-badge {
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
  background: rgba(125, 125, 125, 0.14);
  color: var(--sl-text-muted);
}

.sl-modal-error {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: #ef4444;
  background: rgba(239, 68, 68, 0.1);
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  border: 1px solid rgba(239, 68, 68, 0.25);
}

.sl-modal-recents {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.sl-modal-recents-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--sl-text-muted);
}

.sl-btn-clear-recents {
  background: transparent;
  border: none;
  font-size: 0.72rem;
  color: var(--sl-text-muted);
  cursor: pointer;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  transition: color 0.15s ease;
}

.sl-btn-clear-recents:hover {
  color: #ef4444;
}

.sl-modal-recents-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.45rem;
}

.sl-recent-gif-item {
  aspect-ratio: 16 / 10;
  border-radius: 6px;
  border: 1px solid var(--sl-border);
  overflow: hidden;
  background: var(--sl-bg);
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.12s ease, border-color 0.12s ease, box-shadow 0.12s ease;
}

.sl-recent-gif-item:hover {
  transform: scale(1.04);
  border-color: var(--sl-accent);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.sl-recent-gif-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Novo Card Moderno de Upload e Drag & Drop */
.sl-modal-dropzone {
  border: 2px dashed var(--sl-border);
  border-radius: 10px;
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--sl-bg);
  text-align: center;
  transition: all 0.2s ease;
  user-select: none;
}

.sl-modal-dropzone:hover {
  border-color: var(--sl-accent);
  background: rgba(56, 189, 248, 0.03);
}

.sl-modal-dropzone.sl-drag-over {
  border-color: var(--sl-accent);
  background: rgba(56, 189, 248, 0.12);
  box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.3);
  transform: scale(1.01);
}

.sl-dropzone-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.45rem;
  width: 100%;
}

.sl-dropzone-icon {
  color: var(--sl-accent);
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.08));
  transition: transform 0.2s ease;
}

.sl-modal-dropzone:hover .sl-dropzone-icon {
  transform: translateY(-2px);
}

.sl-dropzone-title {
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--sl-text);
}

.sl-dropzone-divider {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.72rem;
  font-weight: 600;
  color: var(--sl-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0.15rem 0;
}

.sl-dropzone-divider::before,
.sl-dropzone-divider::after {
  content: '';
  display: block;
  width: 24px;
  height: 1px;
  background: var(--sl-border);
}

.sl-btn-browse {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.45rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-radius: 6px;
  border: 1px solid var(--sl-border);
  background: var(--sl-accent);
  color: #fff;
  cursor: pointer;
  transition: all 0.15s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.sl-btn-browse:hover {
  filter: brightness(1.1);
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

/* Card do Arquivo Selecionado */
.sl-file-selected-card {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  background: rgba(125, 125, 125, 0.06);
  border: 1px solid var(--sl-accent);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.sl-file-card-preview {
  width: 46px;
  height: 46px;
  border-radius: 6px;
  overflow: hidden;
  border: 1px solid var(--sl-border);
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sl-file-card-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sl-file-card-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  min-width: 0;
}

.sl-file-card-name {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--sl-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sl-file-card-meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  color: var(--sl-text-muted);
}

.sl-file-card-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.2rem;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  background: rgba(34, 197, 94, 0.15);
  color: #22c55e;
  font-weight: 600;
  font-size: 0.7rem;
}

.sl-file-size-warning {
  font-size: 0.72rem;
  color: #f59e0b;
  margin-top: 0.2rem;
  line-height: 1.3;
}

.sl-btn-remove-file {
  background: transparent;
  border: 1px solid var(--sl-border);
  color: var(--sl-text-muted);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  transition: all 0.15s ease;
  flex-shrink: 0;
}

.sl-btn-remove-file:hover {
  background: #ef4444;
  border-color: #ef4444;
  color: #fff;
  transform: scale(1.08);
}

/* Card de Prévia da URL */
.sl-url-preview-card {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.45rem 0.65rem;
  border-radius: 6px;
  background: rgba(125, 125, 125, 0.05);
  border: 1px solid var(--sl-border);
  margin-top: 0.35rem;
}

.sl-url-preview-img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  border: 1px solid var(--sl-border);
}

.sl-url-preview-label {
  font-size: 0.75rem;
  color: var(--sl-text-muted);
  font-weight: 500;
}

.sl-modal-preview-box {
  border: 1px dashed var(--sl-border);
  border-radius: 8px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 110px;
  background: var(--sl-bg);
  text-align: center;
  transition: border-color 0.15s ease, background 0.15s ease;
}

.sl-modal-preview-box.sl-drag-over {
  border-color: var(--sl-accent);
  background: rgba(56, 189, 248, 0.1);
  box-shadow: 0 0 0 2px var(--sl-accent-glow, rgba(56, 189, 248, 0.3));
}

.sl-modal-preview-img {
  max-width: 100%;
  max-height: 180px;
  object-fit: contain;
  border-radius: 4px;
}

.sl-modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  border-top: 1px solid var(--sl-border);
  background: var(--sl-bg);
}

.sl-blocked-media-notice {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.3);
  color: #ef4444;
  font-size: 0.78rem;
  font-weight: 500;
  margin: 0.5rem 0;
}

.sl-embedded-img {
  max-width: min(100%, 520px);
  width: auto;
  max-height: 420px;
  object-fit: contain;
  border-radius: 8px;
  display: block;
  margin: 0.6rem 0;
  border: 1px solid var(--sl-border);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.15s ease;
}

.sl-embedded-img:hover {
  border-color: var(--sl-accent);
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

.sl-card-reply,
.sl-reply-card {
  background: var(--sl-bg);
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 8px);
  padding: 0.85rem;
}

.sl-card-reply .sl-avatar,
.sl-reply-card .sl-avatar {
  width: 26px;
  height: 26px;
}

/* Botão de Toggle de Thread (Ver mais respostas / Recolher) */
.sl-thread-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: transparent;
  border: 1px dashed var(--sl-border);
  border-radius: 6px;
  color: var(--sl-text-muted);
  font-family: inherit;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.35rem 0.65rem;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  margin-top: 0.25rem;
  align-self: flex-start;
}

.sl-thread-toggle-btn:hover {
  background: var(--sl-surface);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
  transform: translateY(-1px);
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
   PAGINAÇÃO INTELIGENTE & ROLAGEM SUAVE
   ======================================================== */
.sl-list {
  scrollbar-width: thin;
  scrollbar-color: var(--sl-border) transparent;
}

.sl-list::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

.sl-list::-webkit-scrollbar-track {
  background: transparent;
}

.sl-list::-webkit-scrollbar-thumb {
  background: var(--sl-border);
  border-radius: 9999px;
}

.sl-list::-webkit-scrollbar-thumb:hover {
  background: var(--sl-accent);
}

.sl-pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed var(--sl-border);
}

.sl-pagination-controls {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  flex-wrap: wrap;
  justify-content: center;
}

.sl-page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 0.5rem;
  border-radius: 6px;
  border: 1px solid var(--sl-border);
  background: var(--sl-surface);
  color: var(--sl-text);
  font-family: inherit;
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  user-select: none;
}

.sl-page-btn:hover:not(:disabled) {
  background: var(--sl-bg);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
  transform: translateY(-1px);
}

.sl-page-btn.sl-page-active {
  background: var(--sl-accent);
  border-color: var(--sl-accent);
  color: var(--sl-accent-contrast, #ffffff);
  font-weight: 600;
  box-shadow: 0 2px 8px var(--sl-accent-glow, rgba(0, 0, 0, 0.15));
}

.sl-page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  border-color: var(--sl-border);
  color: var(--sl-text-muted);
}

.sl-page-nav-btn {
  padding: 0 0.65rem;
  font-size: 0.8rem;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.sl-pagination-info {
  font-size: 0.78rem;
  color: var(--sl-text-muted);
  user-select: none;
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
class se {
  constructor(u, e) {
    m(this, "baseUrl");
    m(this, "getToken");
    this.baseUrl = u.replace(/\/+$/, ""), this.getToken = e;
  }
  getAuthHeaders() {
    const u = this.getToken(), e = {
      "Content-Type": "application/json"
    };
    return u && (e.Authorization = `Bearer ${u}`), e;
  }
  /**
   * Auto-Discovery de IDs do repositório e categoria no GitHub
   */
  async discover(u, e = "General") {
    const t = await fetch(
      `${this.baseUrl}/api/discovery?repo=${encodeURIComponent(u)}&category=${encodeURIComponent(e)}`
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
  async fetchDiscussions(u, e) {
    const r = this.getToken() ? `&_t=${Date.now()}` : "", o = await fetch(
      `${this.baseUrl}/api/discussions?repo=${encodeURIComponent(u)}&term=${encodeURIComponent(e)}${r}`,
      {
        headers: this.getAuthHeaders()
      }
    );
    if (!o.ok) {
      const a = await o.json().catch(() => ({}));
      throw new Error(a.error || `Falha ao carregar discussões: HTTP ${o.status}`);
    }
    return await o.json();
  }
  /**
   * Troca segura de código OAuth por token de acesso
   */
  async exchangeOAuthCode(u, e) {
    const t = await fetch(`${this.baseUrl}/api/oauth/access_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: u, redirect_uri: e })
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
  async fetchGitHubUserProfile(u) {
    const e = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${u}`,
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
  async createDiscussion(u, e, t, r) {
    const o = await fetch(`${this.baseUrl}/api/discussions`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ repositoryId: u, categoryId: e, title: t, body: r })
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
  async addComment(u, e, t) {
    const r = await fetch(`${this.baseUrl}/api/comments`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ discussionId: u, body: e, replyToId: t })
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
  async updateComment(u, e) {
    const t = await fetch(`${this.baseUrl}/api/comments`, {
      method: "PATCH",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ commentId: u, body: e })
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
  async deleteComment(u) {
    const e = await fetch(`${this.baseUrl}/api/comments?id=${encodeURIComponent(u)}`, {
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
  async toggleReaction(u, e, t) {
    const o = {
      "👍": "THUMBS_UP",
      "❤️": "HEART",
      "🚀": "ROCKET",
      "🎉": "HOORAY",
      "😄": "LAUGH",
      "👀": "EYES",
      "👎": "THUMBS_DOWN",
      "😕": "CONFUSED",
      // Aliases retrocompatíveis
      "👏": "HOORAY",
      "💡": "ROCKET",
      "🧙‍♂️": "THUMBS_UP",
      "🧙‍♀️": "THUMBS_UP",
      "🧙": "THUMBS_UP"
    }[e] || e, a = await fetch(`${this.baseUrl}/api/reactions`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ subjectId: u, content: o, action: t })
    });
    if (!a.ok) {
      const i = await a.json().catch(() => ({}));
      throw new Error(i.error || `Erro ao atualizar reação: HTTP ${a.status}`);
    }
    return await a.json();
  }
}
const X = "scatterleaf_skin_tone", ne = [
  { id: "default", namePt: "Padrão (Amarelo)", nameEn: "Default (Yellow)", modifier: "", swatch: "🟡" },
  { id: "light", namePt: "Tom Claro", nameEn: "Light Skin Tone", modifier: "🏻", swatch: "🏻" },
  { id: "medium-light", namePt: "Tom Médio-Claro", nameEn: "Medium-Light Skin Tone", modifier: "🏼", swatch: "🏼" },
  { id: "medium", namePt: "Tom Médio", nameEn: "Medium Skin Tone", modifier: "🏽", swatch: "🏽" },
  { id: "medium-dark", namePt: "Tom Médio-Escuro", nameEn: "Medium-Dark Skin Tone", modifier: "🏾", swatch: "🏾" },
  { id: "dark", namePt: "Tom Escuro", nameEn: "Dark Skin Tone", modifier: "🏿", swatch: "🏿" }
], ie = /* @__PURE__ */ new Set([
  "👍",
  "👎",
  "👏",
  "🙌",
  "👐",
  "🤝",
  "🙏",
  "✌️",
  "🤘",
  "🤙",
  "👊",
  "✊",
  "🤛",
  "🤜",
  "🤞",
  "🫶",
  "👋",
  "🖐️",
  "✋",
  "🖖",
  "💪",
  "✍️",
  "💅",
  "🤳",
  "👂",
  "👃",
  "👶",
  "🧒",
  "👦",
  "👧",
  "🧑",
  "👨",
  "👩",
  "🧓",
  "👴",
  "👵",
  "🧙",
  "🧙‍♂️",
  "🧙‍♀️"
]);
function W(y, u) {
  if (!u || u === "default") return y;
  if (y.includes("‍")) {
    const t = y.split("‍");
    return `${t[0].replace(/[\u{1F3FB}-\u{1F3FF}]/gu, "").replace(/\uFE0F/g, "")}${u}‍${t.slice(1).join("‍")}`;
  }
  return y.replace(/[\u{1F3FB}-\u{1F3FF}]/gu, "").replace(/\uFE0F/g, "") + u;
}
const le = [
  { symbol: "👍", namePt: "Gostei", nameEn: "Like" },
  { symbol: "❤️", namePt: "Amei", nameEn: "Love" },
  { symbol: "🚀", namePt: "Sensacional", nameEn: "Rocket" },
  { symbol: "🎉", namePt: "Parabéns", nameEn: "Celebrate" },
  { symbol: "😄", namePt: "Divertido", nameEn: "Laugh" },
  { symbol: "👀", namePt: "De olho", nameEn: "Eyes" }
], ce = [
  { id: "typescript", name: "TypeScript" },
  { id: "javascript", name: "JavaScript" },
  { id: "python", name: "Python" },
  { id: "bash", name: "Bash / Shell" },
  { id: "html", name: "HTML" },
  { id: "css", name: "CSS" },
  { id: "json", name: "JSON" },
  { id: "sql", name: "SQL" },
  { id: "rust", name: "Rust" },
  { id: "go", name: "Go" }
], Q = "scatterleaf_recent_gifs";
function ee() {
  try {
    const y = localStorage.getItem(Q);
    return y ? JSON.parse(y) : [];
  } catch {
    return [];
  }
}
function de(y, u) {
  try {
    const e = ee().filter((t) => t.url !== y);
    e.unshift({ url: y, alt: u || "", timestamp: Date.now() }), localStorage.setItem(Q, JSON.stringify(e.slice(0, 8)));
  } catch {
  }
}
function pe() {
  try {
    localStorage.removeItem(Q);
  } catch {
  }
}
const ue = [
  "pornhub.com",
  "xvideos.com",
  "xnxx.com",
  "redtube.com",
  "youporn.com",
  "chaturbate.com",
  "onlyfans.com",
  "fansly.com",
  "rule34.xxx",
  "gelbooru.com",
  "danbooru.donmai.us",
  "e621.net",
  "hentaihaven.xxx",
  "xhamster.com",
  "tube8.com",
  "beeg.com",
  "spankbang.com",
  "brazzers.com",
  "bangbros.com",
  "fetlife.com",
  "cam4.com",
  "stripchat.com",
  "livejasmin.com",
  "erome.com",
  "heavy-r.com",
  "bestgore.fun",
  "kaotic.com",
  "motherless.com"
], te = [
  "porn",
  "xxx",
  "hentai",
  "nsfw",
  "nude",
  "naked",
  "erotic",
  "boobs",
  "pussy",
  "dick",
  "cock",
  "vagina",
  "hardcore",
  "anal",
  "blowjob",
  "creampie",
  "milf",
  "bdsm",
  "fetish",
  "gore",
  "onlyfans",
  "escort",
  "sex"
];
function K(y) {
  if (!y || typeof y != "string")
    return { safe: !1, reason: "URL inválida ou ausente." };
  const u = y.trim();
  if (u.startsWith("data:image/gif;base64,") || u.startsWith("data:image/"))
    return { safe: !0 };
  if (!u.startsWith("https://"))
    return {
      safe: !1,
      reason: "Por segurança e privacidade, apenas links seguros (HTTPS) são permitidos."
    };
  let e;
  try {
    e = new URL(u);
  } catch {
    return { safe: !1, reason: "Formato de URL inválido." };
  }
  const t = e.hostname.toLowerCase(), r = e.pathname.toLowerCase(), o = e.search.toLowerCase(), a = t + r + o;
  for (const i of ue)
    if (t === i || t.endsWith("." + i))
      return {
        safe: !1,
        reason: "Domínio bloqueado pelo filtro de conteúdo sensível / adulto."
      };
  for (const i of te)
    if (new RegExp(`(^|[-_/.?&=])${i}([-_/.?&=]|$)`, "i").test(a))
      return {
        safe: !1,
        reason: "O link contém termos classificados como potencialmente sensíveis ou adultos."
      };
  return { safe: !0 };
}
async function he(y) {
  try {
    const e = await y.slice(0, 16).arrayBuffer(), t = new Uint8Array(e);
    if (t.length < 4) return { valid: !1 };
    if (t.length >= 6) {
      const r = String.fromCharCode(...t.slice(0, 6));
      if (r === "GIF87a" || r === "GIF89a")
        return { valid: !0, format: "gif" };
    }
    if (t.length >= 8 && t[0] === 137 && t[1] === 80 && t[2] === 78 && t[3] === 71 && t[4] === 13 && t[5] === 10 && t[6] === 26 && t[7] === 10)
      return { valid: !0, format: "png" };
    if (t[0] === 255 && t[1] === 216 && t[2] === 255)
      return { valid: !0, format: "jpeg" };
    if (t.length >= 12) {
      const r = String.fromCharCode(...t.slice(0, 4)), o = String.fromCharCode(...t.slice(8, 12));
      if (r === "RIFF" && o === "WEBP")
        return { valid: !0, format: "webp" };
    }
    return { valid: !1 };
  } catch {
    return { valid: !1 };
  }
}
async function me(y, u = !0) {
  if (!y)
    return { safe: !1, reason: u ? "Nenhum arquivo fornecido." : "No file provided." };
  const e = 3 * 1024 * 1024;
  if (y.size > e)
    return {
      safe: !1,
      reason: u ? "Arquivo excede o limite máximo permitido de 3 MB." : "File exceeds maximum allowed size of 3 MB."
    };
  const t = y.name.toLowerCase();
  for (const o of te)
    if (new RegExp(`(^|[-_/.?&=])${o}([-_/.?&=]|$)`, "i").test(t))
      return {
        safe: !1,
        reason: u ? "O nome do arquivo contém termos classificados como potencialmente sensíveis ou adultos." : "File name contains terms classified as potentially sensitive or adult content."
      };
  const r = await he(y);
  return !r.valid || !r.format ? {
    safe: !1,
    reason: u ? "Cabeçalho binário inválido. O arquivo não é uma imagem legítima (.gif, .webp, .png, .jpg)." : "Invalid binary header. File is not a legitimate image (.gif, .webp, .png, .jpg)."
  } : { safe: !0, format: r.format };
}
async function ge(y, u, e = 520, t = 0.82) {
  return u === "gif" ? new Promise((r, o) => {
    const a = new FileReader();
    a.onload = () => {
      const i = a.result, n = new Image();
      n.onload = () => {
        r({
          dataUrl: i,
          width: n.naturalWidth || 480,
          height: n.naturalHeight || 320,
          originalSize: y.size,
          compressedSize: y.size,
          wasCompressed: !1
        });
      }, n.onerror = () => {
        r({
          dataUrl: i,
          width: 480,
          height: 320,
          originalSize: y.size,
          compressedSize: y.size,
          wasCompressed: !1
        });
      }, n.src = i;
    }, a.onerror = o, a.readAsDataURL(y);
  }) : new Promise((r, o) => {
    const a = new FileReader();
    a.onload = () => {
      const i = a.result, n = new Image();
      n.onload = () => {
        let l = n.naturalWidth || n.width, s = n.naturalHeight || n.height;
        (l > e || s > e) && (l >= s ? (s = Math.round(s * e / l), l = e) : (l = Math.round(l * e / s), s = e));
        const c = document.createElement("canvas");
        c.width = l, c.height = s;
        const b = c.getContext("2d");
        if (!b) {
          r({
            dataUrl: i,
            width: l,
            height: s,
            originalSize: y.size,
            compressedSize: y.size,
            wasCompressed: !1
          });
          return;
        }
        b.drawImage(n, 0, 0, l, s);
        let g = c.toDataURL("image/webp", t);
        g.startsWith("data:image/webp") || (g = c.toDataURL("image/jpeg", t));
        const w = g.indexOf(","), v = w >= 0 ? g.slice(w + 1) : g, k = Math.round(v.length * 0.75);
        r({
          dataUrl: g,
          width: l,
          height: s,
          originalSize: y.size,
          compressedSize: k,
          wasCompressed: !0
        });
      }, n.onerror = o, n.src = i;
    }, a.onerror = o, a.readAsDataURL(y);
  });
}
class be extends HTMLElement {
  constructor() {
    super();
    m(this, "_repo", "");
    m(this, "_category", "General");
    m(this, "_theme", "cream");
    m(this, "_lang", "pt");
    m(this, "_inputPosition", "top");
    m(this, "_broker", "");
    m(this, "_clientId", "Iv23liZHApvnx6e6wtMJ");
    m(this, "_pageSize", 10);
    m(this, "_currentPage", 1);
    m(this, "_comments", []);
    m(this, "_isLoading", !1);
    m(this, "_isBrokerConnected", !1);
    // Sessão de Autenticação
    m(this, "_currentUser", null);
    m(this, "_authToken", null);
    m(this, "_brokerClient", null);
    m(this, "_discussionId", null);
    m(this, "_repositoryId", null);
    m(this, "_categoryId", null);
    // Estados de Interface do Editor e Interações
    m(this, "_activeTab", "write");
    m(this, "_fontMode", "default");
    m(this, "_composerText", "");
    m(this, "_replyingToId", null);
    m(this, "_replyText", "");
    m(this, "_expandedThreads", /* @__PURE__ */ new Set());
    m(this, "_searchQuery", "");
    m(this, "_editingId", null);
    m(this, "_openMenuId", null);
    m(this, "_speakingId", null);
    m(this, "_isEmojiPickerOpen", !1);
    m(this, "_isCodePickerOpen", !1);
    m(this, "_savedComposerSelection", null);
    m(this, "_isTranslatingId", null);
    m(this, "_selectedSkinTone", null);
    m(this, "_isSkinTonePanelOpen", !1);
    m(this, "_activeTonePickerEmoji", null);
    m(this, "_themeObserver", null);
    // Modal de Inserção de Mídia Segura (Anti-NSFW)
    m(this, "_isMediaModalOpen", !1);
    m(this, "_mediaModalUrl", "");
    m(this, "_mediaModalAlt", "");
    // Fechamento de menus ao clicar fora do componente no document ou tecla Escape
    m(this, "_handleDocumentClick", (e) => {
      let t = !1;
      const r = e.composedPath();
      this._openMenuId && (r.some(
        (a) => {
          var i;
          return a instanceof HTMLElement && ((i = a.classList) == null ? void 0 : i.contains("sl-menu-wrapper"));
        }
      ) || (this._openMenuId = null, t = !0)), this._isCodePickerOpen && (r.some(
        (a) => {
          var i, n;
          return a instanceof HTMLElement && (((i = a.classList) == null ? void 0 : i.contains("sl-code-menu-wrapper")) || ((n = a.classList) == null ? void 0 : n.contains("sl-code-picker-popover")));
        }
      ) || (this._isCodePickerOpen = !1, t = !0)), this._isEmojiPickerOpen && (r.some(
        (a) => {
          var i, n;
          return a instanceof HTMLElement && (((i = a.classList) == null ? void 0 : i.contains("sl-emoji-wrapper")) || ((n = a.classList) == null ? void 0 : n.contains("sl-emoji-popover")));
        }
      ) || (this._isEmojiPickerOpen = !1, t = !0)), t && this.render();
    });
    m(this, "_handleDocumentKeydown", (e) => {
      var t;
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const r = document.activeElement;
        if (!(r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || (r == null ? void 0 : r.isContentEditable))) {
          const a = (t = this.shadowRoot) == null ? void 0 : t.getElementById("sl-search-input");
          a && (e.preventDefault(), a.focus());
        }
      }
      if (e.key === "Escape") {
        let r = !1;
        this._openMenuId && (this._openMenuId = null, r = !0), this._isCodePickerOpen && (this._isCodePickerOpen = !1, r = !0), this._isEmojiPickerOpen && (this._isEmojiPickerOpen = !1, r = !0), this._searchQuery && (this._searchQuery = "", this._currentPage = 1, r = !0), r && this.render();
      }
    });
    m(this, "_mediaModalError", null);
    m(this, "_mediaModalFile", null);
    m(this, "_mediaModalFileDataUrl", null);
    m(this, "_mediaModalWasCompressed", !1);
    m(this, "_mediaModalCompressedSize", 0);
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
      "client-id",
      "page-size"
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
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(e) {
    this.setAttribute("page-size", String(e));
  }
  get currentPage() {
    return this._currentPage;
  }
  set currentPage(e) {
    this._currentPage = e, this.render();
  }
  get isLoading() {
    return this._isLoading;
  }
  set isLoading(e) {
    this._isLoading = e, this.render();
  }
  connectedCallback() {
    this.syncAttributes(), this.initSkinTonePreference(), this.initAuthSession(), this.setupOAuthListener(), this.checkUrlForOAuthCode(), document.addEventListener("click", this._handleDocumentClick), document.addEventListener("keydown", this._handleDocumentKeydown), this._theme === "auto" && (this.detectAndApplyAutoPalette(), this.setupAutoThemeObserver()), this.loadComments(), this.render();
  }
  disconnectedCallback() {
    document.removeEventListener("click", this._handleDocumentClick), document.removeEventListener("keydown", this._handleDocumentKeydown), this._themeObserver && (this._themeObserver.disconnect(), this._themeObserver = null);
  }
  attributeChangedCallback(e, t, r) {
    if (t !== r) {
      if (e === "theme" && r)
        this._theme = r, this._theme === "auto" ? (this.detectAndApplyAutoPalette(), this.setupAutoThemeObserver()) : (this._themeObserver && (this._themeObserver.disconnect(), this._themeObserver = null), this.clearAutoPaletteProperties());
      else if (e === "repo" && r)
        this._repo = r, this.loadComments();
      else if (e === "category" && r)
        this._category = r, this.loadComments();
      else if (e === "lang" && r)
        this._lang = r;
      else if (e === "broker" && r)
        this._broker = r, this.initBrokerClient(), this.loadComments();
      else if (e === "client-id" && r)
        this._clientId = r;
      else if (e === "input-position" && (r === "top" || r === "bottom"))
        this._inputPosition = r;
      else if (e === "page-size" && r) {
        const o = parseInt(r, 10);
        this._pageSize = !isNaN(o) && o > 0 ? o : 10, this._currentPage = 1;
      }
      this.render();
    }
  }
  syncAttributes() {
    this._repo = this.getAttribute("repo") || "", this._category = this.getAttribute("category") || "General", this._theme = this.getAttribute("theme") || "cream", this._lang = this.getAttribute("lang") || "auto", this._broker = this.getAttribute("broker") || "", this._clientId = this.getAttribute("client-id") || "Iv23liZHApvnx6e6wtMJ";
    const e = this.getAttribute("input-position");
    (e === "top" || e === "bottom") && (this._inputPosition = e);
    const t = this.getAttribute("page-size");
    if (t) {
      const r = parseInt(t, 10);
      !isNaN(r) && r > 0 && (this._pageSize = r);
    }
    this.hasAttribute("theme") || this.setAttribute("theme", this._theme), this.initBrokerClient();
  }
  /**
   * Inicializa e persiste o tom de pele padrão escolhido pelo usuário no navegador (localStorage)
   */
  initSkinTonePreference() {
    if (!(typeof window > "u"))
      try {
        const e = localStorage.getItem(X);
        e !== null && (this._selectedSkinTone = e);
      } catch (e) {
        console.warn("🍃 [ScatterLeaf] localStorage inacessível para skin tones:", e);
      }
  }
  saveSkinTonePreference(e) {
    if (this._selectedSkinTone = e, typeof window < "u")
      try {
        localStorage.setItem(X, e);
      } catch (t) {
        console.warn("🍃 [ScatterLeaf] Erro ao salvar skin tone em localStorage:", t);
      }
  }
  /**
   * Resolve o idioma efetivo: se lang="auto", detecta automaticamente do navegador/sistema do usuário
   */
  get currentLang() {
    if (this._lang && this._lang !== "auto")
      return this._lang.toLowerCase();
    if (typeof navigator < "u" && navigator.language) {
      const e = navigator.language.toLowerCase();
      if (e.startsWith("pt")) return "pt";
      if (e.startsWith("es")) return "es";
    }
    return "en";
  }
  /**
   * Identifica a paleta de cores do site hospedeiro (body/container/CSS vars) e replica harmoniosamente
   */
  detectAndApplyAutoPalette() {
    if (!(typeof window > "u"))
      try {
        const e = ($) => {
          if (!$ || $ === "transparent" || $ === "rgba(0, 0, 0, 0)")
            return null;
          if ($.startsWith("#")) {
            let C = $.slice(1);
            if ((C.length === 3 || C.length === 4) && (C = C.split("").map((E) => E + E).join("")), C.length >= 6)
              return {
                r: parseInt(C.substring(0, 2), 16),
                g: parseInt(C.substring(2, 4), 16),
                b: parseInt(C.substring(4, 6), 16)
              };
          }
          const M = $.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
          return M ? {
            r: parseInt(M[1], 10),
            g: parseInt(M[2], 10),
            b: parseInt(M[3], 10)
          } : null;
        }, t = window.getComputedStyle(document.documentElement), r = window.getComputedStyle(document.body), o = this.parentElement || document.body, a = window.getComputedStyle(o), i = ($) => {
          for (const M of $) {
            const C = a.getPropertyValue(M).trim() || r.getPropertyValue(M).trim() || t.getPropertyValue(M).trim();
            if (C) {
              const E = e(C);
              if (E) return E;
            }
          }
          return null;
        };
        let n = i([
          "--sl-bg",
          "--page-bg",
          "--color-bg",
          "--background",
          "--color-background",
          "--bg-color",
          "--body-bg",
          "--bg"
        ]);
        if (!n) {
          let $ = this;
          for (; $; ) {
            const M = window.getComputedStyle($).backgroundColor, C = e(M);
            if (C) {
              n = C;
              break;
            }
            $ = $.parentElement;
          }
        }
        n || (n = e(r.backgroundColor) || e(t.backgroundColor) || { r: 255, g: 255, b: 255 });
        let l = i([
          "--sl-text",
          "--page-text",
          "--color-text",
          "--text-color",
          "--color-foreground",
          "--foreground",
          "--text"
        ]);
        if (!l) {
          let $ = this;
          for (; $; ) {
            const M = window.getComputedStyle($).color, C = e(M);
            if (C) {
              l = C;
              break;
            }
            $ = $.parentElement;
          }
        }
        let s = i([
          "--sl-accent",
          "--page-accent",
          "--color-accent",
          "--color-primary",
          "--primary",
          "--accent",
          "--brand"
        ]);
        if (!s) {
          const $ = document.querySelector("a");
          $ && (s = e(window.getComputedStyle($).color));
        }
        const c = document.documentElement.classList.contains("dark") || document.body.classList.contains("dark") || document.documentElement.getAttribute("data-theme") === "dark" || document.body.getAttribute("data-theme") === "dark" || document.body.getAttribute("data-page-theme") === "midnight" || document.body.getAttribute("data-page-theme") === "slate" || document.body.getAttribute("data-page-theme") === "terminal", b = 0.2126 * n.r + 0.7152 * n.g + 0.0722 * n.b, g = c || b < 128;
        l || (l = g ? { r: 230, g: 237, b: 243 } : { r: 28, g: 25, b: 23 }), s || (s = g ? { r: 88, g: 166, b: 255 } : { r: 146, g: 64, b: 14 });
        let w, v, k, _, T, z, A;
        if (g) {
          const $ = Math.min(255, Math.round(n.r + 15)), M = Math.min(255, Math.round(n.g + 18)), C = Math.min(255, Math.round(n.b + 22));
          w = `rgb(${$}, ${M}, ${C})`, v = "rgba(0, 0, 0, 0.35)", k = "rgba(255, 255, 255, 0.12)", _ = `rgba(${l.r}, ${l.g}, ${l.b}, 0.62)`, T = `rgb(${Math.min(255, s.r + 30)}, ${Math.min(255, s.g + 30)}, ${Math.min(255, s.b + 30)})`, z = `rgba(${s.r}, ${s.g}, ${s.b}, 0.16)`, A = `rgba(${s.r}, ${s.g}, ${s.b}, 0.35)`;
        } else
          w = "rgba(255, 255, 255, 0.96)", v = "rgba(0, 0, 0, 0.035)", k = "rgba(0, 0, 0, 0.12)", _ = `rgba(${l.r}, ${l.g}, ${l.b}, 0.65)`, T = `rgb(${s.r}, ${s.g}, ${s.b})`, z = `rgba(${s.r}, ${s.g}, ${s.b}, 0.12)`, A = `rgba(${s.r}, ${s.g}, ${s.b}, 0.28)`;
        const j = `rgb(${s.r}, ${s.g}, ${s.b})`;
        this.style.setProperty("--sl-bg", `rgb(${n.r}, ${n.g}, ${n.b})`), this.style.setProperty("--sl-surface", w), this.style.setProperty("--sl-tab-bg", v), this.style.setProperty("--sl-border", k), this.style.setProperty("--sl-text", `rgb(${l.r}, ${l.g}, ${l.b})`), this.style.setProperty("--sl-text-muted", _), this.style.setProperty("--sl-accent", j), this.style.setProperty("--sl-accent-hover", j), this.style.setProperty("--sl-mention-color", T), this.style.setProperty("--sl-mention-bg", z), this.style.setProperty("--sl-mention-border", A);
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
    this._broker ? this._brokerClient = new se(this._broker, () => this._authToken) : (this._brokerClient = null, this._isBrokerConnected = !1);
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
      this._authToken = r, this._currentUser = o, sessionStorage.setItem("scatterleaf_token", r), sessionStorage.setItem("scatterleaf_user", JSON.stringify(o)), await this.loadComments(), this._isLoading = !1, this.render(), this.dispatchEvent(
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
        this.currentLang === "pt" ? `🍃 ScatterLeaf Playground:
Nenhum "client-id" do GitHub OAuth configurado ainda.
Deseja simular um login local de teste (@rnt-rez)?` : `🍃 ScatterLeaf Playground:
No "client-id" configured yet.
Do you want to simulate a local test login (@rnt-rez)?`
      )) {
        const s = {
          login: "rnt-rez",
          avatarUrl: "https://github.com/rnt-rez.png",
          name: "Renato Rezende",
          url: "https://github.com/rnt-rez"
        };
        this._currentUser = s, this._authToken = "mock_token_local", sessionStorage.setItem("scatterleaf_token", this._authToken), sessionStorage.setItem("scatterleaf_user", JSON.stringify(s)), this.render();
      }
      return;
    }
    const e = encodeURIComponent(window.location.origin + window.location.pathname), t = encodeURIComponent("read:user"), r = `https://github.com/login/oauth/authorize?client_id=${this._clientId}&scope=${t}&redirect_uri=${e}`, o = 600, a = 700, i = window.screen.width / 2 - o / 2, n = window.screen.height / 2 - a / 2;
    window.open(
      r,
      "scatterleaf-oauth-popup",
      `width=${o},height=${a},top=${n},left=${i},scrollbars=yes,status=yes`
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
          replies: (a.replies || []).map((i) => ({
            ...i,
            originalLang: i.originalLang || this.detectTextLanguage(i.body)
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
    const e = this.currentLang, t = e === "pt", r = e === "es", o = this.getCurrentTerm().toLowerCase();
    if (o.includes("obsidian")) {
      this._comments = [
        {
          id: "obs-1",
          author: {
            login: "rnt-rez",
            avatarUrl: "https://github.com/rnt-rez.png",
            url: "https://github.com/rnt-rez",
            isAuthor: !0
          },
          body: t ? "Bem-vindo à discussão do guia de conexão do **Obsidian Vault** com o Minrock! 🍃 Se você tiver dúvidas sobre os passos do assistente do Vault CMS ou sobre o formato Page Bundle, deixe uma mensagem aqui." : r ? "¡Bienvenido a la discusión de la guía de conexión de **Obsidian Vault** con Minrock! 🍃 Si tienes dudas sobre los pasos del asistente de Vault CMS o el formato Page Bundle, deja un mensaje aquí." : "Welcome to the **Obsidian Vault** + Minrock integration discussion! 🍃 If you have questions about the Vault CMS wizard steps or the Page Bundle format, leave a message below.",
          createdAt: t ? "há 15 minutos" : r ? "hace 15 minutos" : "15 minutes ago",
          originalLang: t ? "pt" : r ? "es" : "en",
          reactions: [
            { content: "👍", count: 5, viewerHasReacted: !0 },
            { content: "🚀", count: 3, viewerHasReacted: !1 }
          ],
          replies: [
            {
              id: "obs-1-1",
              author: {
                login: "alex-notes",
                avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
                url: "https://github.com",
                isAuthor: !1
              },
              body: t ? "@rnt-rez A calibração do modo de criação como pasta (`folder`) e `index.md` foi essencial. Agora ao colar um print com `Ctrl+V`, a imagem fica junto com o post sem espalhar arquivos soltos na raiz!" : "@rnt-rez Setting file organization to `folder` and `index.md` was key. Now when pasting screenshots via `Ctrl+V`, images stay co-located with the post instead of scattering across the root!",
              createdAt: t ? "há 10 minutos" : "10 minutes ago",
              originalLang: t ? "pt" : "en",
              reactions: [{ content: "❤️", count: 3, viewerHasReacted: !0 }],
              parentId: "obs-1"
            },
            {
              id: "obs-1-2",
              author: {
                login: "rnt-rez",
                avatarUrl: "https://github.com/rnt-rez.png",
                url: "https://github.com/rnt-rez",
                isAuthor: !0
              },
              body: t ? "@alex-notes Exatamente! O padrão de Page Bundle deixa o cofre 100% autocontido e portátil. Se deletar a pasta do post, as imagens vão embora juntas." : "@alex-notes Exactly! The Page Bundle pattern keeps your vault 100% self-contained and portable. If you ever delete the post folder, its assets are removed cleanly.",
              createdAt: t ? "há 4 minutos" : "4 minutes ago",
              originalLang: t ? "pt" : "en",
              reactions: [{ content: "🚀", count: 2, viewerHasReacted: !1 }],
              parentId: "obs-1"
            }
          ]
        },
        {
          id: "obs-2",
          author: {
            login: "carlos-dev",
            avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
            url: "https://github.com",
            isAuthor: !1
          },
          body: t ? "O vídeo do David Kimball no final do artigo ajudou bastante a visualizar o fluxo de publicação com o Git status bar do Obsidian!" : r ? "¡El vídeo de David Kimball al final del artículo ayudó muchísimo a visualizar el flujo de publicación con la barra de Git en Obsidian!" : "David Kimball's walkthrough video at the end of the post really helped clarify the Git push workflow in Obsidian's status bar!",
          createdAt: t ? "há 12 minutos" : r ? "hace 12 minutos" : "12 minutes ago",
          originalLang: t ? "pt" : r ? "es" : "en",
          reactions: [{ content: "🎉", count: 4, viewerHasReacted: !1 }],
          replies: []
        }
      ];
      return;
    }
    if (o.includes("writing-technical-articles")) {
      this._comments = [
        {
          id: "write-1",
          author: {
            login: "rnt-rez",
            avatarUrl: "https://github.com/rnt-rez.png",
            url: "https://github.com/rnt-rez",
            isAuthor: !0
          },
          body: t ? "Qual é a sua opinião sobre o ritmo tipográfico e o espaçamento para leitura de blocos longos de código técnico no Minrock?" : r ? "¿Cuál es tu opinión sobre el ritmo tipográfico y el espaciado para leer bloques largos de código técnico en Minrock?" : "What are your thoughts on Minrock's typographic rhythm and line height when reading long technical code blocks?",
          createdAt: t ? "há 20 minutos" : r ? "hace 20 minutos" : "20 minutes ago",
          originalLang: t ? "pt" : r ? "es" : "en",
          reactions: [
            { content: "👍", count: 6, viewerHasReacted: !0 },
            { content: "💡", count: 4, viewerHasReacted: !1 }
          ],
          replies: [
            {
              id: "write-1-1",
              author: {
                login: "jordan-tech",
                avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
                url: "https://github.com",
                isAuthor: !1
              },
              body: t ? "@rnt-rez A renderização com Shiki e o fundo sutil do bloco de código dão um contraste perfeito sem agredir a visão em sessões longas de leitura." : "@rnt-rez The Shiki rendering paired with subtle background surfaces creates ideal contrast without eye strain during long reading sessions.",
              createdAt: t ? "há 14 minutos" : "14 minutes ago",
              originalLang: t ? "pt" : "en",
              reactions: [{ content: "❤️", count: 2, viewerHasReacted: !1 }],
              parentId: "write-1"
            }
          ]
        },
        {
          id: "write-2",
          author: {
            login: "lucas-writer",
            avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
            url: "https://github.com",
            isAuthor: !1
          },
          body: t ? "A hierarquia limpa de títulos (`h2`, `h3`) e listas compactas mantém o foco total na substância técnica do artigo." : r ? "La jerarquía limpia de encabezados (`h2`, `h3`) y listas compactas mantiene el foco total en la sustancia técnica del artículo." : "The clean headings hierarchy (`h2`, `h3`) and compact lists keep the focus entirely on technical substance.",
          createdAt: t ? "há 8 minutos" : r ? "hace 8 minutos" : "8 minutes ago",
          originalLang: t ? "pt" : r ? "es" : "en",
          reactions: [{ content: "🎉", count: 2, viewerHasReacted: !1 }],
          replies: []
        }
      ];
      return;
    }
    this._comments = [
      {
        id: "1",
        author: {
          login: "rnt-rez",
          avatarUrl: "https://github.com/rnt-rez.png",
          url: "https://github.com/rnt-rez",
          isAuthor: !0
        },
        body: t ? "Bem-vindo ao **ScatterLeaf**! 🍃 Este é um comentário nativo renderizado diretamente via Shadow DOM, com zero iframes e suporte a Markdown." : r ? "¡Bienvenido a **ScatterLeaf**! 🍃 Este es un comentario nativo renderizado directamente a través de Shadow DOM, sin iframes y con soporte para Markdown." : "Welcome to **ScatterLeaf**! 🍃 This is a native comment rendered directly via Shadow DOM, with zero iframes and full Markdown support.",
        createdAt: t ? "há 10 minutos" : r ? "hace 10 minutos" : "10 minutes ago",
        originalLang: t ? "pt" : r ? "es" : "en",
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
            body: t ? "@rnt-rez Isso é genial! Ter Shadow DOM nativo deixa a rolagem suave como manteiga, sem nenhum engasgo de iframe." : "@rnt-rez This is brilliant! Having native Shadow DOM makes the scroll buttery smooth without any iframe stutter.",
            createdAt: t ? "há 5 minutos" : "5 minutes ago",
            originalLang: t ? "pt" : "en",
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
            body: t ? "@sarah-eng Exato! A rolagem da página não sofre com os pulos visuais de redimensionamento do iframe." : "@sarah-eng Exactly! Page scrolling does not suffer from visual jumping caused by iframe resizing.",
            createdAt: t ? "há 2 minutos" : "2 minutes ago",
            originalLang: t ? "pt" : "en",
            reactions: [{ content: "🚀", count: 1, viewerHasReacted: !1 }],
            parentId: "1"
          },
          {
            id: "1-3",
            author: {
              login: "lucas-writer",
              avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
              url: "https://github.com",
              isAuthor: !1
            },
            body: t ? "@sarah-eng E o consumo de memória cai drasticamente, pois não há instâncias de documentos HTML duplicadas." : "@sarah-eng Plus memory usage drops dramatically since there are no duplicate HTML document contexts.",
            createdAt: t ? "há 1 minuto" : "1 minute ago",
            originalLang: t ? "pt" : "en",
            reactions: [{ content: "🎉", count: 2, viewerHasReacted: !1 }],
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
        createdAt: t ? "há 8 minutos" : r ? "hace 8 minutos" : "8 minutes ago",
        originalLang: "es",
        reactions: [{ content: "🎉", count: 3, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "3",
        author: {
          login: "marina-ui",
          avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "Adorei a tipografia e o suporte a Markdown sem precisar carregar frameworks pesados. A performance agradece!" : "Loved the typography and Markdown support without needing heavy frameworks. Performance is incredible!",
        createdAt: t ? "há 7 minutos" : "7 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "❤️", count: 4, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "4",
        author: {
          login: "felipe-dev",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "O popover de reações com emojis 3D animados traz uma sensação muito viva e dinâmica para o blog." : "The reaction popover with animated 3D emojis gives the blog a very lively and engaging feel.",
        createdAt: t ? "há 6 minutos" : "6 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "🚀", count: 5, viewerHasReacted: !0 }],
        replies: []
      },
      {
        id: "5",
        author: {
          login: "beatriz-sec",
          avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "A validação binária de Magic Bytes para imagens e o filtro Anti-NSFW trazem muita segurança para quem gerencia um blog público." : "Magic Bytes binary validation for images plus Anti-NSFW filtering bring massive peace of mind for public blogs.",
        createdAt: t ? "há 5 minutos" : "5 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "👍", count: 2, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "6",
        author: {
          login: "thiago-arch",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "A separação de responsabilidades com o Cloudflare Worker como Edge Broker é a melhor decisão de arquitetura." : "Separating concerns with Cloudflare Worker as Edge Broker is the cleanest architectural pattern.",
        createdAt: t ? "há 4 minutos" : "4 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "💡", count: 3, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "7",
        author: {
          login: "juliana-doc",
          avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "A tradução automática com detecção de idioma e Web Speech para síntese de voz tornam o conteúdo acessível para todos." : "Automatic translation with language detection and Web Speech text-to-speech make content accessible to everyone.",
        createdAt: t ? "há 3 minutos" : "3 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "❤️", count: 1, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "8",
        author: {
          login: "rodrigo-qa",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "Testei em vários navegadores (Chromium, Firefox, Safari) e o Shadow DOM isola os estilos com 100% de integridade." : "Tested across Chromium, Firefox, and Safari: Shadow DOM isolates all styles with 100% integrity.",
        createdAt: t ? "há 3 minutos" : "3 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "👍", count: 2, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "9",
        author: {
          login: "clara-rust",
          avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "O botão assistido de blocos de código com numeração de linhas e cópia limpa ficou perfeito para desenvolvedores." : "The assisted code block button with line numbering and clean copy is perfect for developers.",
        createdAt: t ? "há 2 minutos" : "2 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "🚀", count: 4, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "10",
        author: {
          login: "andre-linux",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "Sem trackers externos, sem cookies de terceiros e com zero poluição. É disso que a web estática precisa." : "No third-party trackers, no third-party cookies, and zero bloat. Exactly what static web needs.",
        createdAt: t ? "há 2 minutos" : "2 minutes ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "🎉", count: 3, viewerHasReacted: !1 }],
        replies: []
      },
      {
        id: "11",
        author: {
          login: "renata-cloud",
          avatarUrl: "https://avatars.githubusercontent.com/u/1024025?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "A paginação inteligente permite manter dezenas de comentários organizados sem travar a navegação da página principal." : "Smart pagination keeps dozens of comments neatly organized without breaking main page navigation flow.",
        createdAt: t ? "há 1 minuto" : "1 minute ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "💡", count: 5, viewerHasReacted: !0 }],
        replies: []
      },
      {
        id: "12",
        author: {
          login: "gabriel-astro",
          avatarUrl: "https://avatars.githubusercontent.com/u/9919?v=4",
          url: "https://github.com",
          isAuthor: !1
        },
        body: t ? "Integração transparente com Astro 7 e SSG. O ScatterLeaf se tornou indispensável." : "Seamless integration with Astro 7 and SSG. ScatterLeaf is now an essential staple.",
        createdAt: t ? "há alguns segundos" : "a few seconds ago",
        originalLang: t ? "pt" : "en",
        reactions: [{ content: "❤️", count: 2, viewerHasReacted: !1 }],
        replies: []
      }
    ];
  }
  /**
   * Parser ultraleve de Markdown client-side (Zero dependências externas)
   * Suporta blocos técnicos de código estruturados, numeração de linhas, inline code, imagens seguras, etc.
   */
  parseMarkdown(e) {
    if (!e) return "";
    const t = [], r = "___SL_CODE_BLOCK_";
    let a = e.replace(
      /```([a-zA-Z0-9_-]*)\r?\n?([\s\S]*?)```/g,
      (i, n, l) => {
        const s = (n || "code").trim().toLowerCase(), w = l.replace(/^\n+|\n+$/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").split(/\r?\n/).map(
          (z, A) => `<span class="sl-code-line"><span class="sl-line-num">${A + 1}</span><span class="sl-line-code">${z || " "}</span></span>`
        ).join(`
`), v = this.currentLang === "pt" ? "Copiar" : "Copy", k = this.currentLang === "pt" ? "Copiar código" : "Copy code", _ = `
          <div class="sl-code-block" data-lang="${s}">
            <div class="sl-code-header">
              <span class="sl-code-badge">${s}</span>
              <button type="button" class="sl-code-copy-btn" title="${k}" aria-label="${k}">
                <svg class="sl-copy-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                  <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                </svg>
                <span class="sl-copy-text">${v}</span>
              </button>
            </div>
            <pre class="sl-code-pre"><code class="sl-code-body">${w}</code></pre>
          </div>
        `.trim(), T = t.length;
        return t.push(_), `${r}${T}___`;
      }
    ).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return a = a.replace(/`([^`]+)`/g, '<code class="sl-inline-code">$1</code>'), a = a.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"), a = a.replace(/__([^_]+)__/g, "<strong>$1</strong>"), a = a.replace(/\*([^*]+)\*/g, "<em>$1</em>"), a = a.replace(/_([^_]+)_/g, "<em>$1</em>"), a = a.replace(/~~([^~]+)~~/g, "<del>$1</del>"), a = a.replace(
      /!\[([^\]]*)\]\(((?:https?:\/\/|data:image\/)[^\s)]+)\)/g,
      (i, n, l) => {
        const s = K(l);
        return s.safe ? `<img src="${l}" alt="${n}" class="sl-embedded-img" loading="lazy" />` : `<span class="sl-blocked-media-notice" title="${s.reason || "Conteúdo potencialmente sensível"}">⚠️ [Mídia bloqueada: filtro de conteúdo sensível / link não seguro]</span>`;
      }
    ), a = a.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    ), a = a.replace(
      /(^|[^"'])(https?:\/\/[^\s<]+)/g,
      '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>'
    ), a = a.replace(
      /@([a-zA-Z0-9-_]+)/g,
      '<a href="https://github.com/$1" target="_blank" rel="noopener noreferrer" class="sl-mention">@$1</a>'
    ), a = a.replace(/\n\n/g, "</p><p>"), a = a.replace(/\n/g, "<br />"), t.forEach((i, n) => {
      const l = `${r}${n}___`;
      a = a.replace(new RegExp(`<p>\\s*${l}\\s*<\\/p>`, "g"), i), a = a.replace(new RegExp(l, "g"), i);
    }), `<p>${a}</p>`;
  }
  /**
   * Formata datas de maneira inteligente, contextual e regionalizada (Intl API)
   */
  formatDate(e) {
    if (!e) return { relative: "", full: "" };
    if (!e.includes("T") && !e.includes("-") && !e.includes(":"))
      return { relative: e, full: e };
    const t = new Date(e);
    if (isNaN(t.getTime()))
      return { relative: e, full: e };
    const r = typeof navigator < "u" && navigator.language ? navigator.language : this.currentLang === "pt" ? "pt-BR" : "en-US", o = new Intl.DateTimeFormat(r, {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(t), a = Math.floor((Date.now() - t.getTime()) / 1e3), i = this.currentLang, n = i === "pt", l = i === "es";
    if (a < 60)
      return {
        relative: n ? "agora mesmo" : l ? "ahora mismo" : "just now",
        full: o
      };
    if (a < 3600) {
      const c = Math.floor(a / 60);
      return {
        relative: n ? `há ${c} ${c === 1 ? "minuto" : "minutos"}` : l ? `hace ${c} ${c === 1 ? "minuto" : "minutos"}` : `${c} ${c === 1 ? "minute" : "minutes"} ago`,
        full: o
      };
    }
    if (a < 86400) {
      const c = Math.floor(a / 3600);
      return {
        relative: n ? `há ${c} ${c === 1 ? "hora" : "horas"}` : l ? `hace ${c} ${c === 1 ? "hora" : "horas"}` : `${c} ${c === 1 ? "hour" : "hours"} ago`,
        full: o
      };
    }
    if (a < 604800) {
      const c = Math.floor(a / 86400);
      return {
        relative: n ? `há ${c} ${c === 1 ? "dia" : "dias"}` : l ? `hace ${c} ${c === 1 ? "día" : "días"}` : `${c} ${c === 1 ? "day" : "days"} ago`,
        full: o
      };
    }
    return { relative: new Intl.DateTimeFormat(r, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(t), full: o };
  }
  /**
   * Detector heurístico ultrarrápido de idioma do texto do comentário (para voz poliglota e tradução)
   */
  detectTextLanguage(e) {
    if (!e || e.trim().length === 0) return this._lang;
    const t = e.toLowerCase().replace(/[*_`#]/g, "").replace(/https?:\/\/\S+/g, "").replace(/@\w+/g, ""), r = (t.match(/\b(o|a|os|as|de|do|da|em|um|uma|para|com|não|que|isso|este|esta|muito|bom|bem|projeto|comentário|genial|manteiga|artigo|leitura)\b/g) || []).length * 2 + (t.match(/[ãõéêáàçíú]/g) || []).length * 3, o = (t.match(/\b(the|and|this|is|that|with|for|you|have|not|but|from|are|was|they|will|all|would|there|what|out|about|who|get|which|go|me|when|make|can|like|time|no|just|know|take|people|into|year|your|good|some|could|them|see|other|than|then|now|look|only|come|its|over|think|also|back|after|use|two|how|our|work|first|well|way|even|new|want|because|any|these|give|day|most|us|welcome|native|having|scroll|stutter)\b/g) || []).length * 2, a = (t.match(/\b(el|la|los|las|de|del|en|un|una|por|con|para|esto|este|esta|muy|bien|es|son|pero|como|más|sus|le|ya|o|fue|ha|sí|porque|cuando|sin|sobre|ser|tiene|también|me|hasta|hay|donde|quien|desde|todo|nos|durante|todos|uno|les|ni|contra|otros|ese|eso|ante|ellos|mí|antes|algunos|qué|unos|yo|otro|otras|otra|él|tanto|esa|estos|mucho|quienes|nada|muchos|cual|poco|ella|estar|estas|algunas|algo|nosotros|queda|excelente|artículos)\b/g) || []).length * 2 + (t.match(/[¿¡ñ]/g) || []).length * 4, i = (t.match(/\b(le|la|les|de|du|des|en|et|un|une|pour|avec|dans|que|qui|est|sont|sur|ce|cette|ces|mais|ou|donc|or|ni|car|très|bien)\b/g) || []).length * 2 + (t.match(/[œçèêàâôûëï]/g) || []).length * 3, n = Math.max(r, o, a, i);
    return n < 2 ? this.currentLang : n === r ? "pt" : n === o ? "en" : n === a ? "es" : n === i ? "fr" : this.currentLang;
  }
  getVisitorLang() {
    return this.currentLang;
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
  async toggleTranslate(e) {
    const t = (b) => {
      for (const g of b) {
        if (g.id === e) return g;
        if (g.replies) {
          const w = t(g.replies);
          if (w) return w;
        }
      }
      return null;
    }, r = t(this._comments);
    if (!r) return;
    if (r.isShowingTranslation) {
      r.isShowingTranslation = !1, this.render();
      return;
    }
    if (r.translatedBody) {
      r.isShowingTranslation = !0, this.render();
      return;
    }
    const o = this.currentLang, a = o === "pt", n = a ? "pt" : o === "es" ? "es" : "en", c = a ? {
      1: "Welcome to **ScatterLeaf**! 🍃 This is a native comment rendered directly via Shadow DOM, with zero iframes and Markdown support.",
      "1-1": "@rnt-rez Isso é genial! Ter Shadow DOM nativo deixa a rolagem suave como manteiga, sem nenhum engasgo de iframe.",
      "1-2": "@sarah-eng Exactly! Page scrolling does not suffer from visual jumping caused by iframe resizing.",
      2: "Excelente projeto! O tema Warm Paper (**Cream**) fica fenomenal para ler artigos longos."
    } : {
      1: "Bem-vindo ao **ScatterLeaf**! 🍃 Este é um comentário nativo renderizado diretamente via Shadow DOM, com zero iframes e suporte a Markdown.",
      "1-1": "@rnt-rez This is brilliant! Having native Shadow DOM makes the scroll buttery smooth without any iframe stutter.",
      "1-2": "@sarah-eng Exato! A rolagem da página não sofre com os pulos visuais de redimensionamento do iframe.",
      2: "Excellent project! The Warm Paper (**Cream**) theme looks phenomenal for reading long articles."
    };
    if (c[e]) {
      r.translatedBody = c[e], r.isShowingTranslation = !0, this.render();
      return;
    }
    this._isTranslatingId = e, this.render();
    try {
      const b = r.originalLang || this.detectTextLanguage(r.body), g = r.body.replace(/[#*`_~]/g, ""), v = await (await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(g.slice(0, 500))}&langpair=${b}|${n}`
      )).json();
      v && v.responseData && v.responseData.translatedText ? r.translatedBody = v.responseData.translatedText : r.translatedBody = a ? `[Tradução]: ${r.body}` : `[Translation]: ${r.body}`;
    } catch (b) {
      console.warn("🍃 [ScatterLeaf] Erro na tradução automática:", b), r.translatedBody = a ? `[Tradução]: ${r.body}` : `[Translation]: ${r.body}`;
    } finally {
      this._isTranslatingId = null, r.isShowingTranslation = !0, this.render();
    }
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
    const o = t.replace(/[*_`#]/g, "").replace(/https?:\/\/\S+/g, "link"), a = new SpeechSynthesisUtterance(o), n = r && {
      pt: "pt-BR",
      en: "en-US",
      es: "es-ES",
      fr: "fr-FR",
      de: "de-DE",
      it: "it-IT"
    }[r] || r || (this._lang === "pt" ? "pt-BR" : "en-US");
    if (a.lang = n, "speechSynthesis" in window) {
      const l = window.speechSynthesis.getVoices(), s = n.slice(0, 2).toLowerCase(), c = l.find(
        (b) => b.lang.replace("_", "-").toLowerCase().startsWith(s)
      );
      c && (a.voice = c);
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
      (a, i) => {
        var n;
        return a + 1 + (((n = i.replies) == null ? void 0 : n.length) || 0);
      },
      0
    ), t = this.currentLang === "pt" ? "Comentários" : "Comments", r = this.renderComposer(), o = this._isLoading ? `<div style="text-align: center; padding: 2.5rem; color: var(--sl-text-muted);">
           <span style="font-size: 1.5rem; display: block; margin-bottom: 0.5rem; animation: spin 1s infinite linear;">🍃</span>
           ${this.currentLang === "pt" ? "Carregando notas na brisa..." : "Floating notes in the breeze..."}
         </div>` : this.renderCommentsList();
    this.shadowRoot.innerHTML = `
      <style>${oe}</style>
      <div class="sl-container" part="container">
        <header class="sl-header" part="header">
          <div class="sl-header-left">
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
        ${this.renderCommentsToolbar()}
        ${o}
        ${this._inputPosition === "bottom" ? r : ""}
      </div>
      ${this._isMediaModalOpen ? this.renderMediaModal() : ""}
    `, this.attachEvents();
  }
  /**
   * Renderiza o Modal Seguro de Inserção de GIFs (Anti-NSFW)
   */
  renderMediaModal() {
    var c, b, g, w, v, k;
    const e = this.currentLang === "pt", t = e ? "Inserir GIF" : "Insert GIF", r = e ? "Filtro Anti-NSFW ativo: URLs e arquivos locais passam por validação estrita de segurança, integridade binária e conteúdo sensível." : "Anti-NSFW filter active: URLs and local files undergo strict security, binary integrity, and sensitive content checks.", o = e ? "URL do GIF (HTTPS obrigatório):" : "GIF URL (Strict HTTPS):", a = e ? "Descrição do GIF / Alt text (Opcional):" : "GIF description / Alt text (Optional):", i = e ? "Cancelar" : "Cancel", n = e ? "Inserir GIF" : "Insert GIF", l = ee(), s = !!(this._mediaModalFile && this._mediaModalFileDataUrl);
    return `
      <div class="sl-modal-backdrop" id="media-modal-backdrop">
        <div class="sl-modal-box" role="dialog" aria-modal="true" aria-labelledby="sl-media-modal-title">
          <div class="sl-modal-header">
            <h4 class="sl-modal-title" id="sl-media-modal-title">
              <span>🛡️</span>
              <span>${t}</span>
            </h4>
            <button type="button" class="sl-modal-close-btn" id="btn-close-media-modal" aria-label="${e ? "Fechar" : "Close"}">✕</button>
          </div>

          <div class="sl-modal-body">
            <div class="sl-modal-notice">
              <span>${r}</span>
            </div>

            <!-- OPÇÃO 1: Inserção por URL segura -->
            <div class="sl-modal-input-group">
              <div class="sl-modal-label-row">
                <label class="sl-modal-label" for="media-url-input">${o}</label>
                <span class="sl-tag-exclusive-badge">${e ? "Opção 1: Link" : "Option 1: Link"}</span>
              </div>
              <input
                type="url"
                class="sl-modal-input ${s ? "sl-modal-input-disabled" : ""}"
                id="media-url-input"
                placeholder="${s ? e ? "Desativado (Arquivo local carregado abaixo)" : "Disabled (Local file loaded below)" : "https://media.giphy.com/media/.../giphy.gif"}"
                value="${this._mediaModalUrl}"
                ${s ? "disabled" : ""}
                ${s ? "" : "autofocus"}
              />
              ${this._mediaModalUrl && !this._mediaModalError && !s ? `
                <div class="sl-url-preview-card">
                  <img src="${this._mediaModalUrl}" alt="Prévia do GIF" class="sl-url-preview-img" onerror="this.style.display='none'" />
                  <span class="sl-url-preview-label">${e ? "✓ Link pronto para inserção" : "✓ Link ready to insert"}</span>
                </div>
              ` : ""}
            </div>

            <!-- OPÇÃO 2: Upload de Imagem ou GIF Local / Drag & Drop -->
            <div class="sl-modal-input-group">
              <div class="sl-modal-label-row">
                <label class="sl-modal-label">${e ? "Upload de Imagem ou GIF Local:" : "Local Image or GIF Upload:"}</label>
                <span class="sl-tag-exclusive-badge">${e ? "Opção 2: Arquivo" : "Option 2: File"}</span>
              </div>

              ${s ? `
                <div class="sl-file-selected-card">
                  <div class="sl-file-card-preview">
                    <img src="${this._mediaModalFileDataUrl}" alt="${(c = this._mediaModalFile) == null ? void 0 : c.name}" class="sl-file-card-img" />
                  </div>
                  <div class="sl-file-card-info">
                    <div class="sl-file-card-name" title="${(b = this._mediaModalFile) == null ? void 0 : b.name}">${(g = this._mediaModalFile) == null ? void 0 : g.name}</div>
                    <div class="sl-file-card-meta">
                      ${this._mediaModalWasCompressed ? `
                        <span>${((((w = this._mediaModalFile) == null ? void 0 : w.size) || 0) / 1024).toFixed(0)} KB → <strong>${(this._mediaModalCompressedSize / 1024).toFixed(1)} KB</strong></span>
                        <span class="sl-file-card-badge">⚡ Otimizado WebP</span>
                      ` : `
                        <span>${((((v = this._mediaModalFile) == null ? void 0 : v.size) || 0) / 1024).toFixed(1)} KB</span>
                        <span class="sl-file-card-badge">✓ GIF Animado</span>
                      `}
                    </div>
                    ${!this._mediaModalWasCompressed && (((k = this._mediaModalFile) == null ? void 0 : k.size) || 0) > 50 * 1024 ? `
                      <div class="sl-file-size-warning">
                        ⚠️ ${e ? "GIF > 50 KB: Limite de 64 KB de comentários no GitHub. Recomendado link direto para mídias pesadas." : "GIF > 50 KB: GitHub 64 KB comment limit. Direct URL recommended for heavy media."}
                      </div>
                    ` : ""}
                  </div>
                  <button type="button" class="sl-btn-remove-file" id="btn-remove-media-file" title="${e ? "Remover arquivo e reativar URL" : "Remove file and re-enable URL"}">
                    ✕
                  </button>
                </div>
              ` : `
                <div class="sl-modal-dropzone sl-drop-zone" id="media-drop-zone">
                  <input type="file" id="media-file-input" accept="image/gif,image/webp,image/png,image/jpeg" style="display: none;" />
                  <div class="sl-dropzone-content">
                    <div class="sl-dropzone-icon">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                        <path d="M12 12v9" />
                        <path d="m16 16-4-4-4 4" />
                      </svg>
                    </div>
                    <div class="sl-dropzone-title">
                      ${e ? "Arraste e solte o seu GIF ou imagem aqui" : "Drag & Drop your GIF or image here"}
                    </div>
                    <div class="sl-dropzone-divider">
                      <span>${e ? "OU" : "OR"}</span>
                    </div>
                    <button type="button" class="sl-btn-browse" id="btn-browse-media-file">
                      ${e ? "Procurar Arquivo" : "Browse Files"}
                    </button>
                  </div>
                </div>
              `}
            </div>

            <!-- Descrição / Alt Text -->
            <div class="sl-modal-input-group">
              <label class="sl-modal-label" for="media-alt-input">${a}</label>
              <input type="text" class="sl-modal-input" id="media-alt-input" placeholder="${e ? "Ex: Comemoração animada" : "Ex: Cheering reaction"}" value="${this._mediaModalAlt}" />
            </div>

            ${l.length > 0 ? `
              <div class="sl-modal-recents">
                <div class="sl-modal-recents-header">
                  <span>${e ? "Seus GIFs Recentes:" : "Your Recent GIFs:"}</span>
                  <button type="button" class="sl-btn-clear-recents" id="btn-clear-recent-gifs" title="${e ? "Limpar histórico de GIFs" : "Clear GIF history"}">
                    ${e ? "Limpar" : "Clear"}
                  </button>
                </div>
                <div class="sl-modal-recents-grid">
                  ${l.map(
      (_) => `
                    <button type="button" class="sl-recent-gif-item" data-url="${_.url}" data-alt="${_.alt || ""}" title="${_.alt || _.url}">
                      <img src="${_.url}" alt="${_.alt || "GIF"}" loading="lazy" />
                    </button>
                  `
    ).join("")}
                </div>
              </div>
            ` : ""}

            ${this._mediaModalError ? `
              <div class="sl-modal-error">
                <span>⚠️</span>
                <span>${this._mediaModalError}</span>
              </div>
            ` : ""}
          </div>

          <div class="sl-modal-footer">
            <button type="button" class="sl-btn sl-btn-secondary" id="btn-cancel-media-modal">
              ${i}
            </button>
            <button type="button" class="sl-btn sl-btn-primary" id="btn-confirm-media-modal">
              <span>🖼️</span>
              <span>${n}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }
  /**
   * Renderiza o Menu Popover Flutuante com as Linguagens Populares
   */
  renderCodePicker() {
    const t = this.currentLang === "pt" ? "Linguagem do Bloco" : "Code Language";
    return `
      <div class="sl-code-picker-popover" role="menu" aria-label="${t}">
        <div class="sl-code-picker-title">${t}</div>
        <div class="sl-code-lang-grid">
          ${ce.map(
      (r) => `
            <button type="button" class="sl-code-lang-btn" data-lang="${r.id}" role="menuitem" title="${r.name}">
              <span class="sl-code-lang-name">${r.name}</span>
              <span class="sl-code-lang-tag">${r.id}</span>
            </button>
          `
    ).join("")}
        </div>
      </div>
    `;
  }
  /**
   * Insere bloco de código com formatação e foco inteligente
   * Suporta seleção prévia do usuário ou template com placeholder pré-selecionado
   */
  insertCodeBlock(e = "typescript") {
    var z, A, j, $;
    const t = (z = this.shadowRoot) == null ? void 0 : z.getElementById("composer-textarea");
    if (!t) return;
    const r = ((A = this._savedComposerSelection) == null ? void 0 : A.start) ?? t.selectionStart ?? this._composerText.length, o = ((j = this._savedComposerSelection) == null ? void 0 : j.end) ?? t.selectionEnd ?? this._composerText.length, i = t.value.substring(r, o) || (this.currentLang === "pt" ? "// Seu código aqui" : "// Your code here"), n = t.value.substring(0, r), l = t.value.substring(o), s = n.length > 0 && !n.endsWith(`
`), c = l.length > 0 && !l.startsWith(`
`), b = s ? `
` : "", w = `${b}\`\`\`${e}
${i}
\`\`\`${c ? `
` : ""}`, v = n + w + l;
    this._composerText = v, this._isCodePickerOpen = !1, this._savedComposerSelection = null;
    const k = n.length + b.length + 3 + e.length + 1, _ = k + i.length;
    this.render();
    const T = ($ = this.shadowRoot) == null ? void 0 : $.getElementById("composer-textarea");
    T && (T.focus(), T.setSelectionRange(k, _), T.style.height = "auto", T.style.height = `${T.scrollHeight}px`);
  }
  /**
   * Renderiza a Caixa de Escrita Principal (com Abas Escreva / Prévia, Aa e Autenticação)
   */
  renderComposer() {
    const e = this._activeTab === "write", t = this._fontMode === "monospace", r = this.currentLang === "pt" ? "Deixe uma nota ou comentário..." : "Leave a note or comment...", o = this.currentLang === "pt" ? "Escreva" : "Write", a = this.currentLang === "pt" ? "Prévia" : "Preview", i = this.currentLang === "pt" ? "Nada para pré-visualizar ainda." : "Nothing to preview yet.", n = this.currentLang === "pt" ? "Entre com GitHub" : "Sign in with GitHub", l = this.currentLang === "pt" ? "Publicar nota" : "Post note";
    return `
      <div class="sl-composer" part="composer">
        <!-- Barra de Abas e Ações (Bloco de Código </> e Controle Tipográfico Aa) -->
        <div class="sl-composer-tabs">
          <div class="sl-tabs-group" role="tablist">
            <button class="sl-tab ${e ? "sl-tab-active" : ""}" id="tab-write" role="tab" aria-selected="${e}">
              ${o}
            </button>
            <button class="sl-tab ${e ? "" : "sl-tab-active"}" id="tab-preview" role="tab" aria-selected="${!e}">
              ${a}
            </button>
          </div>
          <div class="sl-composer-tabs-actions">
            <div class="sl-code-menu-wrapper">
              <button class="sl-code-toggle ${this._isCodePickerOpen ? "sl-code-toggle-active" : ""}" id="btn-code-toggle" type="button" title="${this.currentLang === "pt" ? "Inserir bloco de código" : "Insert code block"}" aria-label="Código">
                <span>&lt;/&gt;</span>
              </button>
              ${this._isCodePickerOpen ? this.renderCodePicker() : ""}
            </div>
            <button class="sl-font-toggle ${t ? "sl-mono-active" : ""}" id="btn-font-toggle" title="Alternar fonte monoespaçada / texto" aria-label="Alternar tipografia">
              <span>Aa</span>
            </button>
          </div>
        </div>

        <!-- Área de Edição / Prévia -->
        <div class="sl-composer-body">
          ${e ? `<textarea class="sl-textarea ${t ? "sl-monospace" : ""}" id="composer-textarea" placeholder="${r}" part="textarea">${this._composerText}</textarea>` : `<div class="sl-preview-area ${t ? "sl-monospace" : ""}" part="preview-area">
                  ${this._composerText ? this.parseMarkdown(this._composerText) : `<span class="sl-preview-empty">${i}</span>`}
                </div>`}
        </div>

        <!-- Rodapé do Composer (Usuário Autenticado vs Visitante) -->
        <div class="sl-composer-footer">
          ${this._currentUser ? `
            <div class="sl-user-badge">
              <img class="sl-user-avatar" src="${this._currentUser.avatarUrl}" alt="${this._currentUser.login}" />
              <span class="sl-user-name">@${this._currentUser.login}</span>
              <button class="sl-btn-logout" id="btn-logout" title="Sair da sessão">
                ${this.currentLang === "pt" ? "Sair" : "Logout"}
              </button>
            </div>
            <div class="sl-composer-actions">
              <div class="sl-emoji-wrapper">
                <button class="sl-btn-emoji ${this._isEmojiPickerOpen ? "sl-btn-emoji-active" : ""}" id="btn-emoji-toggle" type="button" title="${this.currentLang === "pt" ? "Inserir emojis e ícones" : "Insert emojis & icons"}" aria-label="Emoji">
                  <span>😀</span>
                </button>
                ${this._isEmojiPickerOpen ? this.renderEmojiPicker() : ""}
              </div>
              <button class="sl-btn sl-btn-primary" id="btn-submit" part="submit-btn">
                <span>🍃</span>
                <span>${l}</span>
              </button>
            </div>
          ` : `
            <span style="font-size: 0.75rem; color: var(--sl-text-muted);">
              ${this.currentLang === "pt" ? "Markdown suportado" : "Markdown supported"}
            </span>
            <div class="sl-composer-actions">
              <div class="sl-emoji-wrapper">
                <button class="sl-btn-emoji ${this._isEmojiPickerOpen ? "sl-btn-emoji-active" : ""}" id="btn-emoji-toggle" type="button" title="${this.currentLang === "pt" ? "Inserir emojis e ícones" : "Insert emojis & icons"}" aria-label="Emoji">
                  <span>😀</span>
                </button>
                ${this._isEmojiPickerOpen ? this.renderEmojiPicker() : ""}
              </div>
              <button class="sl-btn sl-btn-github" id="btn-login-submit" part="submit-btn">
                <svg height="16" width="16" viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
                <span>${n}</span>
              </button>
            </div>
          `}
        </div>
      </div>
    `;
  }
  /**
   * Caixa de Emojis e Ícones Expressivos com Seletor de Tom de Pele
   */
  renderEmojiPicker() {
    const e = [
      {
        name: this.currentLang === "pt" ? "Rostos & Emoções" : "Faces & Feelings",
        emojis: [
          "😀",
          "😃",
          "😄",
          "😁",
          "😆",
          "😅",
          "😂",
          "🤣",
          "🥹",
          "😊",
          "😇",
          "🙂",
          "😉",
          "😌",
          "😍",
          "🥰",
          "😘",
          "😋",
          "😜",
          "🤪",
          "😎",
          "🤓",
          "🧐",
          "🤔",
          "🫡",
          "🤫",
          "😴",
          "🤯",
          "🥳",
          "🤩",
          "😭",
          "😡",
          "😈",
          "👻",
          "🤖"
        ]
      },
      {
        name: this.currentLang === "pt" ? "Gestos & Mágica" : "Gestures & Magic",
        emojis: [
          "🧙‍♂️",
          "🧙‍♀️",
          "🧙",
          "🔮",
          "✨",
          "🪄",
          "👍",
          "👏",
          "🙌",
          "🤝",
          "🙏",
          "✌️",
          "🤘",
          "🤙",
          "👊",
          "✊",
          "🤛",
          "🤜",
          "🤞",
          "🫶",
          "👋",
          "🖐️",
          "✋",
          "🖖",
          "💪",
          "👀",
          "🧠",
          "🫀",
          "💯",
          "💥",
          "🚀"
        ]
      },
      {
        name: this.currentLang === "pt" ? "Símbolos & Celebração" : "Symbols & Celebration",
        emojis: [
          "❤️",
          "🧡",
          "💛",
          "💚",
          "💙",
          "💜",
          "🖤",
          "🤍",
          "💔",
          "❣️",
          "💕",
          "💖",
          "🔥",
          "🌟",
          "⭐",
          "⚡",
          "💡",
          "🎉",
          "🏆",
          "☕",
          "🍵",
          "🍺",
          "🍻",
          "🍕",
          "🍿",
          "🎲",
          "🎮",
          "🎸"
        ]
      },
      {
        name: this.currentLang === "pt" ? "Dev, Tech & Natureza" : "Dev, Tech & Nature",
        emojis: [
          "🍃",
          "🌱",
          "🌿",
          "🍂",
          "🍁",
          "🌍",
          "🌎",
          "💻",
          "🖥️",
          "📱",
          "⌨️",
          "🖱️",
          "📡",
          "🚀",
          "🐛",
          "🐞",
          "📦",
          "🛠️",
          "⚙️",
          "🔧",
          "🔨",
          "🔍",
          "🔒",
          "🛡️",
          "🎨",
          "🧪",
          "💎",
          "🎯"
        ]
      }
    ], t = this.currentLang === "pt" ? "Inserir GIF" : "Insert GIF", r = this.currentLang === "pt" ? "Emojis & Ícones" : "Emojis & Icons", o = W("👊", this._selectedSkinTone), a = this.currentLang === "pt" ? "Tom de pele (clique para escolher)" : "Skin tone (click to choose)";
    return `
      <div class="sl-emoji-popover" id="emoji-popover" part="emoji-popover">
        <div class="sl-emoji-header">
          <div style="display: flex; align-items: center; gap: 0.45rem;">
            <span class="sl-emoji-title">${r}</span>
            <button type="button" class="sl-skin-tone-toggle-btn ${this._isSkinTonePanelOpen ? "sl-tone-active" : ""}" id="btn-skin-tone-toggle" title="${a}">
              <span>${o}</span>
            </button>
          </div>
          <div class="sl-emoji-nav">
            <button type="button" class="sl-emoji-nav-btn" id="btn-emoji-scroll-up" title="${this.currentLang === "pt" ? "Subir" : "Scroll up"}">▲</button>
            <button type="button" class="sl-emoji-nav-btn" id="btn-emoji-scroll-down" title="${this.currentLang === "pt" ? "Descer" : "Scroll down"}">▼</button>
            <button type="button" class="sl-emoji-nav-btn sl-emoji-close-btn" id="btn-emoji-close" title="${this.currentLang === "pt" ? "Fechar" : "Close"}">✕</button>
          </div>
        </div>

        ${this._isSkinTonePanelOpen ? `
          <div class="sl-skin-tone-panel">
            <div class="sl-skin-tone-panel-header">
              <span>${this.currentLang === "pt" ? "Escolha o tom de pele padrão:" : "Choose default skin tone:"}</span>
              <span style="font-size: 0.68rem; opacity: 0.85;">💾 ${this.currentLang === "pt" ? "Salvo no navegador" : "Saved in browser"}</span>
            </div>
            <div class="sl-skin-tone-options">
              ${ne.map((i) => {
      const n = W("👊", i.modifier), l = this._selectedSkinTone === i.modifier || this._selectedSkinTone === "default" && i.modifier === "", s = this.currentLang === "pt" ? i.namePt : i.nameEn;
      return `
                  <button type="button" class="sl-tone-btn ${l ? "sl-tone-selected" : ""}" data-tone-mod="${i.modifier || "default"}" title="${s}">
                    ${n}
                  </button>
                `;
    }).join("")}
            </div>
          </div>
        ` : ""}

        <div class="sl-emoji-scroll" id="emoji-scroll-container">
          ${e.map(
      (i) => `
            <div class="sl-emoji-category">
              <span class="sl-emoji-category-title">${i.name}</span>
              <div class="sl-emoji-grid">
                ${i.emojis.map((n) => {
        const l = ie.has(n), s = l ? W(n, this._selectedSkinTone) : n;
        return `
                      <button type="button" class="sl-emoji-item" data-emoji="${s}" data-base-emoji="${n}" data-toneable="${l ? "true" : "false"}" title="${s}">
                        ${s}
                      </button>
                    `;
      }).join("")}
              </div>
            </div>
          `
    ).join("")}
        </div>

        <button type="button" class="sl-emoji-gif-btn" id="btn-insert-gif" title="${this.currentLang === "pt" ? "Insere modelo Markdown de GIF" : "Inserts Markdown GIF template"}">
          <span>🖼️</span>
          <span>${t}</span>
        </button>
      </div>
    `;
  }
  /**
   * Insere texto ou emojis na posição atual do cursor na textarea
   */
  insertTextAtCursor(e) {
    if (!this.shadowRoot) return;
    const t = this.shadowRoot.getElementById("composer-textarea");
    if (!t) return;
    const r = t.selectionStart ?? t.value.length, o = t.selectionEnd ?? t.value.length, a = t.value, i = a.substring(0, r), n = a.substring(o);
    t.value = i + e + n, this._composerText = t.value;
    const l = r + e.length;
    this._isEmojiPickerOpen = !1, this.render();
    const s = this.shadowRoot.getElementById("composer-textarea");
    s && (s.focus(), s.setSelectionRange(l, l));
  }
  /**
   * Renderiza a Lista Completa com Threads e Respostas Aninhadas
   */
  escapeHtml(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  getFilteredComments() {
    const e = this._searchQuery.trim().toLowerCase();
    if (!e)
      return this._comments;
    const t = e.startsWith("@") ? e.slice(1) : e, r = t.split(/\s+/).filter(Boolean), o = [];
    for (const a of this._comments) {
      let i = 0;
      const n = a.author.login.toLowerCase(), l = a.body.toLowerCase();
      if (n === t ? i += 100 : n.startsWith(t) ? i += 60 : n.includes(t) && (i += 40), l.includes(e) || l.includes(t))
        i += 35;
      else
        for (const s of r)
          l.includes(s) && (i += 10);
      if (a.replies && a.replies.length > 0)
        for (const s of a.replies) {
          const c = s.author.login.toLowerCase(), b = s.body.toLowerCase();
          if (c === t ? i += 50 : c.includes(t) && (i += 25), b.includes(e) || b.includes(t))
            i += 20;
          else
            for (const g of r)
              b.includes(g) && (i += 5);
        }
      i > 0 && o.push({ comment: a, score: i });
    }
    return o.sort((a, i) => i.score - a.score), o.map((a) => a.comment);
  }
  /**
   * Renderiza a Barra de Ferramentas / Buscador acima da Lista de Comentários
   */
  renderCommentsToolbar() {
    return this._comments.length === 0 && !this._searchQuery ? "" : `
      <div class="sl-toolbar" part="toolbar">
        <div class="sl-search-wrapper" part="search-wrapper">
          <svg class="sl-search-svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <input
            type="text"
            id="sl-search-input"
            class="sl-search-input"
            part="search-input"
            placeholder="${this.currentLang === "pt" ? "Buscar comentários ou @autor..." : "Search comments or @user..."}"
            value="${this.escapeHtml(this._searchQuery)}"
            autocomplete="off"
            spellcheck="false"
            aria-label="${this.currentLang === "pt" ? "Buscar comentários ou autor" : "Search comments or author"}"
          />
          ${this._searchQuery ? `<button type="button" class="sl-search-clear-btn" id="sl-search-clear" part="search-clear-btn" title="${this.currentLang === "pt" ? "Limpar busca (Esc)" : "Clear search (Esc)"}">✕</button>` : `<kbd class="sl-search-kbd" title="${this.currentLang === "pt" ? "Pressione / para buscar" : "Press / to search"}">/</kbd>`}
        </div>
      </div>
    `;
  }
  /**
   * Renderiza a Lista Completa com Threads, Filtros de Busca e Paginação
   */
  renderCommentsList() {
    const e = this._searchQuery.trim().length > 0, t = this.getFilteredComments();
    if (t.length === 0) {
      const c = this.currentLang === "pt", b = e ? c ? `Nenhum comentário encontrado para "${this._searchQuery}".` : `No comments found for "${this._searchQuery}".` : c ? "Nenhum comentário por aqui ainda. Seja o primeiro a semear uma reflexão!" : "No comments here yet. Be the first to scatter an idea!";
      return `
        ${e ? `
          <div class="sl-search-banner" part="search-banner">
            <span>🔍 ${c ? "0 comentários encontrados" : "0 comments found"}</span>
            <button type="button" class="sl-search-banner-clear" part="search-banner-clear">${c ? "Limpar busca" : "Clear search"}</button>
          </div>
        ` : ""}
        <div class="sl-empty" part="empty">
          <span class="sl-empty-icon">${e ? "🔍" : "🍃"}</span>
          <p>${b}</p>
        </div>
      `;
    }
    const r = t.length, o = Math.max(1, Math.ceil(r / this._pageSize));
    this._currentPage > o && (this._currentPage = o);
    const a = (this._currentPage - 1) * this._pageSize, i = a + this._pageSize, n = t.slice(a, i);
    let l = "";
    if (e) {
      const c = this.currentLang === "pt";
      l = `
        <div class="sl-search-banner" part="search-banner">
          <span>🔍 ${c ? `${r} comentário(s) para` : `${r} comment(s) for`} "<strong>${this.escapeHtml(this._searchQuery)}</strong>"</span>
          <button type="button" class="sl-search-banner-clear" part="search-banner-clear">${c ? "Limpar busca" : "Clear search"}</button>
        </div>
      `;
    }
    let s = "";
    if (r > this._pageSize) {
      const c = this.currentLang === "pt", b = c ? "‹ Anterior" : "‹ Previous", g = c ? "Próxima ›" : "Next ›", w = c ? `Página ${this._currentPage} de ${o} • ${r} comentários` : `Page ${this._currentPage} of ${o} • ${r} comments`;
      let v = "";
      for (let k = 1; k <= o; k++) {
        const _ = k === this._currentPage;
        v += `
          <button class="sl-page-btn ${_ ? "sl-page-active" : ""}" data-page="${k}" part="page-btn" ${_ ? 'aria-current="page"' : ""}>
            ${k}
          </button>
        `;
      }
      s = `
        <nav class="sl-pagination" part="pagination" aria-label="${c ? "Paginação de comentários" : "Comments pagination"}">
          <div class="sl-pagination-controls">
            <button class="sl-page-btn sl-page-nav-btn btn-prev-page" part="page-btn-prev" ${this._currentPage <= 1 ? "disabled" : ""}>
              ${b}
            </button>
            ${v}
            <button class="sl-page-btn sl-page-nav-btn btn-next-page" part="page-btn-next" ${this._currentPage >= o ? "disabled" : ""}>
              ${g}
            </button>
          </div>
          <span class="sl-pagination-info" part="pagination-info">${w}</span>
        </nav>
      `;
    }
    return `
      <div class="sl-list" part="list">
        ${l}
        ${n.map((c) => this.renderCommentCard(c)).join("")}
        ${s}
      </div>
    `;
  }
  /**
   * Renderiza um Card de Comentário Individual
   */
  renderCommentCard(e, t = !1, r) {
    var C;
    const o = this._repo ? this._repo.split("/")[0].toLowerCase() : "", i = e.author.isAuthor || o && e.author.login.toLowerCase() === o ? `<span class="sl-author-badge" part="author-badge">${this.currentLang === "pt" ? "Autor" : "Author"}</span>` : "", n = this._speakingId === e.id, l = this._replyingToId === e.id, s = this._editingId === e.id, c = this._openMenuId === e.id, b = n ? this.currentLang === "pt" ? "⏸️ Pausar" : "⏸️ Pause" : this.currentLang === "pt" ? "🔊 Ouvir" : "🔊 Listen", g = this.currentLang === "pt" ? "Responder" : "Reply", w = this.getVisitorLang(), v = e.originalLang || "pt", k = v !== w, _ = this.getLanguageName(v, w), T = e.isShowingTranslation && e.translatedBody ? e.translatedBody : e.body, z = this.formatDate(e.createdAt), A = !!((C = e.reactions) != null && C.find((E) => E.content === "👍" && E.viewerHasReacted)), j = this.currentLang === "pt" ? "Gostei" : "Like", $ = A ? this.currentLang === "pt" ? "Remover curtida" : "Remove like" : this.currentLang === "pt" ? "Curtir" : "Like", M = (e.reactions || []).filter((E) => E.count > 0);
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
              ${i}
              <time class="sl-date" part="date" datetime="${e.createdAt}" title="${z.full}">${z.relative}</time>
              ${e.isEdited ? `<span class="sl-edited-badge">(${this.currentLang === "pt" ? "editado" : "edited"})</span>` : ""}
            </div>
          </div>

          <!-- Menu de Contexto In-Place (•••) -->
          <div class="sl-menu-wrapper">
            <button class="sl-menu-btn" data-menu-id="${e.id}" aria-label="${this.currentLang === "pt" ? "Opções do comentário" : "Comment options"}">
              •••
            </button>
            ${c ? `
              <div class="sl-dropdown-menu" part="dropdown-menu">
                <button class="sl-dropdown-item btn-edit" data-comment-id="${e.id}">
                  <span>✏️</span>
                  <span>${this.currentLang === "pt" ? "Editar" : "Edit"}</span>
                </button>
                <button class="sl-dropdown-item btn-copy-link" data-comment-id="${e.id}">
                  <span>🔗</span>
                  <span>${this.currentLang === "pt" ? "Copiar link" : "Copy link"}</span>
                </button>
                <button class="sl-dropdown-item sl-dropdown-danger btn-delete" data-comment-id="${e.id}">
                  <span>🗑️</span>
                  <span>${this.currentLang === "pt" ? "Excluir" : "Delete"}</span>
                </button>
              </div>
            ` : ""}
          </div>
        </div>

        <!-- Corpo do Comentário ou Editor In-Place -->
        ${s ? `
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
            ${e.isShowingTranslation ? this.parseMarkdown(T) : e.bodyHtml || this.parseMarkdown(T)}
          </div>
        `}

        <!-- Rodapé do Card: Reações estilo LinkedIn, Responder e Ações da Direita -->
        <div class="sl-card-footer">
          <div class="sl-actions-left">
            <!-- Gatilho de Reação Universal (Gostei / Like) -->
            <div class="sl-reaction-container" data-comment-id="${e.id}">
              <button type="button" class="sl-reaction-trigger-btn" data-comment-id="${e.id}" data-emoji="👍" part="reaction-trigger-btn" title="${$}">
                <span>👍</span>
                <span>${j}</span>
              </button>

              <!-- Popover Flutuante com 6 Emojis Animados -->
              <div class="sl-reaction-popover" role="toolbar" aria-label="Reações">
                ${le.map((E) => {
      var D;
      const F = this.currentLang === "pt" ? E.namePt : E.nameEn;
      return `
                    <button type="button" class="sl-reaction-picker-item ${!!((D = e.reactions) != null && D.find((G) => G.content === E.symbol && G.viewerHasReacted)) ? "sl-reacted" : ""}" data-comment-id="${e.id}" data-emoji="${E.symbol}" data-tooltip="${F}" title="${F}" aria-label="${F}">
                      ${E.symbol}
                    </button>
                  `;
    }).join("")}
              </div>
            </div>

            <!-- Resumo / Badges de Reações Recebidas -->
            ${M.length > 0 ? `
              <div class="sl-reactions-summary">
                ${M.map(
      (E) => `
                  <button type="button" class="sl-reaction-badge ${E.viewerHasReacted ? "sl-reacted" : ""}" data-comment-id="${e.id}" data-emoji="${E.content}" title="${E.viewerHasReacted ? this.currentLang === "pt" ? "Remover sua reação" : "Remove your reaction" : this.currentLang === "pt" ? "Reagir com " + E.content : "React with " + E.content}">
                    <span>${E.content}</span>
                    <span>${E.count}</span>
                  </button>
                `
    ).join("")}
              </div>
            ` : ""}

            <button class="sl-reply-btn" data-reply-to="${e.id}" data-parent-id="${r || e.id}" part="reply-btn">
              <span>↩️</span>
              <span>${g}</span>
            </button>
          </div>

          <div class="sl-actions-right">
            ${k ? `
              <button class="sl-translate-btn btn-toggle-translate ${e.isShowingTranslation ? "sl-translated" : ""}" data-comment-id="${e.id}" part="translate-btn" title="${e.isShowingTranslation ? this.currentLang === "pt" ? "Ver original" : "See original" : this.currentLang === "pt" ? "Traduzir comentário" : "Translate comment"}">
                <span>${this._isTranslatingId === e.id ? "⏳" : e.isShowingTranslation ? "✨" : "🌐"}</span>
                <span>${this._isTranslatingId === e.id ? this.currentLang === "pt" ? "Traduzindo..." : "Translating..." : e.isShowingTranslation ? this.currentLang === "pt" ? `Traduzido do ${_} • Ver original` : `Translated from ${_} • See original` : this.currentLang === "pt" ? `Publicado em ${_} • Traduzir` : `Published in ${_} • Translate`}</span>
              </button>
            ` : ""}

            <button class="sl-audio-btn ${n ? "sl-audio-playing" : ""}" data-speak-id="${e.id}" data-text="${encodeURIComponent(T)}" data-lang="${e.isShowingTranslation ? w : v}" part="audio-btn">
              <span>${b}</span>
            </button>
          </div>
        </div>

        <!-- Formulário de Resposta Aninhada Inline -->
        ${l ? `
          <div class="sl-inline-composer">
            <textarea id="reply-textarea-${e.id}" placeholder="${this.currentLang === "pt" ? `Respondendo para @${e.author.login}...` : `Replying to @${e.author.login}...`}">${this._replyText}</textarea>
            <div class="sl-inline-footer">
              <button class="sl-btn sl-btn-secondary btn-cancel-reply" data-comment-id="${e.id}">
                ${this.currentLang === "pt" ? "Cancelar" : "Cancel"}
              </button>
              <button class="sl-btn sl-btn-primary btn-send-reply" data-comment-id="${e.id}" data-parent-id="${r || e.id}">
                ${this.currentLang === "pt" ? "Responder" : "Reply"}
              </button>
            </div>
          </div>
        ` : ""}

        <!-- Respostas Aninhadas (Threads Estilo LinkedIn com Linha Guia) -->
        ${!t && e.replies && e.replies.length > 0 ? (() => {
      const E = e.replies.length, F = this._expandedThreads.has(e.id), J = F || E <= 2 ? e.replies : e.replies.slice(0, 2), D = E - 2;
      return `
                  <div class="sl-thread">
                    ${J.map((G) => this.renderCommentCard(G, !0, e.id)).join("")}
                    ${E > 2 ? `
                      <button class="sl-thread-toggle-btn" data-thread-id="${e.id}" part="thread-toggle-btn">
                        <span>${F ? "▴" : "💬"}</span>
                        <span>${F ? this.currentLang === "pt" ? "Recolher respostas" : "Collapse replies" : this.currentLang === "pt" ? `Ver mais ${D} resposta${D > 1 ? "s" : ""} ▾` : `View ${D} more repl${D > 1 ? "ies" : "y"} ▾`}</span>
                      </button>
                    ` : ""}
                  </div>
                `;
    })() : ""}
      </article>
    `;
  }
  /**
   * Vinculação de Eventos Interativos do Shadow DOM
   */
  attachEvents() {
    if (!this.shadowRoot) return;
    const e = this.shadowRoot.getElementById("tab-write"), t = this.shadowRoot.getElementById("tab-preview"), r = this.shadowRoot.getElementById("composer-textarea");
    if (r) {
      const d = () => {
        this._savedComposerSelection = {
          start: r.selectionStart ?? 0,
          end: r.selectionEnd ?? 0
        };
      };
      r.addEventListener("input", () => {
        this._composerText = r.value, d(), r.style.height = "auto", r.style.height = `${r.scrollHeight}px`;
      }), r.addEventListener("click", d), r.addEventListener("keyup", d), r.addEventListener("select", d);
    }
    e && e.addEventListener("click", () => {
      this._activeTab = "write", this.render();
    }), t && t.addEventListener("click", () => {
      r && (this._composerText = r.value), this._activeTab = "preview", this.render();
    });
    const o = this.shadowRoot.getElementById("btn-code-toggle");
    o && o.addEventListener("click", (d) => {
      var x;
      d.stopPropagation();
      const h = (x = this.shadowRoot) == null ? void 0 : x.getElementById("composer-textarea");
      if (h) {
        const p = h.selectionStart ?? this._composerText.length, f = h.selectionEnd ?? this._composerText.length;
        if (this._savedComposerSelection = { start: p, end: f }, f > p && h.value.substring(p, f).trim().length > 0) {
          this.insertCodeBlock("typescript");
          return;
        }
      }
      this._isCodePickerOpen = !this._isCodePickerOpen, this.render();
    }), this.shadowRoot.querySelectorAll(".sl-code-lang-btn").forEach((d) => {
      d.addEventListener("click", (h) => {
        h.stopPropagation();
        const x = d.getAttribute("data-lang") || "typescript";
        this.insertCodeBlock(x);
      });
    });
    const i = this.shadowRoot.getElementById("btn-font-toggle");
    i && i.addEventListener("click", () => {
      this._fontMode = this._fontMode === "default" ? "monospace" : "default", this.render();
    });
    const n = this.shadowRoot.getElementById("btn-emoji-toggle");
    n && n.addEventListener("click", (d) => {
      d.stopPropagation(), this._isEmojiPickerOpen = !this._isEmojiPickerOpen, this.render();
    });
    const l = this.shadowRoot.getElementById("emoji-scroll-container"), s = this.shadowRoot.getElementById("btn-emoji-scroll-up"), c = this.shadowRoot.getElementById("btn-emoji-scroll-down"), b = this.shadowRoot.getElementById("btn-emoji-close");
    s && l && s.addEventListener("click", (d) => {
      d.stopPropagation(), l.scrollBy({ top: -90, behavior: "smooth" });
    }), c && l && c.addEventListener("click", (d) => {
      d.stopPropagation(), l.scrollBy({ top: 90, behavior: "smooth" });
    }), b && b.addEventListener("click", (d) => {
      d.stopPropagation(), this._isEmojiPickerOpen = !1, this.render();
    });
    const g = this.shadowRoot.getElementById("btn-skin-tone-toggle");
    g && g.addEventListener("click", (d) => {
      d.stopPropagation(), this._isSkinTonePanelOpen = !this._isSkinTonePanelOpen, this._activeTonePickerEmoji = null, this.render();
    }), this.shadowRoot.querySelectorAll(".sl-tone-btn").forEach((d) => {
      d.addEventListener("click", (h) => {
        h.stopPropagation();
        const x = d.dataset.toneMod || "default", p = x === "default" ? "default" : x;
        this.saveSkinTonePreference(p);
        const f = this._activeTonePickerEmoji;
        if (this._isSkinTonePanelOpen = !1, this._activeTonePickerEmoji = null, f) {
          const S = W(f, p === "default" ? "" : p);
          this.insertTextAtCursor(S);
        } else
          this.render();
      });
    }), this.shadowRoot.querySelectorAll(".sl-emoji-item").forEach((d) => {
      d.addEventListener("click", (h) => {
        h.stopPropagation();
        const x = d.dataset.toneable === "true", p = d.dataset.baseEmoji, f = d.dataset.emoji;
        if (x && p && this._selectedSkinTone === null) {
          this._activeTonePickerEmoji = p, this._isSkinTonePanelOpen = !0, this.render();
          return;
        }
        f && this.insertTextAtCursor(f);
      });
    });
    const k = this.shadowRoot.getElementById("btn-insert-gif");
    if (k && k.addEventListener("click", (d) => {
      d.stopPropagation(), this._isEmojiPickerOpen = !1, this._isMediaModalOpen = !0, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this.render();
    }), this._isMediaModalOpen) {
      const d = this.shadowRoot.getElementById("media-modal-backdrop"), h = this.shadowRoot.getElementById("btn-close-media-modal"), x = this.shadowRoot.getElementById("btn-cancel-media-modal"), p = this.shadowRoot.getElementById("btn-confirm-media-modal"), f = this.shadowRoot.getElementById("media-url-input"), S = this.shadowRoot.getElementById("media-alt-input"), P = this.shadowRoot.getElementById("media-file-input"), B = this.shadowRoot.getElementById("btn-browse-media-file"), N = this.shadowRoot.getElementById("btn-remove-media-file"), U = this.shadowRoot.getElementById("media-drop-zone"), H = this.currentLang === "pt", Y = () => {
        this._isMediaModalOpen = !1, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0, this.render();
      };
      h && h.addEventListener("click", Y), x && x.addEventListener("click", Y), d && d.addEventListener("click", (L) => {
        L.target === d && Y();
      });
      const V = async (L) => {
        this._mediaModalError = null;
        const R = await me(L, H);
        if (!R.safe || !R.format) {
          this._mediaModalError = R.reason || (H ? "Arquivo inválido." : "Invalid file."), this.render();
          return;
        }
        try {
          const I = await ge(L, R.format, 520, 0.82);
          this._mediaModalFile = L, this._mediaModalFileDataUrl = I.dataUrl, this._mediaModalWasCompressed = I.wasCompressed, this._mediaModalCompressedSize = I.compressedSize, this._mediaModalUrl = "", this._mediaModalAlt.trim() || (this._mediaModalAlt = L.name.replace(/\.[^/.]+$/, "")), this._mediaModalError = null, this.render();
        } catch {
          this._mediaModalError = H ? "Erro ao processar ou otimizar a imagem selecionada." : "Error processing or optimizing selected image.", this.render();
        }
      };
      f && (f.addEventListener("input", () => {
        if (this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0, this._mediaModalUrl = f.value, this._mediaModalUrl.trim().length > 0) {
          const L = K(this._mediaModalUrl);
          this._mediaModalError = L.safe ? null : L.reason || (H ? "Link inválido." : "Invalid link.");
        } else
          this._mediaModalError = null;
      }), f.addEventListener("blur", () => {
        this._mediaModalUrl.trim() && this.render();
      })), S && S.addEventListener("input", () => {
        this._mediaModalAlt = S.value;
      }), B && P && B.addEventListener("click", (L) => {
        L.stopPropagation(), P.click();
      }), P && P.addEventListener("change", async () => {
        if (P.files && P.files.length > 0) {
          const L = P.files[0];
          await V(L);
        }
      }), N && N.addEventListener("click", (L) => {
        L.stopPropagation(), this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0, this._mediaModalError = null, this.render();
      }), this.shadowRoot.querySelectorAll(".sl-recent-gif-item").forEach((L) => {
        L.addEventListener("click", () => {
          const R = L.getAttribute("data-url") || "", I = L.getAttribute("data-alt") || "";
          this._mediaModalUrl = R, this._mediaModalAlt = I, this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0, this._mediaModalError = null, this.render();
        });
      });
      const Z = this.shadowRoot.getElementById("btn-clear-recent-gifs");
      Z && Z.addEventListener("click", () => {
        pe(), this.render();
      }), U && (U.addEventListener("dragover", (L) => {
        L.preventDefault(), U.classList.add("sl-drag-over");
      }), U.addEventListener("dragleave", () => {
        U.classList.remove("sl-drag-over");
      }), U.addEventListener("drop", async (L) => {
        var q;
        L.preventDefault(), U.classList.remove("sl-drag-over");
        const R = L;
        if ((q = R.dataTransfer) != null && q.files && R.dataTransfer.files.length > 0) {
          const O = R.dataTransfer.files[0];
          await V(O);
          return;
        }
        let I = "";
        if (R.dataTransfer && (I = R.dataTransfer.getData("text/uri-list") || R.dataTransfer.getData("text/plain") || "", !I && R.dataTransfer.getData("text/html"))) {
          const O = R.dataTransfer.getData("text/html").match(/src=["'](https:[^"']+)["']/i);
          O && (I = O[1]);
        }
        if (I = I.trim(), I) {
          this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0;
          const O = K(I);
          this._mediaModalUrl = I, this._mediaModalError = O.safe ? null : O.reason || (H ? "URL inválida ou insegura." : "Invalid or unsafe URL."), this.render();
        }
      })), p && p.addEventListener("click", () => {
        const L = this._mediaModalAlt.trim() || "GIF";
        if (this._mediaModalFileDataUrl && this._mediaModalFile) {
          const O = `![${L}](${this._mediaModalFileDataUrl})`;
          this._isMediaModalOpen = !1, this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0, this._mediaModalError = null, this.insertTextAtCursor(O);
          return;
        }
        const R = this._mediaModalUrl.trim();
        if (!R) {
          this._mediaModalError = H ? "Por favor, insira a URL do GIF ou carregue um arquivo local." : "Please enter a GIF URL or upload a local file.", this.render();
          return;
        }
        const I = K(R);
        if (!I.safe) {
          this._mediaModalError = I.reason || (H ? "URL inválida ou não segura." : "Invalid or unsafe URL."), this.render();
          return;
        }
        de(R, L);
        const q = `![${L}](${R})`;
        this._isMediaModalOpen = !1, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this.insertTextAtCursor(q);
      });
    }
    if (this._isEmojiPickerOpen) {
      const d = (h) => {
        var f;
        const x = h.composedPath(), p = (f = this.shadowRoot) == null ? void 0 : f.getElementById("emoji-popover");
        p && !x.includes(p) && n && !x.includes(n) && (this._isEmojiPickerOpen = !1, this.render(), document.removeEventListener("click", d));
      };
      setTimeout(() => document.addEventListener("click", d), 0);
    }
    const _ = this.shadowRoot.getElementById("btn-login-submit");
    _ && _.addEventListener("click", () => {
      this.loginWithGitHub();
    });
    const T = this.shadowRoot.getElementById("btn-logout");
    T && T.addEventListener("click", () => {
      this.logout();
    });
    const z = this.shadowRoot.getElementById("btn-submit");
    z && z.addEventListener("click", async () => {
      const d = this._composerText.trim();
      if (!d) {
        alert(
          this.currentLang === "pt" ? "Por favor, escreva uma reflexão antes de publicar." : "Please write a note before posting."
        );
        return;
      }
      await this.handlePostComment(d);
    }), this.shadowRoot.querySelectorAll(".sl-reaction-trigger-btn").forEach((d) => {
      d.addEventListener("click", async (h) => {
        if (h.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const x = h.currentTarget, p = x.getAttribute("data-comment-id"), f = x.getAttribute("data-emoji") || "👍";
        p && await this.handleToggleReaction(p, f);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-picker-item").forEach((d) => {
      d.addEventListener("click", async (h) => {
        if (h.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const x = h.currentTarget, p = x.getAttribute("data-comment-id"), f = x.getAttribute("data-emoji"), S = x.closest(".sl-reaction-container");
        S == null || S.classList.remove("sl-popover-open"), p && f && await this.handleToggleReaction(p, f);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-badge").forEach((d) => {
      d.addEventListener("click", async (h) => {
        if (h.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const x = h.currentTarget, p = x.getAttribute("data-comment-id"), f = x.getAttribute("data-emoji");
        p && f && await this.handleToggleReaction(p, f);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-container").forEach((d) => {
      d.addEventListener("mouseenter", () => {
        d.classList.add("sl-popover-open");
      }), d.addEventListener("mouseleave", () => {
        d.classList.remove("sl-popover-open");
      }), d.addEventListener("contextmenu", (h) => {
        h.preventDefault(), d.classList.toggle("sl-popover-open");
      });
    }), this.shadowRoot.querySelectorAll(".sl-reply-btn:not(.btn-toggle-translate)").forEach((d) => {
      d.addEventListener("click", (h) => {
        var f;
        const p = h.currentTarget.getAttribute("data-reply-to");
        if (!this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        if (this._replyingToId === p)
          this._replyingToId = null, this._replyText = "";
        else {
          this._replyingToId = p;
          let S = "";
          const P = this._comments.find((B) => B.id === p);
          if (P)
            S = P.author.login;
          else
            for (const B of this._comments) {
              const N = (f = B.replies) == null ? void 0 : f.find((U) => U.id === p);
              if (N) {
                S = N.author.login;
                break;
              }
            }
          this._replyText = S ? `@${S} ` : "";
        }
        this.render();
      });
    }), this.shadowRoot.querySelectorAll(".sl-thread-toggle-btn").forEach((d) => {
      d.addEventListener("click", (h) => {
        const p = h.currentTarget.getAttribute("data-thread-id");
        p && (this._expandedThreads.has(p) ? this._expandedThreads.delete(p) : this._expandedThreads.add(p), this.render());
      });
    }), this.shadowRoot.querySelectorAll(".btn-send-reply").forEach((d) => {
      d.addEventListener("click", async (h) => {
        var B;
        const x = h.currentTarget, p = x.getAttribute("data-comment-id"), f = x.getAttribute("data-parent-id") || p, S = (B = this.shadowRoot) == null ? void 0 : B.getElementById(`reply-textarea-${p}`);
        if (!S) return;
        const P = S.value.trim();
        !P || !f || await this.handlePostReply(f, P);
      });
    }), this.shadowRoot.querySelectorAll(".btn-cancel-reply").forEach((d) => {
      d.addEventListener("click", () => {
        this._replyingToId = null, this._replyText = "", this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-toggle-translate").forEach((d) => {
      d.addEventListener("click", (h) => {
        const p = h.currentTarget.getAttribute("data-comment-id");
        p && this.toggleTranslate(p);
      });
    }), this.shadowRoot.querySelectorAll(".sl-audio-btn").forEach((d) => {
      d.addEventListener("click", (h) => {
        const x = h.currentTarget, p = x.getAttribute("data-speak-id"), f = x.getAttribute("data-text"), S = x.getAttribute("data-lang") || void 0;
        if (p && f) {
          const P = decodeURIComponent(f);
          this.toggleSpeak(p, P, S);
        }
      });
    }), this.shadowRoot.querySelectorAll(".sl-menu-btn").forEach((d) => {
      d.addEventListener("click", (h) => {
        h.stopPropagation();
        const p = h.currentTarget.getAttribute("data-menu-id");
        this._openMenuId = this._openMenuId === p ? null : p, this.render();
      });
    }), this.shadowRoot.addEventListener("click", () => {
      this._openMenuId && (this._openMenuId = null, this.render());
    }), this.shadowRoot.querySelectorAll(".btn-edit").forEach((d) => {
      d.addEventListener("click", (h) => {
        h.stopPropagation();
        const p = h.currentTarget.getAttribute("data-comment-id");
        this._editingId = p, this._openMenuId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-save-edit").forEach((d) => {
      d.addEventListener("click", async (h) => {
        var P;
        const p = h.currentTarget.getAttribute("data-comment-id"), f = (P = this.shadowRoot) == null ? void 0 : P.getElementById(`edit-textarea-${p}`);
        if (!f || !p) return;
        const S = f.value.trim();
        S && await this.handleSaveEdit(p, S);
      });
    }), this.shadowRoot.querySelectorAll(".btn-cancel-edit").forEach((d) => {
      d.addEventListener("click", () => {
        this._editingId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-delete").forEach((d) => {
      d.addEventListener("click", async (h) => {
        h.stopPropagation();
        const p = h.currentTarget.getAttribute("data-comment-id");
        if (!p) return;
        const f = this.currentLang === "pt" ? "Tem certeza que deseja excluir esta nota?" : "Are you sure you want to delete this note?";
        confirm(f) && await this.handleDelete(p);
      });
    }), this.shadowRoot.querySelectorAll(".btn-copy-link").forEach((d) => {
      d.addEventListener("click", (h) => {
        h.stopPropagation();
        const p = h.currentTarget.getAttribute("data-comment-id"), f = `${window.location.href.split("#")[0]}#comment-${p}`;
        navigator.clipboard.writeText(f).then(() => {
          alert(
            this.currentLang === "pt" ? "Link copiado para a área de transferência!" : "Link copied to clipboard!"
          );
        }), this._openMenuId = null, this.render();
      });
    }), this.setupCodeBlocks();
  }
  /**
   * Configura blocos de código nos comentários e na área de prévia:
   * Numeração de linhas, botão Copiar com feedback visual e adaptação de blocos do GitHub Discussions.
   */
  setupCodeBlocks() {
    if (!this.shadowRoot) return;
    this.shadowRoot.querySelectorAll(
      ".sl-card-body pre, .sl-preview-area pre"
    ).forEach((s) => {
      var z;
      if (s.closest(".sl-code-block")) return;
      const c = s.querySelector("code") || s, b = c.textContent || "";
      if (!b.trim()) return;
      let g = "code";
      const w = s.closest('[class*="highlight-source-"]');
      if (w) {
        const A = w.className.match(/highlight-source-([a-zA-Z0-9_-]+)/);
        A && A[1] && (g = A[1]);
      } else if (s.getAttribute("lang"))
        g = s.getAttribute("lang") || "code";
      else if (c.className) {
        const A = c.className.match(/(?:language|lang)-([a-zA-Z0-9_-]+)/);
        A && A[1] && (g = A[1]);
      }
      const v = this.currentLang === "pt" ? "Copiar" : "Copy", k = this.currentLang === "pt" ? "Copiar código" : "Copy code", _ = document.createElement("div");
      _.className = "sl-code-block", _.setAttribute("data-lang", g);
      const T = document.createElement("div");
      if (T.className = "sl-code-header", T.innerHTML = `
        <span class="sl-code-badge">${g}</span>
        <button type="button" class="sl-code-copy-btn" title="${k}" aria-label="${k}">
          <svg class="sl-copy-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
          </svg>
          <span class="sl-copy-text">${v}</span>
        </button>
      `, !c.querySelector(".sl-code-line")) {
        const A = b.split(/\r?\n/);
        c.innerHTML = A.map((j, $) => {
          const M = j.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          return `<span class="sl-code-line"><span class="sl-line-num">${$ + 1}</span><span class="sl-line-code">${M || " "}</span></span>`;
        }).join(`
`);
      }
      (z = s.parentNode) == null || z.insertBefore(_, s), _.appendChild(T), _.appendChild(s), s.classList.add("sl-code-pre"), c.classList.add("sl-code-body");
    }), this.shadowRoot.querySelectorAll(".sl-code-copy-btn").forEach((s) => {
      s.addEventListener("click", async (c) => {
        c.stopPropagation();
        const b = s.closest(".sl-code-block");
        if (!b) return;
        const g = b.querySelectorAll(".sl-line-code");
        let w = "";
        if (g.length > 0)
          w = Array.from(g).map((v) => v.textContent || "").join(`
`);
        else {
          const v = b.querySelector("pre");
          w = (v == null ? void 0 : v.textContent) || "";
        }
        try {
          await navigator.clipboard.writeText(w);
          const v = s.querySelector(".sl-copy-text"), k = v ? v.textContent : "";
          s.classList.add("sl-copied"), v && (v.textContent = this.currentLang === "pt" ? "Copiado!" : "Copied!"), setTimeout(() => {
            s.classList.remove("sl-copied"), v && k && (v.textContent = k);
          }, 2e3);
        } catch {
        }
      });
    }), this.shadowRoot.querySelectorAll(".sl-page-btn[data-page]").forEach((s) => {
      s.addEventListener("click", (c) => {
        const g = c.currentTarget.getAttribute("data-page");
        if (!g) return;
        const w = parseInt(g, 10);
        w !== this._currentPage && (this._currentPage = w, this.render(), this.scrollListToTop());
      });
    });
    const o = this.shadowRoot.querySelector(".btn-prev-page");
    o && o.addEventListener("click", () => {
      this._currentPage > 1 && (this._currentPage--, this.render(), this.scrollListToTop());
    });
    const a = this.shadowRoot.querySelector(".btn-next-page");
    a && a.addEventListener("click", () => {
      const s = Math.ceil(this._comments.length / this._pageSize);
      this._currentPage < s && (this._currentPage++, this.render(), this.scrollListToTop());
    });
    const i = this.shadowRoot.getElementById("sl-search-input");
    i && (i.addEventListener("input", (s) => {
      var g;
      const c = s.target.value;
      this._searchQuery = c, this._currentPage = 1, this.render();
      const b = (g = this.shadowRoot) == null ? void 0 : g.getElementById("sl-search-input");
      if (b) {
        b.focus();
        const w = b.value.length;
        b.setSelectionRange(w, w);
      }
    }), i.addEventListener("keydown", (s) => {
      s.key === "Escape" && (this._searchQuery = "", this._currentPage = 1, this.render());
    }));
    const n = this.shadowRoot.getElementById("sl-search-clear");
    n && n.addEventListener("click", () => {
      this._searchQuery = "", this._currentPage = 1, this.render();
    });
    const l = this.shadowRoot.querySelector(".sl-search-banner-clear");
    l && l.addEventListener("click", () => {
      this._searchQuery = "", this._currentPage = 1, this.render();
    });
  }
  scrollListToTop() {
    var t;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".sl-container");
    e && e.scrollIntoView({ behavior: "smooth", block: "start" });
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
            createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
            originalLang: this.detectTextLanguage(e),
            reactions: [],
            replies: []
          };
          this._comments.unshift(a), this._currentPage = 1, this._composerText = "", this._activeTab = "write", this.render();
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
      createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
      originalLang: this.detectTextLanguage(e),
      reactions: [],
      replies: []
    };
    this._comments.unshift(r), this._currentPage = 1, this._composerText = "", this._activeTab = "write", this.render(), this.dispatchEvent(
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
        ), i = this._comments.find((n) => n.id === e);
        if (i) {
          i.replies || (i.replies = []), i.replies.push({
            id: a.id,
            author: {
              login: a.author.login,
              avatarUrl: a.author.avatarUrl,
              url: a.author.url,
              isAuthor: !1
            },
            body: a.body,
            bodyHtml: a.bodyHTML,
            createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
            originalLang: this.detectTextLanguage(t),
            reactions: [],
            parentId: e
          }), this._expandedThreads.add(e), this._replyingToId = null, this._replyText = "", this.render();
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
        createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
        originalLang: this.detectTextLanguage(t),
        reactions: [],
        parentId: e
      };
      o.replies.push(a), this._expandedThreads.add(e), this._replyingToId = null, this._replyText = "", this.render(), this.dispatchEvent(
        new CustomEvent("reply-added", {
          detail: a,
          bubbles: !0,
          composed: !0
        })
      );
    }
  }
  async handleSaveEdit(e, t) {
    let r = null;
    if (this._brokerClient && this._authToken)
      try {
        r = await this._brokerClient.updateComment(e, t);
      } catch (a) {
        console.error("Falha ao editar comentário via broker:", a);
      }
    const o = (a) => {
      a.body = t, a.isEdited = !0, a.bodyHtml = (r == null ? void 0 : r.bodyHTML) || void 0, a.translatedBody = void 0, a.isShowingTranslation = !1;
    };
    for (const a of this._comments) {
      if (a.id === e) {
        o(a);
        break;
      }
      if (a.replies) {
        const i = a.replies.find((n) => n.id === e);
        if (i) {
          o(i);
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
    for (const n of this._comments) {
      if (n.id === e) {
        r = n;
        break;
      }
      if (n.replies) {
        const l = n.replies.find((s) => s.id === e);
        if (l) {
          r = l;
          break;
        }
      }
    }
    if (!r) return;
    r.reactions || (r.reactions = []);
    const o = r.reactions.find((n) => n.content === t), i = !!(o != null && o.viewerHasReacted) ? "remove" : "add";
    if (i === "remove" ? o && (o.count = Math.max(0, o.count - 1), o.viewerHasReacted = !1, o.count === 0 && (r.reactions = r.reactions.filter((n) => n.content !== t))) : o ? (o.count += 1, o.viewerHasReacted = !0) : r.reactions.push({
      content: t,
      count: 1,
      viewerHasReacted: !0
    }), this.render(), this._brokerClient && this._authToken)
      try {
        await this._brokerClient.toggleReaction(e, t, i);
      } catch (n) {
        if (console.error(`Falha ao processar reação (${i}) via broker:`, n), i === "add") {
          const l = r.reactions.find((s) => s.content === t);
          l && (l.count = Math.max(0, l.count - 1), l.viewerHasReacted = !1, l.count === 0 && (r.reactions = r.reactions.filter((s) => s.content !== t)));
        } else {
          const l = r.reactions.find((s) => s.content === t);
          l ? (l.count += 1, l.viewerHasReacted = !0) : r.reactions.push({ content: t, count: 1, viewerHasReacted: !0 });
        }
        this.render();
      }
  }
}
typeof window < "u" && !customElements.get("scatter-leaf") && customElements.define("scatter-leaf", be);
export {
  be as ScatterLeaf
};
//# sourceMappingURL=scatterleaf.js.map
