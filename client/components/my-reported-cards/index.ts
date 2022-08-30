export function initMyCardComp() {
    class MyCard extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({ mode: "open" })
            const div = document.createElement("div");
            div.className = "pet-card";
            div.textContent = this.textContent;
            div.innerHTML = `
            <img src="../img/perro-prueba.jpg" class="pet-image">
            <div class="pet-description-container">
                <div class="pet-description">
                    <custom-text variant="subtitle">Konan</custom-text>
                    <custom-text>El Soberbio, Misiones</custom-text>
                </div>
                <div>
                <a href="/update-pet">
                    <custom-text class="report-info">Actualizar datos</custom-text>
                </a>
                </div>
            </div>
            `;
            
            let style = document.createElement("style");
            style.textContent = `
            .pet-card {
                height: 234px;
                width: 331px;
                border: solid 2px ;
                border-radius: 4px;
                margin: 0 0 30px 0;
                display:flex;
                flex-direction: column;
            }
            .pet-image {
                height: 147px;
            }
            .pet-description-container {
                display: flex;
            }
            .pet-description {
                display:flex;
                flex-direction: column;
            }
            `
            
            shadow.appendChild(div);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-reported-card", MyCard)
}
