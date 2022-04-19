import { LitElement, html, css } from "lit";

export class Home extends LitElement {

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
        <h1>First home</h1>
    `;
    }

}

customElements.define("x-home", Home);
