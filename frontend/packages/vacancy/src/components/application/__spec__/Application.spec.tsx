import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Application from '../Application';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
  useParams: () => ({
      ref: "2020-01",
      title: "Test Title"
  })
}));

describe('Application', () => {
    it('should be in the document', () => {
        const { container } = render(<Application />);
        expect(container).toBeInTheDocument();
    });

    it('should be render step by step', () => {
        const { getByTestId, getByRole, getByText } = render(<Application />);
        const button = getByRole('button');
        expect(button).toBeInTheDocument();
        expect(getByTestId('application-step1')).toBeInTheDocument();
        fireEvent.click(button);
        expect(getByTestId('application-step2')).toBeInTheDocument();
        fireEvent.click(button);
        expect(getByTestId('application-step3')).toBeInTheDocument();
    });
})
