import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useVacancyState } from '../../../store/vacancyContextProvider';
import { getVacanciesMock } from '../../../__mockData__/getVacanciesMock';
import { getVacanciesTopMock } from '../../../__mockData__/getVacanciesTopMock';
import { VacancyType } from '../../vacancies/type';
import Vacancy from '../Vacancy';


jest.mock('../../../store/VacancyContextProvider')
type PropsType = {
    vacancies: VacancyType[],
    vacanciesTop: VacancyType[]
}
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useParams: () => ({
      ref: "2020-01"
  })
}));
describe('Vacancy', () => {
    let props: PropsType;
    beforeEach(() => {
        props = {
            vacancies: getVacanciesMock(),
            vacanciesTop: getVacanciesTopMock()
        };
        (useVacancyState as jest.Mock).mockReturnValue(props);
    });
    it('should be in the document', () => {
        const { getByTestId } = render(<Vacancy />);
        expect(getByTestId('card-vacancy')).toBeInTheDocument();
    });
    it('should render All information', () => {
        const { getByText } = render(<Vacancy />);
        expect(getByText('Marketing')).toBeInTheDocument();
        expect(getByText(/CDI/)).toBeInTheDocument();
        expect(getByText('30-40K')).toBeInTheDocument();
        expect(getByText(/Angers/)).toBeInTheDocument();
    });
    it('should push /vacancy/application/${reference}/${title} when click on button', () => {
        const { getAllByRole } = render(<Vacancy />);
        const button = getAllByRole('button');
        expect(button[3]).toBeInTheDocument();
        fireEvent.click(button[3]);
        expect(mockHistoryPush).toHaveBeenCalledWith(`/vacancy/application/2020-01/Marketing `);
    });
});