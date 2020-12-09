import React from "react"
import VacancySearch from "../Search/VacancySearch"
import VacanciesTop from "../vacancies/VacanciesTop"

export const HomeVacancy: React.FC = () => {
    return (
        <>
            <VacancySearch/>
            <VacanciesTop /> 
        </>
    )
}
export default HomeVacancy;