import React from 'react';
import Description from "../Description";
import { render, fireEvent } from "@testing-library/react";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('Description', () => {
    it('should be in the document', () => {
        const { getByText } = render(<Description />)
        expect(getByText('Mon espace candidat')).toBeInTheDocument();
        expect(getByText('Je me connecte')).toBeInTheDocument();
    });
    it('should call handleClick and push history', () => {
        const { getByRole } = render(<Description />);
        const button = getByRole('button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(mockHistoryPush).toHaveBeenCalledWith('/signin');
    });
})
