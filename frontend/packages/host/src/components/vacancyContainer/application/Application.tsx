import React from "react";
import SuspenceContainer from "../../../utils/suspenceContainer/SuspenceContainer";
import "../../../vacancy-mf-decl.d";
import { Grid } from "@material-ui/core";

const VacancyApplicationmf = React.lazy(() => import('tsvacancy-mf/Application'));

export const Application = () => {
    return (
        <Grid container>
            <SuspenceContainer fallback="VacancyTop loading">
                <VacancyApplicationmf />
            </SuspenceContainer>
        </Grid>
    );
};

export default Application;