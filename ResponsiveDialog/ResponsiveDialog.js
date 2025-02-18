class ResponsiveDialog extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        @import './ResponsiveDialog.css';
      </style>
      <div class="dialog">
        <div class="dialog-content">
          <slot></slot>
        </div>
      </div>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }

  open() {
    this.shadowRoot.querySelector('.dialog').classList.add('open');
  }

  close() {
    this.shadowRoot.querySelector('.dialog').classList.remove('open');
  }
}

customElements.define('responsive-dialog', ResponsiveDialog);
