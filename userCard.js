// creating a template for shadow DOM
const template = document.createElement('template');

template.innerHTML = `
    <style>
        h3 {
            color: coral;
        }
    </style>

    <h3></h3>
`;


// THE BASICS OF CREATING A CUSTOM ELEMENT
// first thing in creating a component is to create a class that extends
// creating a custom element
class UserCard extends HTMLElement {
    constructor() {
        // calling the constructor of HTMLElement with Super()
        super();

        // to encapsulate styles only to the custom element
        // we use shadow DOM
        this.attachShadow({ mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');

        // to insert something in our custom element we use the this keyword
        // this.innerHTML = `John Doe`;

        // passing an attribute into a custom element
        // this.innerHTML = `
        //     <style>
        //         h3 {
        //             color: coral;
        //         }
        //     </style>

        //     <h3>${this.getAttribute(name)}</h3>
        // `;
    }
}

// defining the custom element
                        // name of the tag, class we want to connect it to
window.customElements.define('user-card', UserCard);
