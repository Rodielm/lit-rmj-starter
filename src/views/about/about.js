import { LitElement, html, css } from "lit";

export class About extends LitElement {

    static get properties() {
        return {
            /**
       * The name to say "Hello" to.
       * @type {string}
       */
            name: { type: String },

            /**
       * The number of times the button has been clicked.
       * @type {number}
       */
            count: { type: Number },
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`
        <h1>About View</h1>
    `;
    }

}

customElements.define("x-about", About);
