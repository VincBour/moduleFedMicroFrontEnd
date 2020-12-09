import { MenuItem, Select } from "@material-ui/core";
import { render } from "@testing-library/react";
import React from "react";
import { getVacancies } from "../../../store/actions";
import { useVacancyState } from "../../../store/vacancyContextProvider";
import { getVacanciesMock } from "../../../__mockData__/getVacanciesMock";
import { SelectField } from "../../SelectField/SelectField";
import { VacancyType } from "../type";
import Vacancies from "../Vacancies";

jest.mock('../../../store/VacancyContextProvider');
jest.mock('../../../store/actions');
jest.mock('../../SelectField/SelectField');
type PropsType = {
    vacancies: VacancyType[]
}
describe('VacanciesTop', () => {
    let props: PropsType;
beforeEach(() => {
    props = {
        vacancies: getVacanciesMock()
    };
    (useVacancyState as jest.Mock).mockReturnValue(props);
    (getVacancies as jest.Mock);
    (SelectField as jest.Mock).mockReturnValue(<Select><MenuItem/></Select>);
});
    it('should be in the document', () => {
        const { getByTestId } = render(<Vacancies />);
        
        expect(getByTestId('container-vacancies')).toBeInTheDocument();
        expect(getByTestId('item-search')).toBeInTheDocument();
        expect(getByTestId('item-0')).toBeInTheDocument();
        expect(getByTestId('item-1')).toBeInTheDocument();
    });
})