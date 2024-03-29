// creating a template for shadow DOM
const template = document.createElement('template');

template.innerHTML = `
    <style>
        h3 {
            color: coral;
        }

        .user-card {
            font-family: 'Arial', sans-serif;
            background: #333;
            width: 500px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-gap: 10px;
            margin-bottom: 15px;
            border-top: darkorchid 5px solid;
        }
    
        .user-card img {
            width: 100%;
        }

        .user-card .info {
            margin-left: 20px;
        }
    
        .user-card button {
            cursor: pointer;
            background: darkorchid;
            color: #fff;
            border: 0;
            border-radius: 5px;
            padding: 5px 10px;
        }
    </style>

    <div class="user-card">
        <img />

        <div>
            <h3></h3>
            
            <div class="info">
                <p> <slot name="email"> </p>
                <p> <slot name="phone"> </p>
            </div>
                
            <button id="toggle-info">Hide Info</button>
        </div>
    </div>
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

        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');

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

        // adding functionality, event handling
        this.showInfo = true;
    }

    toggleInfo() {
        this.showInfo = !this.showInfo;

        const info = this.shadowRoot.querySelector('.info');
        const toggleBtn = this.shadowRoot.querySelector('#toggle-info');

        if (this.showInfo) {
            info.style.visibility = 'visible';
            toggleBtn.innerText = 'Hide Info';
        }
        else {
            info.style.visibility = 'hidden';
            toggleBtn.innerText = 'Show Info';
        }
    }

    // adding functionality, event handling
    connectedCallback() {
        this.shadowRoot.querySelector('#toggle-info').
        addEventListener('click', () => this.toggleInfo());
    }

    disconnectCallback() {
        this.shadowRoot.querySelector('#toggle-info').
        removeEventListener();
    }
}

// defining the custom element
                        // name of the tag, class we want to connect it to
window.customElements.define('user-card', UserCard);
