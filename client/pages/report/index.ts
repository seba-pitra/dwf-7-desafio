import { stat } from "fs";
import { state } from "../../state";

export function initReport(params) {
   const div = document.createElement("div");
   
   div.className = "report-container"
   div.innerHTML = `
   <custom-header></custom-header>
   <div class="instructions-container">
     <custom-text>
      Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los segundos.
     </custom-text>
     <custom-boton>¡Jugar!</custom-boton>
     <div class="play-hands-container">
       <custom-tijera></custom-tijera>
       <custom-piedra></custom-piedra>
       <custom-papel></custom-papel>
     </div>
   </div>
   `
   
   return div;
}