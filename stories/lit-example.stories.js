import {html} from "lit";
import "../src/my-element2.js";

export default {
    title: "myElement2",
    component: "my-element2",
    argTypes: {
        backgroundColor: {control: "color"},
    },
};

function Template({title, backgroundColor}) {
    return html`
    <my-element2
      style="--lit-example-background-color: ${backgroundColor || "white"}"
      .title=${title}
    >
    </my-element2>
  `;
}

export const App = Template.bind({});
App.args = {
    title: "My app",
};
