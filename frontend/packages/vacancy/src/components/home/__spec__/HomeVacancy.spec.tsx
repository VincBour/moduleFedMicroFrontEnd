import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { render } from "@testing-library/react";
import React from "react";
import { getVacanciesTop } from "../../../store/actions";
import { useVacancyState } from "../../../store/vacancyContextProvider";
import { getVacanciesTopMock } from "../../../__mockData__/getVacanciesTopMock";
import { SelectField } from "../../SelectField/SelectField";
import { VacancyType } from "../../vacancies/type";
import HomeVacancy from "../HomeVacancy";

jest.mock('../../../store/vacancyContextProvider');
jest.mock('../../SelectField/SelectField');
jest.mock('../../../store/actions');
type PropsType = {
    vacanciesTop: VacancyType[]
}
describe('HomeVacancy', () => {
    let props: PropsType;
beforeEach(() => {
    props = {
        vacanciesTop: getVacanciesTopMock()
    };
    (useVacancyState as jest.Mock).mockReturnValue(props);
    (getVacanciesTop as jest.Mock);
    (SelectField as jest.Mock).mockReturnValue(<Select><MenuItem/></Select>)
});
    it('should be in the document', () => {
        const { container } = render(<HomeVacancy />);
        expect(container).toBeInTheDocument();
    });
});