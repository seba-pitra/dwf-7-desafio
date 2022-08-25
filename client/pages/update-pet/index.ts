import { state } from "../../state"

export function initUpdatePetData(params) {
    const cs = state.getState();
    const div = document.createElement("div");
    div.className = "play-container";
    
    div.innerHTML = `
    
    `;
        
    return div;
    
}
