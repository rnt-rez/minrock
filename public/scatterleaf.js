var _e = Object.defineProperty;
var ke = (M, f, e) => f in M ? _e(M, f, { enumerable: !0, configurable: !0, writable: !0, value: e }) : M[f] = e;
var h = (M, f, e) => ke(M, typeof f != "symbol" ? f + "" : f, e);
const Ee = `
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
  min-height: 36px;
}

.sl-toolbar-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 36px;
}

.sl-toolbar-count {
  display: inline-flex;
  align-items: center;
  height: 36px;
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--sl-text-muted);
  white-space: nowrap;
  letter-spacing: -0.01em;
  user-select: none;
  line-height: 1;
}

.sl-sort-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  height: 36px;
  box-sizing: border-box;
  padding: 0 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  font-family: inherit;
  color: var(--sl-text-muted);
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  user-select: none;
  line-height: 1;
}

.sl-sort-btn:hover {
  color: var(--sl-text);
  border-color: var(--sl-accent);
  background: var(--sl-hover, rgba(125, 125, 125, 0.08));
}

.sl-sort-btn:active {
  transform: scale(0.96);
  color: var(--sl-accent);
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
  .sl-toolbar-actions {
    margin-left: auto;
    flex-wrap: wrap;
    justify-content: flex-end;
  }
  .sl-toolbar-count {
    font-size: 0.8rem;
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

.sl-btn-emoji,
.sl-btn-toolbar-media {
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
.sl-btn-emoji.sl-btn-emoji-active,
.sl-btn-toolbar-media:hover {
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

.sl-emoji-gif-btn,
.sl-emoji-img-btn {
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

.sl-emoji-gif-btn:hover,
.sl-emoji-img-btn:hover {
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
  background: var(--sl-btn-primary-bg, var(--sl-accent));
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  font-weight: 600;
}

.sl-btn-primary:hover {
  background: var(--sl-btn-primary-hover, var(--sl-accent-hover));
}

.sl-btn-primary span:first-child {
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.35));
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

/* Card Fixado pelo Autor */
.sl-card.sl-card-pinned {
  border-color: var(--sl-accent);
  box-shadow: 0 0 14px var(--sl-accent-glow, rgba(56, 189, 248, 0.25)), 0 2px 8px rgba(0, 0, 0, 0.04);
}

.sl-pinned-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.7rem;
  font-weight: 600;
  padding: 0.15rem 0.5rem;
  border-radius: 4px;
  background: rgba(56, 189, 248, 0.12);
  color: var(--sl-accent);
  border: 1px solid var(--sl-accent);
  user-select: none;
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
  cursor: zoom-in;
  transition: transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.18s ease;
}

.sl-card-body img:not(.sl-emoji-inline):hover {
  transform: translateY(-2px) scale(1.008);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.22);
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

/* Linha de Salvamento na Coleção (Modais de Mídia) */
.sl-modal-collection-row {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.15rem;
  margin-bottom: 0.2rem;
}

.sl-btn-save-collection {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  border-radius: 6px;
  background: var(--sl-bg);
  border: 1px dashed var(--sl-border);
  color: var(--sl-text-primary);
  cursor: pointer;
  transition: all 0.15s ease;
}

.sl-btn-save-collection:hover {
  background: var(--sl-card-bg);
  border-color: var(--sl-accent);
  color: var(--sl-accent);
}

.sl-modal-success-badge {
  font-size: 0.75rem;
  font-weight: 500;
  color: #10b981;
  display: inline-flex;
  align-items: center;
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

.sl-confirm-clear-box {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(239, 68, 68, 0.12);
  border: 1px solid rgba(239, 68, 68, 0.35);
  border-radius: 4px;
  padding: 0.15rem 0.45rem;
}

.sl-confirm-clear-text {
  font-size: 0.72rem;
  color: #ef4444;
  font-weight: 600;
}

.sl-confirm-clear-actions {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.sl-btn-confirm-yes {
  background: #ef4444;
  color: #ffffff;
  border: none;
  font-size: 0.7rem;
  font-weight: 600;
  border-radius: 3px;
  padding: 0.1rem 0.4rem;
  cursor: pointer;
  transition: opacity 0.15s ease;
}

.sl-btn-confirm-yes:hover {
  opacity: 0.85;
}

.sl-btn-confirm-no {
  background: transparent;
  color: var(--sl-text-muted);
  border: 1px solid var(--sl-border);
  font-size: 0.7rem;
  border-radius: 3px;
  padding: 0.1rem 0.35rem;
  cursor: pointer;
  transition: color 0.15s ease;
}

.sl-btn-confirm-no:hover {
  color: var(--sl-text-primary);
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

/* Botão de Exclusão Individual de Mídia Recente (GIF ou Imagem) */
.sl-btn-delete-recent-gif,
.sl-btn-delete-recent-image {
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
.sl-recent-gif-wrapper:hover .sl-btn-delete-recent-image,
.sl-recent-gif-wrapper:focus-within .sl-btn-delete-recent-gif,
.sl-recent-gif-wrapper:focus-within .sl-btn-delete-recent-image {
  opacity: 1;
  transform: scale(1);
}

.sl-managing-recents .sl-btn-delete-recent-gif,
.sl-managing-recents .sl-btn-delete-recent-image {
  opacity: 1;
  transform: scale(1);
  background: #ef4444;
  border-color: #ef4444;
}

.sl-btn-delete-recent-gif:hover,
.sl-btn-delete-recent-image:hover {
  background: #dc2626;
  border-color: #dc2626;
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
  --sl-btn-primary-bg: #1f6feb;
  --sl-btn-primary-hover: #388bfd;
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
  --sl-btn-primary-bg: #0284c7;
  --sl-btn-primary-hover: #0369a1;
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

/* 8. Barra de Gestão e Moderação (Cloudflare KV) */
.sl-moderation-bar {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  background: var(--sl-surface);
  border: 1px dashed var(--sl-border);
  border-left: 3px solid var(--sl-accent);
  border-radius: 8px;
  padding: 0.75rem 1rem;
  margin-bottom: 1.25rem;
  font-size: 0.82rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.sl-mod-bar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  font-weight: 600;
  color: var(--sl-text);
}

.sl-mod-bar-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.sl-mod-bar-actions {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.sl-mod-refresh-btn,
.sl-mod-toggle-btn {
  background: transparent;
  border: 1px solid var(--sl-border);
  border-radius: 4px;
  padding: 0.2rem 0.5rem;
  font-size: 0.75rem;
  color: var(--sl-text-muted);
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  transition: all 0.15s ease;
}

.sl-mod-refresh-btn:hover,
.sl-mod-toggle-btn:hover {
  color: var(--sl-text);
  border-color: var(--sl-accent);
  background: var(--sl-hover, rgba(125, 125, 125, 0.08));
}

.sl-mod-chevron {
  display: inline-block;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  transform: rotate(0deg);
}

.sl-mod-chevron-open {
  transform: rotate(180deg);
}

.sl-mod-subcard {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background: var(--sl-input-bg, rgba(125, 125, 125, 0.05));
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  padding: 0.45rem 0.55rem;
  transition: all 0.2s ease;
}

.sl-mod-subcard-collapsed {
  display: none !important;
}

.sl-mod-pills {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
}

.sl-mod-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.18s ease;
  user-select: none;
  line-height: 1.2;
}

.sl-mod-pill-neutral {
  background: var(--sl-surface, rgba(125, 125, 125, 0.08));
  color: var(--sl-text-muted);
  border-color: var(--sl-border);
}

.sl-mod-pill-neutral:hover {
  background: var(--sl-hover, rgba(125, 125, 125, 0.14));
  color: var(--sl-text);
  border-color: var(--sl-border-focus, var(--sl-accent));
}

.sl-mod-pill-ban-active {
  background: rgba(239, 68, 68, 0.12);
  color: #ef4444;
  border-color: rgba(239, 68, 68, 0.35);
}

.sl-mod-pill-ban-active:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.55);
}

.sl-mod-pill-media-active {
  background: rgba(245, 158, 11, 0.12);
  color: #d97706;
  border-color: rgba(245, 158, 11, 0.35);
}

.sl-mod-pill-media-active:hover {
  background: rgba(245, 158, 11, 0.2);
  border-color: rgba(245, 158, 11, 0.55);
}

.sl-mod-pill-open {
  box-shadow: 0 0 0 1px currentColor;
}

.sl-mod-pill-arrow {
  font-size: 0.65rem;
  opacity: 0.8;
  display: inline-block;
  transition: transform 0.18s ease;
}

.sl-mod-drawer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  align-items: center;
  padding: 0.45rem 0.55rem;
  background: var(--sl-surface);
  border: 1px solid var(--sl-border);
  border-radius: 6px;
  animation: slFadeSlideDown 0.18s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes slFadeSlideDown {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.sl-mod-empty-text {
  font-size: 0.78rem;
  color: var(--sl-text-muted);
  font-style: italic;
  padding: 0.2rem 0.25rem;
}

.sl-mod-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
}

.sl-mod-chip-user {
  max-width: 140px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  vertical-align: middle;
}

.sl-mod-chip-action {
  font-weight: 600;
  font-size: 0.7rem;
  opacity: 0.9;
}

.sl-mod-chip-ban {
  background: rgba(239, 68, 68, 0.12);
  color: #ef4444;
  border: 1px solid rgba(239, 68, 68, 0.25);
}

.sl-mod-chip-media {
  background: rgba(245, 158, 11, 0.12);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.25);
}

.sl-mod-chip-remove {
  background: transparent;
  border: none;
  color: inherit;
  font-size: 0.8rem;
  cursor: pointer;
  padding: 0 0.15rem;
  line-height: 1;
  opacity: 0.7;
  transition: opacity 0.15s ease;
}

.sl-mod-chip-remove:hover {
  opacity: 1;
}

/* ==========================================================================
   MINI-LIGHTBOX NATIVO COM PAN & ZOOM (EXPANSÃO DE IMAGENS DE COMENTÁRIOS)
   ========================================================================== */
.sl-lightbox-backdrop {
  position: fixed;
  inset: 0;
  z-index: 100000;
  background: rgba(8, 8, 11, 0.94);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: slFadeIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  overflow: hidden;
  touch-action: none;
  user-select: none;
}

.sl-lightbox-toolbar {
  position: absolute;
  top: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100010;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.2rem;
  background: rgba(22, 24, 29, 0.88);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0.4rem 0.85rem;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  max-width: 90vw;
  color: #f3f4f6;
  font-family: inherit;
}

.sl-lightbox-caption {
  font-size: 0.82rem;
  font-weight: 500;
  color: #9ca3af;
  max-width: 240px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.sl-lightbox-controls {
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.sl-lightbox-btn {
  background: transparent;
  border: none;
  color: #d1d5db;
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: background 0.15s ease, color 0.15s ease, transform 0.1s ease;
}

.sl-lightbox-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #ffffff;
}

.sl-lightbox-btn:active {
  transform: scale(0.95);
}

.sl-lightbox-btn-close {
  margin-left: 0.3rem;
  border-left: 1px solid rgba(255, 255, 255, 0.12);
  padding-left: 0.5rem;
  border-radius: 0 6px 6px 0;
  width: 34px;
}

.sl-lightbox-btn-close:hover {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.sl-lightbox-level {
  font-size: 0.78rem;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  color: #e5e7eb;
  min-width: 48px;
  text-align: center;
  font-weight: 600;
  letter-spacing: -0.02em;
}

.sl-lightbox-stage {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: grab;
}

.sl-lightbox-stage.is-dragging {
  cursor: grabbing !important;
}

.sl-lightbox-img {
  max-width: 88vw;
  max-height: 82vh;
  object-fit: contain;
  pointer-events: auto;
  user-select: none;
  -webkit-user-drag: none;
  transform-origin: center center;
  transition: transform 0.08s ease-out;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.6);
  border-radius: 4px;
}

.sl-lightbox-img.is-panning {
  transition: none !important;
}

.sl-lightbox-hint {
  position: absolute;
  bottom: 1.25rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100010;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.5);
  pointer-events: none;
  background: rgba(0, 0, 0, 0.45);
  padding: 0.3rem 0.85rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  white-space: nowrap;
}
`;
class pe extends Error {
  constructor(f = "Sessão expirada ou credenciais inválidas. Faça login novamente.") {
    super(f), this.name = "ScatterAuthError";
  }
}
class $e {
  constructor(f, e) {
    h(this, "baseUrl");
    h(this, "getToken");
    this.baseUrl = f.replace(/\/+$/, ""), this.getToken = e;
  }
  getAuthHeaders() {
    const f = this.getToken(), e = {
      "Content-Type": "application/json"
    };
    return f && (e.Authorization = `Bearer ${f}`), e;
  }
  async handleResponseError(f, e) {
    const t = await f.json().catch(() => ({})), o = t.error || t.error_description || `${e}: HTTP ${f.status}`;
    throw f.status === 401 || typeof o == "string" && /bad credentials|unauthorized|sessão expirada/i.test(o) ? new pe(o) : new Error(o);
  }
  /**
   * Auto-Discovery de IDs do repositório e categoria no GitHub
   */
  async discover(f, e = "General") {
    const t = await fetch(
      `${this.baseUrl}/api/discovery?repo=${encodeURIComponent(f)}&category=${encodeURIComponent(e)}`
    );
    if (!t.ok) {
      const o = await t.json().catch(() => ({}));
      throw new Error(o.error || `Falha no Auto-Discovery: HTTP ${t.status}`);
    }
    return await t.json();
  }
  /**
   * Leitura de discussões e comentários com cache de borda
   */
  async fetchDiscussions(f, e) {
    const o = this.getToken() ? `&_t=${Date.now()}` : "", a = await fetch(
      `${this.baseUrl}/api/discussions?repo=${encodeURIComponent(f)}&term=${encodeURIComponent(e)}${o}`,
      {
        headers: this.getAuthHeaders()
      }
    );
    return a.ok || await this.handleResponseError(a, "Falha ao carregar discussões"), await a.json();
  }
  /**
   * Troca segura de código OAuth por token de acesso
   */
  async exchangeOAuthCode(f, e) {
    const t = await fetch(`${this.baseUrl}/api/oauth/access_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code: f, redirect_uri: e })
    });
    if (!t.ok) {
      const a = await t.json().catch(() => ({}));
      throw new Error(a.error_description || a.error || `Erro ao trocar código: HTTP ${t.status}`);
    }
    const o = await t.json();
    if (!o.access_token)
      throw new Error(o.error_description || o.error || "Token de acesso não retornado.");
    return o.access_token;
  }
  /**
   * Busca perfil do usuário logado diretamente da API do GitHub usando o Bearer token
   */
  async fetchGitHubUserProfile(f) {
    const e = await fetch("https://api.github.com/user", {
      headers: {
        Authorization: `Bearer ${f}`,
        Accept: "application/vnd.github.v3+json"
      }
    });
    if (!e.ok)
      throw e.status === 401 ? new pe("Credenciais inválidas ao carregar perfil do GitHub.") : new Error(`Falha ao obter perfil do usuário: HTTP ${e.status}`);
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
  async createDiscussion(f, e, t, o) {
    const a = await fetch(`${this.baseUrl}/api/discussions`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ repositoryId: f, categoryId: e, title: t, body: o })
    });
    return a.ok || await this.handleResponseError(a, "Erro ao criar discussão"), await a.json();
  }
  /**
   * Envio de comentário ou réplica
   */
  async addComment(f, e, t, o) {
    const a = await fetch(`${this.baseUrl}/api/comments`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ discussionId: f, body: e, replyToId: t, repo: o })
    });
    return a.ok || await this.handleResponseError(a, "Erro ao enviar comentário"), await a.json();
  }
  /**
   * Edição in-place de comentário
   */
  async updateComment(f, e, t) {
    const o = await fetch(`${this.baseUrl}/api/comments`, {
      method: "PATCH",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ commentId: f, body: e, repo: t })
    });
    return o.ok || await this.handleResponseError(o, "Erro ao editar comentário"), await o.json();
  }
  /**
   * Exclusão in-place de comentário
   */
  async deleteComment(f) {
    const e = await fetch(`${this.baseUrl}/api/comments?id=${encodeURIComponent(f)}`, {
      method: "DELETE",
      headers: this.getAuthHeaders()
    });
    return e.ok || await this.handleResponseError(e, "Erro ao excluir comentário"), await e.json();
  }
  /**
   * Consulta lista de moderação do repositório
   */
  async getModerationList(f) {
    const e = await fetch(`${this.baseUrl}/api/moderation?repo=${encodeURIComponent(f)}`, {
      headers: this.getAuthHeaders()
    });
    return e.ok || await this.handleResponseError(e, "Erro ao carregar moderação"), (await e.json()).moderatedUsers || [];
  }
  /**
   * Aplica restrição a um usuário (ban ou restrict_media)
   */
  async setModeration(f, e, t, o) {
    const a = await fetch(`${this.baseUrl}/api/moderation`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ repo: f, username: e, action: t, reason: o })
    });
    a.ok || await this.handleResponseError(a, "Erro ao aplicar moderação");
  }
  /**
   * Remove restrição de um usuário
   */
  async removeModeration(f, e) {
    const t = await fetch(`${this.baseUrl}/api/moderation`, {
      method: "DELETE",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ repo: f, username: e })
    });
    t.ok || await this.handleResponseError(t, "Erro ao remover moderação");
  }
  /**
   * Adiciona ou remove reação de emoji
   */
  async toggleReaction(f, e, t) {
    const a = {
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
    }[e] || e, r = await fetch(`${this.baseUrl}/api/reactions`, {
      method: "POST",
      headers: this.getAuthHeaders(),
      body: JSON.stringify({ subjectId: f, content: a, action: t })
    });
    return r.ok || await this.handleResponseError(r, "Erro ao atualizar reação"), await r.json();
  }
}
const fe = "scatterleaf_skin_tone", Le = [
  { id: "default", namePt: "Padrão (Amarelo)", nameEn: "Default (Yellow)", modifier: "", swatch: "🟡" },
  { id: "light", namePt: "Tom Claro", nameEn: "Light Skin Tone", modifier: "🏻", swatch: "🏻" },
  { id: "medium-light", namePt: "Tom Médio-Claro", nameEn: "Medium-Light Skin Tone", modifier: "🏼", swatch: "🏼" },
  { id: "medium", namePt: "Tom Médio", nameEn: "Medium Skin Tone", modifier: "🏽", swatch: "🏽" },
  { id: "medium-dark", namePt: "Tom Médio-Escuro", nameEn: "Medium-Dark Skin Tone", modifier: "🏾", swatch: "🏾" },
  { id: "dark", namePt: "Tom Escuro", nameEn: "Dark Skin Tone", modifier: "🏿", swatch: "🏿" }
], Ce = /* @__PURE__ */ new Set([
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
function ie(M, f) {
  if (!f || f === "default") return M;
  if (M.includes("‍")) {
    const t = M.split("‍");
    return `${t[0].replace(/[\u{1F3FB}-\u{1F3FF}]/gu, "").replace(/\uFE0F/g, "")}${f}‍${t.slice(1).join("‍")}`;
  }
  return M.replace(/[\u{1F3FB}-\u{1F3FF}]/gu, "").replace(/\uFE0F/g, "") + f;
}
const Se = [
  { symbol: "👍", namePt: "Gostei", nameEn: "Like" },
  { symbol: "❤️", namePt: "Amei", nameEn: "Love" },
  { symbol: "🚀", namePt: "Sensacional", nameEn: "Rocket" },
  { symbol: "🎉", namePt: "Parabéns", nameEn: "Celebrate" },
  { symbol: "😄", namePt: "Divertido", nameEn: "Laugh" },
  { symbol: "👀", namePt: "De olho", nameEn: "Eyes" }
], Me = [
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
], de = "scatterleaf_recent_gifs";
function ne() {
  try {
    const M = localStorage.getItem(de);
    return M ? JSON.parse(M) : [];
  } catch {
    return [];
  }
}
function ve(M, f) {
  try {
    const e = ne().filter((t) => t.url !== M);
    e.unshift({ url: M, alt: f || "", timestamp: Date.now() }), localStorage.setItem(de, JSON.stringify(e.slice(0, 24)));
  } catch {
  }
}
function Te(M) {
  try {
    const f = ne().filter((e) => e.url !== M);
    localStorage.setItem(de, JSON.stringify(f));
  } catch {
  }
}
function Ie() {
  try {
    localStorage.removeItem(de);
  } catch {
  }
}
const ce = "scatterleaf_recent_images";
function le() {
  try {
    const M = localStorage.getItem(ce);
    return M ? JSON.parse(M) : [];
  } catch {
    return [];
  }
}
function xe(M, f) {
  try {
    const e = le().filter((t) => t.url !== M);
    e.unshift({ url: M, alt: f || "", timestamp: Date.now() }), localStorage.setItem(ce, JSON.stringify(e.slice(0, 24)));
  } catch {
  }
}
function Ae(M) {
  try {
    const f = le().filter((e) => e.url !== M);
    localStorage.setItem(ce, JSON.stringify(f));
  } catch {
  }
}
function Re() {
  try {
    localStorage.removeItem(ce);
  } catch {
  }
}
const Pe = [
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
], Be = [
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
function V(M) {
  if (!M || typeof M != "string")
    return { safe: !1, reason: "URL inválida ou ausente." };
  const f = M.trim();
  if (!f.startsWith("https://"))
    return {
      safe: !1,
      reason: "Por segurança e privacidade, apenas links seguros (HTTPS) são permitidos."
    };
  let e;
  try {
    e = new URL(f);
  } catch {
    return { safe: !1, reason: "Formato de URL inválido." };
  }
  const t = e.hostname.toLowerCase(), o = e.pathname.toLowerCase(), a = e.search.toLowerCase(), r = t + o + a;
  for (const i of Pe)
    if (t === i || t.endsWith("." + i))
      return {
        safe: !1,
        reason: "Domínio bloqueado pelo filtro de conteúdo sensível / adulto."
      };
  for (const i of Be)
    if (new RegExp(`(^|[-_/.?&=])${i}([-_/.?&=]|$)`, "i").test(r))
      return {
        safe: !1,
        reason: "O link contém termos classificados como potencialmente sensíveis ou adultos."
      };
  return { safe: !0 };
}
class je extends HTMLElement {
  constructor() {
    super();
    h(this, "_repo", "");
    h(this, "_category", "General");
    h(this, "_theme", "cream");
    h(this, "_lang", "pt");
    h(this, "_inputPosition", "top");
    h(this, "_broker", "");
    h(this, "_clientId", "Iv23liZHApvnx6e6wtMJ");
    h(this, "_pageSize", 10);
    h(this, "_currentPage", 1);
    h(this, "_title", "");
    h(this, "_term", "");
    // Feature Flags & Ordenação
    h(this, "_order", "oldest");
    h(this, "_hideReactions", !1);
    h(this, "_hideSkinTone", !1);
    h(this, "_hideSorting", !1);
    h(this, "_hideCodeScroll", !1);
    h(this, "_hidePreview", !1);
    h(this, "_hideSearch", !1);
    h(this, "_enableModeration", !1);
    h(this, "_enableImages", !1);
    h(this, "_moderatedUsers", []);
    h(this, "_isModerationLoading", !1);
    h(this, "_expandedModCategory", null);
    h(this, "_isModerationCollapsed", !1);
    h(this, "_comments", []);
    h(this, "_isLoading", !1);
    h(this, "_isBrokerConnected", !1);
    // Sessão de Autenticação
    h(this, "_currentUser", null);
    h(this, "_authToken", null);
    h(this, "_brokerClient", null);
    h(this, "_discussionId", null);
    h(this, "_repositoryId", null);
    h(this, "_categoryId", null);
    // Estados de Interface do Editor e Interações
    h(this, "_activeTab", "write");
    h(this, "_fontMode", "default");
    h(this, "_composerText", "");
    h(this, "_replyingToId", null);
    h(this, "_replyText", "");
    h(this, "_expandedThreads", /* @__PURE__ */ new Set());
    h(this, "_searchQuery", "");
    h(this, "_editingId", null);
    h(this, "_openMenuId", null);
    h(this, "_speakingId", null);
    h(this, "_isEmojiPickerOpen", !1);
    h(this, "_isCodePickerOpen", !1);
    h(this, "_savedComposerSelection", null);
    h(this, "_isTranslatingId", null);
    h(this, "_selectedSkinTone", null);
    h(this, "_isSkinTonePanelOpen", !1);
    h(this, "_activeTonePickerEmoji", null);
    h(this, "_themeObserver", null);
    // Modal de Inserção de GIFs (Anti-NSFW)
    h(this, "_isMediaModalOpen", !1);
    h(this, "_isManagingRecentGifs", !1);
    h(this, "_isConfirmingClearGifs", !1);
    h(this, "_mediaModalUrl", "");
    h(this, "_mediaModalAlt", "");
    h(this, "_mediaModalSuccess", null);
    // Modal de Inserção de Imagens (Apenas via URL HTTPS)
    h(this, "_isImageModalOpen", !1);
    h(this, "_isManagingRecentImages", !1);
    h(this, "_isConfirmingClearImages", !1);
    h(this, "_imageModalUrl", "");
    h(this, "_imageModalAlt", "");
    h(this, "_imageModalSuccess", null);
    // Estado do Mini-Lightbox Nativo (Zoom & Pan de Imagens)
    h(this, "_lightboxOpen", !1);
    h(this, "_lightboxImgSrc", "");
    h(this, "_lightboxImgAlt", "");
    h(this, "_lightboxScale", 1);
    h(this, "_lightboxTranslateX", 0);
    h(this, "_lightboxTranslateY", 0);
    h(this, "_isDraggingImage", !1);
    h(this, "_dragStartX", 0);
    h(this, "_dragStartY", 0);
    h(this, "_dragStartTx", 0);
    h(this, "_dragStartTy", 0);
    // Fechamento de menus ao clicar fora do componente no document ou tecla Escape
    h(this, "_handleDocumentClick", (e) => {
      let t = !1;
      const o = e.composedPath();
      this._openMenuId && (o.some(
        (r) => {
          var i;
          return r instanceof HTMLElement && ((i = r.classList) == null ? void 0 : i.contains("sl-menu-wrapper"));
        }
      ) || (this._openMenuId = null, t = !0)), this._isCodePickerOpen && (o.some(
        (r) => {
          var i, s;
          return r instanceof HTMLElement && (((i = r.classList) == null ? void 0 : i.contains("sl-code-menu-wrapper")) || ((s = r.classList) == null ? void 0 : s.contains("sl-code-picker-popover")));
        }
      ) || (this._isCodePickerOpen = !1, t = !0)), this._isEmojiPickerOpen && (o.some(
        (r) => {
          var i, s;
          return r instanceof HTMLElement && (((i = r.classList) == null ? void 0 : i.contains("sl-emoji-wrapper")) || ((s = r.classList) == null ? void 0 : s.contains("sl-emoji-popover")));
        }
      ) || (this._isEmojiPickerOpen = !1, t = !0)), t && this.render();
    });
    h(this, "_handleDocumentKeydown", (e) => {
      var t;
      if (e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey) {
        const o = document.activeElement;
        if (!(o instanceof HTMLInputElement || o instanceof HTMLTextAreaElement || (o == null ? void 0 : o.isContentEditable))) {
          const r = (t = this.shadowRoot) == null ? void 0 : t.getElementById("sl-search-input");
          r && (e.preventDefault(), r.focus());
        }
      }
      if (e.key === "Escape") {
        if (this._lightboxOpen) {
          this.closeLightbox();
          return;
        }
        let o = !1;
        this._openMenuId && (this._openMenuId = null, o = !0), this._isCodePickerOpen && (this._isCodePickerOpen = !1, o = !0), this._isEmojiPickerOpen && (this._isEmojiPickerOpen = !1, o = !0), this._isMediaModalOpen && (this._isMediaModalOpen = !1, o = !0), this._isImageModalOpen && (this._isImageModalOpen = !1, o = !0), this._searchQuery && (this._searchQuery = "", this._currentPage = 1, o = !0), o && this.render();
      }
    });
    h(this, "_mediaModalError", null);
    h(this, "_imageModalError", null);
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
      "term",
      "order",
      "hide-reactions",
      "reactions",
      "hide-skin-tone",
      "skin-tone",
      "hide-sorting",
      "sorting",
      "hide-code-scroll",
      "code-scroll",
      "hide-preview",
      "preview",
      "hide-search",
      "search",
      "enable-moderation",
      "moderation",
      "enable-images",
      "images"
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
  get enableModeration() {
    return this._enableModeration;
  }
  set enableModeration(e) {
    this._enableModeration = !!e, this.isConnected && (this._enableModeration && this._isOwner() && this.loadModerationList(), this.render());
  }
  get enableImages() {
    return this._enableImages;
  }
  set enableImages(e) {
    this._enableImages = !!e, this.isConnected && this.render();
  }
  connectedCallback() {
    this.syncAttributes(), this.initSkinTonePreference();
    try {
      this._isModerationCollapsed = localStorage.getItem("sl_mod_collapsed") === "true";
    } catch {
      this._isModerationCollapsed = !1;
    }
    this.initAuthSession(), this.setupOAuthListener(), this.checkUrlForOAuthCode(), document.addEventListener("click", this._handleDocumentClick), document.addEventListener("keydown", this._handleDocumentKeydown), this._theme === "auto" && (this.detectAndApplyAutoPalette(), this.setupAutoThemeObserver()), this.loadComments(), this._enableModeration && this._isOwner() && this.loadModerationList(), this.render();
  }
  disconnectedCallback() {
    document.removeEventListener("click", this._handleDocumentClick), document.removeEventListener("keydown", this._handleDocumentKeydown), this._themeObserver && (this._themeObserver.disconnect(), this._themeObserver = null);
  }
  attributeChangedCallback(e, t, o) {
    if (t !== o) {
      if (e === "theme" && o)
        this._theme = o, this._theme === "auto" ? (this.detectAndApplyAutoPalette(), this.setupAutoThemeObserver()) : (this._themeObserver && (this._themeObserver.disconnect(), this._themeObserver = null), this.clearAutoPaletteProperties());
      else if (e === "repo" && o)
        this._repo = o, this.loadComments();
      else if (e === "category" && o)
        this._category = o, this.loadComments();
      else if (e === "lang" && o)
        this._lang = o;
      else if (e === "broker" && o)
        this._broker = o, this.initBrokerClient(), this.loadComments();
      else if (e === "client-id" && o)
        this._clientId = o;
      else if (e === "input-position" && (o === "top" || o === "bottom"))
        this._inputPosition = o;
      else if (e === "page-size" && o) {
        const a = parseInt(o, 10);
        this._pageSize = !isNaN(a) && a > 0 ? a : 10, this._currentPage = 1;
      } else e === "title" ? this._title = o || "" : e === "term" ? this._term = o || "" : e === "order" ? this._order = o === "newest" ? "newest" : "oldest" : e === "hide-reactions" || e === "reactions" ? this._hideReactions = this.hasAttribute("hide-reactions") || this.getAttribute("reactions") === "false" : e === "hide-skin-tone" || e === "skin-tone" ? this._hideSkinTone = this.hasAttribute("hide-skin-tone") || this.getAttribute("skin-tone") === "false" : e === "hide-sorting" || e === "sorting" ? this._hideSorting = this.hasAttribute("hide-sorting") || this.getAttribute("sorting") === "false" : e === "hide-code-scroll" || e === "code-scroll" ? this._hideCodeScroll = this.hasAttribute("hide-code-scroll") || this.getAttribute("code-scroll") === "false" : e === "hide-preview" || e === "preview" ? this._hidePreview = this.hasAttribute("hide-preview") || this.getAttribute("preview") === "false" : e === "hide-search" || e === "search" ? this._hideSearch = this.hasAttribute("hide-search") || this.getAttribute("search") === "false" : e === "enable-moderation" || e === "moderation" ? (this._enableModeration = this.hasAttribute("enable-moderation") || this.getAttribute("moderation") === "true", this.isConnected && this._enableModeration && this._isOwner() && this.loadModerationList()) : (e === "enable-images" || e === "images") && (this._enableImages = this.hasAttribute("enable-images") || this.getAttribute("images") === "true");
      this.render();
    }
  }
  syncAttributes() {
    this._repo = this.getAttribute("repo") || "", this._category = this.getAttribute("category") || "General", this._theme = this.getAttribute("theme") || "cream", this._lang = this.getAttribute("lang") || "auto", this._broker = this.getAttribute("broker") || "", this._clientId = this.getAttribute("client-id") || "Iv23liZHApvnx6e6wtMJ";
    const e = this.getAttribute("input-position");
    (e === "top" || e === "bottom") && (this._inputPosition = e);
    const t = this.getAttribute("page-size");
    if (t) {
      const o = parseInt(t, 10);
      !isNaN(o) && o > 0 && (this._pageSize = o);
    }
    this._title = this.getAttribute("title") || "", this._term = this.getAttribute("term") || "", this._order = this.getAttribute("order") === "newest" ? "newest" : "oldest", this._hideReactions = this.hasAttribute("hide-reactions") || this.getAttribute("reactions") === "false", this._hideSkinTone = this.hasAttribute("hide-skin-tone") || this.getAttribute("skin-tone") === "false", this._hideSorting = this.hasAttribute("hide-sorting") || this.getAttribute("sorting") === "false", this._hideCodeScroll = this.hasAttribute("hide-code-scroll") || this.getAttribute("code-scroll") === "false", this._hidePreview = this.hasAttribute("hide-preview") || this.getAttribute("preview") === "false", this._hideSearch = this.hasAttribute("hide-search") || this.getAttribute("search") === "false", this._enableModeration = this.hasAttribute("enable-moderation") || this.getAttribute("moderation") === "true", this._enableImages = this.hasAttribute("enable-images") || this.getAttribute("images") === "true", this.hasAttribute("theme") || this.setAttribute("theme", this._theme), this.initBrokerClient();
  }
  /**
   * Inicializa e persiste o tom de pele padrão escolhido pelo usuário no navegador (localStorage)
   */
  initSkinTonePreference() {
    if (!(typeof window > "u"))
      try {
        const e = localStorage.getItem(fe);
        e !== null && (this._selectedSkinTone = e);
      } catch (e) {
        console.warn("🍃 [ScatterLeaf] localStorage inacessível para skin tones:", e);
      }
  }
  saveSkinTonePreference(e) {
    if (this._selectedSkinTone = e, typeof window < "u")
      try {
        localStorage.setItem(fe, e);
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
            let A = $.slice(1);
            if ((A.length === 3 || A.length === 4) && (A = A.split("").map((F) => F + F).join("")), A.length >= 6)
              return {
                r: parseInt(A.substring(0, 2), 16),
                g: parseInt(A.substring(2, 4), 16),
                b: parseInt(A.substring(4, 6), 16)
              };
          }
          const j = $.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
          return j ? {
            r: parseInt(j[1], 10),
            g: parseInt(j[2], 10),
            b: parseInt(j[3], 10)
          } : null;
        }, t = window.getComputedStyle(document.documentElement), o = window.getComputedStyle(document.body), a = this.parentElement || document.body, r = window.getComputedStyle(a), i = ($) => {
          for (const j of $) {
            const A = r.getPropertyValue(j).trim() || o.getPropertyValue(j).trim() || t.getPropertyValue(j).trim();
            if (A) {
              const F = e(A);
              if (F) return F;
            }
          }
          return null;
        };
        let s = i([
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
          let $ = this;
          for (; $; ) {
            const j = window.getComputedStyle($).backgroundColor, A = e(j);
            if (A) {
              s = A;
              break;
            }
            $ = $.parentElement;
          }
        }
        s || (s = e(o.backgroundColor) || e(t.backgroundColor) || { r: 255, g: 255, b: 255 });
        let d = i([
          "--sl-text",
          "--page-text",
          "--color-text",
          "--text-color",
          "--color-foreground",
          "--foreground",
          "--text"
        ]);
        if (!d) {
          let $ = this;
          for (; $; ) {
            const j = window.getComputedStyle($).color, A = e(j);
            if (A) {
              d = A;
              break;
            }
            $ = $.parentElement;
          }
        }
        let l = i([
          "--sl-accent",
          "--page-accent",
          "--color-accent",
          "--color-primary",
          "--primary",
          "--accent",
          "--brand"
        ]);
        if (!l) {
          const $ = document.querySelector("a");
          $ && (l = e(window.getComputedStyle($).color));
        }
        const b = document.documentElement.classList.contains("dark") || document.body.classList.contains("dark") || document.documentElement.getAttribute("data-theme") === "dark" || document.body.getAttribute("data-theme") === "dark" || document.body.getAttribute("data-page-theme") === "midnight" || document.body.getAttribute("data-page-theme") === "slate" || document.body.getAttribute("data-page-theme") === "terminal", T = 0.2126 * s.r + 0.7152 * s.g + 0.0722 * s.b, g = b || T < 128;
        d || (d = g ? { r: 230, g: 237, b: 243 } : { r: 28, g: 25, b: 23 }), l || (l = g ? { r: 88, g: 166, b: 255 } : { r: 146, g: 64, b: 14 });
        let k, w, _, L, x, I, B;
        if (g) {
          const $ = Math.min(255, Math.round(s.r + 15)), j = Math.min(255, Math.round(s.g + 18)), A = Math.min(255, Math.round(s.b + 22));
          k = `rgb(${$}, ${j}, ${A})`, w = "rgba(0, 0, 0, 0.35)", _ = "rgba(255, 255, 255, 0.12)", L = `rgba(${d.r}, ${d.g}, ${d.b}, 0.62)`, x = `rgb(${Math.min(255, l.r + 30)}, ${Math.min(255, l.g + 30)}, ${Math.min(255, l.b + 30)})`, I = `rgba(${l.r}, ${l.g}, ${l.b}, 0.16)`, B = `rgba(${l.r}, ${l.g}, ${l.b}, 0.35)`;
        } else
          k = "rgba(255, 255, 255, 0.96)", w = "rgba(0, 0, 0, 0.035)", _ = "rgba(0, 0, 0, 0.12)", L = `rgba(${d.r}, ${d.g}, ${d.b}, 0.65)`, x = `rgb(${l.r}, ${l.g}, ${l.b})`, I = `rgba(${l.r}, ${l.g}, ${l.b}, 0.12)`, B = `rgba(${l.r}, ${l.g}, ${l.b}, 0.28)`;
        const D = `rgb(${l.r}, ${l.g}, ${l.b})`;
        this.style.setProperty("--sl-bg", `rgb(${s.r}, ${s.g}, ${s.b})`), this.style.setProperty("--sl-surface", k), this.style.setProperty("--sl-tab-bg", w), this.style.setProperty("--sl-border", _), this.style.setProperty("--sl-text", `rgb(${d.r}, ${d.g}, ${d.b})`), this.style.setProperty("--sl-text-muted", L), this.style.setProperty("--sl-accent", D), this.style.setProperty("--sl-accent-hover", D), this.style.setProperty("--sl-mention-color", x), this.style.setProperty("--sl-mention-bg", I), this.style.setProperty("--sl-mention-border", B), g ? (this.style.setProperty("--sl-btn-primary-bg", "#1f6feb"), this.style.setProperty("--sl-btn-primary-hover", "#388bfd")) : (this.style.setProperty("--sl-btn-primary-bg", D), this.style.setProperty("--sl-btn-primary-hover", D));
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
      "--sl-btn-primary-bg",
      "--sl-btn-primary-hover",
      "--sl-mention-color",
      "--sl-mention-bg",
      "--sl-mention-border"
    ].forEach((t) => this.style.removeProperty(t));
  }
  initBrokerClient() {
    this._broker ? this._brokerClient = new $e(this._broker, () => this._authToken) : (this._brokerClient = null, this._isBrokerConnected = !1);
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
      const o = window.location.pathname + window.location.hash;
      window.history.replaceState({}, document.title, o), await this.exchangeOAuthCode(t);
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
      const t = window.location.origin + window.location.pathname, o = await this._brokerClient.exchangeOAuthCode(e, t), a = await this._brokerClient.fetchGitHubUserProfile(o);
      this._authToken = o, this._currentUser = a, sessionStorage.setItem("scatterleaf_token", o), sessionStorage.setItem("scatterleaf_user", JSON.stringify(a)), await this.loadComments(), this._enableModeration && this._isOwner() && await this.loadModerationList(), this._isLoading = !1, this.render(), this.dispatchEvent(
        new CustomEvent("scatterleaf-login", {
          detail: { user: a },
          bubbles: !0,
          composed: !0
        })
      );
    } catch (t) {
      this._isLoading = !1, this.render();
      const o = t instanceof Error ? t.message : "Falha na autenticação";
      alert(`🍃 [ScatterLeaf Auth] ${o}`);
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
Deseja simular um login local de teste (@demo-reader)?` : `🍃 ScatterLeaf Playground:
No "client-id" configured yet.
Do you want to simulate a local test login (@demo-reader)?`
      )) {
        const l = {
          login: "demo-reader",
          avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
          name: "Demo Reader",
          url: "https://github.com"
        };
        this._currentUser = l, this._authToken = "mock_token_local", sessionStorage.setItem("scatterleaf_token", this._authToken), sessionStorage.setItem("scatterleaf_user", JSON.stringify(l)), this._enableModeration && this._isOwner() && this.loadModerationList(), this.render();
      }
      return;
    }
    const e = encodeURIComponent(window.location.origin + window.location.pathname), t = encodeURIComponent("read:user"), o = `https://github.com/login/oauth/authorize?client_id=${this._clientId}&scope=${t}&redirect_uri=${e}`, a = 600, r = 700, i = window.screen.width / 2 - a / 2, s = window.screen.height / 2 - r / 2;
    window.open(
      o,
      "scatterleaf-oauth-popup",
      `width=${a},height=${r},top=${s},left=${i},scrollbars=yes,status=yes`
    );
  }
  /**
   * Encerra a sessão do usuário
   */
  logout() {
    sessionStorage.removeItem("scatterleaf_token"), sessionStorage.removeItem("scatterleaf_user"), this._authToken = null, this._currentUser = null, this._moderatedUsers = [], this.render(), this.dispatchEvent(
      new CustomEvent("scatterleaf-logout", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  /**
   * Identifica se um erro lançado é decorrente de falha de autenticação/token expirado
   */
  isAuthError(e) {
    return e instanceof pe ? !0 : e instanceof Error ? /bad credentials|unauthorized|sessão expirada|http 401/i.test(e.message) : !1;
  }
  /**
   * Trata expiração de token (HTTP 401 / Bad credentials).
   * Limpa as credenciais salvas sem perder o rascunho de texto digitado no composer.
   */
  handleExpiredSession(e = !1) {
    sessionStorage.removeItem("scatterleaf_token"), sessionStorage.removeItem("scatterleaf_user"), this._authToken = null, this._currentUser = null, this._moderatedUsers = [], e || alert(
      this.currentLang === "pt" ? "Sua sessão do GitHub expirou. Conecte-se novamente para publicar sua mensagem (seu texto foi preservado no editor)." : "Your GitHub session has expired. Please sign in again to publish (your text was preserved in the editor)."
    ), this.render(), this.dispatchEvent(
      new CustomEvent("scatterleaf-logout", {
        bubbles: !0,
        composed: !0
      })
    );
  }
  getCurrentTerm() {
    return this._term ? this._term : this._title ? this._title.trim() : typeof window > "u" ? "general" : window.location.pathname || "general";
  }
  /**
   * Verifica se o usuário autenticado é o proprietário do repositório
   */
  _isOwner() {
    var t, o;
    if (!((t = this._currentUser) != null && t.login) || !this._repo) return !1;
    const e = (o = this._repo.split("/")[0]) == null ? void 0 : o.toLowerCase();
    return !!(e && this._currentUser.login.toLowerCase() === e);
  }
  /**
   * Carrega a lista de usuários moderados direto do KV via Broker
   */
  async loadModerationList() {
    if (!(!this._enableModeration || !this._isOwner() || !this._brokerClient || !this._authToken || !this._repo)) {
      this._isModerationLoading = !0, this.render();
      try {
        this._moderatedUsers = await this._brokerClient.getModerationList(this._repo);
      } catch (e) {
        console.warn("🍃 [ScatterLeaf] Erro ao carregar lista de moderação:", e), this.isAuthError(e) && this.handleExpiredSession(!0);
      } finally {
        this._isModerationLoading = !1, this.render();
      }
    }
  }
  /**
   * Aplica ban ou restrição de mídia a um usuário
   */
  async handleSetModeration(e, t) {
    if (!this._isOwner() || !this._brokerClient || !this._authToken || !this._repo) {
      alert(
        this.currentLang === "pt" ? "🍃 Apenas o proprietário do repositório pode moderar usuários." : "🍃 Only the repository owner can moderate users."
      );
      return;
    }
    const o = t === "ban" ? this.currentLang === "pt" ? "banir" : "ban" : this.currentLang === "pt" ? "restringir mídia de" : "restrict media for";
    if (confirm(
      this.currentLang === "pt" ? `Tem certeza que deseja ${o} @${e}?` : `Are you sure you want to ${o} @${e}?`
    ))
      try {
        await this._brokerClient.setModeration(this._repo, e, t), await this.loadModerationList(), alert(
          this.currentLang === "pt" ? `🍃 @${e} foi moderado com sucesso (${t === "ban" ? "banido" : "sem mídia"}).` : `🍃 @${e} moderated successfully (${t === "ban" ? "banned" : "media restricted"}).`
        );
      } catch (r) {
        if (this.isAuthError(r)) {
          this.handleExpiredSession(!1);
          return;
        }
        alert((r == null ? void 0 : r.message) || "Erro ao moderar usuário");
      }
  }
  /**
   * Remove restrição de moderação de um usuário
   */
  async handleRemoveModeration(e) {
    if (!(!this._isOwner() || !this._brokerClient || !this._authToken || !this._repo || !confirm(
      this.currentLang === "pt" ? `Remover restrição de moderação de @${e}?` : `Remove moderation restriction for @${e}?`
    )))
      try {
        await this._brokerClient.removeModeration(this._repo, e), await this.loadModerationList();
        const o = this._expandedModCategory;
        o && this._moderatedUsers.filter(
          (r) => r.action === (o === "ban" ? "ban" : "restrict_media")
        ).length === 0 && (this._expandedModCategory = null, this.render());
      } catch (o) {
        if (this.isAuthError(o)) {
          this.handleExpiredSession(!1);
          return;
        }
        alert((o == null ? void 0 : o.message) || "Erro ao remover moderação");
      }
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
        const o = this.getCurrentTerm(), a = await this._brokerClient.fetchDiscussions(this._repo, o);
        a.discussion && (this._discussionId = a.discussion.id), this._comments = (a.comments || []).map((r) => ({
          ...r,
          originalLang: r.originalLang || this.detectTextLanguage(r.body),
          replies: (r.replies || []).map((i) => ({
            ...i,
            originalLang: i.originalLang || this.detectTextLanguage(i.body)
          }))
        })), this._isBrokerConnected = !0;
      }
    } catch (t) {
      if (this.isAuthError(t) && this._authToken)
        return console.warn("🍃 [ScatterLeaf] Token de usuário expirado detectado ao carregar discussões. Limpando sessão e recarregando anonimamente..."), this.handleExpiredSession(!0), this.loadComments();
      console.warn("🍃 [ScatterLeaf] Broker offline ou inacessível. Usando mock local:", t), this._isBrokerConnected = !1, this.loadMockComments();
    } finally {
      this._isLoading = !1, this.render();
    }
  }
  loadMockComments() {
    const e = this.currentLang, t = e === "pt", o = e === "es", a = this.getCurrentTerm().toLowerCase();
    if (a.includes("obsidian")) {
      this._comments = [
        {
          id: "obs-1",
          author: {
            login: "vault-author",
            avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
            url: "https://github.com",
            isAuthor: !0
          },
          body: t ? "Bem-vindo à discussão do guia de conexão do **Obsidian Vault** com o Minrock! 🍃 Se você tiver dúvidas sobre os passos do assistente do Vault CMS ou sobre o formato Page Bundle, deixe uma mensagem aqui." : o ? "¡Bienvenido a la discusión de la guía de conexión de **Obsidian Vault** con Minrock! 🍃 Si tienes dudas sobre los pasos del asistente de Vault CMS o el formato Page Bundle, deja un mensaje aquí." : "Welcome to the **Obsidian Vault** + Minrock integration discussion! 🍃 If you have questions about the Vault CMS wizard steps or the Page Bundle format, leave a message below.",
          createdAt: t ? "há 15 minutos" : o ? "hace 15 minutos" : "15 minutes ago",
          originalLang: t ? "pt" : o ? "es" : "en",
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
              body: t ? "@vault-author A calibração do modo de criação como pasta (`folder`) e `index.md` foi essencial. Agora ao colar um print com `Ctrl+V`, a imagem fica junto com o post sem espalhar arquivos soltos na raiz!" : "@vault-author Setting file organization to `folder` and `index.md` was key. Now when pasting screenshots via `Ctrl+V`, images stay co-located with the post instead of scattering across the root!",
              createdAt: t ? "há 10 minutos" : "10 minutes ago",
              originalLang: t ? "pt" : "en",
              reactions: [{ content: "❤️", count: 3, viewerHasReacted: !0 }],
              parentId: "obs-1"
            },
            {
              id: "obs-1-2",
              author: {
                login: "vault-author",
                avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
                url: "https://github.com",
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
          body: t ? "O vídeo do David Kimball no final do artigo ajudou bastante a visualizar o fluxo de publicação com o Git status bar do Obsidian!" : o ? "¡El vídeo de David Kimball al final del artículo ayudó muchísimo a visualizar el flujo de publicación con la barra de Git en Obsidian!" : "David Kimball's walkthrough video at the end of the post really helped clarify the Git push workflow in Obsidian's status bar!",
          createdAt: t ? "há 12 minutos" : o ? "hace 12 minutos" : "12 minutes ago",
          originalLang: t ? "pt" : o ? "es" : "en",
          reactions: [{ content: "🎉", count: 4, viewerHasReacted: !1 }],
          replies: []
        }
      ];
      return;
    }
    if (a.includes("writing-technical-articles")) {
      this._comments = [
        {
          id: "write-1",
          author: {
            login: "vault-author",
            avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
            url: "https://github.com",
            isAuthor: !0
          },
          body: t ? "Qual é a sua opinião sobre o ritmo tipográfico e o espaçamento para leitura de blocos longos de código técnico no Minrock?" : o ? "¿Cuál es tu opinión sobre el ritmo tipográfico y el espaciado para leer bloques largos de código técnico en Minrock?" : "What are your thoughts on Minrock's typographic rhythm and line height when reading long technical code blocks?",
          createdAt: t ? "há 20 minutos" : o ? "hace 20 minutos" : "20 minutes ago",
          originalLang: t ? "pt" : o ? "es" : "en",
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
              body: t ? "@vault-author A renderização com Shiki e o fundo sutil do bloco de código dão um contraste perfeito sem agredir a visão em sessões longas de leitura." : "@vault-author The Shiki rendering paired with subtle background surfaces creates ideal contrast without eye strain during long reading sessions.",
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
          body: t ? "A hierarquia limpa de títulos (`h2`, `h3`) e listas compactas mantém o foco total na substância técnica do artigo." : o ? "La jerarquía limpia de encabezados (`h2`, `h3`) y listas compactas mantiene el foco total en la sustancia técnica del artículo." : "The clean headings hierarchy (`h2`, `h3`) and compact lists keep the focus entirely on technical substance.",
          createdAt: t ? "há 8 minutos" : o ? "hace 8 minutos" : "8 minutes ago",
          originalLang: t ? "pt" : o ? "es" : "en",
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
          login: "vault-author",
          avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
          url: "https://github.com",
          isAuthor: !0
        },
        body: t ? "Bem-vindo ao **ScatterLeaf**! 🍃 Este é um comentário nativo renderizado diretamente via Shadow DOM, com zero iframes e suporte a Markdown." : o ? "¡Bienvenido a **ScatterLeaf**! 🍃 Este es un comentario nativo renderizado directamente a través de Shadow DOM, sin iframes y con soporte para Markdown." : "Welcome to **ScatterLeaf**! 🍃 This is a native comment rendered directly via Shadow DOM, with zero iframes and full Markdown support.",
        createdAt: t ? "há 10 minutos" : o ? "hace 10 minutos" : "10 minutes ago",
        originalLang: t ? "pt" : o ? "es" : "en",
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
            body: t ? "@vault-author Isso é genial! Ter Shadow DOM nativo deixa a rolagem suave como manteiga, sem nenhum engasgo de iframe." : "@vault-author This is brilliant! Having native Shadow DOM makes the scroll buttery smooth without any iframe stutter.",
            createdAt: t ? "há 5 minutos" : "5 minutes ago",
            originalLang: t ? "pt" : "en",
            reactions: [{ content: "❤️", count: 2, viewerHasReacted: !0 }],
            parentId: "1"
          },
          {
            id: "1-2",
            author: {
              login: "vault-author",
              avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
              url: "https://github.com",
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
        createdAt: t ? "há 8 minutos" : o ? "hace 8 minutos" : "8 minutes ago",
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
    const t = [], o = "SLCODEBLOCKTOKEN";
    let r = e.replace(
      /```([a-zA-Z0-9_-]*)\r?\n?([\s\S]*?)```/g,
      (i, s, d) => {
        const l = (s || "code").trim().toLowerCase(), g = d.replace(/^\n+|\n+$/g, "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").split(/\r?\n/), k = g.map(
          (N, W) => `<span class="sl-code-line"><span class="sl-line-num">${W + 1}</span><span class="sl-line-code">${N || " "}</span></span>`
        ).join(""), w = g.length > 20, _ = this.currentLang === "pt", L = _ ? "Copiar" : "Copy", x = _ ? "Copiar código" : "Copy code", I = _ ? "Rolar para cima" : "Scroll up", B = _ ? "Rolar para baixo" : "Scroll down", D = w ? `${l} · ${g.length} ${_ ? "linhas" : "lines"}` : l, $ = _ ? `Mostrar todas as ${g.length} linhas` : `Show all ${g.length} lines`, j = w && !this._hideCodeScroll ? `
            <div class="sl-code-scroll-controls" aria-label="${_ ? "Navegação do código" : "Code navigation"}">
              <button type="button" class="sl-code-scroll-btn sl-scroll-up" title="${I}" aria-label="${I}">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                  <path d="M8 3.5a.75.75 0 0 1 .53.22l4.5 4.5a.75.75 0 0 1-1.06 1.06L8 5.31 4.03 9.28a.75.75 0 0 1-1.06-1.06l4.5-4.5A.75.75 0 0 1 8 3.5Z"/>
                </svg>
              </button>
              <button type="button" class="sl-code-scroll-btn sl-scroll-down" title="${B}" aria-label="${B}">
                <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
                  <path d="M8 12.5a.75.75 0 0 1-.53-.22l-4.5-4.5a.75.75 0 0 1 1.06-1.06L8 10.69l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.53.22Z"/>
                </svg>
              </button>
            </div>
            <div class="sl-code-expand-bar">
              <button type="button" class="sl-code-expand-btn" data-lines="${g.length}">
                <span>↕</span>
                <span class="sl-expand-text">${$}</span>
              </button>
            </div>
          ` : "", A = `
          <div class="sl-code-block ${w ? "sl-code-block-long sl-collapsed" : ""}" data-lang="${l}">
            <div class="sl-code-header">
              <span class="sl-code-badge">${D}</span>
              <button type="button" class="sl-code-copy-btn" title="${x}" aria-label="${x}">
                <svg class="sl-copy-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                  <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
                  <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
                </svg>
                <span class="sl-copy-text">${L}</span>
              </button>
            </div>
            <pre class="sl-code-pre"><code class="sl-code-body">${k}</code></pre>
            ${j}
          </div>
        `.trim(), F = t.length;
        return t.push(A), `${o}${F}ENDTOKEN`;
      }
    ).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return r = r.replace(/`([^`]+)`/g, '<code class="sl-inline-code">$1</code>'), r = r.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>"), r = r.replace(/__([^_]+)__/g, "<strong>$1</strong>"), r = r.replace(/\*([^*]+)\*/g, "<em>$1</em>"), r = r.replace(/_([^_]+)_/g, "<em>$1</em>"), r = r.replace(/~~([^~]+)~~/g, "<del>$1</del>"), r = r.replace(
      /!\[([^\]]*)\]\(((?:https?:\/\/|data:image\/)[^\s)]+)\)/g,
      (i, s, d) => {
        const l = V(d);
        return l.safe ? `<img src="${d}" alt="${s}" class="sl-embedded-img" loading="lazy" />` : `<span class="sl-blocked-media-notice" title="${l.reason || "Conteúdo potencialmente sensível"}">⚠️ [Mídia bloqueada: filtro de conteúdo sensível / link não seguro]</span>`;
      }
    ), r = r.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
    ), r = r.replace(
      /(^|[^"'])(https?:\/\/[^\s<]+)/g,
      '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>'
    ), r = r.replace(
      /@([a-zA-Z0-9-_]+)/g,
      '<a href="https://github.com/$1" target="_blank" rel="noopener noreferrer" class="sl-mention">@$1</a>'
    ), r = r.replace(/\n\n/g, "</p><p>"), r = r.replace(/\n/g, "<br />"), t.forEach((i, s) => {
      const d = `${o}${s}ENDTOKEN`;
      r = r.replace(new RegExp(`<p>\\s*${d}\\s*<\\/p>`, "g"), i), r = r.replace(new RegExp(d, "g"), i);
    }), `<p>${r}</p>`;
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
    const o = typeof navigator < "u" && navigator.language ? navigator.language : this.currentLang === "pt" ? "pt-BR" : "en-US", a = new Intl.DateTimeFormat(o, {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(t), r = Math.floor((Date.now() - t.getTime()) / 1e3), i = this.currentLang, s = i === "pt", d = i === "es";
    if (r < 60)
      return {
        relative: s ? "agora mesmo" : d ? "ahora mismo" : "just now",
        full: a
      };
    if (r < 3600) {
      const b = Math.floor(r / 60);
      return {
        relative: s ? `há ${b} ${b === 1 ? "minuto" : "minutos"}` : d ? `hace ${b} ${b === 1 ? "minuto" : "minutos"}` : `${b} ${b === 1 ? "minute" : "minutes"} ago`,
        full: a
      };
    }
    if (r < 86400) {
      const b = Math.floor(r / 3600);
      return {
        relative: s ? `há ${b} ${b === 1 ? "hora" : "horas"}` : d ? `hace ${b} ${b === 1 ? "hora" : "horas"}` : `${b} ${b === 1 ? "hour" : "hours"} ago`,
        full: a
      };
    }
    if (r < 604800) {
      const b = Math.floor(r / 86400);
      return {
        relative: s ? `há ${b} ${b === 1 ? "dia" : "dias"}` : d ? `hace ${b} ${b === 1 ? "día" : "días"}` : `${b} ${b === 1 ? "day" : "days"} ago`,
        full: a
      };
    }
    return { relative: new Intl.DateTimeFormat(o, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    }).format(t), full: a };
  }
  /**
   * Detector heurístico ultrarrápido de idioma do texto do comentário (para voz poliglota e tradução)
   */
  detectTextLanguage(e) {
    if (!e || e.trim().length === 0) return this._lang;
    const t = e.toLowerCase().replace(/[*_`#]/g, "").replace(/https?:\/\/\S+/g, "").replace(/@\w+/g, ""), o = (t.match(/\b(o|a|os|as|de|do|da|em|um|uma|para|com|não|que|isso|este|esta|muito|bom|bem|projeto|comentário|genial|manteiga|artigo|leitura)\b/g) || []).length * 2 + (t.match(/[ãõéêáàçíú]/g) || []).length * 3, a = (t.match(/\b(the|and|this|is|that|with|for|you|have|not|but|from|are|was|they|will|all|would|there|what|out|about|who|get|which|go|me|when|make|can|like|time|no|just|know|take|people|into|year|your|good|some|could|them|see|other|than|then|now|look|only|come|its|over|think|also|back|after|use|two|how|our|work|first|well|way|even|new|want|because|any|these|give|day|most|us|welcome|native|having|scroll|stutter)\b/g) || []).length * 2, r = (t.match(/\b(el|la|los|las|de|del|en|un|una|por|con|para|esto|este|esta|muy|bien|es|son|pero|como|más|sus|le|ya|o|fue|ha|sí|porque|cuando|sin|sobre|ser|tiene|también|me|hasta|hay|donde|quien|desde|todo|nos|durante|todos|uno|les|ni|contra|otros|ese|eso|ante|ellos|mí|antes|algunos|qué|unos|yo|otro|otras|otra|él|tanto|esa|estos|mucho|quienes|nada|muchos|cual|poco|ella|estar|estas|algunas|algo|nosotros|queda|excelente|artículos)\b/g) || []).length * 2 + (t.match(/[¿¡ñ]/g) || []).length * 4, i = (t.match(/\b(le|la|les|de|du|des|en|et|un|une|pour|avec|dans|que|qui|est|sont|sur|ce|cette|ces|mais|ou|donc|or|ni|car|très|bien)\b/g) || []).length * 2 + (t.match(/[œçèêàâôûëï]/g) || []).length * 3, s = Math.max(o, a, r, i);
    return s < 2 ? this.currentLang : s === o ? "pt" : s === a ? "en" : s === r ? "es" : s === i ? "fr" : this.currentLang;
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
    const t = (T) => {
      for (const g of T) {
        if (g.id === e) return g;
        if (g.replies) {
          const k = t(g.replies);
          if (k) return k;
        }
      }
      return null;
    }, o = t(this._comments);
    if (!o) return;
    if (o.isShowingTranslation) {
      o.isShowingTranslation = !1, this.render();
      return;
    }
    if (o.translatedBody) {
      o.isShowingTranslation = !0, this.render();
      return;
    }
    const a = this.currentLang, r = a === "pt", s = r ? "pt" : a === "es" ? "es" : "en", b = r ? {
      1: "Welcome to **ScatterLeaf**! 🍃 This is a native comment rendered directly via Shadow DOM, with zero iframes and Markdown support.",
      "1-1": "@vault-author Isso é genial! Ter Shadow DOM nativo deixa a rolagem suave como manteiga, sem nenhum engasgo de iframe.",
      "1-2": "@sarah-eng Exactly! Page scrolling does not suffer from visual jumping caused by iframe resizing.",
      2: "Excelente projeto! O tema Warm Paper (**Cream**) fica fenomenal para ler artigos longos."
    } : {
      1: "Bem-vindo ao **ScatterLeaf**! 🍃 Este é um comentário nativo renderizado diretamente via Shadow DOM, com zero iframes e suporte a Markdown.",
      "1-1": "@vault-author This is brilliant! Having native Shadow DOM makes the scroll buttery smooth without any iframe stutter.",
      "1-2": "@sarah-eng Exato! A rolagem da página não sofre com os pulos visuais de redimensionamento do iframe.",
      2: "Excellent project! The Warm Paper (**Cream**) theme looks phenomenal for reading long articles."
    };
    if (b[e]) {
      o.translatedBody = b[e], o.isShowingTranslation = !0, this.render();
      return;
    }
    this._isTranslatingId = e, this.render();
    try {
      const T = o.originalLang || this.detectTextLanguage(o.body), g = o.body.replace(/[#*`_~]/g, ""), w = await (await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(g.slice(0, 500))}&langpair=${T}|${s}`
      )).json();
      w && w.responseData && w.responseData.translatedText ? o.translatedBody = w.responseData.translatedText : o.translatedBody = r ? `[Tradução]: ${o.body}` : `[Translation]: ${o.body}`;
    } catch (T) {
      console.warn("🍃 [ScatterLeaf] Erro na tradução automática:", T), o.translatedBody = r ? `[Tradução]: ${o.body}` : `[Translation]: ${o.body}`;
    } finally {
      this._isTranslatingId = null, o.isShowingTranslation = !0, this.render();
    }
  }
  toggleSpeak(e, t, o) {
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
    const r = t.replace(/```[\s\S]*?(?:```|$)|~~~[\s\S]*?(?:~~~|$)/g, "").replace(/[*_`#]/g, "").replace(/https?:\/\/\S+/g, "link").replace(/\s+/g, " ").trim() || (this._lang === "pt" ? "Este comentário contém apenas um bloco de código." : "This comment contains only a code block."), i = new SpeechSynthesisUtterance(r), d = o && {
      pt: "pt-BR",
      en: "en-US",
      es: "es-ES",
      fr: "fr-FR",
      de: "de-DE",
      it: "it-IT"
    }[o] || o || (this._lang === "pt" ? "pt-BR" : "en-US");
    if (i.lang = d, "speechSynthesis" in window) {
      const l = window.speechSynthesis.getVoices(), b = d.slice(0, 2).toLowerCase(), T = l.find(
        (g) => g.lang.replace("_", "-").toLowerCase().startsWith(b)
      );
      T && (i.voice = T);
    }
    i.rate = 1, i.onend = () => {
      this._speakingId = null, this.render();
    }, i.onerror = () => {
      this._speakingId = null, this.render();
    }, window.speechSynthesis.speak(i);
  }
  render() {
    if (!this.shadowRoot) return;
    const e = this._comments.reduce(
      (r, i) => {
        var s;
        return r + 1 + (((s = i.replies) == null ? void 0 : s.length) || 0);
      },
      0
    ), t = this.currentLang === "pt" ? "Comentários" : "Comments", o = this.renderComposer(), a = this._isLoading ? `<div style="text-align: center; padding: 2.5rem; color: var(--sl-text-muted);">
           <span style="font-size: 1.5rem; display: block; margin-bottom: 0.5rem; animation: spin 1s infinite linear;">🍃</span>
           ${this.currentLang === "pt" ? "Carregando notas na brisa..." : "Floating notes in the breeze..."}
         </div>` : this.renderCommentsList();
    this.shadowRoot.innerHTML = `
      <style>${Ee}</style>
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

        ${this._inputPosition === "top" ? o : ""}
        ${this.renderCommentsToolbar()}
        ${this.renderModerationBar()}
        ${a}
        ${this._inputPosition === "bottom" ? o : ""}
      </div>
      ${this._isMediaModalOpen ? this.renderMediaModal() : ""}
      ${this._isImageModalOpen ? this.renderImageModal() : ""}
      ${this._lightboxOpen ? this.renderLightbox() : ""}
    `, this.attachEvents();
  }
  /**
   * Renderiza o Modal Seguro de Inserção de GIFs (Anti-NSFW)
   */
  renderMediaModal() {
    const e = this.currentLang === "pt", t = e ? "Inserir GIF" : "Insert GIF", o = e ? "Filtro Anti-NSFW ativo: URLs passam por validação estrita de segurança e integridade." : "Anti-NSFW filter active: URLs undergo strict security and integrity checks.", a = e ? "URL do GIF (HTTPS obrigatório):" : "GIF URL (Strict HTTPS):", r = e ? "Descrição do GIF / Alt text (Opcional):" : "GIF description / Alt text (Optional):", i = e ? "Cancelar" : "Cancel", s = e ? "Inserir GIF" : "Insert GIF", d = ne();
    return `
      <div class="sl-modal-backdrop" id="media-modal-backdrop">
        <div class="sl-modal-box" role="dialog" aria-modal="true" aria-labelledby="sl-media-modal-title">
          <div class="sl-modal-header">
            <h4 class="sl-modal-title" id="sl-media-modal-title">
              <span>🖼️</span>
              <span>${t}</span>
            </h4>
            <button type="button" class="sl-modal-close-btn" id="btn-close-media-modal" aria-label="${e ? "Fechar" : "Close"}">✕</button>
          </div>

          <div class="sl-modal-body">
            <div class="sl-modal-notice">
              <span>${o}</span>
            </div>

            <!-- Inserção por URL segura -->
            <div class="sl-modal-input-group">
              <label class="sl-modal-label" for="media-url-input">${a}</label>
              <input
                type="url"
                class="sl-modal-input"
                id="media-url-input"
                placeholder="https://media.giphy.com/media/.../giphy.gif"
                value="${this._mediaModalUrl}"
                autofocus
              />
              <div class="sl-url-preview-card" id="media-url-preview-card" style="${this._mediaModalUrl && !this._mediaModalError ? "display: flex;" : "display: none;"}">
                <img src="${this._mediaModalUrl || ""}" alt="Prévia do GIF" class="sl-url-preview-img" id="media-url-preview-img" onerror="this.style.display='none'" />
                <span class="sl-url-preview-label">${e ? "✓ Link pronto para inserção" : "✓ Link ready to insert"}</span>
              </div>
            </div>

            <!-- Descrição / Alt Text -->
            <div class="sl-modal-input-group">
              <label class="sl-modal-label" for="media-alt-input">${r}</label>
              <input
                type="text"
                class="sl-modal-input"
                id="media-alt-input"
                placeholder="${e ? "Ex: Comemoração animada" : "Ex: Cheering reaction"}"
                value="${this._mediaModalAlt}"
              />
            </div>

            <!-- Botão Adicionar na Coleção -->
            <div class="sl-modal-collection-row">
              <button type="button" class="sl-btn sl-btn-save-collection" id="btn-save-gif-collection" title="${e ? "Salvar GIF na sua coleção recente sem postar direto" : "Save GIF to your recent collection without posting"}">
                <span>➕</span>
                <span>${e ? "Salvar na coleção" : "Save to collection"}</span>
              </button>
              ${this._mediaModalSuccess ? `<span class="sl-modal-success-badge">✓ ${this._mediaModalSuccess}</span>` : ""}
            </div>

            ${d.length > 0 ? `
              <div class="sl-modal-recents">
                <div class="sl-modal-recents-header">
                  <span>${e ? `Seus GIFs Recentes (${d.length}/24):` : `Your Recent GIFs (${d.length}/24):`}</span>
                  ${this._isConfirmingClearGifs ? `
                    <div class="sl-confirm-clear-box">
                      <span class="sl-confirm-clear-text">${e ? "Limpar todos?" : "Clear all?"}</span>
                      <div class="sl-confirm-clear-actions">
                        <button type="button" class="sl-btn-confirm-yes" id="btn-confirm-clear-gifs-yes">${e ? "Sim, limpar" : "Yes, clear"}</button>
                        <button type="button" class="sl-btn-confirm-no" id="btn-confirm-clear-gifs-no">${e ? "Cancelar" : "Cancel"}</button>
                      </div>
                    </div>
                  ` : `
                    <div class="sl-modal-recents-actions">
                      <button type="button" class="sl-btn-manage-recents ${this._isManagingRecentGifs ? "sl-active" : ""}" id="btn-manage-recent-gifs" title="${this._isManagingRecentGifs ? e ? "Concluir gerenciamento" : "Done managing" : e ? "Gerenciar e remover GIFs" : "Manage & remove GIFs"}">
                        ${this._isManagingRecentGifs ? e ? "✓ Concluir" : "✓ Done" : e ? "Gerenciar" : "Manage"}
                      </button>
                      <button type="button" class="sl-btn-clear-recents" id="btn-clear-recent-gifs" title="${e ? "Limpar histórico de GIFs" : "Clear GIF history"}">
                        ${e ? "Limpar" : "Clear"}
                      </button>
                    </div>
                  `}
                </div>
                <div class="sl-modal-recents-grid ${this._isManagingRecentGifs ? "sl-managing-recents" : ""}">
                  ${d.map(
      (l) => `
                    <div class="sl-recent-gif-wrapper">
                      <button type="button" class="sl-recent-gif-item" data-url="${l.url}" data-alt="${l.alt || ""}" title="${l.alt || l.url}">
                        <img src="${l.url}" alt="${l.alt || "GIF"}" loading="lazy" />
                      </button>
                      <button type="button" class="sl-btn-delete-recent-gif" data-url="${l.url}" title="${e ? "Remover este GIF dos recentes" : "Remove this GIF from recents"}" aria-label="${e ? "Remover GIF" : "Remove GIF"}">✕</button>
                    </div>
                  `
    ).join("")}
                </div>
              </div>
            ` : ""}

            <div class="sl-modal-error" id="media-modal-error-box" style="${this._mediaModalError ? "display: flex;" : "display: none;"}">
              <span>⚠️</span>
              <span id="media-modal-error-text">${this._mediaModalError || ""}</span>
            </div>
          </div>

          <div class="sl-modal-footer">
            <button type="button" class="sl-btn sl-btn-secondary" id="btn-cancel-media-modal">
              ${i}
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
   * Renderiza o Modal Seguro de Inserção de Imagens (Apenas via URL HTTPS)
   */
  renderImageModal() {
    const e = this.currentLang === "pt", t = e ? "Inserir imagem" : "Insert image", o = e ? "Filtro Anti-NSFW ativo: Insira um link direto HTTPS seguro da sua imagem (Imgur, Cloudinary, GitHub, etc.)." : "Anti-NSFW filter active: Enter a secure HTTPS direct link to your image (Imgur, Cloudinary, GitHub, etc.).", a = e ? "URL da Imagem (HTTPS obrigatório):" : "Image URL (Strict HTTPS):", r = e ? "Descrição da Imagem / Alt text (Opcional):" : "Image description / Alt text (Optional):", i = e ? "Cancelar" : "Cancel", s = e ? "Inserir Imagem" : "Insert Image", d = le();
    return `
      <div class="sl-modal-backdrop" id="image-modal-backdrop">
        <div class="sl-modal-box" role="dialog" aria-modal="true" aria-labelledby="sl-image-modal-title">
          <div class="sl-modal-header">
            <h4 class="sl-modal-title" id="sl-image-modal-title">
              <span>📷</span>
              <span>${t}</span>
            </h4>
            <button type="button" class="sl-modal-close-btn" id="btn-close-image-modal" aria-label="${e ? "Fechar" : "Close"}">✕</button>
          </div>

          <div class="sl-modal-body">
            <div class="sl-modal-notice">
              <span>${o}</span>
            </div>

            <!-- Inserção por URL segura -->
            <div class="sl-modal-input-group">
              <label class="sl-modal-label" for="image-url-input">${a}</label>
              <input
                type="url"
                class="sl-modal-input"
                id="image-url-input"
                placeholder="https://i.imgur.com/... ou https://res.cloudinary.com/..."
                value="${this._imageModalUrl}"
                autofocus
              />
              <div class="sl-url-preview-card" id="image-url-preview-card" style="${this._imageModalUrl && !this._imageModalError ? "display: flex;" : "display: none;"}">
                <img src="${this._imageModalUrl || ""}" alt="Prévia da imagem" class="sl-url-preview-img" id="image-url-preview-img" onerror="this.style.display='none'" />
                <span class="sl-url-preview-label">${e ? "✓ Link pronto para inserção" : "✓ Link ready to insert"}</span>
              </div>
            </div>

            <!-- Descrição / Alt Text -->
            <div class="sl-modal-input-group">
              <label class="sl-modal-label" for="image-alt-input">${r}</label>
              <input
                type="text"
                class="sl-modal-input"
                id="image-alt-input"
                placeholder="${e ? "Ex: Diagrama de fluxo do projeto" : "Ex: Project workflow diagram"}"
                value="${this._imageModalAlt}"
              />
            </div>

            <!-- Botão Adicionar na Coleção -->
            <div class="sl-modal-collection-row">
              <button type="button" class="sl-btn sl-btn-save-collection" id="btn-save-image-collection" title="${e ? "Salvar Imagem na sua coleção recente sem postar direto" : "Save Image to your recent collection without posting"}">
                <span>➕</span>
                <span>${e ? "Salvar na coleção" : "Save to collection"}</span>
              </button>
              ${this._imageModalSuccess ? `<span class="sl-modal-success-badge">✓ ${this._imageModalSuccess}</span>` : ""}
            </div>

            ${d.length > 0 ? `
              <div class="sl-modal-recents">
                <div class="sl-modal-recents-header">
                  <span>${e ? `Suas Imagens Recentes (${d.length}/24):` : `Your Recent Images (${d.length}/24):`}</span>
                  ${this._isConfirmingClearImages ? `
                    <div class="sl-confirm-clear-box">
                      <span class="sl-confirm-clear-text">${e ? "Limpar todas?" : "Clear all?"}</span>
                      <div class="sl-confirm-clear-actions">
                        <button type="button" class="sl-btn-confirm-yes" id="btn-confirm-clear-images-yes">${e ? "Sim, limpar" : "Yes, clear"}</button>
                        <button type="button" class="sl-btn-confirm-no" id="btn-confirm-clear-images-no">${e ? "Cancelar" : "Cancel"}</button>
                      </div>
                    </div>
                  ` : `
                    <div class="sl-modal-recents-actions">
                      <button type="button" class="sl-btn-manage-recents ${this._isManagingRecentImages ? "sl-active" : ""}" id="btn-manage-recent-images" title="${this._isManagingRecentImages ? e ? "Concluir gerenciamento" : "Done managing" : e ? "Gerenciar e remover imagens" : "Manage & remove images"}">
                        ${this._isManagingRecentImages ? e ? "✓ Concluir" : "✓ Done" : e ? "Gerenciar" : "Manage"}
                      </button>
                      <button type="button" class="sl-btn-clear-recents" id="btn-clear-recent-images" title="${e ? "Limpar histórico de imagens" : "Clear image history"}">
                        ${e ? "Limpar" : "Clear"}
                      </button>
                    </div>
                  `}
                </div>
                <div class="sl-modal-recents-grid ${this._isManagingRecentImages ? "sl-managing-recents" : ""}">
                  ${d.map(
      (l) => `
                    <div class="sl-recent-gif-wrapper">
                      <button type="button" class="sl-recent-image-item sl-recent-gif-item" data-url="${l.url}" data-alt="${l.alt || ""}" title="${l.alt || l.url}">
                        <img src="${l.url}" alt="${l.alt || "Imagem"}" loading="lazy" />
                      </button>
                      <button type="button" class="sl-btn-delete-recent-image sl-btn-delete-recent-gif" data-url="${l.url}" title="${e ? "Remover esta imagem dos recentes" : "Remove this image from recents"}" aria-label="${e ? "Remover Imagem" : "Remove Image"}">✕</button>
                    </div>
                  `
    ).join("")}
                </div>
              </div>
            ` : ""}

            <div class="sl-modal-error" id="image-modal-error-box" style="${this._imageModalError ? "display: flex;" : "display: none;"}">
              <span>⚠️</span>
              <span id="image-modal-error-text">${this._imageModalError || ""}</span>
            </div>
          </div>

          <div class="sl-modal-footer">
            <button type="button" class="sl-btn sl-btn-secondary" id="btn-cancel-image-modal">
              ${i}
            </button>
            <button type="button" class="sl-btn sl-btn-primary" id="btn-confirm-image-modal">
              <span>📷</span>
              <span>${s}</span>
            </button>
          </div>
        </div>
      </div>
    `;
  }
  /**
   * Renderiza a visualização imersiva do Mini-Lightbox Nativo (Zoom & Pan)
   */
  renderLightbox() {
    const e = this.currentLang === "pt", t = e ? "Aproximar zoom (+)" : "Zoom in (+)", o = e ? "Afastar zoom (-)" : "Zoom out (-)", a = e ? "Redefinir zoom (1:1)" : "Reset zoom (1:1)", r = e ? "Fechar visualização (Esc)" : "Close view (Esc)", i = Math.round(this._lightboxScale * 100);
    return `
      <div class="sl-lightbox-backdrop" id="sl-lightbox-backdrop" role="dialog" aria-modal="true" aria-label="${e ? "Visualizador de Imagem" : "Image Viewer"}">
        <div class="sl-lightbox-toolbar">
          <div class="sl-lightbox-title">${this.escapeHtml(this._lightboxImgAlt || (e ? "Imagem" : "Image"))}</div>
          <div class="sl-lightbox-actions">
            <span class="sl-lightbox-badge" id="sl-lightbox-badge">${i}%</span>
            <button type="button" class="sl-lightbox-btn" id="sl-lightbox-zoom-out" title="${o}" aria-label="${o}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </button>
            <button type="button" class="sl-lightbox-btn" id="sl-lightbox-zoom-in" title="${t}" aria-label="${t}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </button>
            <button type="button" class="sl-lightbox-btn" id="sl-lightbox-reset" title="${a}" aria-label="${a}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
            </button>
            <button type="button" class="sl-lightbox-btn sl-lightbox-btn-close" id="sl-lightbox-close" title="${r}" aria-label="${r}">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>
        </div>
        <div class="sl-lightbox-stage" id="sl-lightbox-stage">
          <img
            class="sl-lightbox-img ${this._lightboxScale > 1.05 ? "sl-zoomed" : ""}"
            id="sl-lightbox-img"
            src="${this.escapeHtml(this._lightboxImgSrc)}"
            alt="${this.escapeHtml(this._lightboxImgAlt)}"
            draggable="false"
            style="transform: translate(${this._lightboxTranslateX}px, ${this._lightboxTranslateY}px) scale(${this._lightboxScale});"
          />
        </div>
        <div class="sl-lightbox-hint">
          ${e ? "Dica: Arraste para mover • Roda do mouse ou duplo clique para zoom • Esc para fechar" : "Tip: Drag to pan • Mouse wheel or double click to zoom • Esc to close"}
        </div>
      </div>
    `;
  }
  openLightbox(e, t = "") {
    this._lightboxImgSrc = e, this._lightboxImgAlt = t, this._lightboxScale = 1, this._lightboxTranslateX = 0, this._lightboxTranslateY = 0, this._lightboxOpen = !0, this.render();
  }
  closeLightbox() {
    this._lightboxOpen = !1, this._lightboxScale = 1, this._lightboxTranslateX = 0, this._lightboxTranslateY = 0, this._isDraggingImage = !1, this.render();
  }
  setLightboxZoom(e) {
    const t = Math.max(0.5, Math.min(4, e));
    this._lightboxScale = Math.round(t * 100) / 100, this._lightboxScale <= 1 && (this._lightboxTranslateX = 0, this._lightboxTranslateY = 0), this.updateLightboxTransform();
  }
  resetLightboxTransform() {
    this._lightboxScale = 1, this._lightboxTranslateX = 0, this._lightboxTranslateY = 0, this.updateLightboxTransform();
  }
  updateLightboxTransform(e = !1) {
    var a, r;
    const t = (a = this.shadowRoot) == null ? void 0 : a.getElementById("sl-lightbox-img"), o = (r = this.shadowRoot) == null ? void 0 : r.getElementById("sl-lightbox-badge");
    t && (e ? t.classList.add("sl-panning") : t.classList.remove("sl-panning"), this._lightboxScale > 1.05 ? t.classList.add("sl-zoomed") : t.classList.remove("sl-zoomed"), t.style.transform = `translate(${this._lightboxTranslateX}px, ${this._lightboxTranslateY}px) scale(${this._lightboxScale})`, o && (o.textContent = `${Math.round(this._lightboxScale * 100)}%`));
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
          ${Me.map(
      (o) => `
            <button type="button" class="sl-code-lang-btn" data-lang="${o.id}" role="menuitem" title="${o.name}">
              <span class="sl-code-lang-name">${o.name}</span>
              <span class="sl-code-lang-tag">${o.id}</span>
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
    var I, B, D, $;
    const t = (I = this.shadowRoot) == null ? void 0 : I.getElementById("composer-textarea");
    if (!t) return;
    const o = ((B = this._savedComposerSelection) == null ? void 0 : B.start) ?? t.selectionStart ?? this._composerText.length, a = ((D = this._savedComposerSelection) == null ? void 0 : D.end) ?? t.selectionEnd ?? this._composerText.length, i = t.value.substring(o, a) || (this.currentLang === "pt" ? "// Seu código aqui" : "// Your code here"), s = t.value.substring(0, o), d = t.value.substring(a), l = s.length > 0 && !s.endsWith(`
`), b = d.length > 0 && !d.startsWith(`
`), T = l ? `
` : "", k = `${T}\`\`\`${e}
${i}
\`\`\`${b ? `
` : ""}`, w = s + k + d;
    this._composerText = w, this._isCodePickerOpen = !1, this._savedComposerSelection = null;
    const _ = s.length + T.length + 3 + e.length + 1, L = _ + i.length;
    this.render();
    const x = ($ = this.shadowRoot) == null ? void 0 : $.getElementById("composer-textarea");
    x && (x.focus(), x.setSelectionRange(_, L), x.style.height = "auto", x.style.height = `${x.scrollHeight}px`);
  }
  /**
   * Renderiza a Caixa de Escrita Principal (com Abas Escreva / Prévia, Aa e Autenticação)
   */
  renderComposer() {
    const e = this._hidePreview ? !0 : this._activeTab === "write", t = this._fontMode === "monospace", o = this.currentLang === "pt" ? "Deixe uma nota ou comentário..." : "Leave a note or comment...", a = this.currentLang === "pt" ? "Escreva" : "Write", r = this.currentLang === "pt" ? "Prévia" : "Preview", i = this.currentLang === "pt" ? "Nada para pré-visualizar ainda." : "Nothing to preview yet.", s = this.currentLang === "pt" ? "Entre com GitHub" : "Sign in with GitHub", d = this.currentLang === "pt" ? "Publicar nota" : "Post note";
    return `
      <div class="sl-composer" part="composer">
        <!-- Barra de Abas e Ações (Bloco de Código </> e Controle Tipográfico Aa) -->
        <div class="sl-composer-tabs">
          <div class="sl-tabs-group" role="tablist">
            <button class="sl-tab ${e ? "sl-tab-active" : ""}" id="tab-write" role="tab" aria-selected="${e}">
              ${a}
            </button>
            ${this._hidePreview ? "" : `
              <button class="sl-tab ${e ? "" : "sl-tab-active"}" id="tab-preview" role="tab" aria-selected="${!e}">
                ${r}
              </button>
            `}
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
          ${e ? `<textarea class="sl-textarea ${t ? "sl-monospace" : ""}" id="composer-textarea" placeholder="${o}" part="textarea">${this._composerText}</textarea>` : `<div class="sl-preview-area ${t ? "sl-monospace" : ""}" part="preview-area">
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
                <span>${d}</span>
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
    ], t = this.currentLang === "pt" ? "Inserir GIF" : "Insert GIF", o = this.currentLang === "pt" ? "Emojis & Ícones" : "Emojis & Icons", a = ie("👊", this._selectedSkinTone), r = this.currentLang === "pt" ? "Tom de pele (clique para escolher)" : "Skin tone (click to choose)";
    return `
      <div class="sl-emoji-popover" id="emoji-popover" part="emoji-popover">
        <div class="sl-emoji-header">
          <div style="display: flex; align-items: center; gap: 0.45rem;">
            <span class="sl-emoji-title">${o}</span>
            ${this._hideSkinTone ? "" : `
              <button type="button" class="sl-skin-tone-toggle-btn ${this._isSkinTonePanelOpen ? "sl-tone-active" : ""}" id="btn-skin-tone-toggle" title="${r}">
                <span>${a}</span>
              </button>
            `}
          </div>
          <div class="sl-emoji-nav">
            <button type="button" class="sl-emoji-nav-btn" id="btn-emoji-scroll-up" title="${this.currentLang === "pt" ? "Subir" : "Scroll up"}">▲</button>
            <button type="button" class="sl-emoji-nav-btn" id="btn-emoji-scroll-down" title="${this.currentLang === "pt" ? "Descer" : "Scroll down"}">▼</button>
            <button type="button" class="sl-emoji-nav-btn sl-emoji-close-btn" id="btn-emoji-close" title="${this.currentLang === "pt" ? "Fechar" : "Close"}">✕</button>
          </div>
        </div>

        ${!this._hideSkinTone && this._isSkinTonePanelOpen ? `
          <div class="sl-skin-tone-panel">
            <div class="sl-skin-tone-panel-header">
              <span>${this.currentLang === "pt" ? "Escolha o tom de pele padrão:" : "Choose default skin tone:"}</span>
              <span style="font-size: 0.68rem; opacity: 0.85;">💾 ${this.currentLang === "pt" ? "Salvo no navegador" : "Saved in browser"}</span>
            </div>
            <div class="sl-skin-tone-options">
              ${Le.map((i) => {
      const s = ie("👊", i.modifier), d = this._selectedSkinTone === i.modifier || this._selectedSkinTone === "default" && i.modifier === "", l = this.currentLang === "pt" ? i.namePt : i.nameEn;
      return `
                  <button type="button" class="sl-tone-btn ${d ? "sl-tone-selected" : ""}" data-tone-mod="${i.modifier || "default"}" title="${l}">
                    ${s}
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
                ${i.emojis.map((s) => {
        const d = Ce.has(s), l = d ? ie(s, this._selectedSkinTone) : s;
        return `
                      <button type="button" class="sl-emoji-item" data-emoji="${l}" data-base-emoji="${s}" data-toneable="${d ? "true" : "false"}" title="${l}">
                        ${l}
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
        ${this._enableImages ? `
          <button type="button" class="sl-emoji-img-btn" id="btn-insert-image" title="${this.currentLang === "pt" ? "Inserir imagem via URL" : "Insert image via URL"}">
            <span>📷</span>
            <span>${this.currentLang === "pt" ? "Inserir imagem" : "Insert image"}</span>
          </button>
        ` : ""}
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
    const o = t.selectionStart ?? t.value.length, a = t.selectionEnd ?? t.value.length, r = t.value, i = r.substring(0, o), s = r.substring(a);
    t.value = i + e + s, this._composerText = t.value;
    const d = o + e.length;
    this._isEmojiPickerOpen = !1, this.render();
    const l = this.shadowRoot.getElementById("composer-textarea");
    l && (l.focus(), l.setSelectionRange(d, d));
  }
  /**
   * Renderiza a Lista Completa com Threads e Respostas Aninhadas
   */
  escapeHtml(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
  getFilteredComments() {
    const e = this._searchQuery.trim().toLowerCase();
    let t = [];
    if (!e)
      t = [...this._comments];
    else {
      const o = e.startsWith("@") ? e.slice(1) : e, a = o.split(/\s+/).filter(Boolean), r = [];
      for (const i of this._comments) {
        let s = 0;
        const d = i.author.login.toLowerCase(), l = i.body.toLowerCase();
        if (d === o ? s += 100 : d.startsWith(o) ? s += 60 : d.includes(o) && (s += 40), l.includes(e) || l.includes(o))
          s += 35;
        else
          for (const b of a)
            l.includes(b) && (s += 10);
        if (i.replies && i.replies.length > 0)
          for (const b of i.replies) {
            const T = b.author.login.toLowerCase(), g = b.body.toLowerCase();
            if (T === o ? s += 50 : T.includes(o) && (s += 25), g.includes(e) || g.includes(o))
              s += 20;
            else
              for (const k of a)
                g.includes(k) && (s += 5);
          }
        s > 0 && r.push({ comment: i, score: s });
      }
      r.sort((i, s) => s.score - i.score), t = r.map((i) => i.comment);
    }
    return e || (t = this.sortComments(t, this._order)), t;
  }
  /**
   * Ordena comentários por data de criação (cronológico ou cronológico inverso),
   * priorizando comentários fixados pelo autor (pinned) no topo da discussão.
   */
  sortComments(e, t) {
    const o = [], a = [];
    for (const i of e)
      !!(i.isPinned || i.body.includes("<!-- sl:pinned -->") || i.body.includes("<!-- pinned -->")) ? o.push(i) : a.push(i);
    const r = a.every((i) => i.createdAt && !isNaN(Date.parse(i.createdAt)));
    return t === "newest" ? r ? a.sort((i, s) => Date.parse(s.createdAt) - Date.parse(i.createdAt)) : a.reverse() : r && a.sort((i, s) => Date.parse(i.createdAt) - Date.parse(s.createdAt)), [...o, ...a];
  }
  /**
   * Renderiza a Barra de Moderação do Proprietário do Repositório (quando enable-moderation ativo)
   */
  renderModerationBar() {
    if (!this._enableModeration || !this._isOwner())
      return "";
    const e = this.currentLang === "pt", t = this.currentLang === "es", o = e ? "Painel de Moderação KV (Proprietário)" : t ? "Panel de Moderación KV (Propietario)" : "KV Moderation Bar (Repo Owner)", a = e ? "Atualizar lista de moderação" : "Refresh moderation list", r = e ? "Recolher painel de moderação" : "Collapse moderation panel", i = e ? "Expandir painel de moderação" : "Expand moderation panel", s = this._moderatedUsers.filter((x) => x.action === "ban"), d = this._moderatedUsers.filter((x) => x.action === "restrict_media"), l = this._expandedModCategory === "ban", b = this._expandedModCategory === "media", T = `sl-mod-pill ${s.length > 0 ? "sl-mod-pill-ban-active" : "sl-mod-pill-neutral"} ${l ? "sl-mod-pill-open" : ""}`, g = `sl-mod-pill ${d.length > 0 ? "sl-mod-pill-media-active" : "sl-mod-pill-neutral"} ${b ? "sl-mod-pill-open" : ""}`, k = e ? "Banidos" : t ? "Bloqueados" : "Banned", w = e ? "Sem Mídia" : t ? "Sin Medios" : "No Media";
    let _ = "";
    if (this._expandedModCategory !== null) {
      const x = this._expandedModCategory === "ban" ? s : d, I = this._expandedModCategory === "ban", B = I ? e ? "Nenhum usuário banido. Para restringir alguém, use o menu ••• no comentário dele." : t ? "Ningún usuario bloqueado. Para restringir a alguien, usa el menú ••• en su comentario." : "No banned users. To restrict someone, use the ••• menu on their comment." : e ? "Nenhum usuário com mídia restrita. Para restringir mídia, use o menu ••• no comentário dele." : t ? "Ningún usuario sin medios. Para restringir medios, usa el menú ••• en su comentario." : "No media-restricted users. To restrict media, use the ••• menu on their comment.";
      x.length === 0 ? _ = `
          <div class="sl-mod-drawer">
            <span class="sl-mod-empty-text">${B}</span>
          </div>
        ` : _ = `
          <div class="sl-mod-drawer">
            ${x.map(($) => {
        const j = I ? "sl-mod-chip-ban" : "sl-mod-chip-media", A = I ? k : w, F = e ? `Remover moderação de @${$.username}` : `Remove moderation for @${$.username}`;
        return `
              <div class="sl-mod-chip ${j}">
                <span class="sl-mod-chip-user" title="@${this.escapeHtml($.username)}">@${this.escapeHtml($.username)}</span>
                <span class="sl-mod-chip-action">${A}</span>
                <button type="button" class="sl-mod-chip-remove" data-user="${this.escapeHtml(
          $.username
        )}" title="${F}" aria-label="${F}">✕</button>
              </div>
            `;
      }).join("")}
          </div>
        `;
    }
    const L = this._isModerationCollapsed ? "" : `
        <div class="sl-mod-subcard">
          <div class="sl-mod-pills" role="tablist">
            <button type="button" class="${T}" id="sl-mod-pill-ban" aria-expanded="${l}">
              <span>🚫 ${k} (${s.length})</span>
              <span class="sl-mod-pill-arrow">${l ? "▲" : "▼"}</span>
            </button>
            <button type="button" class="${g}" id="sl-mod-pill-media" aria-expanded="${b}">
              <span>🔇 ${w} (${d.length})</span>
              <span class="sl-mod-pill-arrow">${b ? "▲" : "▼"}</span>
            </button>
          </div>
          ${_}
        </div>
      `;
    return `
      <div class="sl-moderation-bar ${this._isModerationCollapsed ? "sl-mod-bar-collapsed" : ""}" role="region" aria-label="${o}">
        <div class="sl-mod-bar-header">
          <div class="sl-mod-bar-title">
            <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
              <path d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.5 8.69V3a.75.75 0 00-1.5 0v5.69L4.28 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM8 0a8 8 0 100 16A8 8 0 008 0z" />
            </svg>
            <span>🛡️ ${o}</span>
          </div>
          <div class="sl-mod-bar-actions">
            <button type="button" class="sl-mod-refresh-btn" id="sl-mod-refresh" title="${a}" ${this._isModerationLoading ? "disabled" : ""}>
              ${this._isModerationLoading ? "⌛" : "🔄"}
            </button>
            <button type="button" class="sl-mod-toggle-btn" id="sl-mod-toggle-collapse" aria-expanded="${!this._isModerationCollapsed}" title="${this._isModerationCollapsed ? i : r}">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="sl-mod-chevron ${this._isModerationCollapsed ? "" : "sl-mod-chevron-open"}">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
        ${L}
      </div>
    `;
  }
  /**
   * Renderiza a Barra de Ferramentas / Buscador e Ordenação acima da Lista de Comentários
   */
  renderCommentsToolbar() {
    if (this._comments.length === 0 && !this._searchQuery || this._hideSearch && this._hideSorting && !this._searchQuery)
      return "";
    const e = this.currentLang === "pt", t = this._comments.length, o = this.getFilteredComments().length, a = this._searchQuery.trim().length > 0;
    let r = "";
    a ? r = e ? `${o} de ${t} encontrados` : `${o} of ${t} found` : r = `${t} ${e ? t === 1 ? "comentário" : "comentários" : t === 1 ? "comment" : "comments"}`;
    const i = this._order === "newest" ? e ? "Mais recentes" : "Newest first" : e ? "Mais antigos" : "Oldest first", s = this._order === "newest" ? e ? "Ordenado por mais recentes. Clique para mais antigos." : "Sorted by newest. Click for oldest." : e ? "Ordenado por mais antigos. Clique para mais recentes." : "Sorted by oldest. Click for newest.", d = this._hideSearch ? "" : `
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
            placeholder="${e ? "Buscar comentários ou @autor..." : "Search comments or @user..."}"
            value="${this.escapeHtml(this._searchQuery)}"
            autocomplete="off"
            spellcheck="false"
            aria-label="${e ? "Buscar comentários ou autor" : "Search comments or author"}"
          />
          ${this._searchQuery ? `<button type="button" class="sl-search-clear-btn" id="sl-search-clear" part="search-clear-btn" title="${e ? "Limpar busca (Esc)" : "Clear search (Esc)"}">✕</button>` : `<kbd class="sl-search-kbd" title="${e ? "Pressione / para buscar" : "Press / to search"}">/</kbd>`}
        </div>
      `, l = this._hideSorting ? "" : `
        <button type="button" class="sl-sort-btn" id="btn-sort-toggle" part="sort-btn" title="${s}" aria-label="${s}">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <path d="m3 16 4 4 4-4"/>
            <path d="M7 20V4"/>
            <path d="m21 8-4-4-4 4"/>
            <path d="M17 4v16"/>
          </svg>
          <span>${i}</span>
        </button>
      `;
    return `
      <div class="sl-toolbar" part="toolbar">
        ${d}
        <div class="sl-toolbar-actions" part="toolbar-actions">
          <div class="sl-toolbar-count" part="toolbar-count">
            <span>${r}</span>
          </div>
          ${l}
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
      const b = this.currentLang === "pt", T = e ? b ? `Nenhum comentário encontrado para "${this._searchQuery}".` : `No comments found for "${this._searchQuery}".` : b ? "Nenhum comentário por aqui ainda. Seja o primeiro a semear uma reflexão!" : "No comments here yet. Be the first to scatter an idea!";
      return `
        ${e ? `
          <div class="sl-search-banner" part="search-banner">
            <span>🔍 ${b ? "0 comentários encontrados" : "0 comments found"}</span>
            <button type="button" class="sl-search-banner-clear" part="search-banner-clear">${b ? "Limpar busca" : "Clear search"}</button>
          </div>
        ` : ""}
        <div class="sl-empty" part="empty">
          <span class="sl-empty-icon">${e ? "🔍" : "🍃"}</span>
          <p>${T}</p>
        </div>
      `;
    }
    const o = t.length, a = Math.max(1, Math.ceil(o / this._pageSize));
    this._currentPage > a && (this._currentPage = a);
    const r = (this._currentPage - 1) * this._pageSize, i = r + this._pageSize, s = t.slice(r, i);
    let d = "";
    if (e) {
      const b = this.currentLang === "pt";
      d = `
        <div class="sl-search-banner" part="search-banner">
          <span>🔍 ${b ? `${o} comentário(s) para` : `${o} comment(s) for`} "<strong>${this.escapeHtml(this._searchQuery)}</strong>"</span>
          <button type="button" class="sl-search-banner-clear" part="search-banner-clear">${b ? "Limpar busca" : "Clear search"}</button>
        </div>
      `;
    }
    let l = "";
    if (o > this._pageSize) {
      const b = this.currentLang === "pt", T = b ? "‹ Anterior" : "‹ Previous", g = b ? "Próxima ›" : "Next ›", k = b ? `Página ${this._currentPage} de ${a} • ${o} comentários` : `Page ${this._currentPage} of ${a} • ${o} comments`;
      let w = "";
      for (let _ = 1; _ <= a; _++) {
        const L = _ === this._currentPage;
        w += `
          <button class="sl-page-btn ${L ? "sl-page-active" : ""}" data-page="${_}" part="page-btn" ${L ? 'aria-current="page"' : ""}>
            ${_}
          </button>
        `;
      }
      l = `
        <nav class="sl-pagination" part="pagination" aria-label="${b ? "Paginação de comentários" : "Comments pagination"}">
          <div class="sl-pagination-controls">
            <button class="sl-page-btn sl-page-nav-btn btn-prev-page" part="page-btn-prev" ${this._currentPage <= 1 ? "disabled" : ""}>
              ${T}
            </button>
            ${w}
            <button class="sl-page-btn sl-page-nav-btn btn-next-page" part="page-btn-next" ${this._currentPage >= a ? "disabled" : ""}>
              ${g}
            </button>
          </div>
          <span class="sl-pagination-info" part="pagination-info">${k}</span>
        </nav>
      `;
    }
    return `
      <div class="sl-list" part="list">
        ${d}
        ${s.map((b) => this.renderCommentCard(b)).join("")}
        ${l}
      </div>
    `;
  }
  /**
   * Renderiza um Card de Comentário Individual
   */
  renderCommentCard(e, t = !1, o) {
    var Q, H, Y;
    const a = this._repo ? this._repo.split("/")[0].toLowerCase() : "", i = e.author.isAuthor || a && e.author.login.toLowerCase() === a ? `<span class="sl-author-badge" part="author-badge">${this.currentLang === "pt" ? "Autor" : "Author"}</span>` : "", s = !t && !!(e.isPinned || e.body.includes("<!-- sl:pinned -->") || e.body.includes("<!-- pinned -->")), d = s ? `<span class="sl-pinned-badge" part="pinned-badge" title="${this.currentLang === "pt" ? "Comentário fixado no topo pelo autor" : "Comment pinned to top by author"}"><span>📌</span><span>${this.currentLang === "pt" ? "Fixado pelo autor" : "Pinned by author"}</span></span>` : "", l = !!(this._currentUser && a && this._currentUser.login.toLowerCase() === a), b = this._speakingId === e.id, T = this._replyingToId === e.id, g = this._editingId === e.id, k = this._openMenuId === e.id, w = b ? this.currentLang === "pt" ? "⏸️ Pausar" : "⏸️ Pause" : this.currentLang === "pt" ? "🔊 Ouvir" : "🔊 Listen", _ = this.currentLang === "pt" ? "Responder" : "Reply", L = this.getVisitorLang(), x = e.originalLang || "pt", I = x !== L, B = this.getLanguageName(x, L), $ = (e.isShowingTranslation && e.translatedBody ? e.translatedBody : e.body).replace(/<!--\s*sl:pinned\s*-->\r?\n?/g, "").replace(/<!--\s*pinned\s*-->\r?\n?/g, ""), j = this.formatDate(e.createdAt), A = !!((Q = e.reactions) != null && Q.find((z) => z.content === "👍" && z.viewerHasReacted)), F = this.currentLang === "pt" ? "Gostei" : "Like", N = A ? this.currentLang === "pt" ? "Remover curtida" : "Remove like" : this.currentLang === "pt" ? "Curtir" : "Like", W = (e.reactions || []).filter((z) => z.count > 0);
    return `
      <article class="sl-card ${t ? "sl-card-reply" : ""} ${s ? "sl-card-pinned" : ""}" id="comment-${e.id}" part="card">
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
              ${d}
              <time class="sl-date" part="date" datetime="${e.createdAt}" title="${j.full}">${j.relative}</time>
              ${e.isEdited ? `<span class="sl-edited-badge">(${this.currentLang === "pt" ? "editado" : "edited"})</span>` : ""}
            </div>
          </div>

          <!-- Menu de Contexto In-Place (•••) -->
          <div class="sl-menu-wrapper">
            <button class="sl-menu-btn" data-menu-id="${e.id}" aria-label="${this.currentLang === "pt" ? "Opções do comentário" : "Comment options"}">
              •••
            </button>
            ${k ? `
              <div class="sl-dropdown-menu" part="dropdown-menu">
                ${l && !t ? `
                  <button class="sl-dropdown-item btn-toggle-pin" data-comment-id="${e.id}">
                    <span>📌</span>
                    <span>${s ? this.currentLang === "pt" ? "Desafixar do topo" : "Unpin from top" : this.currentLang === "pt" ? "Fixar no topo" : "Pin to top"}</span>
                  </button>
                ` : ""}
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
                ${this._enableModeration && l && ((H = e.author) != null && H.login) && ((Y = this._currentUser) != null && Y.login) && e.author.login.toLowerCase() !== this._currentUser.login.toLowerCase() ? `
                  <button class="sl-dropdown-item btn-mod-restrict-media" data-user="${this.escapeHtml(e.author.login)}">
                    <span>🚫</span>
                    <span>${this.currentLang === "pt" ? "Restringir Mídia" : "Restrict Media"}</span>
                  </button>
                  <button class="sl-dropdown-item sl-danger btn-mod-ban" data-user="${this.escapeHtml(e.author.login)}">
                    <span>🛑</span>
                    <span>${this.currentLang === "pt" ? "Banir Usuário" : "Ban User"}</span>
                  </button>
                ` : ""}
              </div>
            ` : ""}
          </div>
        </div>

        <!-- Corpo do Comentário ou Editor In-Place -->
        ${g ? `
          <div class="sl-edit-mode">
            <textarea class="sl-textarea" id="edit-textarea-${e.id}">${e.body.replace(/<!--\s*sl:pinned\s*-->\r?\n?/g, "").replace(/<!--\s*pinned\s*-->\r?\n?/g, "")}</textarea>
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
            ${e.isShowingTranslation ? this.parseMarkdown($) : e.bodyHtml || this.parseMarkdown($)}
          </div>
        `}

        <!-- Rodapé do Card: Reações estilo LinkedIn, Responder e Ações da Direita -->
        <div class="sl-card-footer">
          <div class="sl-actions-left">
            ${this._hideReactions ? "" : `
            <!-- Gatilho de Reação Universal (Gostei / Like) -->
            <div class="sl-reaction-container" data-comment-id="${e.id}">
              <button type="button" class="sl-reaction-trigger-btn" data-comment-id="${e.id}" data-emoji="👍" part="reaction-trigger-btn" title="${N}">
                <span>👍</span>
                <span>${F}</span>
              </button>

              <!-- Popover Flutuante com 6 Emojis Animados -->
              <div class="sl-reaction-popover" role="toolbar" aria-label="Reações">
                ${Se.map((z) => {
      var Z;
      const K = this.currentLang === "pt" ? z.namePt : z.nameEn;
      return `
                    <button type="button" class="sl-reaction-picker-item ${!!((Z = e.reactions) != null && Z.find((ee) => ee.content === z.symbol && ee.viewerHasReacted)) ? "sl-reacted" : ""}" data-comment-id="${e.id}" data-emoji="${z.symbol}" data-tooltip="${K}" title="${K}" aria-label="${K}">
                      ${z.symbol}
                    </button>
                  `;
    }).join("")}
              </div>
            </div>

            <!-- Resumo / Badges de Reações Recebidas -->
            ${W.length > 0 ? `
              <div class="sl-reactions-summary">
                ${W.map(
      (z) => `
                  <button type="button" class="sl-reaction-badge ${z.viewerHasReacted ? "sl-reacted" : ""}" data-comment-id="${e.id}" data-emoji="${z.content}" title="${z.viewerHasReacted ? this.currentLang === "pt" ? "Remover sua reação" : "Remove your reaction" : this.currentLang === "pt" ? "Reagir com " + z.content : "React with " + z.content}">
                    <span>${z.content}</span>
                    <span>${z.count}</span>
                  </button>
                `
    ).join("")}
              </div>
            ` : ""}
            `}

            <button class="sl-reply-btn" data-reply-to="${e.id}" data-parent-id="${o || e.id}" part="reply-btn">
              <span>↩️</span>
              <span>${_}</span>
            </button>
          </div>

          <div class="sl-actions-right">
            ${I ? `
              <button class="sl-translate-btn btn-toggle-translate ${e.isShowingTranslation ? "sl-translated" : ""}" data-comment-id="${e.id}" part="translate-btn" title="${e.isShowingTranslation ? this.currentLang === "pt" ? "Ver original" : "See original" : this.currentLang === "pt" ? "Traduzir comentário" : "Translate comment"}">
                <span>${this._isTranslatingId === e.id ? "⏳" : e.isShowingTranslation ? "✨" : "🌐"}</span>
                <span>${this._isTranslatingId === e.id ? this.currentLang === "pt" ? "Traduzindo..." : "Translating..." : e.isShowingTranslation ? this.currentLang === "pt" ? `Traduzido do ${B} • Ver original` : `Translated from ${B} • See original` : this.currentLang === "pt" ? `Publicado em ${B} • Traduzir` : `Published in ${B} • Translate`}</span>
              </button>
            ` : ""}

            <button class="sl-audio-btn ${b ? "sl-audio-playing" : ""}" data-speak-id="${e.id}" data-text="${encodeURIComponent($)}" data-lang="${e.isShowingTranslation ? L : x}" part="audio-btn">
              <span>${w}</span>
            </button>
          </div>
        </div>

        <!-- Formulário de Resposta Aninhada Inline -->
        ${T ? `
          <div class="sl-inline-composer">
            <textarea id="reply-textarea-${e.id}" placeholder="${this.currentLang === "pt" ? `Respondendo para @${e.author.login}...` : `Replying to @${e.author.login}...`}">${this._replyText}</textarea>
            <div class="sl-inline-footer">
              <button class="sl-btn sl-btn-secondary btn-cancel-reply" data-comment-id="${e.id}">
                ${this.currentLang === "pt" ? "Cancelar" : "Cancel"}
              </button>
              <button class="sl-btn sl-btn-primary btn-send-reply" data-comment-id="${e.id}" data-parent-id="${o || e.id}">
                ${this.currentLang === "pt" ? "Responder" : "Reply"}
              </button>
            </div>
          </div>
        ` : ""}

        <!-- Respostas Aninhadas (Threads Estilo LinkedIn com Linha Guia) -->
        ${!t && e.replies && e.replies.length > 0 ? (() => {
      const z = e.replies.length, K = this._expandedThreads.has(e.id), he = K || z <= 2 ? e.replies : e.replies.slice(0, 2), Z = z - 2;
      return `
                  <div class="sl-thread">
                    ${he.map((ee) => this.renderCommentCard(ee, !0, e.id)).join("")}
                    ${z > 2 ? `
                      <button class="sl-thread-toggle-btn" data-thread-id="${e.id}" part="thread-toggle-btn">
                        <span>${K ? "▴" : "💬"}</span>
                        <span>${K ? this.currentLang === "pt" ? "Recolher respostas" : "Collapse replies" : this.currentLang === "pt" ? `Ver mais ${Z} resposta${Z > 1 ? "s" : ""} ▾` : `View ${Z} more repl${Z > 1 ? "ies" : "y"} ▾`}</span>
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
    const e = this.shadowRoot.getElementById("tab-write"), t = this.shadowRoot.getElementById("tab-preview"), o = this.shadowRoot.getElementById("composer-textarea");
    if (o) {
      const n = () => {
        this._savedComposerSelection = {
          start: o.selectionStart ?? 0,
          end: o.selectionEnd ?? 0
        };
      };
      o.addEventListener("input", () => {
        this._composerText = o.value, n(), o.style.height = "auto", o.style.height = `${o.scrollHeight}px`;
      }), o.addEventListener("click", n), o.addEventListener("keyup", n), o.addEventListener("select", n);
    }
    e && e.addEventListener("click", () => {
      this._activeTab = "write", this.render();
    }), t && t.addEventListener("click", () => {
      o && (this._composerText = o.value), this._activeTab = "preview", this.render();
    });
    const a = this.shadowRoot.getElementById("btn-sort-toggle");
    a && a.addEventListener("click", () => {
      this._order = this._order === "oldest" ? "newest" : "oldest", this._currentPage = 1, this.render();
    });
    const r = this.shadowRoot.getElementById("btn-code-toggle");
    r && r.addEventListener("click", (n) => {
      var y;
      n.stopPropagation();
      const p = (y = this.shadowRoot) == null ? void 0 : y.getElementById("composer-textarea");
      if (p) {
        const c = p.selectionStart ?? this._composerText.length, m = p.selectionEnd ?? this._composerText.length;
        if (this._savedComposerSelection = { start: c, end: m }, m > c && p.value.substring(c, m).trim().length > 0) {
          this.insertCodeBlock("typescript");
          return;
        }
      }
      this._isCodePickerOpen = !this._isCodePickerOpen, this.render();
    }), this.shadowRoot.querySelectorAll(".sl-code-lang-btn").forEach((n) => {
      n.addEventListener("click", (p) => {
        p.stopPropagation();
        const y = n.getAttribute("data-lang") || "typescript";
        this.insertCodeBlock(y);
      });
    });
    const s = this.shadowRoot.getElementById("btn-font-toggle");
    s && s.addEventListener("click", () => {
      this._fontMode = this._fontMode === "default" ? "monospace" : "default", this.render();
    });
    const d = this.shadowRoot.getElementById("btn-emoji-toggle");
    d && d.addEventListener("click", (n) => {
      n.stopPropagation(), this._isEmojiPickerOpen = !this._isEmojiPickerOpen, this.render();
    });
    const l = this.shadowRoot.getElementById("emoji-scroll-container"), b = this.shadowRoot.getElementById("btn-emoji-scroll-up"), T = this.shadowRoot.getElementById("btn-emoji-scroll-down"), g = this.shadowRoot.getElementById("btn-emoji-close");
    b && l && b.addEventListener("click", (n) => {
      n.stopPropagation(), l.scrollBy({ top: -90, behavior: "smooth" });
    }), T && l && T.addEventListener("click", (n) => {
      n.stopPropagation(), l.scrollBy({ top: 90, behavior: "smooth" });
    }), g && g.addEventListener("click", (n) => {
      n.stopPropagation(), this._isEmojiPickerOpen = !1, this.render();
    });
    const k = this.shadowRoot.getElementById("btn-skin-tone-toggle");
    k && k.addEventListener("click", (n) => {
      n.stopPropagation(), this._isSkinTonePanelOpen = !this._isSkinTonePanelOpen, this._activeTonePickerEmoji = null, this.render();
    }), this.shadowRoot.querySelectorAll(".sl-tone-btn").forEach((n) => {
      n.addEventListener("click", (p) => {
        p.stopPropagation();
        const y = n.dataset.toneMod || "default", c = y === "default" ? "default" : y;
        this.saveSkinTonePreference(c);
        const m = this._activeTonePickerEmoji;
        if (this._isSkinTonePanelOpen = !1, this._activeTonePickerEmoji = null, m) {
          const E = ie(m, c === "default" ? "" : c);
          this.insertTextAtCursor(E);
        } else
          this.render();
      });
    }), this.shadowRoot.querySelectorAll(".sl-emoji-item").forEach((n) => {
      n.addEventListener("click", (p) => {
        p.stopPropagation();
        const y = n.dataset.toneable === "true", c = n.dataset.baseEmoji, m = n.dataset.emoji;
        if (y && c && this._selectedSkinTone === null) {
          this._activeTonePickerEmoji = c, this._isSkinTonePanelOpen = !0, this.render();
          return;
        }
        m && this.insertTextAtCursor(m);
      });
    });
    const L = this.shadowRoot.getElementById("btn-insert-gif");
    L && L.addEventListener("click", (n) => {
      n.stopPropagation(), this._isEmojiPickerOpen = !1, this._isMediaModalOpen = !0, this._isManagingRecentGifs = !1, this._isConfirmingClearGifs = !1, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalSuccess = null, this.render();
    });
    const x = this.shadowRoot.getElementById("btn-insert-image");
    if (x && x.addEventListener("click", (n) => {
      n.stopPropagation(), this._isEmojiPickerOpen = !1, this._isImageModalOpen = !0, this._isManagingRecentImages = !1, this._isConfirmingClearImages = !1, this._imageModalUrl = "", this._imageModalAlt = "", this._imageModalError = null, this._imageModalSuccess = null, this.render();
    }), this._isMediaModalOpen) {
      const n = this.shadowRoot.getElementById("media-modal-backdrop"), p = this.shadowRoot.getElementById("btn-close-media-modal"), y = this.shadowRoot.getElementById("btn-cancel-media-modal"), c = this.shadowRoot.getElementById("btn-confirm-media-modal"), m = this.shadowRoot.getElementById("media-url-input"), E = this.shadowRoot.getElementById("media-alt-input"), v = this.shadowRoot.getElementById("media-url-preview-card"), O = this.shadowRoot.getElementById("media-url-preview-img"), C = this.shadowRoot.getElementById("media-modal-error-box"), R = this.shadowRoot.getElementById("media-modal-error-text"), U = this.currentLang === "pt", q = (u) => {
        this._mediaModalUrl = u;
        const S = u.trim();
        if (S.length > 0) {
          const P = V(S);
          P.safe ? (this._mediaModalError = null, C && (C.style.display = "none"), v && (v.style.display = "flex"), O && (O.style.display = "block", O.src = S)) : (this._mediaModalError = P.reason || (U ? "Link inválido." : "Invalid link."), v && (v.style.display = "none"), R && (R.textContent = this._mediaModalError), C && (C.style.display = "flex"));
        } else
          this._mediaModalError = null, v && (v.style.display = "none"), C && (C.style.display = "none");
      }, J = () => {
        this._isMediaModalOpen = !1, this._isManagingRecentGifs = !1, this._isConfirmingClearGifs = !1, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalSuccess = null, this.render();
      };
      p && p.addEventListener("click", J), y && y.addEventListener("click", J), n && n.addEventListener("click", (u) => {
        u.target === n && J();
      }), m && (m.addEventListener("keydown", (u) => {
        u.stopPropagation();
      }), m.addEventListener("input", () => {
        q(m.value);
      }), m.addEventListener("paste", () => {
        setTimeout(() => q(m.value), 0);
      })), E && (E.addEventListener("keydown", (u) => {
        u.stopPropagation();
      }), E.addEventListener("input", () => {
        this._mediaModalAlt = E.value;
      }));
      const X = this.shadowRoot.getElementById("btn-save-gif-collection");
      X && X.addEventListener("click", (u) => {
        u.stopPropagation();
        const S = (m ? m.value : this._mediaModalUrl).trim(), P = (E ? E.value : this._mediaModalAlt).trim() || "GIF";
        if (!S) {
          this._mediaModalError = U ? "Por favor, insira a URL do GIF antes de salvar." : "Please enter a GIF URL before saving.", R && (R.textContent = this._mediaModalError), C && (C.style.display = "flex");
          return;
        }
        const G = V(S);
        if (!G.safe) {
          this._mediaModalError = G.reason || (U ? "URL inválida ou não segura." : "Invalid or unsafe URL."), R && (R.textContent = this._mediaModalError), C && (C.style.display = "flex");
          return;
        }
        ve(S, P), this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalSuccess = U ? "GIF salvo na sua coleção!" : "GIF saved to collection!", this.render(), setTimeout(() => {
          this._isMediaModalOpen && this._mediaModalSuccess && (this._mediaModalSuccess = null, this.render());
        }, 2500);
      }), this.shadowRoot.querySelectorAll(".sl-recent-gif-item").forEach((u) => {
        let S = null, P = !1;
        u.addEventListener("touchstart", () => {
          P = !1, S = setTimeout(() => {
            if (!P) {
              if (this._isManagingRecentGifs = !0, "vibrate" in navigator)
                try {
                  navigator.vibrate(50);
                } catch {
                }
              this.render();
            }
          }, 450);
        }, { passive: !0 }), u.addEventListener("touchmove", () => {
          P = !0, S && clearTimeout(S);
        }, { passive: !0 }), u.addEventListener("touchend", () => {
          S && clearTimeout(S);
        }), u.addEventListener("click", () => {
          if (this._isManagingRecentGifs)
            return;
          const G = u.getAttribute("data-url") || "", se = u.getAttribute("data-alt") || "";
          m && (m.value = G), E && (E.value = se), this._mediaModalAlt = se, q(G);
        });
      });
      const te = this.shadowRoot.getElementById("btn-manage-recent-gifs");
      te && te.addEventListener("click", (u) => {
        u.stopPropagation(), this._isManagingRecentGifs = !this._isManagingRecentGifs, this.render();
      }), this.shadowRoot.querySelectorAll(".sl-btn-delete-recent-gif").forEach((u) => {
        u.addEventListener("click", (S) => {
          S.stopPropagation();
          const P = u.getAttribute("data-url") || "";
          P && (Te(P), ne().length === 0 && (this._isManagingRecentGifs = !1), this.render());
        });
      });
      const oe = this.shadowRoot.getElementById("btn-clear-recent-gifs");
      oe && oe.addEventListener("click", (u) => {
        u.stopPropagation(), this._isConfirmingClearGifs = !0, this.render();
      });
      const re = this.shadowRoot.getElementById("btn-confirm-clear-gifs-yes");
      re && re.addEventListener("click", (u) => {
        u.stopPropagation(), Ie(), this._isConfirmingClearGifs = !1, this._isManagingRecentGifs = !1, this.render();
      });
      const ae = this.shadowRoot.getElementById("btn-confirm-clear-gifs-no");
      ae && ae.addEventListener("click", (u) => {
        u.stopPropagation(), this._isConfirmingClearGifs = !1, this.render();
      }), c && c.addEventListener("click", () => {
        const u = (m ? m.value : this._mediaModalUrl).trim(), S = (E ? E.value : this._mediaModalAlt).trim() || "GIF";
        if (!u) {
          this._mediaModalError = U ? "Por favor, insira a URL do GIF." : "Please enter a GIF URL.", R && (R.textContent = this._mediaModalError), C && (C.style.display = "flex"), v && (v.style.display = "none");
          return;
        }
        const P = V(u);
        if (!P.safe) {
          this._mediaModalError = P.reason || (U ? "URL inválida ou não segura." : "Invalid or unsafe URL."), R && (R.textContent = this._mediaModalError), C && (C.style.display = "flex"), v && (v.style.display = "none");
          return;
        }
        ve(u, S);
        const G = `![${S}](${u})`;
        this._isMediaModalOpen = !1, this._isManagingRecentGifs = !1, this._isConfirmingClearGifs = !1, this._mediaModalUrl = "", this._mediaModalAlt = "", this._mediaModalError = null, this._mediaModalSuccess = null, this.insertTextAtCursor(G);
      });
    }
    if (this._isImageModalOpen) {
      const n = this.shadowRoot.getElementById("image-modal-backdrop"), p = this.shadowRoot.getElementById("btn-close-image-modal"), y = this.shadowRoot.getElementById("btn-cancel-image-modal"), c = this.shadowRoot.getElementById("btn-confirm-image-modal"), m = this.shadowRoot.getElementById("image-url-input"), E = this.shadowRoot.getElementById("image-alt-input"), v = this.shadowRoot.getElementById("image-url-preview-card"), O = this.shadowRoot.getElementById("image-url-preview-img"), C = this.shadowRoot.getElementById("image-modal-error-box"), R = this.shadowRoot.getElementById("image-modal-error-text"), U = this.currentLang === "pt", q = (u) => {
        this._imageModalUrl = u;
        const S = u.trim();
        if (S.length > 0) {
          const P = V(S);
          P.safe ? (this._imageModalError = null, C && (C.style.display = "none"), v && (v.style.display = "flex"), O && (O.style.display = "block", O.src = S)) : (this._imageModalError = P.reason || (U ? "Link inválido." : "Invalid link."), v && (v.style.display = "none"), R && (R.textContent = this._imageModalError), C && (C.style.display = "flex"));
        } else
          this._imageModalError = null, v && (v.style.display = "none"), C && (C.style.display = "none");
      }, J = () => {
        this._isImageModalOpen = !1, this._isManagingRecentImages = !1, this._isConfirmingClearImages = !1, this._imageModalUrl = "", this._imageModalAlt = "", this._imageModalError = null, this._imageModalSuccess = null, this.render();
      };
      p && p.addEventListener("click", J), y && y.addEventListener("click", J), n && n.addEventListener("click", (u) => {
        u.target === n && J();
      }), m && (m.addEventListener("keydown", (u) => {
        u.stopPropagation();
      }), m.addEventListener("input", () => {
        q(m.value);
      }), m.addEventListener("paste", () => {
        setTimeout(() => q(m.value), 0);
      })), E && (E.addEventListener("keydown", (u) => {
        u.stopPropagation();
      }), E.addEventListener("input", () => {
        this._imageModalAlt = E.value;
      }));
      const X = this.shadowRoot.getElementById("btn-save-image-collection");
      X && X.addEventListener("click", (u) => {
        u.stopPropagation();
        const S = (m ? m.value : this._imageModalUrl).trim(), P = (E ? E.value : this._imageModalAlt).trim() || (U ? "Imagem" : "Image");
        if (!S) {
          this._imageModalError = U ? "Por favor, insira a URL da imagem antes de salvar." : "Please enter an image URL before saving.", R && (R.textContent = this._imageModalError), C && (C.style.display = "flex");
          return;
        }
        const G = V(S);
        if (!G.safe) {
          this._imageModalError = G.reason || (U ? "URL inválida ou não segura." : "Invalid or unsafe URL."), R && (R.textContent = this._imageModalError), C && (C.style.display = "flex");
          return;
        }
        xe(S, P), this._imageModalUrl = "", this._imageModalAlt = "", this._imageModalError = null, this._imageModalSuccess = U ? "Imagem salva na sua coleção!" : "Image saved to collection!", this.render(), setTimeout(() => {
          this._isImageModalOpen && this._imageModalSuccess && (this._imageModalSuccess = null, this.render());
        }, 2500);
      }), this.shadowRoot.querySelectorAll(".sl-recent-image-item").forEach((u) => {
        let S = null, P = !1;
        u.addEventListener("touchstart", () => {
          P = !1, S = setTimeout(() => {
            if (!P) {
              if (this._isManagingRecentImages = !0, "vibrate" in navigator)
                try {
                  navigator.vibrate(50);
                } catch {
                }
              this.render();
            }
          }, 450);
        }, { passive: !0 }), u.addEventListener("touchmove", () => {
          P = !0, S && clearTimeout(S);
        }, { passive: !0 }), u.addEventListener("touchend", () => {
          S && clearTimeout(S);
        }), u.addEventListener("click", () => {
          if (this._isManagingRecentImages)
            return;
          const G = u.getAttribute("data-url") || "", se = u.getAttribute("data-alt") || "";
          m && (m.value = G), E && (E.value = se), this._imageModalAlt = se, q(G);
        });
      });
      const te = this.shadowRoot.getElementById("btn-manage-recent-images");
      te && te.addEventListener("click", (u) => {
        u.stopPropagation(), this._isManagingRecentImages = !this._isManagingRecentImages, this.render();
      }), this.shadowRoot.querySelectorAll(".sl-btn-delete-recent-image").forEach((u) => {
        u.addEventListener("click", (S) => {
          S.stopPropagation();
          const P = u.getAttribute("data-url") || "";
          P && (Ae(P), le().length === 0 && (this._isManagingRecentImages = !1), this.render());
        });
      });
      const oe = this.shadowRoot.getElementById("btn-clear-recent-images");
      oe && oe.addEventListener("click", (u) => {
        u.stopPropagation(), this._isConfirmingClearImages = !0, this.render();
      });
      const re = this.shadowRoot.getElementById("btn-confirm-clear-images-yes");
      re && re.addEventListener("click", (u) => {
        u.stopPropagation(), Re(), this._isConfirmingClearImages = !1, this._isManagingRecentImages = !1, this.render();
      });
      const ae = this.shadowRoot.getElementById("btn-confirm-clear-images-no");
      ae && ae.addEventListener("click", (u) => {
        u.stopPropagation(), this._isConfirmingClearImages = !1, this.render();
      }), c && c.addEventListener("click", () => {
        const u = (m ? m.value : this._imageModalUrl).trim(), S = (E ? E.value : this._imageModalAlt).trim() || (U ? "Imagem" : "Image");
        if (!u) {
          this._imageModalError = U ? "Por favor, insira a URL da imagem." : "Please enter an image URL.", R && (R.textContent = this._imageModalError), C && (C.style.display = "flex"), v && (v.style.display = "none");
          return;
        }
        const P = V(u);
        if (!P.safe) {
          this._imageModalError = P.reason || (U ? "URL inválida ou não segura." : "Invalid or unsafe URL."), R && (R.textContent = this._imageModalError), C && (C.style.display = "flex"), v && (v.style.display = "none");
          return;
        }
        xe(u, S);
        const G = `![${S}](${u})`;
        this._isImageModalOpen = !1, this._isManagingRecentImages = !1, this._isConfirmingClearImages = !1, this._imageModalUrl = "", this._imageModalAlt = "", this._imageModalError = null, this._imageModalSuccess = null, this.insertTextAtCursor(G);
      });
    }
    if (this._isEmojiPickerOpen) {
      const n = (p) => {
        var m;
        const y = p.composedPath(), c = (m = this.shadowRoot) == null ? void 0 : m.getElementById("emoji-popover");
        c && !y.includes(c) && d && !y.includes(d) && (this._isEmojiPickerOpen = !1, this.render(), document.removeEventListener("click", n));
      };
      setTimeout(() => document.addEventListener("click", n), 0);
    }
    const I = this.shadowRoot.getElementById("btn-login-submit");
    I && I.addEventListener("click", () => {
      this.loginWithGitHub();
    });
    const B = this.shadowRoot.getElementById("btn-logout");
    B && B.addEventListener("click", () => {
      this.logout();
    });
    const D = this.shadowRoot.getElementById("btn-submit");
    D && D.addEventListener("click", async () => {
      const n = this._composerText.trim();
      if (!n) {
        alert(
          this.currentLang === "pt" ? "Por favor, escreva uma reflexão antes de publicar." : "Please write a note before posting."
        );
        return;
      }
      await this.handlePostComment(n);
    }), this.shadowRoot.querySelectorAll(".sl-reaction-trigger-btn").forEach((n) => {
      n.addEventListener("click", async (p) => {
        if (p.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const y = p.currentTarget, c = y.getAttribute("data-comment-id"), m = y.getAttribute("data-emoji") || "👍";
        c && await this.handleToggleReaction(c, m);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-picker-item").forEach((n) => {
      n.addEventListener("click", async (p) => {
        if (p.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const y = p.currentTarget, c = y.getAttribute("data-comment-id"), m = y.getAttribute("data-emoji"), E = y.closest(".sl-reaction-container");
        E == null || E.classList.remove("sl-popover-open"), c && m && await this.handleToggleReaction(c, m);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-badge").forEach((n) => {
      n.addEventListener("click", async (p) => {
        if (p.stopPropagation(), !this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        const y = p.currentTarget, c = y.getAttribute("data-comment-id"), m = y.getAttribute("data-emoji");
        c && m && await this.handleToggleReaction(c, m);
      });
    }), this.shadowRoot.querySelectorAll(".sl-reaction-container").forEach((n) => {
      n.addEventListener("mouseenter", () => {
        n.classList.add("sl-popover-open");
      }), n.addEventListener("mouseleave", () => {
        n.classList.remove("sl-popover-open");
      }), n.addEventListener("contextmenu", (p) => {
        p.preventDefault(), n.classList.toggle("sl-popover-open");
      });
    }), this.shadowRoot.querySelectorAll(".sl-reply-btn:not(.btn-toggle-translate)").forEach((n) => {
      n.addEventListener("click", (p) => {
        var m;
        const c = p.currentTarget.getAttribute("data-reply-to");
        if (!this._currentUser) {
          this.loginWithGitHub();
          return;
        }
        if (this._replyingToId === c)
          this._replyingToId = null, this._replyText = "";
        else {
          this._replyingToId = c;
          let E = "";
          const v = this._comments.find((O) => O.id === c);
          if (v)
            E = v.author.login;
          else
            for (const O of this._comments) {
              const C = (m = O.replies) == null ? void 0 : m.find((R) => R.id === c);
              if (C) {
                E = C.author.login;
                break;
              }
            }
          this._replyText = E ? `@${E} ` : "";
        }
        this.render();
      });
    }), this.shadowRoot.querySelectorAll(".sl-thread-toggle-btn").forEach((n) => {
      n.addEventListener("click", (p) => {
        const c = p.currentTarget.getAttribute("data-thread-id");
        c && (this._expandedThreads.has(c) ? this._expandedThreads.delete(c) : this._expandedThreads.add(c), this.render());
      });
    }), this.shadowRoot.querySelectorAll(".btn-send-reply").forEach((n) => {
      n.addEventListener("click", async (p) => {
        var O;
        const y = p.currentTarget, c = y.getAttribute("data-comment-id"), m = y.getAttribute("data-parent-id") || c, E = (O = this.shadowRoot) == null ? void 0 : O.getElementById(`reply-textarea-${c}`);
        if (!E) return;
        const v = E.value.trim();
        !v || !m || await this.handlePostReply(m, v);
      });
    }), this.shadowRoot.querySelectorAll(".btn-cancel-reply").forEach((n) => {
      n.addEventListener("click", () => {
        this._replyingToId = null, this._replyText = "", this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-toggle-translate").forEach((n) => {
      n.addEventListener("click", (p) => {
        const c = p.currentTarget.getAttribute("data-comment-id");
        c && this.toggleTranslate(c);
      });
    }), this.shadowRoot.querySelectorAll(".sl-audio-btn").forEach((n) => {
      n.addEventListener("click", (p) => {
        const y = p.currentTarget, c = y.getAttribute("data-speak-id"), m = y.getAttribute("data-text"), E = y.getAttribute("data-lang") || void 0;
        if (c && m) {
          const v = decodeURIComponent(m);
          this.toggleSpeak(c, v, E);
        }
      });
    }), this.shadowRoot.querySelectorAll(".sl-menu-btn").forEach((n) => {
      n.addEventListener("click", (p) => {
        p.stopPropagation();
        const c = p.currentTarget.getAttribute("data-menu-id");
        this._openMenuId = this._openMenuId === c ? null : c, this.render();
      });
    }), this.shadowRoot.addEventListener("click", () => {
      this._openMenuId && (this._openMenuId = null, this.render());
    }), this.shadowRoot.querySelectorAll(".btn-toggle-pin").forEach((n) => {
      n.addEventListener("click", async (p) => {
        p.stopPropagation();
        const c = p.currentTarget.getAttribute("data-comment-id");
        c && await this.handleTogglePin(c);
      });
    }), this.shadowRoot.querySelectorAll(".btn-edit").forEach((n) => {
      n.addEventListener("click", (p) => {
        p.stopPropagation();
        const c = p.currentTarget.getAttribute("data-comment-id");
        this._editingId = c, this._openMenuId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-save-edit").forEach((n) => {
      n.addEventListener("click", async (p) => {
        var v;
        const c = p.currentTarget.getAttribute("data-comment-id"), m = (v = this.shadowRoot) == null ? void 0 : v.getElementById(`edit-textarea-${c}`);
        if (!m || !c) return;
        const E = m.value.trim();
        E && await this.handleSaveEdit(c, E);
      });
    }), this.shadowRoot.querySelectorAll(".btn-cancel-edit").forEach((n) => {
      n.addEventListener("click", () => {
        this._editingId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(".btn-delete").forEach((n) => {
      n.addEventListener("click", async (p) => {
        p.stopPropagation();
        const c = p.currentTarget.getAttribute("data-comment-id");
        if (!c) return;
        const m = this.currentLang === "pt" ? "Tem certeza que deseja excluir esta nota?" : "Are you sure you want to delete this note?";
        confirm(m) && await this.handleDelete(c);
      });
    }), this.shadowRoot.querySelectorAll(".btn-mod-restrict-media").forEach((n) => {
      n.addEventListener("click", async (p) => {
        p.stopPropagation();
        const c = p.currentTarget.getAttribute("data-user");
        if (!c) return;
        const m = this.currentLang === "pt" ? `Deseja realmente remover a permissão de mídia de @${c}?` : this.currentLang === "es" ? `¿Deseas quitar el permiso de medios a @${c}?` : `Are you sure you want to restrict media for @${c}?`;
        confirm(m) && (this._openMenuId = null, this.render(), await this.handleSetModeration(c, "restrict_media"));
      });
    }), this.shadowRoot.querySelectorAll(".btn-mod-ban").forEach((n) => {
      n.addEventListener("click", async (p) => {
        p.stopPropagation();
        const c = p.currentTarget.getAttribute("data-user");
        if (!c) return;
        const m = this.currentLang === "pt" ? `Deseja realmente banir o usuário @${c} dos comentários?` : this.currentLang === "es" ? `¿Deseas bloquear al usuario @${c} de los comentarios?` : `Are you sure you want to ban @${c} from commenting?`;
        confirm(m) && (this._openMenuId = null, this.render(), await this.handleSetModeration(c, "ban"));
      });
    });
    const ge = this.shadowRoot.getElementById("sl-mod-refresh");
    ge && ge.addEventListener("click", async (n) => {
      n.stopPropagation(), await this.loadModerationList();
    });
    const me = this.shadowRoot.getElementById("sl-mod-toggle-collapse");
    me && me.addEventListener("click", (n) => {
      n.stopPropagation(), this._isModerationCollapsed = !this._isModerationCollapsed;
      try {
        localStorage.setItem("sl_mod_collapsed", String(this._isModerationCollapsed));
      } catch {
      }
      this.render();
    });
    const ue = this.shadowRoot.getElementById("sl-mod-pill-ban");
    ue && ue.addEventListener("click", (n) => {
      n.stopPropagation(), this._expandedModCategory = this._expandedModCategory === "ban" ? null : "ban", this.render();
    });
    const be = this.shadowRoot.getElementById("sl-mod-pill-media");
    if (be && be.addEventListener("click", (n) => {
      n.stopPropagation(), this._expandedModCategory = this._expandedModCategory === "media" ? null : "media", this.render();
    }), this.shadowRoot.querySelectorAll(".sl-mod-chip-remove").forEach((n) => {
      n.addEventListener("click", async (p) => {
        p.stopPropagation();
        const c = p.currentTarget.getAttribute("data-user");
        c && await this.handleRemoveModeration(c);
      });
    }), this.shadowRoot.querySelectorAll(".btn-copy-link").forEach((n) => {
      n.addEventListener("click", (p) => {
        p.stopPropagation();
        const c = p.currentTarget.getAttribute("data-comment-id"), m = `${window.location.href.split("#")[0]}#comment-${c}`;
        navigator.clipboard.writeText(m).then(() => {
          alert(
            this.currentLang === "pt" ? "Link copiado para a área de transferência!" : "Link copied to clipboard!"
          );
        }), this._openMenuId = null, this.render();
      });
    }), this.shadowRoot.querySelectorAll(
      ".sl-card-body img:not(.sl-emoji-inline), .sl-preview-area img:not(.sl-emoji-inline)"
    ).forEach((n) => {
      n.addEventListener("click", (p) => {
        p.preventDefault(), p.stopPropagation();
        const y = n.getAttribute("src") || "", c = n.getAttribute("alt") || "";
        y && this.openLightbox(y, c);
      });
    }), this._lightboxOpen) {
      const n = this.shadowRoot.getElementById("sl-lightbox-stage"), p = this.shadowRoot.getElementById("sl-lightbox-img"), y = this.shadowRoot.getElementById("sl-lightbox-close"), c = this.shadowRoot.getElementById("sl-lightbox-zoom-in"), m = this.shadowRoot.getElementById("sl-lightbox-zoom-out"), E = this.shadowRoot.getElementById("sl-lightbox-reset");
      y && y.addEventListener("click", (v) => {
        v.stopPropagation(), this.closeLightbox();
      }), c && c.addEventListener("click", (v) => {
        v.stopPropagation(), this.setLightboxZoom(this._lightboxScale + 0.3);
      }), m && m.addEventListener("click", (v) => {
        v.stopPropagation(), this.setLightboxZoom(this._lightboxScale - 0.3);
      }), E && E.addEventListener("click", (v) => {
        v.stopPropagation(), this.resetLightboxTransform();
      }), n && (n.addEventListener("click", (v) => {
        v.target === n && this.closeLightbox();
      }), n.addEventListener(
        "wheel",
        (v) => {
          v.preventDefault();
          const O = v.deltaY < 0 ? 0.25 : -0.25;
          this.setLightboxZoom(this._lightboxScale + O);
        },
        { passive: !1 }
      )), p && (p.addEventListener("dblclick", (v) => {
        v.stopPropagation(), this._lightboxScale > 1.2 ? this.resetLightboxTransform() : this.setLightboxZoom(2);
      }), p.addEventListener("mousedown", (v) => {
        if (v.button !== 0) return;
        v.preventDefault(), this._isDraggingImage = !0, this._dragStartX = v.clientX, this._dragStartY = v.clientY, this._dragStartTx = this._lightboxTranslateX, this._dragStartTy = this._lightboxTranslateY, this.updateLightboxTransform(!0);
        const O = (R) => {
          if (!this._isDraggingImage) return;
          const U = R.clientX - this._dragStartX, q = R.clientY - this._dragStartY;
          this._lightboxTranslateX = this._dragStartTx + U, this._lightboxTranslateY = this._dragStartTy + q, this.updateLightboxTransform(!0);
        }, C = () => {
          this._isDraggingImage = !1, this.updateLightboxTransform(!1), window.removeEventListener("mousemove", O), window.removeEventListener("mouseup", C);
        };
        window.addEventListener("mousemove", O), window.addEventListener("mouseup", C);
      }), p.addEventListener("touchstart", (v) => {
        if (v.touches.length === 1) {
          const O = v.touches[0];
          this._isDraggingImage = !0, this._dragStartX = O.clientX, this._dragStartY = O.clientY, this._dragStartTx = this._lightboxTranslateX, this._dragStartTy = this._lightboxTranslateY, this.updateLightboxTransform(!0);
          const C = (U) => {
            if (!this._isDraggingImage || U.touches.length !== 1) return;
            const q = U.touches[0], J = q.clientX - this._dragStartX, X = q.clientY - this._dragStartY;
            this._lightboxTranslateX = this._dragStartTx + J, this._lightboxTranslateY = this._dragStartTy + X, this.updateLightboxTransform(!0);
          }, R = () => {
            this._isDraggingImage = !1, this.updateLightboxTransform(!1), window.removeEventListener("touchmove", C), window.removeEventListener("touchend", R);
          };
          window.addEventListener("touchmove", C, { passive: !0 }), window.addEventListener("touchend", R);
        }
      }, { passive: !0 }));
    }
    this.setupCodeBlocks();
  }
  /**
   * Configura blocos de código nos comentários e na área de prévia:
   * Numeração de linhas, botão Copiar com feedback visual e adaptação de blocos do GitHub Discussions.
   */
  setupCodeBlocks() {
    if (!this.shadowRoot) return;
    this.shadowRoot.querySelectorAll(
      ".sl-card-body pre, .sl-preview-area pre"
    ).forEach((g) => {
      var Q;
      if (g.closest(".sl-code-block")) return;
      const k = g.querySelector("code") || g, w = k.textContent || "";
      if (!w.trim()) return;
      let _ = "code";
      const L = g.closest('[class*="highlight-source-"]');
      if (L) {
        const H = L.className.match(/highlight-source-([a-zA-Z0-9_-]+)/);
        H && H[1] && (_ = H[1]);
      } else if (g.getAttribute("lang"))
        _ = g.getAttribute("lang") || "code";
      else if (k.className) {
        const H = k.className.match(/(?:language|lang)-([a-zA-Z0-9_-]+)/);
        H && H[1] && (_ = H[1]);
      }
      const x = w.split(/\r?\n/), I = x.length > 20, B = this.currentLang === "pt", D = B ? "Copiar" : "Copy", $ = B ? "Copiar código" : "Copy code", j = B ? "Rolar para cima" : "Scroll up", A = B ? "Rolar para baixo" : "Scroll down", F = I ? `${_} · ${x.length} ${B ? "linhas" : "lines"}` : _, N = document.createElement("div");
      N.className = `sl-code-block ${I ? "sl-code-block-long sl-collapsed" : ""}`, N.setAttribute("data-lang", _);
      const W = document.createElement("div");
      if (W.className = "sl-code-header", W.innerHTML = `
        <span class="sl-code-badge">${F}</span>
        <button type="button" class="sl-code-copy-btn" title="${$}" aria-label="${$}">
          <svg class="sl-copy-icon" viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
          </svg>
          <span class="sl-copy-text">${D}</span>
        </button>
      `, k.querySelector(".sl-code-line") || (k.innerHTML = x.map((H, Y) => {
        const z = H.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
        return `<span class="sl-code-line"><span class="sl-line-num">${Y + 1}</span><span class="sl-line-code">${z || " "}</span></span>`;
      }).join("")), (Q = g.parentNode) == null || Q.insertBefore(N, g), N.appendChild(W), N.appendChild(g), g.classList.add("sl-code-pre"), k.classList.add("sl-code-body"), I && !this._hideCodeScroll) {
        const H = document.createElement("div");
        H.className = "sl-code-scroll-controls", H.setAttribute("aria-label", B ? "Navegação do código" : "Code navigation"), H.innerHTML = `
          <button type="button" class="sl-code-scroll-btn sl-scroll-up" title="${j}" aria-label="${j}">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M8 3.5a.75.75 0 0 1 .53.22l4.5 4.5a.75.75 0 0 1-1.06 1.06L8 5.31 4.03 9.28a.75.75 0 0 1-1.06-1.06l4.5-4.5A.75.75 0 0 1 8 3.5Z"/>
            </svg>
          </button>
          <button type="button" class="sl-code-scroll-btn sl-scroll-down" title="${A}" aria-label="${A}">
            <svg viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              <path d="M8 12.5a.75.75 0 0 1-.53-.22l-4.5-4.5a.75.75 0 0 1 1.06-1.06L8 10.69l3.97-3.97a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-.53.22Z"/>
            </svg>
          </button>
        `, N.appendChild(H);
        const Y = document.createElement("div");
        Y.className = "sl-code-expand-bar", Y.innerHTML = `
          <button type="button" class="sl-code-expand-btn" data-lines="${x.length}">
            <span>↕</span>
            <span class="sl-expand-text">${B ? `Mostrar todas as ${x.length} linhas` : `Show all ${x.length} lines`}</span>
          </button>
        `, N.appendChild(Y);
      }
    }), this.shadowRoot.querySelectorAll(".sl-code-copy-btn").forEach((g) => {
      g.addEventListener("click", async (k) => {
        k.stopPropagation();
        const w = g.closest(".sl-code-block");
        if (!w) return;
        const _ = w.querySelectorAll(".sl-line-code");
        let L = "";
        if (_.length > 0)
          L = Array.from(_).map((x) => x.textContent || "").join(`
`);
        else {
          const x = w.querySelector("pre");
          L = (x == null ? void 0 : x.textContent) || "";
        }
        try {
          await navigator.clipboard.writeText(L);
          const x = g.querySelector(".sl-copy-text"), I = x ? x.textContent : "";
          g.classList.add("sl-copied"), x && (x.textContent = this.currentLang === "pt" ? "Copiado!" : "Copied!"), setTimeout(() => {
            g.classList.remove("sl-copied"), x && I && (x.textContent = I);
          }, 2e3);
        } catch {
        }
      });
    }), this.shadowRoot.querySelectorAll(".sl-code-scroll-btn").forEach((g) => {
      g.addEventListener("click", (k) => {
        k.stopPropagation();
        const w = g.closest(".sl-code-block"), _ = w == null ? void 0 : w.querySelector(".sl-code-pre");
        if (!_) return;
        const L = g.classList.contains("sl-scroll-down");
        _.scrollBy({ top: L ? 160 : -160, behavior: "smooth" });
      });
    }), this.shadowRoot.querySelectorAll(".sl-code-block-long").forEach((g) => {
      const k = g.querySelector(".sl-code-pre"), w = g.querySelector(".sl-scroll-up"), _ = g.querySelector(".sl-scroll-down");
      if (!k || !w || !_) return;
      const L = () => {
        const x = k.scrollTop <= 2, I = k.scrollTop + k.clientHeight >= k.scrollHeight - 4;
        w.classList.toggle("sl-disabled", x), _.classList.toggle("sl-disabled", I);
      };
      k.addEventListener("scroll", L, { passive: !0 }), L();
    }), this.shadowRoot.querySelectorAll(".sl-code-expand-btn").forEach((g) => {
      g.addEventListener("click", (k) => {
        k.stopPropagation();
        const w = g.closest(".sl-code-block-long");
        if (!w) return;
        const _ = w.classList.contains("sl-collapsed"), L = g.getAttribute("data-lines") || "", x = g.querySelector(".sl-expand-text"), I = this.currentLang === "pt";
        _ ? (w.classList.remove("sl-collapsed"), w.classList.add("sl-expanded"), x && (x.textContent = I ? "Minimizar código" : "Collapse code")) : (w.classList.remove("sl-expanded"), w.classList.add("sl-collapsed"), x && (x.textContent = I ? `Mostrar todas as ${L} linhas` : `Show all ${L} lines`), w.scrollIntoView({ behavior: "smooth", block: "nearest" }));
      });
    }), this.shadowRoot.querySelectorAll(".sl-page-btn[data-page]").forEach((g) => {
      g.addEventListener("click", (k) => {
        const _ = k.currentTarget.getAttribute("data-page");
        if (!_) return;
        const L = parseInt(_, 10);
        L !== this._currentPage && (this._currentPage = L, this.render(), this.scrollListToTop());
      });
    });
    const s = this.shadowRoot.querySelector(".btn-prev-page");
    s && s.addEventListener("click", () => {
      this._currentPage > 1 && (this._currentPage--, this.render(), this.scrollListToTop());
    });
    const d = this.shadowRoot.querySelector(".btn-next-page");
    d && d.addEventListener("click", () => {
      const g = Math.ceil(this._comments.length / this._pageSize);
      this._currentPage < g && (this._currentPage++, this.render(), this.scrollListToTop());
    });
    const l = this.shadowRoot.getElementById("sl-search-input");
    l && (l.addEventListener("input", (g) => {
      var _;
      const k = g.target.value;
      this._searchQuery = k, this._currentPage = 1, this.render();
      const w = (_ = this.shadowRoot) == null ? void 0 : _.getElementById("sl-search-input");
      if (w) {
        w.focus();
        const L = w.value.length;
        w.setSelectionRange(L, L);
      }
    }), l.addEventListener("keydown", (g) => {
      g.key === "Escape" && (this._searchQuery = "", this._currentPage = 1, this.render());
    }));
    const b = this.shadowRoot.getElementById("sl-search-clear");
    b && b.addEventListener("click", () => {
      this._searchQuery = "", this._currentPage = 1, this.render();
    });
    const T = this.shadowRoot.querySelector(".sl-search-banner-clear");
    T && T.addEventListener("click", () => {
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
      login: "demo-reader",
      avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
      url: "https://github.com"
    };
    if (this._brokerClient && this._authToken)
      try {
        if (!this._discussionId && this._repositoryId && this._categoryId) {
          const a = this._title.trim() || (typeof document < "u" ? document.title.replace(/\s*[-|·].*$/, "").trim() : "") || this.getCurrentTerm(), r = typeof window < "u" ? window.location.href : "", i = r ? `Discussão para o artigo: **[${a}](${r})**

_Comentários gerenciados nativamente pelo [ScatterLeaf](https://github.com/rnt-rez/scatterleaf)._` : void 0, s = await this._brokerClient.createDiscussion(
            this._repositoryId,
            this._categoryId,
            a,
            i
          );
          this._discussionId = s.id;
        }
        if (this._discussionId) {
          const a = await this._brokerClient.addComment(
            this._discussionId,
            e,
            void 0,
            this._repo
          ), r = {
            id: a.id,
            author: {
              login: a.author.login,
              avatarUrl: a.author.avatarUrl,
              url: a.author.url,
              isAuthor: !0
            },
            body: a.body,
            bodyHtml: a.bodyHTML,
            createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
            originalLang: this.detectTextLanguage(e),
            reactions: [],
            replies: []
          };
          this._comments.unshift(r), this._currentPage = 1, this._composerText = "", this._activeTab = "write", this.render(), setTimeout(() => {
            const i = this._comments.findIndex((s) => s.id === r.id);
            if (i !== -1) {
              const [s] = this._comments.splice(i, 1);
              this._comments.push(s), this.render();
            }
          }, 5e3);
          return;
        }
      } catch (a) {
        if (console.error("Falha ao enviar comentário via broker:", a), this.isAuthError(a)) {
          this.handleExpiredSession(!1);
          return;
        }
        alert(
          (a == null ? void 0 : a.message) || (this._lang === "pt" ? "Erro ao enviar comentário." : "Failed to post comment.")
        );
        return;
      }
    const o = {
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
    this._comments.unshift(o), this._currentPage = 1, this._composerText = "", this._activeTab = "write", this.render(), setTimeout(() => {
      const a = this._comments.findIndex((r) => r.id === o.id);
      if (a !== -1) {
        const [r] = this._comments.splice(a, 1);
        this._comments.push(r), this.render();
      }
    }, 5e3), this.dispatchEvent(
      new CustomEvent("comment-added", {
        detail: o,
        bubbles: !0,
        composed: !0
      })
    );
  }
  async handlePostReply(e, t) {
    const o = this._currentUser || {
      login: "demo-reader",
      avatarUrl: "https://avatars.githubusercontent.com/u/583231?v=4",
      url: "https://github.com"
    };
    if (this._brokerClient && this._authToken && this._discussionId)
      try {
        const r = await this._brokerClient.addComment(
          this._discussionId,
          t,
          e,
          this._repo
        ), i = this._comments.find((s) => s.id === e);
        if (i) {
          i.replies || (i.replies = []), i.replies.push({
            id: r.id,
            author: {
              login: r.author.login,
              avatarUrl: r.author.avatarUrl,
              url: r.author.url,
              isAuthor: !1
            },
            body: r.body,
            bodyHtml: r.bodyHTML,
            createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
            originalLang: this.detectTextLanguage(t),
            reactions: [],
            parentId: e
          }), this._expandedThreads.add(e), this._replyingToId = null, this._replyText = "", this.render();
          return;
        }
      } catch (r) {
        if (console.error("Falha ao enviar réplica via broker:", r), this.isAuthError(r)) {
          this.handleExpiredSession(!1);
          return;
        }
        alert(
          (r == null ? void 0 : r.message) || (this._lang === "pt" ? "Erro ao enviar réplica." : "Failed to post reply.")
        );
        return;
      }
    const a = this._comments.find((r) => r.id === e);
    if (a) {
      a.replies || (a.replies = []);
      const r = {
        id: `${e}-${Date.now()}`,
        author: {
          login: o.login,
          avatarUrl: o.avatarUrl,
          url: o.url || `https://github.com/${o.login}`,
          isAuthor: !1
        },
        body: t,
        createdAt: this.currentLang === "pt" ? "agora mesmo" : "just now",
        originalLang: this.detectTextLanguage(t),
        reactions: [],
        parentId: e
      };
      a.replies.push(r), this._expandedThreads.add(e), this._replyingToId = null, this._replyText = "", this.render(), this.dispatchEvent(
        new CustomEvent("reply-added", {
          detail: r,
          bubbles: !0,
          composed: !0
        })
      );
    }
  }
  async handleSaveEdit(e, t) {
    let o = null;
    if (this._brokerClient && this._authToken)
      try {
        o = await this._brokerClient.updateComment(e, t, this._repo);
      } catch (r) {
        if (console.error("Falha ao editar comentário via broker:", r), this.isAuthError(r)) {
          this.handleExpiredSession(!1);
          return;
        }
        alert(
          (r == null ? void 0 : r.message) || (this._lang === "pt" ? "Não foi possível salvar a edição no GitHub. Verifique sua conexão ou permissões." : "Failed to save edit on GitHub. Please check your connection or permissions.")
        );
        return;
      }
    const a = (r) => {
      const i = !!(r.isPinned || r.body.includes("<!-- sl:pinned -->") || r.body.includes("<!-- pinned -->")), s = t.replace(/<!--\s*sl:pinned\s*-->\r?\n?/g, "").replace(/<!--\s*pinned\s*-->\r?\n?/g, "");
      r.body = i ? `<!-- sl:pinned -->
${s}` : s, r.isEdited = !0, r.bodyHtml = (o == null ? void 0 : o.bodyHTML) || void 0, r.translatedBody = void 0, r.isShowingTranslation = !1;
    };
    for (const r of this._comments) {
      if (r.id === e) {
        a(r);
        break;
      }
      if (r.replies) {
        const i = r.replies.find((s) => s.id === e);
        if (i) {
          a(i);
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
        if (console.error("Falha ao excluir comentário via broker:", t), this.isAuthError(t)) {
          this.handleExpiredSession(!1);
          return;
        }
      }
    this._comments = this._comments.filter((t) => t.id === e ? !1 : (t.replies && (t.replies = t.replies.filter((o) => o.id !== e)), !0)), this._openMenuId = null, this.render();
  }
  async handleTogglePin(e) {
    const t = this._comments.find((s) => s.id === e);
    if (!t) return;
    const a = !(!t.parentId && !!(t.isPinned || t.body.includes("<!-- sl:pinned -->") || t.body.includes("<!-- pinned -->"))), r = t.body.replace(/<!--\s*sl:pinned\s*-->\r?\n?/g, "").replace(/<!--\s*pinned\s*-->\r?\n?/g, ""), i = a ? `<!-- sl:pinned -->
${r}` : r;
    if (t.isPinned = a, t.body = i, this._openMenuId = null, this.render(), this._brokerClient && this._authToken)
      try {
        const s = await this._brokerClient.updateComment(e, i);
        s != null && s.bodyHTML && (t.bodyHtml = s.bodyHTML);
      } catch (s) {
        if (console.error("Falha ao atualizar fixação do comentário via broker:", s), this.isAuthError(s)) {
          this.handleExpiredSession(!1);
          return;
        }
      }
  }
  async handleToggleReaction(e, t) {
    let o;
    for (const s of this._comments) {
      if (s.id === e) {
        o = s;
        break;
      }
      if (s.replies) {
        const d = s.replies.find((l) => l.id === e);
        if (d) {
          o = d;
          break;
        }
      }
    }
    if (!o) return;
    o.reactions || (o.reactions = []);
    const a = o.reactions.find((s) => s.content === t), i = !!(a != null && a.viewerHasReacted) ? "remove" : "add";
    if (i === "remove" ? a && (a.count = Math.max(0, a.count - 1), a.viewerHasReacted = !1, a.count === 0 && (o.reactions = o.reactions.filter((s) => s.content !== t))) : a ? (a.count += 1, a.viewerHasReacted = !0) : o.reactions.push({
      content: t,
      count: 1,
      viewerHasReacted: !0
    }), this.render(), this._brokerClient && this._authToken)
      try {
        await this._brokerClient.toggleReaction(e, t, i);
      } catch (s) {
        if (console.error(`Falha ao processar reação (${i}) via broker:`, s), i === "add") {
          const d = o.reactions.find((l) => l.content === t);
          d && (d.count = Math.max(0, d.count - 1), d.viewerHasReacted = !1, d.count === 0 && (o.reactions = o.reactions.filter((l) => l.content !== t)));
        } else {
          const d = o.reactions.find((l) => l.content === t);
          d ? (d.count += 1, d.viewerHasReacted = !0) : o.reactions.push({ content: t, count: 1, viewerHasReacted: !0 });
        }
        if (this.isAuthError(s)) {
          this.handleExpiredSession(!1);
          return;
        }
        this.render();
      }
  }
}
typeof window < "u" && !customElements.get("scatter-leaf") && customElements.define("scatter-leaf", je);
export {
  je as ScatterLeaf
};
//# sourceMappingURL=scatterleaf.js.map
