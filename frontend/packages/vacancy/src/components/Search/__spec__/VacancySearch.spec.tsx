import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { fireEvent, getByTestId, render, screen } from '@testing-library/react';
import React from 'react';
import { SelectField } from '../../SelectField/SelectField';
import VacancySearch from '../VacancySearch';

jest.mock('../../SelectField/SelectField');
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));
describe('VacancySearch', () => {
    beforeEach(() => {
        (SelectField as jest.Mock).mockReturnValue(<Select><MenuItem/></Select>);
    });

    it('should be in the document', () => {
        const { container } = render(<VacancySearch />);
        expect(container).toBeInTheDocument();
    });
    it('should accordion expanded', () => {
        const { getAllByRole } = render(<VacancySearch />);
        const button = getAllByRole('button')[0];
        expect(button).toHaveAttribute("aria-expanded","false");
        fireEvent.click(button);
        expect(button).toHaveAttribute("aria-expanded", "true");
    });
    it('should history push when click search', () => {
        const { getAllByRole, getByTestId } = render(<VacancySearch />);
        const accordion = getAllByRole('button')[0];
        expect(accordion).toHaveAttribute("aria-expanded","false");
        fireEvent.click(accordion);
        expect(accordion).toHaveAttribute("aria-expanded", "true");
        const buttonSearch = getByTestId('search-button');
        fireEvent.click(buttonSearch);
        expect(mockHistoryPush).toHaveBeenCalledWith('/vacancies');
    });
});