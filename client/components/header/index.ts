import { state } from "../../state";

export function initHeaderComp() {
    class Header extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render() {
            const shadow = this.attachShadow({ mode: "open" });
            const header = document.createElement("header");

            header.className = "header"
            header.innerHTML = `
            <div class="header-container">
                <img src="../img/logo-header.png" class="header-logo">

                <div class="header__burguer">
                    <div class="burguer__item"></div>
                    <div class="burguer__item"></div>
                    <div class="burguer__item"></div>
                </div>
                <div class="intro__burguer">
                    <div class="burguer-container">
                       <h1 class="burguer-title">
                            <a class="burguer-link" href="portfolio.html">Portfolio</a>
                        </h1>
                        <h1 class="burguer-title">
                            <a class="burguer-link" href="services.html">Servicios</a>
                        </h1>
                        <h1 class="burguer-title">
                            <a class="burguer-link" href="contact.html">Contacto</a>
                        </h1>
                    </div>
                </div>
            </div>
            `            
            
            const style =  document.createElement("style");
            style.innerText = `
            .header-container {
                heigth: 60px;
                display: flex;
                justify-content: space-around;
                align-item: center;
                padding-bottom: 30px;
            }
            .burguer-container {
                width: 36px;
                height: 32px;
                display: grid;
                gap: 7px;
                cursor: pointer;
            }

            `;

            shadow.appendChild(header);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-header", Header)
}