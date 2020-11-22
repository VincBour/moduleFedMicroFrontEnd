import Inscription from "../components/inscription/Inscription";
import SignIn from "../components/signIn/SignIn";

export const routes = [
    {
        path: "/signin",
        component: SignIn
    },
    {
        path:"/signup",
        component: Inscription
    }
]

export default routes;
