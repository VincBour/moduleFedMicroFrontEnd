import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import React from "react";
import { DispatchType, useCandidatesState } from "../../../context/CandidatesProvider";
import { userLogged } from "../../../types/userType";
import { Navigation } from "../Navigation";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('../../../context/candidatesProvider');

type PropsType = {
  session: {
    getUser: () => void,
    removeUserSession: () => void,
}
}

describe('Navigation', () => {
  let props: PropsType;
  let mockgetUser: () => userLogged | null;
  const mockRemoveUserSession = jest.fn();
  const createStateWithUserMock = (user: userLogged | null) => {
    mockgetUser= jest.fn().mockReturnValue(user);
    props = {
      session: {
        getUser: mockgetUser,
        removeUserSession: mockRemoveUserSession
      }
    };
    (useCandidatesState as jest.Mock).mockReturnValue(props);
  }
  afterEach(() => {
    jest.resetAllMocks();
  });
  it('should be in the document', () => {
      createStateWithUserMock(null);
      const { container } = render(<Navigation />);
      expect(container).toBeInTheDocument();
  });
  it('should navigation in the document without user', () => {
    createStateWithUserMock(null);
    const { getByText, queryByText } = render(<Navigation />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('SignUp')).toBeInTheDocument();
    expect(getByText('SignIn')).toBeInTheDocument();
    expect(queryByText('SignOut')).not.toBeInTheDocument();
    expect(queryByText('MySpace')).not.toBeInTheDocument();
});
it('should navigation in the document with user', () => {
    createStateWithUserMock({
        email:'rBalboa@g.com',
        id:'1',
        name:'Rocky',
        token:'token'
    });
    const { getByText, queryByText } = render(<Navigation />);
    expect(getByText('Home')).toBeInTheDocument();
    expect(getByText('SignUp')).toBeInTheDocument();
    expect(queryByText('SignIn')).not.toBeInTheDocument();
    expect(queryByText('SignOut')).toBeInTheDocument();
    expect(queryByText('MySpace')).toBeInTheDocument();
});
it('should call history when user null', () => {
    createStateWithUserMock(null);
    const { getByText } = render(<Navigation />);
    fireEvent.click(getByText('Home'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
    fireEvent.click(getByText('SignUp'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/signup');
    fireEvent.click(getByText('SignIn'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/signin');
});
it('should call history when user not null', () => {
    createStateWithUserMock({
        email:'rBalboa@g.com',
        id:'1',
        name:'Rocky',
        token:'token '
    });
    const { getByText } = render(<Navigation />);
    fireEvent.click(getByText('Home'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
    fireEvent.click(getByText('SignUp'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
    fireEvent.click(getByText('MySpace'));
    expect(mockHistoryPush).toHaveBeenCalledWith('/myspace');
});
});