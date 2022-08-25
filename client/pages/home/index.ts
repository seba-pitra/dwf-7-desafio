import { state } from "../../state";

export function initHome(params) {
   const div = document.createElement("div");
   div.className = "home-container"

   div.innerHTML = `
   <custom-header></custom-header>
   <custom-text variant="title">Que onda</custom-text>
   <custom-text variant="subtitle">subtitulo</custom-text>
   <custom-text>Que onda</custom-text>

   <div class="pets-card-container">
      <custom-card></custom-card>
      <custom-card></custom-card>
   <div>
   `


   return div;
}