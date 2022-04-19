import { LitElement, html, css } from "lit";

// import "@shoelace-style/shoelace/dist/components/button/button.js";
// import "@shoelace-style/shoelace/dist/components/color-picker/color-picker.js";
// import "@shoelace-style/shoelace/dist/components/checkbox/checkbox.js";

// export const styles = css`
//     /* @import 'bootstrap/scss/bootstrap.scss'; */
//     @import 'bootstrap';
// `

export class App extends LitElement {


    // _picker = this.renderRoot.querySelector("sl-color-picker");

    static styles = css`
        .nav-dot {
            transition: background 200ms, border-color 200ms;
        }
        @unocss-placeholder
    `

    constructor() {
        super();
        this.colorPicker = ""
    }

    connectedCallback() {
        super.connectedCallback();
        // console.log("connectedCallback", this.renderRoot.querySelector("sl-color-picker"));
    }

    // update(changeProps) {
    //     super.update(changeProps)
    //     console.log("update", this.renderRoot.querySelector("sl-color-picker"))
    // }

    // updated(changedProps) {
    //     console.log("updated", this.renderRoot.querySelector("sl-color-picker"));
    // }

    firstUpdated(changedProps) {
        // console.log("firstUpdated", this.renderRoot.querySelector("sl-color-picker"));
        // const colorPicker = this.renderRoot.querySelector("sl-color-picker");
        // colorPicker.swatches = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
        // const checkBox = this.renderRoot.querySelector("sl-checkbox");
        // checkBox.addEventListener('sl-change', e => {
        //     console.log(e.target.checked ? "checked" : "not checked");
        // })



    }

    render() {
        return html`
        <!-- <h1>First App</h1>
        <div class="bg-green-300 border-green-600 p-4 m-4 rounded">
            Hello World
        </div> -->
<!--
        <div class="bg-gray-500 hover:bg-red-600"> test</div> -->

        <!-- <nav class="bg-gray-500 flex items-center justify-between p-6 container mx-auto"></nav> -->

            <header class="py-6 text-white font-poppins">
                <div class="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
                    <div class="text-lg font-bold">Jonathan.doe</div>
                        <div class="hidden md:flex space-x-12 items-center">
                            <a href="#" class="text-selected-text">Home</a>
                            <a href="#work" >My work</a>
                            <a href="#clients" >Clients</a>
                            <a href="#hire"><button class="px-6 py-2 bg-theme font-bold text-white border-0 rounded">Hire me</button></a>
                        </div>
                        <div class="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="26" height="18" preserveAspectRatio="xMidYMid meet" viewBox="0 0 26 18">
                            <path fill="currentColor" d="M12 18H3v-2h9v2Zm9-5H3v-2h18v2Zm0-5h-9V6h9v2Z"/>
                        </svg>
                        </div>
                </div>
            </header>

            <div class="container text-white font-poppins mt-16 flex justify-between items-center mx-auto px-8">
                <div class="flex flex-wrap md:flex-nowrap">
                    <nav class="inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl-block">
                        <div class="absolute left-50 transform -translate-x-1/2 space-y-6 mt-37">
                            <a href="#" class="selected-circle nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                                <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Home</span>
                            </a>

                            <a href="#" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                                <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Work</span>
                            </a>

                            <a href="#" class="nav-dot  block w-7 h-7 rounded-full border-4 border-nav bg-body">
                                <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Clients</span>
                            </a>

                            <a href="#" class="nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body">
                                <span class="bg-black px-2 py-1 rounded-md ml-10 opacity-0">Hire</span>
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
    `;

    }

}

customElements.define("x-app", App);
