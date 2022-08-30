import { state } from "../../state"

export function initReportedPets(params) {
    const div = document.createElement("div");

    div.className = "jugada-container"
    div.innerHTML = `
      <custom-header></custom-header>
      <custom-text variant="title">Mascotas perdidas cerca tuyo</custom-text>
      <div class="pets-card-container">
         <custom-reported-card></custom-reported-card>
         <custom-reported-card></custom-reported-card>  
      </div>
      `;
    
    
    return div;
}