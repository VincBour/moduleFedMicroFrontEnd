import { render, screen } from '@testing-library/react';
import React from 'react';
import { getVacanciesTop } from '../../../store/actions';
import { useVacancyState } from '../../../store/vacancyContextProvider';
import { getVacanciesTopMock } from '../../../__mockData__/getVacanciesTopMock';
import { VacancyType } from '../type';
import VacanciesTop from '../VacanciesTop';

jest.mock('../../../store/VacancyContextProvider');
jest.mock('../../../store/actions');
type PropsType = {
    vacanciesTop: VacancyType[]
}
describe('VacanciesTop', () => {
    let props: PropsType;
beforeEach(() => {
    props = {
        vacanciesTop: getVacanciesTopMock()
    };
    (useVacancyState as jest.Mock).mockReturnValue(props);
    (getVacanciesTop as jest.Mock);
});
    it('should be in the document', () => {
        const { getByTestId } = render(<VacanciesTop />);
        
        expect(getByTestId('grid-vacancies')).toBeInTheDocument();
        expect(getByTestId('item-0')).toBeInTheDocument();
        expect(getByTestId('item-1')).toBeInTheDocument();
    });
})
