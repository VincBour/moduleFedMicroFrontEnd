import React from "react";
import SuspenceContainer from "../../../utils/suspenceContainer/SuspenceContainer";
import "../../../vacancy-mf-decl.d";
import { Grid } from "@material-ui/core";

const Vacancymf = React.lazy(() => import('tsvacancy-mf/Vacancy'));

export const Vacancy = () => {
    return (
        <Grid container>
            <SuspenceContainer fallback="VacancyTop loading">
                <Vacancymf />
            </SuspenceContainer>
        </Grid>
    );
};

export default Vacancy;