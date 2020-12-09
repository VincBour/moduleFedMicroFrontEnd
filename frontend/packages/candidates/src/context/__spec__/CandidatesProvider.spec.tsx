import { render } from "@testing-library/react";
import React from "react";
import { initialState } from "../../components/containerCandidates/initialState";
import { getUser, getToken, removeUserSession, setUserSession } from "../../services/userSessionManager";
import { CandidatesProvider, useCandidatesDispatch, useCandidatesState } from "../CandidatesProvider";

jest.mock('../../store');
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(),
}));

describe('CandidatesProvider', () => {
    it('should be in the document', () => {
        const {container} = render(<CandidatesProvider initialState={initialState}> <div> I am Child Component </div></CandidatesProvider>);
        expect(container).toBeInTheDocument();
    });
    it('should return state when useCandidatesState is called', () => {
        jest.spyOn(React, 'useContext').mockReturnValue(initialState);

        const context = useCandidatesState();

        expect(context).toEqual({
            authentication: {
                error: '',
                loading: false,
                isRequestSend: false,
            },
            error: '',
            session: {
                getUser,
                getToken,
                removeUserSession,
                setUserSession
            }
        })
    });
    it('should return null when context is not defined in useCandidatesState', () => {
        jest.spyOn(React, 'useContext').mockReturnValue(undefined);

        expect(() => useCandidatesState()).toThrowError(
            new Error('useCandidatesState must be used within a CandidatesProvider')
        );
    });
    it('should return dispatch when useCandidatesDispatch is called', () => {
        const dispatch = jest.fn();
        jest.spyOn(React, 'useContext').mockReturnValue({
            dispatch,
        });
        const context = useCandidatesDispatch();

        expect(context).toEqual({dispatch});
    });
    it('should return null when context is not defined in useCandidatesDispatch', () => {
        jest.spyOn(React, 'useContext').mockReturnValue(undefined);

        expect(() => useCandidatesDispatch()).toThrowError(
            new Error('useCandidatesDispatch must be used within a CandidatesProvider')
        );
    });
})
