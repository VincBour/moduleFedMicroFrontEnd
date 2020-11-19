import React from "react";
import SuspenceContainer from "../../../utils/suspenceContainer/SuspenceContainer";
import "../../../vacancy-mf-decl.d";
import { Grid } from "@material-ui/core";

const Vacanciesmf = React.lazy(() => import('tsvacancy-mf/Vacancies'));

export const Vacancies = () => {
    return (
        <Grid container>
            <SuspenceContainer fallback="VacancyTop loading">
                <Vacanciesmf />
            </SuspenceContainer>
        </Grid>
    );
};

export default Vacancies;