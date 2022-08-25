import { initRouter } from "./router";
import { initTextComp } from "./components/text";
import { initBotonComp }from "./components/button";
import { initHeaderComp } from "./components/header";

(function() {
    const root = document.querySelector(".root")
    initRouter(root)
    initHeaderComp();
    initBotonComp();
    initTextComp();
})()