import {html} from "lit";
import "../src/my-element.js";

export default {
    title: "Element",
    component: "my-element",
};

function Template({name, count}) {
    return html`
    <my-element
        .name=${name}
        .count=${count}
    ></my-element>`;
}

export const App = Template.bind({});
App.args = {
    name: "My Element",
};
