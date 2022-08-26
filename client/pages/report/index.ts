import { stat } from "fs";
import { state } from "../../state";

export function initReport(params) {
   const div = document.createElement("div");
   
   div.className = "report-container"
   div.innerHTML = `
   <custom-header></custom-header>
   <div class="form-datos-container">
     <custom-text variant="title">Reportar info de Lali</custom-text>
     <form class="form-your-info">
      <div class="your-info-container">
        <label for="your-name">Tu nombre</label>
        <input type="text" name="your-name" class="input">
      </div>
      <div class="your-info-container">
        <label for="your-cellphone">Tu telefono</label>
        <input type="number" name="your-cellphone" class="input">
      </div>
      <div class="your-info-container">
        <label for="location-description">¿Donde lo viste?</label>
        <textarea name="location-description" class="textarea" cols="10" rows="5"></textarea>
      </div>
    </form> 
    <div class="buttom-container">
         <custom-button>Enviar</custom-button>
    </div>  
   </div>
   `
   
   return div;
}