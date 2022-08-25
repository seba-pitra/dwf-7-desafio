import { state} from "../../state"
const imagen = require("url:../../images/win.png")

export function initPostPet(params) {
    const div = document.createElement("div")

    div.className = "contaner-result"
    div.innerHTML = `
    
    `

    return div
}