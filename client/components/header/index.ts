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
                <a href="/home">
                    <img src="../img/logo-header.png" class="header-logo">
                </a>
                <div class="header__burguer">
                    <div class="burguer__item"></div>
                    <div class="burguer__item"></div>
                    <div class="burguer__item"></div>
                </div>
                <div class="intro__burguer">
                <h1 class="x">X</h1>
                <div class="burguer__container">
                    <h1 class="burguer-title">
                        <a class="burguer-link" href="/my-info">Mis datos</a>
                    </h1>
                    <h1 class="burguer-title">
                        <a class="burguer-link" href="/my-reported-pets">Mis mascotas reportadas</a>
                    </h1>
                    <h1 class="burguer-title">
                        <a class="burguer-link" href="/post-pet">Reportar mascotas</a>
                    </h1>
                  </div>
                </div>
                <div class="intro__container-header-desktop">
                    <h4 class="header-desktop-item">
                       <a class="burguer-link" href="/my-info">Mis datos</a>
                    </h4>
                    <h4 class="header-desktop-item">
                       <a class="burguer-link" href="/my-reported-pets">Mascotas</a>
                       <a class="burguer-link" href="/my-reported-pets">reportadas</a>
                    </h4>
                    <h4 class="header-desktop-item">
                       <a class="burguer-link" href="/post-pet">Reportar</a>
                       <a class="burguer-link" href="/post-pet">mascotas</a>
                    </h4>
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
            .header-logo {
                cursor:pointer;
            }
            .burguer-container {
                width: 36px;
                height: 32px;
                display: grid;
                gap: 7px;
                cursor: pointer;
            }
            .burguer-link {
                text-decoration: none;
                color: #000;
            }
            .header__burguer {
                width: 36px;
                height: 32px;
                display: grid;
                gap: 7px;
                cursor: pointer;
            }
            @media(min-width:769px) {
                .header__burguer {
                    display: none;
                }
            }
            .burguer__item {
                background-color: #000;
                height: 6px;
                width: 36px;
            }
            .intro__burguer {
                display:none;
                flex-direction:column;
            }
            .burguer__container {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 58px;
            }
            
            .x {
                font-size: 48px;
                display: block;
                color: #fff;
                text-align: right;
                cursor: pointer;
                margin: 0
            }
            .burguer-title {
                text-align: center;
            }
            .intro__container-header-desktop {
                height: 96px;
                display: none;
            }
            
            @media(min-width:769px) {
                .intro__container-header-desktop {
                    display: inline-flex;
                    align-items: center;
                    justify-content: space-between;
                }
            }
            
            .header-desktop-item {
                display:flex;
                flex-direction: column;
                font-size: 24px;
                color: #fff;
                margin: 0 50px 0 0;
            }
            `;

            const window:any = header.querySelector(".intro__burguer");
            const openWindowButton = header.querySelector(".header__burguer");
            const closeWindowButton = header.querySelector(".x");
            const burguer:any = header.querySelector(".header__burguer")
            const image :any = header.querySelector(".header-logo")
            const headerContainer: any = header.querySelector(".header-container")
            
            
            openWindowButton?.addEventListener("click", (e) => {
                burguer.style.display = "none"
                window.style.display = "flex"
                image.style.display = "none"
                headerContainer.style.display = "inherit"
                
            })
        
            closeWindowButton?.addEventListener("click", () => {
                burguer.style.display = "grid"
                window.style.display = "none"
                image.style.display = "inherit"
                headerContainer.style.display = "flex"
            })

            shadow.appendChild(header);
            shadow.appendChild(style);
        }
        
    }
    customElements.define("custom-header", Header)
}