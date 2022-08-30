import { state } from "../../state";

export function initMyInfo(params) {
   const div = document.createElement("div");

   div.className = "welcome-container"
   div.innerHTML = `
   <custom-header></custom-header>
   <div class="form-datos-container">
    <custom-text variant="title">Ingresar</custom-text>
     <form class="form-your-info">
      <div class="your-info-container">
        <label for="your-name">Nombre</label>
        <input type="text" name="your-name" class="input-name">
      </div>
      <div class="your-info-container">
        <label for="password">Contraseña</label>
        <input type="password" name="password" class="input">
      </div>
      <div class="your-info-container">
        <label for="password">Repetir contraseña</label>
        <input type="password" name="password" class="input">
      </div>
      <div class="button-container">
         <custom-button>Guardar</custom-button>
      </div>  
    </form> 
   </div>
   `

   const button = div.querySelector(".button-container")

   button?.addEventListener("click", (e) => {
      e.preventDefault()
      params.goTo("/home")
   })
   
   return div;
}
