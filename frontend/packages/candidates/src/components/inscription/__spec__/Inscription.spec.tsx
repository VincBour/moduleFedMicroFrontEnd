import React from 'react';
import { act, render, fireEvent, screen } from "@testing-library/react";
import { DispatchType, useCandidatesDispatch } from '../../../context/CandidatesProvider';
import Inscription from '../Inscription';
import { MemoryRouter, RouteComponentProps } from 'react-router-dom';
import { getRegister } from '../../../store';
import { userType } from '../../../types/userType';
import user from "@testing-library/user-event";
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('../../../store');
jest.mock('../../../context/candidatesProvider');

const matchMock: match<{id:string}> = {
  isExact: false,
  path: `/route/:id`,
  url: `/route/:id`.replace(':id', '1'),
  params: { id: "1"}
}
const inscriptionProps: RouteComponentProps = {
  history: createMemoryHistory(),
  location: createLocation(matchMock.url),
  match: matchMock,
} 


const enterValue = async (value: string, label: string) => {
    const input = document.getElementById(label);
    await act(async () => {
      await user.type(input, value, { delay: 200 });
    });
  };

jest.setTimeout(30000);

describe('Inscription', () => {
    let dispatch: DispatchType;
    beforeEach(() => {
        dispatch = jest.fn();
        (useCandidatesDispatch as jest.Mock).mockReturnValue(dispatch);
    });
    it('should be in the document', () => {
        const { getByText } = render(<MemoryRouter><Inscription {...inscriptionProps}/></MemoryRouter>);
        expect(getByText('S\'inscrire')).toBeInTheDocument();
        expect(getByText('Je me crée un espace candidat')).toBeInTheDocument();
        expect(getByText('J\'ai déjà un compte, je me connecte')).toBeInTheDocument();
    });
    it('should call handlClick and push history', async () => {
        const { getByRole } = render(<MemoryRouter><Inscription {...inscriptionProps}/></MemoryRouter>);
        const button = getByRole('button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(getRegister).toHaveBeenCalledWith(dispatch, {} as userType);
        expect(mockHistoryPush).toHaveBeenCalledWith('/signin');
    });
    it('should cal handleClick with new User', async () => {
        const { getByRole } = render(<MemoryRouter><Inscription {...inscriptionProps}/></MemoryRouter>);
        
        await enterValue('Rocky','name');
        await enterValue('rBalboa@gmail.com','email');
        await enterValue('rBalboa','password');
        
        const button = getByRole('button');
        expect(button).toBeInTheDocument();
        fireEvent.click(button);
        expect(getRegister).toHaveBeenCalledWith(dispatch, {
            name: 'Rocky',
            email: 'rBalboa@gmail.com',
            password: 'rBalboa'
        } as userType);
        expect(mockHistoryPush).toHaveBeenCalledWith('/signin');
    });
})
