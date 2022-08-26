export function initTextComp() {
    class TextComponent extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({ mode: "open" })
            const variant = this.getAttribute("variant")  || "body"
            const div = document.createElement("div");
            div.className = variant;
            div.textContent = this.textContent;
            
            let style = document.createElement("style");
            style.textContent = `
            .title {
                display:flex;
                flex-direction:column;
                font-size: 40px;
                font-weight: bold;
                text-align: center;
                color: #000;
                margin: 0;
                padding: 30px;
            }
            @media(min-width:769px) {
                .title {
                }
            }     
            .subtitle {
                font-size: 20px;
                font-weight: bold;
                text-align: center;
            }
            @media(min-width:769px) {
                .subtitle {
                    
                }
            }    
            .body {
                font-size: 20px;
                text-align: center;
            }`
            
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-text", TextComponent)
}
