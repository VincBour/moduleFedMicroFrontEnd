import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { VacancyCardType } from "../types";
import VacancyCard from "../VacancyCard";
import { MemoryRouter } from 'react-router-dom';

describe('true is truthy and false is falsy', () => {
    test('true is truthy', () => {
      expect(true).toBe(true);
    });
   
    test('false is falsy', () => {
      expect(false).toBe(false);
    });
  });

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('VacancyCard ', () => {
    it('should be in the document', () => {
      const props: VacancyCardType = {
        location: 'test-location',
        reference: 'test-ref',
        title: 'test-title',
        type: 'test-type'
      };
      const { getByText } = render(<VacancyCard {...props} />);
      
      expect(getByText('test-location')).toBeInTheDocument();
      expect(getByText('test-title')).toBeInTheDocument();
      expect(getByText('test-type')).toBeInTheDocument();
    });

    it('should call handleClick and push history', () => {
      const props: VacancyCardType = {
        location: 'test-location',
        reference: 'test-ref',
        title: 'test-title',
        type: 'test-type'
      };
      const { getByRole } = render(
        <MemoryRouter>
          <VacancyCard {...props} />
        </MemoryRouter>
      );
      
      expect(getByRole('button')).toBeInTheDocument();
      fireEvent.click(getByRole('button'));
      expect(mockHistoryPush).toHaveBeenCalledWith(`/vacancy/test-ref`);
    });
});
