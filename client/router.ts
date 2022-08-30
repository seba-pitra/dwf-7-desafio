import { initHome } from "./pages/home"
import { initReport } from "./pages/report"
import { initSignin } from "./pages/signin";
import { initMyInfo } from "./pages/my-info";
import { initPostPet } from "./pages/post-pet";
import { initUpdatePetData } from "./pages/update-pet";
import { initReportedPets } from "./pages/reported-pets";


const routes = [ 
    {
        path: /\/home/,
        component: initHome
    },
    {
        path: /\/report/,
        component: initReport
    },
    {
        path: /\/signin/,
        component: initSignin
    },
    {
        path: /\/my-info/,
        component: initMyInfo
    },
    {
        path: /\/post-pet/,
        component: initPostPet
    },
    {
        path: /\/update-pet/,
        component: initUpdatePetData
    },
    {
        path: /\/my-reported-pets/,
        component: initReportedPets
    }
];


export function initRouter(container) {
    function goTo(path) {
        history.pushState({}, " ", path);
        handleRoute(path);
    }
    function handleRoute(route) {    
        for (const r of routes) {
            if (r.path.test(route)) {
                const el = r.component({goTo: goTo});
                if (container.firstChild) {
                    container.firstChild.remove();
                }
                container.appendChild(el)
            }
        }
    }
    if (location.pathname == "" ) {
        goTo("/home")
    } else {
        handleRoute(location.pathname);  
    } 
    // if (location.host.includes(".github.io")) {
    //     goTo("/apx-mod-5-desario-final/welcome");
    // }


    window.onpopstate = function() {
        handleRoute(location.pathname);
    }; 
}
