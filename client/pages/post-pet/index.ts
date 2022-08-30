import { state} from "../../state"

export function initPostPet(params) {
    const div = document.createElement("div")

    div.className = "contaner-result"
    div.innerHTML = `
   <custom-header></custom-header>
   <div class="form-datos-container">
    <custom-text variant="title">Reportar mascota perdida</custom-text>
     <form class="form-your-info">
      <div class="your-info-container">
        <label for="pet-name">Nombre</label>
        <input type="text" name="pet-name" class="input">
      </div>
      <div class="your-info-container">
        <div class="post-img-container">
          <img src="../img/post-img.png" alt="" class="post-img">
          <div class="button-container">
          <custom-button>Agregar/modificar foto</custom-button>
        </div> 
      </div> 
      <div class="your-info-container">
        
      </div>
      <div class="your-info-container">
        <label for="location">Ubicacion</label>
        <input type="text" name="location" class="input">
        <custom-text>Buscá un punto de referencia para reportar a tu mascota. Puede ser una dirección, un barrio o una ciudad.</custom-text>
      </div>
      </div>
      <div class="button-container">
         <custom-button>Reportar como perdido</custom-button>
      </div>
      <div class="button-container">
         <custom-button>Cancelar</custom-button>
      </div>  
    </form> 
   </div>
   `

    return div
}