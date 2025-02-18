class FilledTextField extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        @import './FilledTextField.css';
      </style>
      <div class="filled-text-field">
        <label>
          <slot name="label"></slot>
          <input type="text">
        </label>
      </div>
    `;

    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('filled-text-field', FilledTextField);
