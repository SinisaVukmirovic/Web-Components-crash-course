// THE BASICS OF CREATING A CUSTOM ELEMENT
// first thing in creating a component is to create a class that extends
// creating a custom element
class UserCard extends HTMLElement {
    constructor() {
        // calling the constructor of HTMLElement with Super()
        super();

        // to insert something in our custom element we use the this keyword
        // this.innerHTML = `John Doe`;

        // passing an attribute into a custom element
        this.innerHTML = `${this.getAttribute('name')}`;
    }
}

// defining the custom element
                        // name of the tag, class we want to connect it to
window.customElements.define('user-card', UserCard);
