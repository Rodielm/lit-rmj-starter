import { Router } from '@vaadin/router';

const routes = [
    {
        path: "/",
        component: "x-app",
        action: async () => {
            await import("./app");
        }
    },
    {
        path: "/home",
        component: "x-home",
        action: async () => {
            await import("./views/home/home");
        }
    },
    {
        path: "/about",
        component: "x-about",
        action: async () => {
            await import("./views/about/about");
        }
    },
]


const outlet = document.getElementById('outlet');
export const router = new Router(outlet);
router.setRoutes(routes);
