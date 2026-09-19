var se = Object.defineProperty;
var ne = (y, m, e) => m in y ? se(y, m, { enumerable: !0, configurable: !0, writable: !0, value: e }) : y[m] = e;
var b = (y, m, e) => ne(y, typeof m != "symbol" ? m + "" : m, e);
const ie = `
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
  justify-content: space-between;
  margin-top: 0.25rem;
  margin-bottom: 1.25rem;
  gap: 0.75rem;
}

.sl-toolbar-count {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--sl-text-muted);
  white-space: nowrap;
  letter-spacing: -0.01em;
  user-select: none;
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
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  .sl-search-wrapper {
    flex: 1 1 200px;
    width: auto !important;
  }
  .sl-toolbar-count {
    margin-left: auto;
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

/* Modo de Edição In-Place */
.sl-edit-mode {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin: 0.5rem 0 0.75rem 0;
}

.sl-edit-mode .sl-textarea {
  min-height: 90px;
  padding: 0.6rem 0.75rem;
  border: 1px solid var(--sl-border);
  border-radius: var(--sl-radius, 8px);
  background: var(--sl-bg);
  box-sizing: border-box;
}

.sl-edit-mode .sl-textarea:focus {
  border-color: var(--sl-accent);
  box-shadow: 0 0 0 2px var(--sl-mention-bg);
}

.sl-edit-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}

.sl-edit-actions .sl-btn {
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 500;
  border-radius: var(--sl-radius, 6px);
  cursor: pointer;
  transition: all 0.15s ease;
}

/* Bloco de Código Técnico Estruturado */
.sl-code-block {
  position: relative;
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

/* Elemento <pre> do Código */
.sl-code-pre {
  display: block !important;
  box-sizing: border-box !important;
  margin: 0 !important;
  padding: 0.5rem 0 !important;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  overflow-x: auto !important;
  overflow-y: auto !important;
  scroll-behavior: smooth;
  font-family: ui-monospace, SFMono-Regular, "JetBrains Mono", Menlo, Consolas, monospace !important;
  font-size: 0.78rem !important;
  line-height: 1.35rem !important;
}

/* Quando longo e minimizado (default para > 20 linhas) */
.sl-code-block-long.sl-collapsed .sl-code-pre {
  max-height: 290px !important;
  overflow-y: auto !important;
}

/* Quando expandido */
.sl-code-block-long.sl-expanded .sl-code-pre {
  max-height: none !important;
  overflow-y: visible !important;
}

.sl-code-pre::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.sl-code-pre::-webkit-scrollbar-track {
  background: transparent;
}
.sl-code-pre::-webkit-scrollbar-thumb {
  background: var(--sl-border);
  border-radius: 4px;
}
.sl-code-pre::-webkit-scrollbar-thumb:hover {
  background: var(--sl-text-muted);
}

/* Barra inferior de Expandir / Minimizar Código */
.sl-code-expand-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.35rem 0.75rem;
  background: var(--sl-tab-bg, rgba(0, 0, 0, 0.03));
  border-top: 1px solid var(--sl-border);
}

.sl-code-expand-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  background: transparent;
  border: none;
  color: var(--sl-accent);
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0.2rem 0.75rem;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.sl-code-expand-btn:hover {
  background: var(--sl-surface);
  color: var(--sl-text);
}

/* Controles Flutuantes de Rolagem de Código (Mobile & Desktop) */
.sl-code-scroll-controls {
  position: absolute;
  bottom: 38px; /* Acima da barra de expandir */
  right: 8px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.18);
  backdrop-filter: blur(8px);
  z-index: 5;
  opacity: 0.85;
  transition: opacity 0.15s ease, transform 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.sl-code-block-long.sl-expanded .sl-code-scroll-controls {
  display: none;
}

.sl-code-block:hover .sl-code-scroll-controls,
.sl-code-scroll-controls:hover,
.sl-code-scroll-controls:focus-within {
  opacity: 1;
}

/* Brilho Neon no Container ao interagir com as setas */
.sl-code-scroll-controls:has(.sl-code-scroll-btn:active:not(.sl-disabled)) {
  border-color: var(--sl-accent);
  box-shadow: 0 0 16px rgba(56, 189, 248, 0.45), 0 2px 8px rgba(0, 0, 0, 0.25);
}

.sl-code-scroll-btn {
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: var(--sl-text);
  cursor: pointer;
  padding: 0;
  transition: background 0.12s ease, color 0.12s ease, opacity 0.12s ease, box-shadow 0.15s ease, transform 0.1s ease;
}

.sl-code-scroll-btn:hover:not(.sl-disabled) {
  background: var(--sl-hover, rgba(125, 125, 125, 0.15));
  color: var(--sl-accent);
  box-shadow: 0 0 8px rgba(56, 189, 248, 0.35);
}

/* Efeito Neon Vibrante ao Clicar / Tocar (:active) */
.sl-code-scroll-btn:active:not(.sl-disabled) {
  color: var(--sl-accent);
  background: rgba(56, 189, 248, 0.2);
  box-shadow: 0 0 14px var(--sl-accent), inset 0 0 6px var(--sl-accent);
  filter: drop-shadow(0 0 6px var(--sl-accent));
  transform: scale(0.9);
}

.sl-code-scroll-btn.sl-disabled {
  opacity: 0.25;
  cursor: not-allowed;
  pointer-events: none;
}

.sl-code-body {
  display: block;
  width: 100%;
}

.sl-code-line {
  display: flex;
  align-items: baseline;
  min-height: 1.35rem;
  line-height: 1.35rem;
  transition: background 0.1s ease;
}

.sl-code-line:hover {
  background: rgba(125, 125, 125, 0.06);
}

.sl-line-num {
  width: 2.8rem;
  min-width: 2.8rem;
  text-align: right;
  padding: 0 0.65rem 0 0.5rem;
  color: var(--sl-text-muted);
  opacity: 0.45;
  user-select: none;
  -webkit-user-select: none;
  font-size: 0.72rem;
  line-height: 1.35rem;
  border-right: 1px solid var(--sl-border);
  flex-shrink: 0;
  box-sizing: border-box;
}

.sl-line-code {
  flex: 1;
  padding-left: 0.65rem;
  padding-right: 0.65rem;
  white-space: pre;
  color: var(--sl-text);
  font-size: 0.78rem;
  line-height: 1.35rem;
  tab-size: 2;
  word-break: normal;
  overflow-wrap: normal;
  box-sizing: border-box;
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

.sl-modal-recents-actions {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.sl-btn-manage-recents,
.sl-btn-clear-recents {
  background: transparent;
  border: none;
  font-size: 0.72rem;
  color: var(--sl-text-muted);
  cursor: pointer;
  padding: 0.1rem 0.35rem;
  border-radius: 4px;
  transition: all 0.15s ease;
}

.sl-btn-manage-recents:hover {
  color: var(--sl-accent);
}

.sl-btn-manage-recents.sl-active {
  color: var(--sl-accent);
  font-weight: 600;
}

.sl-btn-clear-recents:hover {
  color: #ef4444;
}

.sl-modal-recents-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.45rem;
  max-height: 175px;
  overflow-y: auto;
  padding-right: 2px;
}

.sl-modal-recents-grid::-webkit-scrollbar {
  width: 4px;
}
.sl-modal-recents-grid::-webkit-scrollbar-track {
  background: transparent;
}
.sl-modal-recents-grid::-webkit-scrollbar-thumb {
  background: var(--sl-border);
  border-radius: 4px;
}

.sl-recent-gif-wrapper {
  position: relative;
  border-radius: 6px;
  overflow: hidden;
}

.sl-recent-gif-item {
  width: 100%;
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
  transform: scale(1.03);
  border-color: var(--sl-accent);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}

.sl-recent-gif-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Botão de Exclusão Individual de GIF Recente */
.sl-btn-delete-recent-gif {
  position: absolute;
  top: 4px;
  right: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.72);
  backdrop-filter: blur(4px);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  line-height: 1;
  cursor: pointer;
  opacity: 0;
  transform: scale(0.85);
  transition: opacity 0.15s ease, transform 0.15s ease, background 0.15s ease;
  z-index: 2;
  padding: 0;
}

.sl-recent-gif-wrapper:hover .sl-btn-delete-recent-gif,
.sl-recent-gif-wrapper:focus-within .sl-btn-delete-recent-gif,
.sl-managing-recents .sl-btn-delete-recent-gif {
  opacity: 1;
  transform: scale(1);
}

.sl-btn-delete-recent-gif:hover {
  background: #ef4444;
  border-color: #ef4444;
  transform: scale(1.1);
}

@media (max-width: 640px) {
  .sl-modal-recents-grid {
    grid-template-columns: repeat(3, 1fr);
    max-height: 160px;
  }
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
class le {
  constructor(m, e) {
    b(this, "baseUrl");
    b(this, "getToken");
    this.baseUrl = m.replace(/\/+$/, ""), this.getToken = e;
  }
  getAuthHeaders() {
    const m = this.getToken(), e = {
      "Content-Type": "application/json"
    };
    return m && (e.Authorization = `Bearer ${m}`), e;
  }
  /**
   * Auto-Discovery de IDs do repositório e categoria no GitHub
   */
  async discover(m, e = "General") {
    const t = await fetch(
      `${this.baseUrl}/api/discovery?repo=${encodeURIComponent(m)}&category=${encodeURIComponent(e)}`
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
  async fetchDiscussions(m, e) {
    const r = this.getToken() ? `&_t=${Date.now()}` : "", o = await fetch(
      `${this.baseUrl}/api/discussions?repo=${encodeURIComponent(m)}&term=${encodeURIComponent(e)}${r}`,
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
  async exchangeOAuthCode(m, e) {
    const t = await fetch(`${this.baseUrl}/api/oauth/access_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: m, redirect_uri: e })
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
  async fetchGitHubUserProfile(m) {
    const e = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${m}`,
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
  async createDiscussion(m, e, t, r) {
    const o = await fetch(`${this.baseUrl}/api/discussions`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ repositoryId: m, categoryId: e, title: t, body: r })
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
  async addComment(m, e, t) {
    const r = await fetch(`${this.baseUrl}/api/comments`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ discussionId: m, body: e, replyToId: t })
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
  async updateComment(m, e) {
    const t = await fetch(`${this.baseUrl}/api/comments`, {
      method: "PATCH",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ commentId: m, body: e })
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
  async deleteComment(m) {
    const e = await fetch(`${this.baseUrl}/api/comments?id=${encodeURIComponent(m)}`, {
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
  async toggleReaction(m, e, t) {
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
      body: JSON.stringify({ subjectId: m, content: o, action: t })
    });
    if (!a.ok) {
      const n = await a.json().catch(() => ({}));
      throw new Error(n.error || `Erro ao atualizar reação: HTTP ${a.status}`);
    }
    return await a.json();
  }
}
const ae = "scatterleaf_skin_tone", ce = [
  { id: "default", namePt: "Padrão (Amarelo)", nameEn: "Default (Yellow)", modifier: "", swatch: "🟡" },
  { id: "light", namePt: "Tom Claro", nameEn: "Light Skin Tone", modifier: "🏻", swatch: "🏻" },
  { id: "medium-light", namePt: "Tom Médio-Claro", nameEn: "Medium-Light Skin Tone", modifier: "🏼", swatch: "🏼" },
  { id: "medium", namePt: "Tom Médio", nameEn: "Medium Skin Tone", modifier: "🏽", swatch: "🏽" },
  { id: "medium-dark", namePt: "Tom Médio-Escuro", nameEn: "Medium-Dark Skin Tone", modifier: "🏾", swatch: "🏾" },
  { id: "dark", namePt: "Tom Escuro", nameEn: "Dark Skin Tone", modifier: "🏿", swatch: "🏿" }
], de = /* @__PURE__ */ new Set([
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
function J(y, m) {
  if (!m || m === "default") return y;
  if (y.includes("‍")) {
    const t = y.split("‍");
    return `${t[0].replace(/[\u{1F3FB}-\u{1F3FF}]/gu, "").replace(/\uFE0F/g, "")}${m}‍${t.slice(1).join("‍")}`;
  }
  return y.replace(/[\u{1F3FB}-\u{1F3FF}]/gu, "").replace(/\uFE0F/g, "") + m;
}
const pe = [
  { symbol: "👍", namePt: "Gostei", nameEn: "Like" },
  { symbol: "❤️", namePt: "Amei", nameEn: "Love" },
  { symbol: "🚀", namePt: "Sensacional", nameEn: "Rocket" },
  { symbol: "🎉", namePt: "Parabéns", nameEn: "Celebrate" },
  { symbol: "😄", namePt: "Divertido", nameEn: "Laugh" },
  { symbol: "👀", namePt: "De olho", nameEn: "Eyes" }
], ue = [
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
], Z = "scatterleaf_recent_gifs";
function Y() {
  try {
    const y = localStorage.getItem(Z);
    return y ? JSON.parse(y) : [];
  } catch {
    return [];
  }
}
function he(y, m) {
  try {
    const e = Y().filter((t) => t.url !== y);
    e.unshift({ url: y, alt: m || "", timestamp: Date.now() }), localStorage.setItem(Z, JSON.stringify(e.slice(0, 24)));
  } catch {
  }
}
function ge(y) {
  try {
    const m = Y().filter((e) => e.url !== y);
    localStorage.setItem(Z, JSON.stringify(m));
  } catch {
  }
}
function me() {
  try {
    localStorage.removeItem(Z);
  } catch {
  }
}
const be = [
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
], oe = [
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
function Q(y) {
  if (!y || typeof y != "string")
    return { safe: !1, reason: "URL inválida ou ausente." };
  const m = y.trim();
  if (m.startsWith("data:image/gif;base64,") || m.startsWith("data:image/"))
    return { safe: !0 };
  if (!m.startsWith("https://"))
    return {
      safe: !1,
      reason: "Por segurança e privacidade, apenas links seguros (HTTPS) são permitidos."
    };
  let e;
  try {
    e = new URL(m);
  } catch {
    return { safe: !1, reason: "Formato de URL inválido." };
  }
  const t = e.hostname.toLowerCase(), r = e.pathname.toLowerCase(), o = e.search.toLowerCase(), a = t + r + o;
  for (const n of be)
    if (t === n || t.endsWith("." + n))
      return {
        safe: !1,
        reason: "Domínio bloqueado pelo filtro de conteúdo sensível / adulto."
      };
  for (const n of oe)
    if (new RegExp(`(^|[-_/.?&=])${n}([-_/.?&=]|$)`, "i").test(a))
      return {
        safe: !1,
        reason: "O link contém termos classificados como potencialmente sensíveis ou adultos."
      };
  return { safe: !0 };
}
async function fe(y) {
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
async function ve(y, m = !0) {
  if (!y)
    return { safe: !1, reason: m ? "Nenhum arquivo fornecido." : "No file provided." };
  const e = 3 * 1024 * 1024;
  if (y.size > e)
    return {
      safe: !1,
      reason: m ? "Arquivo excede o limite máximo permitido de 3 MB." : "File exceeds maximum allowed size of 3 MB."
    };
  const t = y.name.toLowerCase();
  for (const o of oe)
    if (new RegExp(`(^|[-_/.?&=])${o}([-_/.?&=]|$)`, "i").test(t))
      return {
        safe: !1,
        reason: m ? "O nome do arquivo contém termos classificados como potencialmente sensíveis ou adultos." : "File name contains terms classified as potentially sensitive or adult content."
      };
  const r = await fe(y);
  return !r.valid || !r.format ? {
    safe: !1,
    reason: m ? "Cabeçalho binário inválido. O arquivo não é uma imagem legítima (.gif, .webp, .png, .jpg)." : "Invalid binary header. File is not a legitimate image (.gif, .webp, .png, .jpg)."
  } : { safe: !0, format: r.format };
}
async function xe(y, m, e = 520, t = 0.82) {
  return m === "gif" ? new Promise((r, o) => {
    const a = new FileReader();
    a.onload = () => {
      const n = a.result, s = new Image();
      s.onload = () => {
        r({
          dataUrl: n,
          width: s.naturalWidth || 480,
          height: s.naturalHeight || 320,
          originalSize: y.size,
          compressedSize: y.size,
          wasCompressed: !1
        });
      }, s.onerror = () => {
        r({
          dataUrl: n,
          width: 480,
          height: 320,
          originalSize: y.size,
          compressedSize: y.size,
          wasCompressed: !1
        });
      }, s.src = n;
    }, a.onerror = o, a.readAsDataURL(y);
  }) : new Promise((r, o) => {
    const a = new FileReader();
    a.onload = () => {
      const n = a.result, s = new Image();
      s.onload = () => {
        let l = s.naturalWidth || s.width, i = s.naturalHeight || s.height;
        (l > e || i > e) && (l >= i ? (i = Math.round(i * e / l), l = e) : (l = Math.round(l * e / i), i = e));
        const p = document.createElement("canvas");
        p.width = l, p.height = i;
        const E = p.getContext("2d");
        if (!E) {
          r({
            dataUrl: n,
            width: l,
            height: i,
            originalSize: y.size,
            compressedSize: y.size,
            wasCompressed: !1
          });
          return;
        }
        E.drawImage(s, 0, 0, l, i);
        let c = p.toDataURL("image/webp", t);
        c.startsWith("data:image/webp") || (c = p.toDataURL("image/jpeg", t));
        const v = c.indexOf(","), g = v >= 0 ? c.slice(v + 1) : c, u = Math.round(g.length * 0.75);
        r({
          dataUrl: c,
          width: l,
          height: i,
          originalSize: y.size,
          compressedSize: u,
          wasCompressed: !0
        });
      }, s.onerror = o, s.src = n;
    }, a.onerror = o, a.readAsDataURL(y);
  });
}
class ye extends HTMLElement {
  constructor() {
    super();
    b(this, "_repo", "");
    b(this, "_category", "General");
    b(this, "_theme", "cream");
    b(this, "_lang", "pt");
    b(this, "_inputPosition", "top");
    b(this, "_broker", "");
    b(this, "_clientId", "Iv23liZHApvnx6e6wtMJ");
    b(this, "_pageSize", 10);
    b(this, "_currentPage", 1);
    b(this, "_title", "");
    b(this, "_term", "");
    b(this, "_comments", []);
    b(this, "_isLoading", !1);
    b(this, "_isBrokerConnected", !1);
    // Sessão de Autenticação
    b(this, "_currentUser", null);
    b(this, "_authToken", null);
    b(this, "_brokerClient", null);
    b(this, "_discussionId", null);
    b(this, "_repositoryId", null);
    b(this, "_categoryId", null);
    // Estados de Interface do Editor e Interações
    b(this, "_activeTab", "write");
    b(this, "_fontMode", "default");
    b(this, "_composerText", "");
    b(this, "_replyingToId", null);
    b(this, "_replyText", "");
    b(this, "_expandedThreads", /* @__PURE__ */ new Set());
    b(this, "_searchQuery", "");
    b(this, "_editingId", null);
    b(this, "_openMenuId", null);
    b(this, "_speakingId", null);
    b(this, "_isEmojiPickerOpen", !1);
    b(this, "_isCodePickerOpen", !1);
    b(this, "_savedComposerSelection", null);
    b(this, "_isTranslatingId", null);
    b(this, "_selectedSkinTone", null);
    b(this, "_isSkinTonePanelOpen", !1);
    b(this, "_activeTonePickerEmoji", null);
    b(this, "_themeObserver", null);
    // Modal de Inserção de Mídia Segura (Anti-NSFW)
    b(this, "_isMediaModalOpen", !1);
    b(this, "_isManagingRecentGifs", !1);
    b(this, "_mediaModalUrl", "");
    b(this, "_mediaModalAlt", "");
    // Fechamento de menus ao clicar fora do componente no document ou tecla Escape
    b(this, "_handleDocumentClick", (e) => {
      let t = !1;
      const r = e.composedPath();
      this._openMenuId && (r.some(
        (a) => {
          var n;
          return a instanceof HTMLElement && ((n = a.classList) == null ? void 0 : n.contains("sl-menu-wrapper"));
        }
      ) || (this._openMenuId = null, t = !0)), this._isCodePickerOpen && (r.some(
        (a) => {
          var n, s;
          return a instanceof HTMLElement && (((n = a.classList) == null ? void 0 : n.contains("sl-code-menu-wrapper")) || ((s = a.classList) == null ? void 0 : s.contains("sl-code-picker-popover")));
        }
      ) || (this._isCodePickerOpen = !1, t = !0)), this._isEmojiPickerOpen && (r.some(
        (a) => {
          var n, s;
          return a instanceof HTMLElement && (((n = a.classList) == null ? void 0 : n.contains("sl-emoji-wrapper")) || ((s = a.classList) == null ? void 0 : s.contains("sl-emoji-popover")));
        }
      ) || (this._isEmojiPickerOpen = !1, t = !0)), t && this.render();
    });
    b(this, "_handleDocumentKeydown", (e) => {
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
    b(this, "_mediaModalError", null);
    b(this, "_mediaModalFile", null);
    b(this, "_mediaModalFileDataUrl", null);
    b(this, "_mediaModalWasCompressed", !1);
    b(this, "_mediaModalCompressedSize", 0);
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
      "page-size",
      "title",
      "term"
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
      } else e === "title" ? this._title = r || "" : e === "term" && (this._term = r || "");
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
    this._title = this.getAttribute("title") || "", this._term = this.getAttribute("term") || "", this.hasAttribute("theme") || this.setAttribute("theme", this._theme), this.initBrokerClient();
  }
  /**
   * Inicializa e persiste o tom de pele padrão escolhido pelo usuário no navegador (localStorage)
   */
  initSkinTonePreference() {
    if (!(typeof window > "u"))
      try {
        const e = localStorage.getItem(ae);
        e !== null && (this._selectedSkinTone = e);
      } catch (e) {
        console.warn("🍃 [ScatterLeaf] localStorage inacessível para skin tones:", e);
      }
  }
  saveSkinTonePreference(e) {
    if (this._selectedSkinTone = e, typeof window < "u")
      try {
        localStorage.setItem(ae, e);
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
        const e = (L) => {
          if (!L || L === "transparent" || L === "rgba(0, 0, 0, 0)")
            return null;
          if (L.startsWith("#")) {
            let T = L.slice(1);
            if ((T.length === 3 || T.length === 4) && (T = T.split("").map((C) => C + C).join("")), T.length >= 6)
              return {
                r: parseInt(T.substring(0, 2), 16),
                g: parseInt(T.substring(2, 4), 16),
                b: parseInt(T.substring(4, 6), 16)
              };
          }
          const A = L.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
          return A ? {
            r: parseInt(A[1], 10),
            g: parseInt(A[2], 10),
            b: parseInt(A[3], 10)
          } : null;
        }, t = window.getComputedStyle(document.documentElement), r = window.getComputedStyle(document.body), o = this.parentElement || document.body, a = window.getComputedStyle(o), n = (L) => {
          for (const A of L) {
            const T = a.getPropertyValue(A).trim() || r.getPropertyValue(A).trim() || t.getPropertyValue(A).trim();
            if (T) {
              const C = e(T);
              if (C) return C;
            }
          }
          return null;
        };
        let s = n([
          "--sl-bg",
          "--page-bg",
          "--color-bg",
          "--background",
          "--color-background",
          "--bg-color",
          "--body-bg",
          "--bg"
        ]);
        if (!s) {
          let L = this;
          for (; L; ) {
            const A = window.getComputedStyle(L).backgroundColor, T = e(A);
            if (T) {
              s = T;
              break;
            }
            L = L.parentElement;
          }
        }
        s || (s = e(r.backgroundColor) || e(t.backgroundColor) || { r: 255, g: 255, b: 255 });
        let l = n([
          "--sl-text",
          "--page-text",
          "--color-text",
          "--text-color",
          "--color-foreground",
          "--foreground",
          "--text"
        ]);
        if (!l) {
          let L = this;
          for (; L; ) {
            const A = window.getComputedStyle(L).color, T = e(A);
            if (T) {
              l = T;
              break;
            }
            L = L.parentElement;
          }
        }
        let i = n([
          "--sl-accent",
          "--page-accent",
          "--color-accent",
          "--color-primary",
          "--primary",
          "--accent",
          "--brand"
        ]);
        if (!i) {
          const L = document.querySelector("a");
          L && (i = e(window.getComputedStyle(L).color));
        }
        const p = document.documentElement.classList.contains("dark") || document.body.classList.contains("dark") || document.documentElement.getAttribute("data-theme") === "dark" || document.body.getAttribute("data-theme") === "dark" || document.body.getAttribute("data-page-theme") === "midnight" || document.body.getAttribute("data-page-theme") === "slate" || document.body.getAttribute("data-page-theme") === "terminal", E = 0.2126 * s.r + 0.7152 * s.g + 0.0722 * s.b, c = p || E < 128;
        l || (l = c ? { r: 230, g: 237, b: 243 } : { r: 28, g: 25, b: 23 }), i || (i = c ? { r: 88, g: 166, b: 255 } : { r: 146, g: 64, b: 14 });
        let v, g, u, _, x, S, P;
        if (c) {
          const L = Math.min(255, Math.round(s.r + 15)), A = Math.min(255, Math.round(s.g + 18)), T = Math.min(255, Math.round(s.b + 22));
          v = `rgb(${L}, ${A}, ${T})`, g = "rgba(0, 0, 0, 0.35)", u = "rgba(255, 255, 255, 0.12)", _ = `rgba(${l.r}, ${l.g}, ${l.b}, 0.62)`, x = `rgb(${Math.min(255, i.r + 30)}, ${Math.min(255, i.g + 30)}, ${Math.min(255, i.b + 30)})`, S = `rgba(${i.r}, ${i.g}, ${i.b}, 0.16)`, P = `rgba(${i.r}, ${i.g}, ${i.b}, 0.35)`;
        } else
          v = "rgba(255, 255, 255, 0.96)", g = "rgba(0, 0, 0, 0.035)", u = "rgba(0, 0, 0, 0.12)", _ = `rgba(${l.r}, ${l.g}, ${l.b}, 0.65)`, x = `rgb(${i.r}, ${i.g}, ${i.b})`, S = `rgba(${i.r}, ${i.g}, ${i.b}, 0.12)`, P = `rgba(${i.r}, ${i.g}, ${i.b}, 0.28)`;
        const U = `rgb(${i.r}, ${i.g}, ${i.b})`;
        this.style.setProperty("--sl-bg", `rgb(${s.r}, ${s.g}, ${s.b})`), this.style.setProperty("--sl-surface", v), this.style.setProperty("--sl-tab-bg", g), this.style.setProperty("--sl-border", u), this.style.setProperty("--sl-text", `rgb(${l.r}, ${l.g}, ${l.b})`), this.style.setProperty("--sl-text-muted", _), this.style.setProperty("--sl-accent", U), this.style.setProperty("--sl-accent-hover", U), this.style.setProperty("--sl-mention-color", x), this.style.setProperty("--sl-mention-bg", S), this.style.setProperty("--sl-mention-border", P);
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
    this._broker ? this._brokerClient = new le(this._broker, () => this._authToken) : (this._brokerClient = null, this._isBrokerConnected = !1);
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
        const i = {
          login: "rnt-rez",
          avatarUrl: "https://github.com/rnt-rez.png",
          name: "Renato Rezende",
          url: "https://github.com/rnt-rez"
        };
        this._currentUser = i, this._authToken = "mock_token_local", sessionStorage.setItem("scatterleaf_token", this._authToken), sessionStorage.setItem("scatterleaf_user", JSON.stringify(i)), this.render();
      }
      return;
    }
    const e = encodeURIComponent(window.location.origin + window.location.pathname), t = encodeURIComponent("read:user"), r = `https://github.com/login/oauth/authorize?client_id=${this._clientId}&scope=${t}&redirect_uri=${e}`, o = 600, a = 700, n = window.screen.width / 2 - o / 2, s = window.screen.height / 2 - a / 2;
    window.open(
      r,
      "scatterleaf-oauth-popup",
      `width=${o},height=${a},top=${s},left=${n},scrollbars=yes,status=yes`
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
    return this._term ? this._term : typeof window > "u" ? "general" : window.location.pathname || "general";
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
          replies: (a.replies || []).map((n) => ({
            ...n,
            originalLang: n.originalLang || this.detectTextLanguage(n.body)
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
    const t = [], r = "SLCODEBLOCKTOKEN";
    let a = e.replace(
      /```([a-zA-Z0-9_-]*)\r?\n?([\s\S]*?)```/g,
      (n, s, l) => {
        const i = (s || "code").trim().toLowerCase(), c = l.replace(/^\n+|\n+$/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").split(/\r?\n/), v = c.map(
          (j, D) => `<span class="sl-code-line"><span class="sl-line-num">${D + 1}</span><span class="sl-line-code">${j || " "}</span></span>`
        ).join(""), g = c.length > 20, u = this.currentLang === "pt", _ = u ? "Copiar" : "Copy", x = u ? "Copiar código" : "Copy code", S = u ? "Rolar para cima" : "Scroll up", P = u ? "Rolar para baixo" : "Scroll down", U = g ? `${i} · ${c.length} ${u ? "linhas" : "lines"}` : i, L = u ? `Mostrar todas as ${c.length} linhas` : `Show all ${c.length} lines`, A = g ? `
            <div class="sl-code-scroll-controls" aria-label="${u ? "Navegação do código" : "Code navigation"}">
              <button type="button" class="sl-code-scroll-btn sl-scroll-up" title="${S}" aria-label="${S}">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                  <path d="M8 3.5a.75.75 0 0 1 .53.22l4.5 4.5a.75.75 0 0 1-1.06 1.06L8 5.31 4.03 9.28a.75.75 0 0 1-1.06-1.06l4.5-4.5A.75.75 0 0 1 8 3.5Z"/>
                </svg>
              </button>
              <button type="button" class="sl-code-scroll-btn sl-scroll-down" title="${P}" aria-label="${P}">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                  <path d="M8 12.5a.75.75 0 0 1-.53-.22l-4.5-4.5a.75.75 0 0 1 1.06-1.06L8 10.69l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.53.22Z"/>
                </svg>
              </button>
            </div>
            <div class="sl-code-expand-bar">
              <button type="button" class="sl-code-expand-btn" data-lines="${c.length}">
                <span>↕</span>
                <span class="sl-expand-text">${L}</span>
              </button>
            </div>
          ` : "", T = `
          <div class="sl-code-block ${g ? "sl-code-block-long sl-collapsed" : ""}" data-lang="${i}">
            <div class="sl-code-header">
              <span class="sl-code-badge">${U}</span>
              <button type="button" class="sl-code-copy-btn" title="${x}" aria-label="${x}">
                <svg class="sl-copy-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                  <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                </svg>
                <span class="sl-copy-text">${_}</span>
              </button>
            </div>
            <pre class="sl-code-pre"><code class="sl-code-body">${v}</code></pre>
            ${A}
          </div>
        `.trim(), C = t.length;
        return t.push(T), `${r}${C}ENDTOKEN`;
      }
    ).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return a = a.replace(/`([^`]+)`/g, '<code class="sl-inline-code">$1</code>'), a = a.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"), a = a.replace(/__([^_]+)__/g, "<strong>$1</strong>"), a = a.replace(/\*([^*]+)\*/g, "<em>$1</em>"), a = a.replace(/_([^_]+)_/g, "<em>$1</em>"), a = a.replace(/~~([^~]+)~~/g, "<del>$1</del>"), a = a.replace(
      /!\[([^\]]*)\]\(((?:https?:\/\/|data:image\/)[^\s)]+)\)/g,
      (n, s, l) => {
        const i = Q(l);
        return i.safe ? `<img src="${l}" alt="${s}" class="sl-embedded-img" loading="lazy" />` : `<span class="sl-blocked-media-notice" title="${i.reason || "Conteúdo potencialmente sensível"}">⚠️ [Mídia bloqueada: filtro de conteúdo sensível / link não seguro]</span>`;
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
    ), a = a.replace(/\n\n/g, "</p><p>"), a = a.replace(/\n/g, "<br />"), t.forEach((n, s) => {
      const l = `${r}${s}ENDTOKEN`;
      a = a.replace(new RegExp(`<p>\\s*${l}\\s*<\\/p>`, "g"), n), a = a.replace(new RegExp(l, "g"), n);
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
    }).format(t), a = Math.floor((Date.now() - t.getTime()) / 1e3), n = this.currentLang, s = n === "pt", l = n === "es";
    if (a < 60)
      return {
        relative: s ? "agora mesmo" : l ? "ahora mismo" : "just now",
        full: o
      };
    if (a < 3600) {
      const p = Math.floor(a / 60);
      return {
        relative: s ? `há ${p} ${p === 1 ? "minuto" : "minutos"}` : l ? `hace ${p} ${p === 1 ? "minuto" : "minutos"}` : `${p} ${p === 1 ? "minute" : "minutes"} ago`,
        full: o
      };
    }
    if (a < 86400) {
      const p = Math.floor(a / 3600);
      return {
        relative: s ? `há ${p} ${p === 1 ? "hora" : "horas"}` : l ? `hace ${p} ${p === 1 ? "hora" : "horas"}` : `${p} ${p === 1 ? "hour" : "hours"} ago`,
        full: o
      };
    }
    if (a < 604800) {
      const p = Math.floor(a / 86400);
      return {
        relative: s ? `há ${p} ${p === 1 ? "dia" : "dias"}` : l ? `hace ${p} ${p === 1 ? "día" : "días"}` : `${p} ${p === 1 ? "day" : "days"} ago`,
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
    const t = e.toLowerCase().replace(/[*_`#]/g, "").replace(/https?:\/\/\S+/g, "").replace(/@\w+/g, ""), r = (t.match(/\b(o|a|os|as|de|do|da|em|um|uma|para|com|não|que|isso|este|esta|muito|bom|bem|projeto|comentário|genial|manteiga|artigo|leitura)\b/g) || []).length * 2 + (t.match(/[ãõéêáàçíú]/g) || []).length * 3, o = (t.match(/\b(the|and|this|is|that|with|for|you|have|not|but|from|are|was|they|will|all|would|there|what|out|about|who|get|which|go|me|when|make|can|like|time|no|just|know|take|people|into|year|your|good|some|could|them|see|other|than|then|now|look|only|come|its|over|think|also|back|after|use|two|how|our|work|first|well|way|even|new|want|because|any|these|give|day|most|us|welcome|native|having|scroll|stutter)\b/g) || []).length * 2, a = (t.match(/\b(el|la|los|las|de|del|en|un|una|por|con|para|esto|este|esta|muy|bien|es|son|pero|como|más|sus|le|ya|o|fue|ha|sí|porque|cuando|sin|sobre|ser|tiene|también|me|hasta|hay|donde|quien|desde|todo|nos|durante|todos|uno|les|ni|contra|otros|ese|eso|ante|ellos|mí|antes|algunos|qué|unos|yo|otro|otras|otra|él|tanto|esa|estos|mucho|quienes|nada|muchos|cual|poco|ella|estar|estas|algunas|algo|nosotros|queda|excelente|artículos)\b/g) || []).length * 2 + (t.match(/[¿¡ñ]/g) || []).length * 4, n = (t.match(/\b(le|la|les|de|du|des|en|et|un|une|pour|avec|dans|que|qui|est|sont|sur|ce|cette|ces|mais|ou|donc|or|ni|car|très|bien)\b/g) || []).length * 2 + (t.match(/[œçèêàâôûëï]/g) || []).length * 3, s = Math.max(r, o, a, n);
    return s < 2 ? this.currentLang : s === r ? "pt" : s === o ? "en" : s === a ? "es" : s === n ? "fr" : this.currentLang;
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
    const t = (E) => {
      for (const c of E) {
        if (c.id === e) return c;
        if (c.replies) {
          const v = t(c.replies);
          if (v) return v;
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
    const o = this.currentLang, a = o === "pt", s = a ? "pt" : o === "es" ? "es" : "en", p = a ? {
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
    if (p[e]) {
      r.translatedBody = p[e], r.isShowingTranslation = !0, this.render();
      return;
    }
    this._isTranslatingId = e, this.render();
    try {
      const E = r.originalLang || this.detectTextLanguage(r.body), c = r.body.replace(/[#*`_~]/g, ""), g = await (await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(c.slice(0, 500))}&langpair=${E}|${s}`
      )).json();
      g && g.responseData && g.responseData.translatedText ? r.translatedBody = g.responseData.translatedText : r.translatedBody = a ? `[Tradução]: ${r.body}` : `[Translation]: ${r.body}`;
    } catch (E) {
      console.warn("🍃 [ScatterLeaf] Erro na tradução automática:", E), r.translatedBody = a ? `[Tradução]: ${r.body}` : `[Translation]: ${r.body}`;
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
    const a = t.replace(/```[\s\S]*?(?:```|$)|~~~[\s\S]*?(?:~~~|$)/g, "").replace(/[*_`#]/g, "").replace(/https?:\/\/\S+/g, "link").replace(/\s+/g, " ").trim() || (this._lang === "pt" ? "Este comentário contém apenas um bloco de código." : "This comment contains only a code block."), n = new SpeechSynthesisUtterance(a), l = r && {
      pt: "pt-BR",
      en: "en-US",
      es: "es-ES",
      fr: "fr-FR",
      de: "de-DE",
      it: "it-IT"
    }[r] || r || (this._lang === "pt" ? "pt-BR" : "en-US");
    if (n.lang = l, "speechSynthesis" in window) {
      const i = window.speechSynthesis.getVoices(), p = l.slice(0, 2).toLowerCase(), E = i.find(
        (c) => c.lang.replace("_", "-").toLowerCase().startsWith(p)
      );
      E && (n.voice = E);
    }
    n.rate = 1, n.onend = () => {
      this._speakingId = null, this.render();
    }, n.onerror = () => {
      this._speakingId = null, this.render();
    }, window.speechSynthesis.speak(n);
  }
  render() {
    if (!this.shadowRoot) return;
    const e = this._comments.reduce(
      (a, n) => {
        var s;
        return a + 1 + (((s = n.replies) == null ? void 0 : s.length) || 0);
      },
      0
    ), t = this.currentLang === "pt" ? "Comentários" : "Comments", r = this.renderComposer(), o = this._isLoading ? `<div style="text-align: center; padding: 2.5rem; color: var(--sl-text-muted);">
           <span style="font-size: 1.5rem; display: block; margin-bottom: 0.5rem; animation: spin 1s infinite linear;">🍃</span>
           ${this.currentLang === "pt" ? "Carregando notas na brisa..." : "Floating notes in the breeze..."}
         </div>` : this.renderCommentsList();
    this.shadowRoot.innerHTML = `
      <style>${ie}</style>
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
    var p, E, c, v, g;
    const e = this.currentLang === "pt", t = e ? "Inserir GIF" : "Insert GIF", r = e ? "Filtro Anti-NSFW ativo: URLs e arquivos locais passam por validação estrita de segurança, integridade binária e conteúdo sensível." : "Anti-NSFW filter active: URLs and local files undergo strict security, binary integrity, and sensitive content checks.", o = e ? "URL do GIF (HTTPS obrigatório):" : "GIF URL (Strict HTTPS):", a = e ? "Descrição do GIF / Alt text (Opcional):" : "GIF description / Alt text (Optional):", n = e ? "Cancelar" : "Cancel", s = e ? "Inserir GIF" : "Insert GIF", l = Y(), i = !!(this._mediaModalFile && this._mediaModalFileDataUrl);
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
                class="sl-modal-input ${i ? "sl-modal-input-disabled" : ""}"
                id="media-url-input"
                placeholder="${i ? e ? "Desativado (Arquivo local carregado abaixo)" : "Disabled (Local file loaded below)" : "https://media.giphy.com/media/.../giphy.gif"}"
                value="${this._mediaModalUrl}"
                ${i ? "disabled" : ""}
                ${i ? "" : "autofocus"}
              />
              ${this._mediaModalUrl && !this._mediaModalError && !i ? `
                <div class="sl-url-preview-card">
                  <img src="${this._mediaModalUrl}" alt="Prévia do GIF" class="sl-url-preview-img" onerror="this.style.display='none'" />
                  <span class="sl-url-preview-label">${e ? "✓ Link pronto para inserção" : "✓ Link ready to insert"}</span>
                </div>
              ` : ""}
            </div>

            <!-- OPÇÃO 2: Upload de Imagem Local / Drag & Drop -->
            <div class="sl-modal-input-group">
              <div class="sl-modal-label-row">
                <label class="sl-modal-label">${e ? "Upload de Imagem Local:" : "Local Image Upload:"}</label>
                <span class="sl-tag-exclusive-badge">${e ? "Opção 2: Arquivo" : "Option 2: File"}</span>
              </div>

              ${i ? `
                <div class="sl-file-selected-card">
                  <div class="sl-file-card-preview">
                    <img src="${this._mediaModalFileDataUrl}" alt="${(p = this._mediaModalFile) == null ? void 0 : p.name}" class="sl-file-card-img" />
                  </div>
                  <div class="sl-file-card-info">
                    <div class="sl-file-card-name" title="${(E = this._mediaModalFile) == null ? void 0 : E.name}">${(c = this._mediaModalFile) == null ? void 0 : c.name}</div>
                    <div class="sl-file-card-meta">
                      ${this._mediaModalWasCompressed ? `
                        <span>${((((v = this._mediaModalFile) == null ? void 0 : v.size) || 0) / 1024).toFixed(0)} KB → <strong>${(this._mediaModalCompressedSize / 1024).toFixed(1)} KB</strong></span>
                        <span class="sl-file-card-badge">⚡ Otimizado WebP</span>
                      ` : `
                        <span>${((((g = this._mediaModalFile) == null ? void 0 : g.size) || 0) / 1024).toFixed(1)} KB</span>
                        <span class="sl-file-card-badge">✓ Imagem</span>
                      `}
                    </div>
                  </div>
                  <button type="button" class="sl-btn-remove-file" id="btn-remove-media-file" title="${e ? "Remover arquivo e reativar URL" : "Remove file and re-enable URL"}">
                    ✕
                  </button>
                </div>
              ` : `
                <div class="sl-modal-dropzone sl-drop-zone" id="media-drop-zone">
                  <input type="file" id="media-file-input" accept="image/webp,image/png,image/jpeg,image/svg+xml" style="display: none;" />
                  <div class="sl-dropzone-content">
                    <div class="sl-dropzone-icon">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
                        <path d="M12 12v9" />
                        <path d="m16 16-4-4-4 4" />
                      </svg>
                    </div>
                    <div class="sl-dropzone-title">
                      ${e ? "Arraste e solte sua imagem aqui" : "Drag & drop your image here"}
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
                  <span>${e ? `Seus GIFs Recentes (${l.length}/24):` : `Your Recent GIFs (${l.length}/24):`}</span>
                  <div class="sl-modal-recents-actions">
                    <button type="button" class="sl-btn-manage-recents ${this._isManagingRecentGifs ? "sl-active" : ""}" id="btn-manage-recent-gifs" title="${this._isManagingRecentGifs ? e ? "Concluir gerenciamento" : "Done managing" : e ? "Gerenciar e remover GIFs" : "Manage & remove GIFs"}">
                      ${this._isManagingRecentGifs ? e ? "Concluir" : "Gerenciar" : e ? "Gerenciar" : "Manage"}
                    </button>
                    <button type="button" class="sl-btn-clear-recents" id="btn-clear-recent-gifs" title="${e ? "Limpar histórico de GIFs" : "Clear GIF history"}">
                      ${e ? "Limpar" : "Clear"}
                    </button>
                  </div>
                </div>
                <div class="sl-modal-recents-grid ${this._isManagingRecentGifs ? "sl-managing-recents" : ""}">
                  ${l.map(
      (u) => `
                    <div class="sl-recent-gif-wrapper">
                      <button type="button" class="sl-recent-gif-item" data-url="${u.url}" data-alt="${u.alt || ""}" title="${u.alt || u.url}">
                        <img src="${u.url}" alt="${u.alt || "GIF"}" loading="lazy" />
                      </button>
                      <button type="button" class="sl-btn-delete-recent-gif" data-url="${u.url}" title="${e ? "Remover este GIF dos recentes" : "Remove this GIF from recents"}" aria-label="${e ? "Remover GIF" : "Remove GIF"}">✕</button>
                    </div>
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
              ${n}
            </button>
            <button type="button" class="sl-btn sl-btn-primary" id="btn-confirm-media-modal">
              <span>🖼️</span>
              <span>${s}</span>
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
          ${ue.map(
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
    var S, P, U, L;
    const t = (S = this.shadowRoot) == null ? void 0 : S.getElementById("composer-textarea");
    if (!t) return;
    const r = ((P = this._savedComposerSelection) == null ? void 0 : P.start) ?? t.selectionStart ?? this._composerText.length, o = ((U = this._savedComposerSelection) == null ? void 0 : U.end) ?? t.selectionEnd ?? this._composerText.length, n = t.value.substring(r, o) || (this.currentLang === "pt" ? "// Seu código aqui" : "// Your code here"), s = t.value.substring(0, r), l = t.value.substring(o), i = s.length > 0 && !s.endsWith(`
`), p = l.length > 0 && !l.startsWith(`
`), E = i ? `
` : "", v = `${E}\`\`\`${e}
${n}
\`\`\`${p ? `
` : ""}`, g = s + v + l;
    this._composerText = g, this._isCodePickerOpen = !1, this._savedComposerSelection = null;
    const u = s.length + E.length + 3 + e.length + 1, _ = u + n.length;
    this.render();
    const x = (L = this.shadowRoot) == null ? void 0 : L.getElementById("composer-textarea");
    x && (x.focus(), x.setSelectionRange(u, _), x.style.height = "auto", x.style.height = `${x.scrollHeight}px`);
  }
  /**
   * Renderiza a Caixa de Escrita Principal (com Abas Escreva / Prévia, Aa e Autenticação)
   */
  renderComposer() {
    const e = this._activeTab === "write", t = this._fontMode === "monospace", r = this.currentLang === "pt" ? "Deixe uma nota ou comentário..." : "Leave a note or comment...", o = this.currentLang === "pt" ? "Escreva" : "Write", a = this.currentLang === "pt" ? "Prévia" : "Preview", n = this.currentLang === "pt" ? "Nada para pré-visualizar ainda." : "Nothing to preview yet.", s = this.currentLang === "pt" ? "Entre com GitHub" : "Sign in with GitHub", l = this.currentLang === "pt" ? "Publicar nota" : "Post note";
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
                  ${this._composerText ? this.parseMarkdown(this._composerText) : `<span class="sl-preview-empty">${n}</span>`}
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
                <span>${s}</span>
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
    ], t = this.currentLang === "pt" ? "Inserir GIF" : "Insert GIF", r = this.currentLang === "pt" ? "Emojis & Ícones" : "Emojis & Icons", o = J("👊", this._selectedSkinTone), a = this.currentLang === "pt" ? "Tom de pele (clique para escolher)" : "Skin tone (click to choose)";
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
              ${ce.map((n) => {
      const s = J("👊", n.modifier), l = this._selectedSkinTone === n.modifier || this._selectedSkinTone === "default" && n.modifier === "", i = this.currentLang === "pt" ? n.namePt : n.nameEn;
      return `
                  <button type="button" class="sl-tone-btn ${l ? "sl-tone-selected" : ""}" data-tone-mod="${n.modifier || "default"}" title="${i}">
                    ${s}
                  </button>
                `;
    }).join("")}
            </div>
          </div>
        ` : ""}

        <div class="sl-emoji-scroll" id="emoji-scroll-container">
          ${e.map(
      (n) => `
            <div class="sl-emoji-category">
              <span class="sl-emoji-category-title">${n.name}</span>
              <div class="sl-emoji-grid">
                ${n.emojis.map((s) => {
        const l = de.has(s), i = l ? J(s, this._selectedSkinTone) : s;
        return `
                      <button type="button" class="sl-emoji-item" data-emoji="${i}" data-base-emoji="${s}" data-toneable="${l ? "true" : "false"}" title="${i}">
                        ${i}
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
    const r = t.selectionStart ?? t.value.length, o = t.selectionEnd ?? t.value.length, a = t.value, n = a.substring(0, r), s = a.substring(o);
    t.value = n + e + s, this._composerText = t.value;
    const l = r + e.length;
    this._isEmojiPickerOpen = !1, this.render();
    const i = this.shadowRoot.getElementById("composer-textarea");
    i && (i.focus(), i.setSelectionRange(l, l));
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
      let n = 0;
      const s = a.author.login.toLowerCase(), l = a.body.toLowerCase();
      if (s === t ? n += 100 : s.startsWith(t) ? n += 60 : s.includes(t) && (n += 40), l.includes(e) || l.includes(t))
        n += 35;
      else
        for (const i of r)
          l.includes(i) && (n += 10);
      if (a.replies && a.replies.length > 0)
        for (const i of a.replies) {
          const p = i.author.login.toLowerCase(), E = i.body.toLowerCase();
          if (p === t ? n += 50 : p.includes(t) && (n += 25), E.includes(e) || E.includes(t))
            n += 20;
          else
            for (const c of r)
              E.includes(c) && (n += 5);
        }
      n > 0 && o.push({ comment: a, score: n });
    }
    return o.sort((a, n) => n.score - a.score), o.map((a) => a.comment);
  }
  /**
   * Renderiza a Barra de Ferramentas / Buscador acima da Lista de Comentários
   */
  renderCommentsToolbar() {
    if (this._comments.length === 0 && !this._searchQuery)
      return "";
    const e = this.currentLang === "pt", t = this._comments.length, r = this.getFilteredComments().length, o = this._searchQuery.trim().length > 0;
    let a = "";
    return o ? a = e ? `${r} de ${t} encontrados` : `${r} of ${t} found` : a = `${t} ${e ? t === 1 ? "comentário" : "comentários" : t === 1 ? "comment" : "comments"}`, `
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
        <div class="sl-toolbar-count" part="toolbar-count">
          <span>${a}</span>
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
      const p = this.currentLang === "pt", E = e ? p ? `Nenhum comentário encontrado para "${this._searchQuery}".` : `No comments found for "${this._searchQuery}".` : p ? "Nenhum comentário por aqui ainda. Seja o primeiro a semear uma reflexão!" : "No comments here yet. Be the first to scatter an idea!";
      return `
        ${e ? `
          <div class="sl-search-banner" part="search-banner">
            <span>🔍 ${p ? "0 comentários encontrados" : "0 comments found"}</span>
            <button type="button" class="sl-search-banner-clear" part="search-banner-clear">${p ? "Limpar busca" : "Clear search"}</button>
          </div>
        ` : ""}
        <div class="sl-empty" part="empty">
          <span class="sl-empty-icon">${e ? "🔍" : "🍃"}</span>
          <p>${E}</p>
        </div>
      `;
    }
    const r = t.length, o = Math.max(1, Math.ceil(r / this._pageSize));
    this._currentPage > o && (this._currentPage = o);
    const a = (this._currentPage - 1) * this._pageSize, n = a + this._pageSize, s = t.slice(a, n);
    let l = "";
    if (e) {
      const p = this.currentLang === "pt";
      l = `
        <div class="sl-search-banner" part="search-banner">
          <span>🔍 ${p ? `${r} comentário(s) para` : `${r} comment(s) for`} "<strong>${this.escapeHtml(this._searchQuery)}</strong>"</span>
          <button type="button" class="sl-search-banner-clear" part="search-banner-clear">${p ? "Limpar busca" : "Clear search"}</button>
        </div>
      `;
    }
    let i = "";
    if (r > this._pageSize) {
      const p = this.currentLang === "pt", E = p ? "‹ Anterior" : "‹ Previous", c = p ? "Próxima ›" : "Next ›", v = p ? `Página ${this._currentPage} de ${o} • ${r} comentários` : `Page ${this._currentPage} of ${o} • ${r} comments`;
      let g = "";
      for (let u = 1; u <= o; u++) {
        const _ = u === this._currentPage;
        g += `
          <button class="sl-page-btn ${_ ? "sl-page-active" : ""}" data-page="${u}" part="page-btn" ${_ ? 'aria-current="page"' : ""}>
            ${u}
          </button>
        `;
      }
      i = `
        <nav class="sl-pagination" part="pagination" aria-label="${p ? "Paginação de comentários" : "Comments pagination"}">
          <div class="sl-pagination-controls">
            <button class="sl-page-btn sl-page-nav-btn btn-prev-page" part="page-btn-prev" ${this._currentPage <= 1 ? "disabled" : ""}>
              ${E}
            </button>
            ${g}
            <button class="sl-page-btn sl-page-nav-btn btn-next-page" part="page-btn-next" ${this._currentPage >= o ? "disabled" : ""}>
              ${c}
            </button>
          </div>
          <span class="sl-pagination-info" part="pagination-info">${v}</span>
        </nav>
      `;
    }
    return `
      <div class="sl-list" part="list">
        ${l}
        ${s.map((p) => this.renderCommentCard(p)).join("")}
        ${i}
      </div>
    `;
  }
  /**
   * Renderiza um Card de Comentário Individual
   */
  renderCommentCard(e, t = !1, r) {
    var T;
    const o = this._repo ? this._repo.split("/")[0].toLowerCase() : "", n = e.author.isAuthor || o && e.author.login.toLowerCase() === o ? `<span class="sl-author-badge" part="author-badge">${this.currentLang === "pt" ? "Autor" : "Author"}</span>` : "", s = this._speakingId === e.id, l = this._replyingToId === e.id, i = this._editingId === e.id, p = this._openMenuId === e.id, E = s ? this.currentLang === "pt" ? "⏸️ Pausar" : "⏸️ Pause" : this.currentLang === "pt" ? "🔊 Ouvir" : "🔊 Listen", c = this.currentLang === "pt" ? "Responder" : "Reply", v = this.getVisitorLang(), g = e.originalLang || "pt", u = g !== v, _ = this.getLanguageName(g, v), x = e.isShowingTranslation && e.translatedBody ? e.translatedBody : e.body, S = this.formatDate(e.createdAt), P = !!((T = e.reactions) != null && T.find((C) => C.content === "👍" && C.viewerHasReacted)), U = this.currentLang === "pt" ? "Gostei" : "Like", L = P ? this.currentLang === "pt" ? "Remover curtida" : "Remove like" : this.currentLang === "pt" ? "Curtir" : "Like", A = (e.reactions || []).filter((C) => C.count > 0);
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
              ${n}
              <time class="sl-date" part="date" datetime="${e.createdAt}" title="${S.full}">${S.relative}</time>
              ${e.isEdited ? `<span class="sl-edited-badge">(${this.currentLang === "pt" ? "editado" : "edited"})</span>` : ""}
            </div>
          </div>

          <!-- Menu de Contexto In-Place (•••) -->
          <div class="sl-menu-wrapper">
            <button class="sl-menu-btn" data-menu-id="${e.id}" aria-label="${this.currentLang === "pt" ? "Opções do comentário" : "Comment options"}">
              •••
            </button>
            ${p ? `
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
        ${i ? `
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
            ${e.isShowingTranslation ? this.parseMarkdown(x) : e.bodyHtml || this.parseMarkdown(x)}
          </div>
        `}

        <!-- Rodapé do Card: Reações estilo LinkedIn, Responder e Ações da Direita -->
        <div class="sl-card-footer">
          <div class="sl-actions-left">
            <!-- Gatilho de Reação Universal (Gostei / Like) -->
            <div class="sl-reaction-container" data-comment-id="${e.id}">
              <button type="button" class="sl-reaction-trigger-btn" data-comment-id="${e.id}" data-emoji="👍" part="reaction-trigger-btn" title="${L}">
                <span>👍</span>
                <span>${U}</span>
              </button>

              <!-- Popover Flutuante com 6 Emojis Animados -->
              <div class="sl-reaction-popover" role="toolbar" aria-label="Reações">
                ${pe.map((C) => {
      var O;
      const j = this.currentLang === "pt" ? C.namePt : C.nameEn;
      return `
                    <button type="button" class="sl-reaction-picker-item ${!!((O = e.reactions) != null && O.find((I) => I.content === C.symbol && I.viewerHasReacted)) ? "sl-reacted" : ""}" data-comment-id="${e.id}" data-emoji="${C.symbol}" data-tooltip="${j}" title="${j}" aria-label="${j}">
                      ${C.symbol}
                    </button>
                  `;
    }).join("")}
              </div>
            </div>

            <!-- Resumo / Badges de Reações Recebidas -->
            ${A.length > 0 ? `
              <div class="sl-reactions-summary">
                ${A.map(
      (C) => `
                  <button type="button" class="sl-reaction-badge ${C.viewerHasReacted ? "sl-reacted" : ""}" data-comment-id="${e.id}" data-emoji="${C.content}" title="${C.viewerHasReacted ? this.currentLang === "pt" ? "Remover sua reação" : "Remove your reaction" : this.currentLang === "pt" ? "Reagir com " + C.content : "React with " + C.content}">
                    <span>${C.content}</span>
                    <span>${C.count}</span>
                  </button>
                `
    ).join("")}
              </div>
            ` : ""}

            <button class="sl-reply-btn" data-reply-to="${e.id}" data-parent-id="${r || e.id}" part="reply-btn">
              <span>↩️</span>
              <span>${c}</span>
            </button>
          </div>

          <div class="sl-actions-right">
            ${u ? `
              <button class="sl-translate-btn btn-toggle-translate ${e.isShowingTranslation ? "sl-translated" : ""}" data-comment-id="${e.id}" part="translate-btn" title="${e.isShowingTranslation ? this.currentLang === "pt" ? "Ver original" : "See original" : this.currentLang === "pt" ? "Traduzir comentário" : "Translate comment"}">
                <span>${this._isTranslatingId === e.id ? "⏳" : e.isShowingTranslation ? "✨" : "🌐"}</span>
                <span>${this._isTranslatingId === e.id ? this.currentLang === "pt" ? "Traduzindo..." : "Translating..." : e.isShowingTranslation ? this.currentLang === "pt" ? `Traduzido do ${_} • Ver original` : `Translated from ${_} • See original` : this.currentLang === "pt" ? `Publicado em ${_} • Traduzir` : `Published in ${_} • Translate`}</span>
              </button>
            ` : ""}

            <button class="sl-audio-btn ${s ? "sl-audio-playing" : ""}" data-speak-id="${e.id}" data-text="${encodeURIComponent(x)}" data-lang="${e.isShowingTranslation ? v : g}" part="audio-btn">
              <span>${E}</span>
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
      const C = e.replies.length, j = this._expandedThreads.has(e.id), D = j || C <= 2 ? e.replies : e.replies.slice(0, 2), O = C - 2;
      return `
                  <div class="sl-thread">
                    ${D.map((I) => this.renderCommentCard(I, !0, e.id)).join("")}
                    ${C > 2 ? `
                      <button class="sl-thread-toggle-btn" data-thread-id="${e.id}" part="thread-toggle-btn">
                        <span>${j ? "▴" : "💬"}</span>
                        <span>${j ? this.currentLang === "pt" ? "Recolher respostas" : "Collapse replies" : this.currentLang === "pt" ? `Ver mais ${O} resposta${O > 1 ? "s" : ""} ▾` : `View ${O} more repl${O > 1 ? "ies" : "y"} ▾`}</span>
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
      var k;
      d.stopPropagation();
      const f = (k = this.shadowRoot) == null ? void 0 : k.getElementById("composer-textarea");
      if (f) {
        const h = f.selectionStart ?? this._composerText.length, w = f.selectionEnd ?? this._composerText.length;
        if (this._savedComposerSelection = { start: h, end: w }, w > h && f.value.substring(h, w).trim().length > 0) {
          this.insertCodeBlock("typescript");
          return;
        }
      }
      this._isCodePickerOpen = !this._isCodePickerOpen, this.render();
    }), this.shadowRoot.querySelectorAll(".sl-code-lang-btn").forEach((d) => {
      d.addEventListener("click", (f) => {
        f.stopPropagation();
        const k = d.getAttribute("data-lang") || "typescript";
        this.insertCodeBlock(k);
      });
    });
    const n = this.shadowRoot.getElementById("btn-font-toggle");
    n && n.addEventListener("click", () => {
      this._fontMode = this._fontMode === "default" ? "monospace" : "default", this.render();
    });
    const s = this.shadowRoot.getElementById("btn-emoji-toggle");
    s && s.addEventListener("click", (d) => {
      d.stopPropagation(), this._isEmojiPickerOpen = !this._isEmojiPickerOpen, this.render();
    });
    const l = this.shadowRoot.getElementById("emoji-scroll-container"), i = this.shadowRoot.getElementById("btn-emoji-scroll-up"), p = this.shadowRoot.getElementById("btn-emoji-scroll-down"), E = this.shadowRoot.getElementById("btn-emoji-close");
    i && l && i.addEventListener("click", (d) => {
      d.stopPropagation(), l.scrollBy({ top: -90, behavior: "smooth" });
    }), p && l && p.addEventListener("click", (d) => {
      d.stopPropagation(), l.scrollBy({ top: 90, behavior: "smooth" });
    }), E && E.addEventListener("click", (d) => {
      d.stopPropagation(), this._isEmojiPickerOpen = !1, this.render();
    });
    const c = this.shadowRoot.getElementById("btn-skin-tone-toggle");
    c && c.addEventListener("click", (d) => {
      d.stopPropagation(), this._isSkinTonePanelOpen = !this._isSkinTonePanelOpen, this._activeTonePickerEmoji = null, this.render();
    }), this.shadowRoot.querySelectorAll(".sl-tone-btn").forEach((d) => {
      d.addEventListener("click", (f) => {
        f.stopPropagation();
        const k = d.dataset.toneMod || "default", h = k === "default" ? "default" : k;
        this.saveSkinTonePreference(h);
        const w = this._activeTonePickerEmoji;
        if (this._isSkinTonePanelOpen = !1, this._activeTonePickerEmoji = null, w) {
          const R = J(w, h === "default" ? "" : h);
          this.insertTextAtCursor(R);
        } else
          this.render();
      });
    }), this.shadowRoot.querySelectorAll(".sl-emoji-item").forEach((d) => {
      d.addEventListener("click", (f) => {
        f.stopPropagation();
        const k = d.dataset.toneable === "true", h = d.dataset.baseEmoji, w = d.dataset.emoji;
        if (k && h && this._selectedSkinTone === null) {
          this._activeTonePickerEmoji = h, this._isSkinTonePanelOpen = !0, this.render();
          return;
        }
        w && this.insertTextAtCursor(w);
      });
    });
    const u = this.shadowRoot.getElementById("btn-insert-gif");
    if (u && u.addEventListener("click", (d) => {
      d.stopPropagation(), this._isEmojiPickerOpen = !1, this._isMediaModalOpen = !0, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this.render();
    }), this._isMediaModalOpen) {
      const d = this.shadowRoot.getElementById("media-modal-backdrop"), f = this.shadowRoot.getElementById("btn-close-media-modal"), k = this.shadowRoot.getElementById("btn-cancel-media-modal"), h = this.shadowRoot.getElementById("btn-confirm-media-modal"), w = this.shadowRoot.getElementById("media-url-input"), R = this.shadowRoot.getElementById("media-alt-input"), B = this.shadowRoot.getElementById("media-file-input"), H = this.shadowRoot.getElementById("btn-browse-media-file"), K = this.shadowRoot.getElementById("btn-remove-media-file"), G = this.shadowRoot.getElementById("media-drop-zone"), N = this.currentLang === "pt", V = () => {
        this._isMediaModalOpen = !1, this._isManagingRecentGifs = !1, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0, this.render();
      };
      f && f.addEventListener("click", V), k && k.addEventListener("click", V), d && d.addEventListener("click", ($) => {
        $.target === d && V();
      });
      const ee = async ($) => {
        if (this._mediaModalError = null, $.type === "image/gif" || $.name.toLowerCase().endsWith(".gif")) {
          this._mediaModalError = N ? "Para GIFs animados, utilize a Opção 1 (URL direta) para garantir a animação e o carregamento instantâneo." : "For animated GIFs, please use Option 1 (Direct URL) to ensure animation and fast loading.", this.render();
          return;
        }
        const M = await ve($, N);
        if (!M.safe || !M.format) {
          this._mediaModalError = M.reason || (N ? "Arquivo inválido." : "Invalid file."), this.render();
          return;
        }
        try {
          const z = await xe($, M.format, 520, 0.82);
          this._mediaModalFile = $, this._mediaModalFileDataUrl = z.dataUrl, this._mediaModalWasCompressed = z.wasCompressed, this._mediaModalCompressedSize = z.compressedSize, this._mediaModalUrl = "", this._mediaModalAlt.trim() || (this._mediaModalAlt = $.name.replace(/\.[^/.]+$/, "")), this._mediaModalError = null, this.render();
        } catch {
          this._mediaModalError = N ? "Erro ao processar ou otimizar a imagem selecionada." : "Error processing or optimizing selected image.", this.render();
        }
      };
      w && (w.addEventListener("input", () => {
        if (this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0, this._mediaModalUrl = w.value, this._mediaModalUrl.trim().length > 0) {
          const $ = Q(this._mediaModalUrl);
          this._mediaModalError = $.safe ? null : $.reason || (N ? "Link inválido." : "Invalid link.");
        } else
          this._mediaModalError = null;
      }), w.addEventListener("blur", () => {
        this._mediaModalUrl.trim() && this.render();
      })), R && R.addEventListener("input", () => {
        this._mediaModalAlt = R.value;
      }), H && B && H.addEventListener("click", ($) => {
        $.stopPropagation(), B.click();
      }), B && B.addEventListener("change", async () => {
        if (B.files && B.files.length > 0) {
          const $ = B.files[0];
          await ee($);
        }
      }), K && K.addEventListener("click", ($) => {
        $.stopPropagation(), this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0, this._mediaModalError = null, this.render();
      }), this.shadowRoot.querySelectorAll(".sl-recent-gif-item").forEach(($) => {
        let M = null, z = !1;
        $.addEventListener("touchstart", () => {
          z = !1, M = setTimeout(() => {
            if (!z) {
              if (this._isManagingRecentGifs = !0, "vibrate" in navigator)
                try {
                  navigator.vibrate(50);
                } catch {
                }
              this.render();
            }
          }, 450);
        }, { passive: !0 }), $.addEventListener("touchmove", () => {
          z = !0, M && clearTimeout(M);
        }, { passive: !0 }), $.addEventListener("touchend", () => {
          M && clearTimeout(M);
        }, { passive: !0 }), $.addEventListener("click", () => {
          if (this._isManagingRecentGifs)
            return;
          const W = $.getAttribute("data-url") || "", F = $.getAttribute("data-alt") || "";
          this._mediaModalUrl = W, this._mediaModalAlt = F, this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0, this._mediaModalError = null, this.render();
        });
      });
      const te = this.shadowRoot.getElementById("btn-manage-recent-gifs");
      te && te.addEventListener("click", ($) => {
        $.stopPropagation(), this._isManagingRecentGifs = !this._isManagingRecentGifs, this.render();
      }), this.shadowRoot.querySelectorAll(".sl-btn-delete-recent-gif").forEach(($) => {
        $.addEventListener("click", (M) => {
          M.stopPropagation();
          const z = $.getAttribute("data-url") || "";
          z && (ge(z), Y().length === 0 && (this._isManagingRecentGifs = !1), this.render());
        });
      });
      const re = this.shadowRoot.getElementById("btn-clear-recent-gifs");
      re && re.addEventListener("click", () => {
        me(), this._isManagingRecentGifs = !1, this.render();
      }), G && (G.addEventListener("dragover", ($) => {
        $.preventDefault(), G.classList.add("sl-drag-over");
      }), G.addEventListener("dragleave", () => {
        G.classList.remove("sl-drag-over");
      }), G.addEventListener("drop", async ($) => {
        var W;
        $.preventDefault(), G.classList.remove("sl-drag-over");
        const M = $;
        if ((W = M.dataTransfer) != null && W.files && M.dataTransfer.files.length > 0) {
          const F = M.dataTransfer.files[0];
          await ee(F);
          return;
        }
        let z = "";
        if (M.dataTransfer && (z = M.dataTransfer.getData("text/uri-list") || M.dataTransfer.getData("text/plain") || "", !z && M.dataTransfer.getData("text/html"))) {
          const F = M.dataTransfer.getData("text/html").match(/src=["'](https:[^"']+)["']/i);
          F && (z = F[1]);
        }
        if (z = z.trim(), z) {
          this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0;
          const F = Q(z);
          this._mediaModalUrl = z, this._mediaModalError = F.safe ? null : F.reason || (N ? "URL inválida ou insegura." : "Invalid or unsafe URL."), this.render();
        }
      })), h && h.addEventListener("click", () => {
        const $ = this._mediaModalAlt.trim() || "GIF";
        if (this._mediaModalFileDataUrl && this._mediaModalFile) {
          const F = `![${$}](${this._mediaModalFileDataUrl})`;
          this._isMediaModalOpen = !1, this._mediaModalFile = null, this._mediaModalFileDataUrl = null, this._mediaModalWasCompressed = !1, this._mediaModalCompressedSize = 0, this._mediaModalError = null, this.insertTextAtCursor(F);
          return;
        }
        const M = this._mediaModalUrl.trim();
        if (!M) {
          this._mediaModalError = N ? "Por favor, insira a URL do GIF ou carregue um arquivo local." : "Please enter a GIF URL or upload a local file.", this.render();
          return;
        }
        const z = Q(M);
        if (!z.safe) {
          this._mediaModalError = z.reason || (N ? "URL inválida ou não segura." : "Invalid or unsafe URL."), this.render();
          return;
        }
        he(M, $);
        const W = `![${$}](${M})`;
        this._isMediaModalOpen = !1, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this.insertTextAtCursor(W);
      });
    }
    if (this._isEmojiPickerOpen) {
      const d = (f) => {
        var w;
        const k = f.composedPath(), h = (w = this.shadowRoot) == null ? void 0 : w.getElementById("emoji-popover");
        h && !k.includes(h) && s && !k.includes(s) && (this._isEmojiPickerOpen = !1, this.render(), document.removeEventListener("click", d));
      };
      setTimeout(() => document.addEventListener("click", d), 0);
    }
    const _ = this.shadowRoot.getElementById("btn-login-submit");
    _ && _.addEventListener("click", () => {
      this.loginWithGitHub();
    });
    const x = this.shadowRoot.getElementById("btn-logout");
    x && x.addEventListener("click", () => {
      this.logout();
    });
    const S = this.shadowRoot.getElementById("btn-submit");
    S && S.addEventListener("click", async () => {
      const d = this._composerText.trim();
      if (!d) {
        alert(
          this.currentLang === "pt" ? "Por favor, escreva uma reflexão antes de publicar." : "Please write a note before posting."
        );
        return;
      }
      await this.handlePostComment(d);
    }), this.shadowRoot.querySelectorAll(".sl-reaction-trigger-btn").forEach((d) => {
      d.addEventListener("click", async (f) => {
        if (f.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const k = f.currentTarget, h = k.getAttribute("data-comment-id"), w = k.getAttribute("data-emoji") || "👍";
        h && await this.handleToggleReaction(h, w);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-picker-item").forEach((d) => {
      d.addEventListener("click", async (f) => {
        if (f.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const k = f.currentTarget, h = k.getAttribute("data-comment-id"), w = k.getAttribute("data-emoji"), R = k.closest(".sl-reaction-container");
        R == null || R.classList.remove("sl-popover-open"), h && w && await this.handleToggleReaction(h, w);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-badge").forEach((d) => {
      d.addEventListener("click", async (f) => {
        if (f.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const k = f.currentTarget, h = k.getAttribute("data-comment-id"), w = k.getAttribute("data-emoji");
        h && w && await this.handleToggleReaction(h, w);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-container").forEach((d) => {
      d.addEventListener("mouseenter", () => {
        d.classList.add("sl-popover-open");
      }), d.addEventListener("mouseleave", () => {
        d.classList.remove("sl-popover-open");
      }), d.addEventListener("contextmenu", (f) => {
        f.preventDefault(), d.classList.toggle("sl-popover-open");
      });
    }), this.shadowRoot.querySelectorAll(".sl-reply-btn:not(.btn-toggle-translate)").forEach((d) => {
      d.addEventListener("click", (f) => {
        var w;
        const h = f.currentTarget.getAttribute("data-reply-to");
        if (!this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        if (this._replyingToId === h)
          this._replyingToId = null, this._replyText = "";
        else {
          this._replyingToId = h;
          let R = "";
          const B = this._comments.find((H) => H.id === h);
          if (B)
            R = B.author.login;
          else
            for (const H of this._comments) {
              const K = (w = H.replies) == null ? void 0 : w.find((G) => G.id === h);
              if (K) {
                R = K.author.login;
                break;
              }
            }
          this._replyText = R ? `@${R} ` : "";
        }
        this.render();
      });
    }), this.shadowRoot.querySelectorAll(".sl-thread-toggle-btn").forEach((d) => {
      d.addEventListener("click", (f) => {
        const h = f.currentTarget.getAttribute("data-thread-id");
        h && (this._expandedThreads.has(h) ? this._expandedThreads.delete(h) : this._expandedThreads.add(h), this.render());
      });
    }), this.shadowRoot.querySelectorAll(".btn-send-reply").forEach((d) => {
      d.addEventListener("click", async (f) => {
        var H;
        const k = f.currentTarget, h = k.getAttribute("data-comment-id"), w = k.getAttribute("data-parent-id") || h, R = (H = this.shadowRoot) == null ? void 0 : H.getElementById(`reply-textarea-${h}`);
        if (!R) return;
        const B = R.value.trim();
        !B || !w || await this.handlePostReply(w, B);
      });
    }), this.shadowRoot.querySelectorAll(".btn-cancel-reply").forEach((d) => {
      d.addEventListener("click", () => {
        this._replyingToId = null, this._replyText = "", this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-toggle-translate").forEach((d) => {
      d.addEventListener("click", (f) => {
        const h = f.currentTarget.getAttribute("data-comment-id");
        h && this.toggleTranslate(h);
      });
    }), this.shadowRoot.querySelectorAll(".sl-audio-btn").forEach((d) => {
      d.addEventListener("click", (f) => {
        const k = f.currentTarget, h = k.getAttribute("data-speak-id"), w = k.getAttribute("data-text"), R = k.getAttribute("data-lang") || void 0;
        if (h && w) {
          const B = decodeURIComponent(w);
          this.toggleSpeak(h, B, R);
        }
      });
    }), this.shadowRoot.querySelectorAll(".sl-menu-btn").forEach((d) => {
      d.addEventListener("click", (f) => {
        f.stopPropagation();
        const h = f.currentTarget.getAttribute("data-menu-id");
        this._openMenuId = this._openMenuId === h ? null : h, this.render();
      });
    }), this.shadowRoot.addEventListener("click", () => {
      this._openMenuId && (this._openMenuId = null, this.render());
    }), this.shadowRoot.querySelectorAll(".btn-edit").forEach((d) => {
      d.addEventListener("click", (f) => {
        f.stopPropagation();
        const h = f.currentTarget.getAttribute("data-comment-id");
        this._editingId = h, this._openMenuId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-save-edit").forEach((d) => {
      d.addEventListener("click", async (f) => {
        var B;
        const h = f.currentTarget.getAttribute("data-comment-id"), w = (B = this.shadowRoot) == null ? void 0 : B.getElementById(`edit-textarea-${h}`);
        if (!w || !h) return;
        const R = w.value.trim();
        R && await this.handleSaveEdit(h, R);
      });
    }), this.shadowRoot.querySelectorAll(".btn-cancel-edit").forEach((d) => {
      d.addEventListener("click", () => {
        this._editingId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-delete").forEach((d) => {
      d.addEventListener("click", async (f) => {
        f.stopPropagation();
        const h = f.currentTarget.getAttribute("data-comment-id");
        if (!h) return;
        const w = this.currentLang === "pt" ? "Tem certeza que deseja excluir esta nota?" : "Are you sure you want to delete this note?";
        confirm(w) && await this.handleDelete(h);
      });
    }), this.shadowRoot.querySelectorAll(".btn-copy-link").forEach((d) => {
      d.addEventListener("click", (f) => {
        f.stopPropagation();
        const h = f.currentTarget.getAttribute("data-comment-id"), w = `${window.location.href.split("#")[0]}#comment-${h}`;
        navigator.clipboard.writeText(w).then(() => {
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
    ).forEach((c) => {
      var O;
      if (c.closest(".sl-code-block")) return;
      const v = c.querySelector("code") || c, g = v.textContent || "";
      if (!g.trim()) return;
      let u = "code";
      const _ = c.closest('[class*="highlight-source-"]');
      if (_) {
        const I = _.className.match(/highlight-source-([a-zA-Z0-9_-]+)/);
        I && I[1] && (u = I[1]);
      } else if (c.getAttribute("lang"))
        u = c.getAttribute("lang") || "code";
      else if (v.className) {
        const I = v.className.match(/(?:language|lang)-([a-zA-Z0-9_-]+)/);
        I && I[1] && (u = I[1]);
      }
      const x = g.split(/\r?\n/), S = x.length > 20, P = this.currentLang === "pt", U = P ? "Copiar" : "Copy", L = P ? "Copiar código" : "Copy code", A = P ? "Rolar para cima" : "Scroll up", T = P ? "Rolar para baixo" : "Scroll down", C = S ? `${u} · ${x.length} ${P ? "linhas" : "lines"}` : u, j = document.createElement("div");
      j.className = `sl-code-block ${S ? "sl-code-block-long sl-collapsed" : ""}`, j.setAttribute("data-lang", u);
      const D = document.createElement("div");
      if (D.className = "sl-code-header", D.innerHTML = `
        <span class="sl-code-badge">${C}</span>
        <button type="button" class="sl-code-copy-btn" title="${L}" aria-label="${L}">
          <svg class="sl-copy-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
          </svg>
          <span class="sl-copy-text">${U}</span>
        </button>
      `, v.querySelector(".sl-code-line") || (v.innerHTML = x.map((I, q) => {
        const X = I.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return `<span class="sl-code-line"><span class="sl-line-num">${q + 1}</span><span class="sl-line-code">${X || " "}</span></span>`;
      }).join("")), (O = c.parentNode) == null || O.insertBefore(j, c), j.appendChild(D), j.appendChild(c), c.classList.add("sl-code-pre"), v.classList.add("sl-code-body"), S) {
        const I = document.createElement("div");
        I.className = "sl-code-scroll-controls", I.setAttribute("aria-label", P ? "Navegação do código" : "Code navigation"), I.innerHTML = `
          <button type="button" class="sl-code-scroll-btn sl-scroll-up" title="${A}" aria-label="${A}">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M8 3.5a.75.75 0 0 1 .53.22l4.5 4.5a.75.75 0 0 1-1.06 1.06L8 5.31 4.03 9.28a.75.75 0 0 1-1.06-1.06l4.5-4.5A.75.75 0 0 1 8 3.5Z"/>
            </svg>
          </button>
          <button type="button" class="sl-code-scroll-btn sl-scroll-down" title="${T}" aria-label="${T}">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M8 12.5a.75.75 0 0 1-.53-.22l-4.5-4.5a.75.75 0 0 1 1.06-1.06L8 10.69l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.53.22Z"/>
            </svg>
          </button>
        `, j.appendChild(I);
        const q = document.createElement("div");
        q.className = "sl-code-expand-bar", q.innerHTML = `
          <button type="button" class="sl-code-expand-btn" data-lines="${x.length}">
            <span>↕</span>
            <span class="sl-expand-text">${P ? `Mostrar todas as ${x.length} linhas` : `Show all ${x.length} lines`}</span>
          </button>
        `, j.appendChild(q);
      }
    }), this.shadowRoot.querySelectorAll(".sl-code-copy-btn").forEach((c) => {
      c.addEventListener("click", async (v) => {
        v.stopPropagation();
        const g = c.closest(".sl-code-block");
        if (!g) return;
        const u = g.querySelectorAll(".sl-line-code");
        let _ = "";
        if (u.length > 0)
          _ = Array.from(u).map((x) => x.textContent || "").join(`
`);
        else {
          const x = g.querySelector("pre");
          _ = (x == null ? void 0 : x.textContent) || "";
        }
        try {
          await navigator.clipboard.writeText(_);
          const x = c.querySelector(".sl-copy-text"), S = x ? x.textContent : "";
          c.classList.add("sl-copied"), x && (x.textContent = this.currentLang === "pt" ? "Copiado!" : "Copied!"), setTimeout(() => {
            c.classList.remove("sl-copied"), x && S && (x.textContent = S);
          }, 2e3);
        } catch {
        }
      });
    }), this.shadowRoot.querySelectorAll(".sl-code-scroll-btn").forEach((c) => {
      c.addEventListener("click", (v) => {
        v.stopPropagation();
        const g = c.closest(".sl-code-block"), u = g == null ? void 0 : g.querySelector(".sl-code-pre");
        if (!u) return;
        const _ = c.classList.contains("sl-scroll-down");
        u.scrollBy({ top: _ ? 160 : -160, behavior: "smooth" });
      });
    }), this.shadowRoot.querySelectorAll(".sl-code-block-long").forEach((c) => {
      const v = c.querySelector(".sl-code-pre"), g = c.querySelector(".sl-scroll-up"), u = c.querySelector(".sl-scroll-down");
      if (!v || !g || !u) return;
      const _ = () => {
        const x = v.scrollTop <= 2, S = v.scrollTop + v.clientHeight >= v.scrollHeight - 4;
        g.classList.toggle("sl-disabled", x), u.classList.toggle("sl-disabled", S);
      };
      v.addEventListener("scroll", _, { passive: !0 }), _();
    }), this.shadowRoot.querySelectorAll(".sl-code-expand-btn").forEach((c) => {
      c.addEventListener("click", (v) => {
        v.stopPropagation();
        const g = c.closest(".sl-code-block-long");
        if (!g) return;
        const u = g.classList.contains("sl-collapsed"), _ = c.getAttribute("data-lines") || "", x = c.querySelector(".sl-expand-text"), S = this.currentLang === "pt";
        u ? (g.classList.remove("sl-collapsed"), g.classList.add("sl-expanded"), x && (x.textContent = S ? "Minimizar código" : "Collapse code")) : (g.classList.remove("sl-expanded"), g.classList.add("sl-collapsed"), x && (x.textContent = S ? `Mostrar todas as ${_} linhas` : `Show all ${_} lines`), g.scrollIntoView({ behavior: "smooth", block: "nearest" }));
      });
    }), this.shadowRoot.querySelectorAll(".sl-page-btn[data-page]").forEach((c) => {
      c.addEventListener("click", (v) => {
        const u = v.currentTarget.getAttribute("data-page");
        if (!u) return;
        const _ = parseInt(u, 10);
        _ !== this._currentPage && (this._currentPage = _, this.render(), this.scrollListToTop());
      });
    });
    const s = this.shadowRoot.querySelector(".btn-prev-page");
    s && s.addEventListener("click", () => {
      this._currentPage > 1 && (this._currentPage--, this.render(), this.scrollListToTop());
    });
    const l = this.shadowRoot.querySelector(".btn-next-page");
    l && l.addEventListener("click", () => {
      const c = Math.ceil(this._comments.length / this._pageSize);
      this._currentPage < c && (this._currentPage++, this.render(), this.scrollListToTop());
    });
    const i = this.shadowRoot.getElementById("sl-search-input");
    i && (i.addEventListener("input", (c) => {
      var u;
      const v = c.target.value;
      this._searchQuery = v, this._currentPage = 1, this.render();
      const g = (u = this.shadowRoot) == null ? void 0 : u.getElementById("sl-search-input");
      if (g) {
        g.focus();
        const _ = g.value.length;
        g.setSelectionRange(_, _);
      }
    }), i.addEventListener("keydown", (c) => {
      c.key === "Escape" && (this._searchQuery = "", this._currentPage = 1, this.render());
    }));
    const p = this.shadowRoot.getElementById("sl-search-clear");
    p && p.addEventListener("click", () => {
      this._searchQuery = "", this._currentPage = 1, this.render();
    });
    const E = this.shadowRoot.querySelector(".sl-search-banner-clear");
    E && E.addEventListener("click", () => {
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
          const o = this._title.trim() || (typeof document < "u" ? document.title.replace(/\s*[-|·].*$/, "").trim() : "") || this.getCurrentTerm(), a = typeof window < "u" ? window.location.href : "", n = a ? `Discussão para o artigo: **[${o}](${a})**

_Comentários gerenciados nativamente pelo [ScatterLeaf](https://github.com/rnt-rez/scatterleaf)._` : void 0, s = await this._brokerClient.createDiscussion(
            this._repositoryId,
            this._categoryId,
            o,
            n
          );
          this._discussionId = s.id;
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
          this._comments.unshift(a), this._currentPage = 1, this._composerText = "", this._activeTab = "write", this.render(), setTimeout(() => {
            const n = this._comments.findIndex((s) => s.id === a.id);
            if (n !== -1) {
              const [s] = this._comments.splice(n, 1);
              this._comments.push(s), this.render();
            }
          }, 5e3);
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
    this._comments.unshift(r), this._currentPage = 1, this._composerText = "", this._activeTab = "write", this.render(), setTimeout(() => {
      const o = this._comments.findIndex((a) => a.id === r.id);
      if (o !== -1) {
        const [a] = this._comments.splice(o, 1);
        this._comments.push(a), this.render();
      }
    }, 5e3), this.dispatchEvent(
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
        ), n = this._comments.find((s) => s.id === e);
        if (n) {
          n.replies || (n.replies = []), n.replies.push({
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
        console.error("Falha ao editar comentário via broker:", a), alert(
          this._lang === "pt" ? "Não foi possível salvar a edição no GitHub. Verifique sua conexão ou permissões." : "Failed to save edit on GitHub. Please check your connection or permissions."
        );
        return;
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
        const n = a.replies.find((s) => s.id === e);
        if (n) {
          o(n);
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
    for (const s of this._comments) {
      if (s.id === e) {
        r = s;
        break;
      }
      if (s.replies) {
        const l = s.replies.find((i) => i.id === e);
        if (l) {
          r = l;
          break;
        }
      }
    }
    if (!r) return;
    r.reactions || (r.reactions = []);
    const o = r.reactions.find((s) => s.content === t), n = !!(o != null && o.viewerHasReacted) ? "remove" : "add";
    if (n === "remove" ? o && (o.count = Math.max(0, o.count - 1), o.viewerHasReacted = !1, o.count === 0 && (r.reactions = r.reactions.filter((s) => s.content !== t))) : o ? (o.count += 1, o.viewerHasReacted = !0) : r.reactions.push({
      content: t,
      count: 1,
      viewerHasReacted: !0
    }), this.render(), this._brokerClient && this._authToken)
      try {
        await this._brokerClient.toggleReaction(e, t, n);
      } catch (s) {
        if (console.error(`Falha ao processar reação (${n}) via broker:`, s), n === "add") {
          const l = r.reactions.find((i) => i.content === t);
          l && (l.count = Math.max(0, l.count - 1), l.viewerHasReacted = !1, l.count === 0 && (r.reactions = r.reactions.filter((i) => i.content !== t)));
        } else {
          const l = r.reactions.find((i) => i.content === t);
          l ? (l.count += 1, l.viewerHasReacted = !0) : r.reactions.push({ content: t, count: 1, viewerHasReacted: !0 });
        }
        this.render();
      }
  }
}
typeof window < "u" && !customElements.get("scatter-leaf") && customElements.define("scatter-leaf", ye);
export {
  ye as ScatterLeaf
};
//# sourceMappingURL=scatterleaf.js.map
