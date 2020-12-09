import { initialState } from "../../components/containerCandidates/initialState";
import { reducer } from "../reducer";
import { getUser, getToken, removeUserSession, setUserSession } from "../../services/userSessionManager";

describe('reducer', () => {
    it('should return initialState', () => {
        const state = reducer(initialState, {type: 'UNDEFINED'});
        expect(state).toEqual({
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
});