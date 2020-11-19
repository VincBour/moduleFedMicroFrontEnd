import Inscription from "../components/inscription/Inscription";
import MySpace from "../components/mySpace/MySpace";
import SignIn from "../components/signIn/SignIn";

export const routes = [
    {
        path: "/signin",
        component: SignIn
    },
    {
        path:"/signup",
        component: Inscription
    },
    {
        path:"/myspace",
        component: MySpace
    }
]

export default routes;