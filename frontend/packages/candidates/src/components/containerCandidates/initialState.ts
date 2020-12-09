import { CandidatesStateType } from "../../context/CandidatesProvider";
import { getUser, getToken, removeUserSession, setUserSession } from "../../services/userSessionManager";

export const initialState: CandidatesStateType = {
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
  }