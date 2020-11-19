import Application from "../components/application/Application";
import Vacancies from "../components/vacancies/Vacancies";
import Vacancy from "../components/vacancy/Vacancy";

export const routes = [
    {
        path: "/vacancies",
        component: Vacancies
    },
    {
        path:"/vacancy/:ref",
        component: Vacancy
    },
    {
        path:"/vacancy/application/:ref/:title",
        component: Application
    }
]

export default routes;