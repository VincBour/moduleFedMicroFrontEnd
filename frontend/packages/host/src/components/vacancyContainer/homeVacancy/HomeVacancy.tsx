import React from "react";
import SuspenceContainer from "../../../utils/suspenceContainer/SuspenceContainer";
import "../../../vacancy-mf-decl.d";

const HomeVacancymf = React.lazy(() => import("tsvacancy-mf/HomeVacancy"));

export const HomeVacancy = () => {
  return (
    <SuspenceContainer fallback="VacancySearch loading">
      <HomeVacancymf />
    </SuspenceContainer>
  );
};

export default HomeVacancy;
