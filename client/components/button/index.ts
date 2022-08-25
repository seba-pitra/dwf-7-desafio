export function initBotonComp() {
    class Boton extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({ mode: "open" });
            const button = document.createElement("button");
            button.className = "button"
            button.textContent = this.textContent;
            
            const style =  document.createElement("style");
            style.innerText = `
            .button {
                height: 50px;
                width: 335px;
                background-color: #F6F324;
                border-radius: 5px;
                font-size: 16px;
                font-family: 'Acme', sans serif;
                color: #fff;
            }
            `;

            shadow.appendChild(button);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-boton", Boton)
}