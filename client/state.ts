// const API_BASE_URL = "https://piedra-papel-tijeras-juego.herokuapp.com";
const API_BASE_URL = "http://localhost:3000";
 
export const state = {
    data:{
        
    },
    listeners:[],
    init() {
        const lastStorage = localStorage.getItem("state")
        return lastStorage;
    },
    getState() {
        return this.data;
    },
    setState(newState) {
        this.data = newState;
        for (const cb of this.listeners) {
            cb();  
        }
        localStorage.setItem("state", JSON.stringify(newState))
    },
    suscribe(cb: (any) => any) {
        this.listeners.push(cb);
    },
    cleanPlay() {
        const cs = this.getState();
        return fetch(API_BASE_URL + "/clean-play", {
            method: "put",
            headers: { 'content-type': "application/json" },
            body: JSON.stringify({
                rtdbRoomId: cs.rtdbRoomId,
                player: cs.player
            })
        })
    }
}