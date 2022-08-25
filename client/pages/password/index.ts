import { state } from "../../state";

export function initPasswordPage(params) {
   const cs = state.getState()
   const div = document.createElement("div");
  
   div.className = "password-container"
   div.innerHTML = `
   
   `;
   
   
   
   return div;
}