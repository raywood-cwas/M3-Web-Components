class IconButton extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        @import './IconButton.css';
      </style>
      <slot></slot>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('icon-button', IconButton);
