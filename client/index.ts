import { initRouter } from "./router";
import { initTextComp } from "./components/text";
import { initBotonComp }from "./components/button";
import { initHeaderComp } from "./components/header";
import { initCardComp } from "./components/card"
import { initMyCardComp } from "./components/my-reported-cards";

(function() {
    const root = document.querySelector(".root")
    initRouter(root)
    initHeaderComp();
    initBotonComp();
    initTextComp();
    initCardComp()
    initMyCardComp();
    
})()