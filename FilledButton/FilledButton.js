class FilledButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        @import './FilledButton.css';
      </style>
      <slot></slot>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('filled-button', FilledButton);
