import {LitElement, html} from "lit";

export class App extends LitElement {


    createRenderRoot(){
        return this;
    }

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="content has-bg-mint-400  has-p-6 has-d-flex has-items-center has-flex-wrap">
                <!-- Navigation brand: always visible at the left side of the navbar -->
                <a class="has-d-block has-mr-auto has-text-lg has-text-current">
                    <strong>Navbar</strong>
                </a>
                <!-- Toggler button: only visible in mobile screens -->
                <div id="navbar-toggler" class="toggler tablet:has-d-none"></div>
                <!-- Navigation menu: by default hidden on mobile screens -->
                <div id="navbar-menu" class="tablet:has-d-flex mobile:has-w-full mobile:has-flex-column mobile:has-mt-4 mobile:has-d-none">
                    <a class="navlink mobile:has-mb-2">Link 1</a>
                    <a class="navlink">Link 2</a>
                </div>
            </div>

            <div class="columns has-text-center">
                <div class="column">
                    <div class="has-radius has-text-white has-p-2">
                        <div class="has-radius has-bg-white has-p-6 has-d-flex mobile:has-flex-column">
                            <div class="has-radius has-bg-blue-500 has-p-6 tablet:has-w-64 has-d-flex has-justify-center">
                                <i class="icon-image has-text-white has-text-5xl"></i>
                            </div>
                            <div class="has-p-6 mobile:has-px-0">
                                <div class="title is-4">Hello world!</div>
                                <div class="paragraph has-mb-0">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="column">
                    <div class="has-radius has-bg-blue-500 has-text-white has-p-2">Column 2</div>
                </div>
                <div class="column">
                    <div class="has-radius has-bg-blue-500 has-text-white has-p-2">Column 3</div>
                </div>
        </div>`;
    }

}

customElements.define("x-app", App);
