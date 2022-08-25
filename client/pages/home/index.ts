import { state } from "../../state";

export function initHome(params) {
   const cs = state.getState();
  

   const div = document.createElement("div");
   div.className = "home-container"

   div.innerHTML = `
   <custom-header></custom-header>
    
   `


   return div;
}