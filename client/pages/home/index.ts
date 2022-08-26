import { state } from "../../state";

export function initHome(params) {
   const cs = state.getState();
   const div = document.createElement("div");
   div.className = "home-container"

   if(cs.info) {
      div.innerHTML = `
      <custom-header></custom-header>
      <custom-text variant="title">Mascotas perdidas cerca tuyo</custom-text>
      <div class="pets-card-container">
         <custom-card></custom-card>
         <custom-card></custom-card>  
      </div>
      `;
   } else {
      div.innerHTML = `
      <custom-header></custom-header>
      <custom-text variant="title">Mascotas perdidas cerca tuyo</custom-text>
      <custom-text>Para ver las mascotas reportadas cerca tuyo necesitamos permiso para conocer tu ubicación.</custom-text>
      <div class="buttom-container">
         <custom-button>Dar mi ubicación</custom-button>
      </div>
      `
   }
   
   const button = div.querySelector("custom-button")
   button?.addEventListener("click", (e) => {
      e.preventDefault();
      
   })

   return div;
}