import React from "react";
import { fireEvent, render } from "@testing-library/react";
import { DispatchType, useCandidatesDispatch, useCandidatesState } from "../../../context/CandidatesProvider";
import { userLogged } from "../../../types/userType";
import SignIn from "../SignIn";
import { MemoryRouter, RouteComponentProps } from "react-router-dom";
import { getLogin } from "../../../store";
import { createMemoryHistory, createLocation } from 'history';
import { match } from 'react-router';

const mockHistoryReplace = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    replace: mockHistoryReplace,
  }),
  useLocation: () => ({
    pathname: 'fake_url',
    state: {
        from: {
            pathname: 'fake_url_from',
        }
    },
    
  })
}));
jest.mock('../../../context/candidatesProvider');
jest.mock('../../../store');
type PropsType = {
    authentication: {
        error: string;
    },
    session: {
      setUserSession: (token:string, user: userLogged) => void,
  }
  }
  const matchMock: match<{id:string}> = {
      isExact: false,
      path: `/route/:id`,
      url: `/route/:id`.replace(':id', '1'),
      params: { id: "1"}
  }
  const signInProps: RouteComponentProps = {
      history: createMemoryHistory(),
      location: createLocation(matchMock.url),
      match: matchMock,
  } 
  describe('SignIn', () => {
    let props: PropsType;
    const setUserSessionMock = jest.fn();
    let dispatch: DispatchType;
    const userLog = {
        email:'rBalboa@g.com',
        id:'1',
        name:'Rocky',
        token:'token'
    };

    beforeEach(() => {
        props= {
            authentication: {
                error: ''
            },
            session: {
                setUserSession: setUserSessionMock
            }
        }
        dispatch = jest.fn();
        (useCandidatesDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useCandidatesState as jest.Mock).mockReturnValue(props);
    (getLogin as jest.Mock).mockReturnValue(userLog);
    });
    it('should be in the document', () => {
        const {container} = render(
        <MemoryRouter><SignIn {...signInProps}/></MemoryRouter>);
        expect(container).toBeInTheDocument();
    });
    it('should call handleClick', async () => {
        const { getByRole } = render(
            <MemoryRouter><SignIn {...signInProps}/></MemoryRouter>);
    await fireEvent.click(getByRole('button'));
    expect(getLogin).toHaveBeenCalledWith(dispatch, {});
    expect(setUserSessionMock).toHaveBeenCalledWith(userLog.token, userLog)
    ;
    expect(mockHistoryReplace).toHaveBeenCalledWith({
        pathname: 'fake_url_from',
    })
    });
  })
  