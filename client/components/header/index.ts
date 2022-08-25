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
                
            </div>
            `            
            
            const style =  document.createElement("style");
            style.innerText = `
            .header-container {
                heigth: 60px;
                display: flex;
                justify-content: space-between;
                align-item: center;
                padding: 25px;
                background-color: #15C6E1;
            }
            .burguer-container {
                width: 36px;
                height: 32px;
                display: grid;
                gap: 7px;
                cursor: pointer;
            }
            .header__burguer {
                width: 36px;
                height: 32px;
                display: grid;
                gap: 7px;
                cursor: pointer;
            }
            .burguer__item {
                background-color: #000;
                height: 6px;
                width: 36px;
            }
            

            `;

            shadow.appendChild(header);
            shadow.appendChild(style);
        }
    }
    customElements.define("custom-header", Header)
}