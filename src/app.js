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

            <div class="is-flex">
                <!-- aside -->
                <div class="has-w-64 has-p-2 has-h-screen">
                    Side Bar
                </div>

                <div class="has-flex-auto">
                    <!-- header -->
                    <div class="is-flex has-flex-wrap has-shadow-lg has-mb-2 has-p-6 has-items-center">
                        <a class="is-block has-mr-auto has-size-2 has-text-current">
                            <strong>Navbar</strong>
                        </a>
                        <!-- Toggler button: only visible in mobile screens -->
                        <div id="navbar-toggler" class="menu is-hidden-tablet"></div>
                        <!-- Navigation menu: by default hidden on mobile screens -->
                        <div id="navbar-menu" class="is-flex-tablet has-direction-column-mobile has-mt-4-mobile has-w-full-mobile is-hidden-mobile">
                            <a class="navlink has-mb-2-mobile">Link 1</a>
                            <a class="navlink">Link 2</a>
                        </div>
                    </div>

                    <!-- Body -->
                    <div class="has-radius-md has-bg-white has-p-6 is-flex has-direction-column-mobile">
                        <div class="has-radius-md has-bg-primary has-p-6 has-w-64-tablet is-flex has-justify-center">
                            <i class="icon-image has-text-white has-size-9"></i>
                        </div>
                        <div class="has-p-6 has-px-none-mobile">
                            <div class="title is-4">Hello world!</div>
                            <div class="paragraph has-mb-none">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    `;

    }

}

customElements.define("x-app", App);
