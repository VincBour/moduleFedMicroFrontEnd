import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { DispatchType, useCandidatesDispatch, useCandidatesState } from '../../../context/CandidatesProvider';
import { getSignOutUser } from '../../../store/actionCreator';
import BottomSignOut from '../BottomSignOut';

const mockHistoryPush = jest.fn();
const mockRemoveUserSession = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

jest.mock('../../../context/candidatesProvider');

type PropsType = {
  session: {
    removeUserSession: () => void,
}
}

describe('BottomSignOut', () => {
  let dispatch: DispatchType;
  let props: PropsType;
  beforeEach(() => {
    dispatch = jest.fn();
    props = {
      session: {
        removeUserSession: mockRemoveUserSession
      }
    };
    (useCandidatesDispatch as jest.Mock).mockImplementation(() => dispatch);
    (useCandidatesState as jest.Mock).mockReturnValue(props);
  });
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should be in the document', () => {
    const { getByRole } = render(<BottomSignOut />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should call handleClick', () => {
    const { getByRole } = render(<BottomSignOut />);
    const button = getByRole('button');
    fireEvent.click(button);
    screen.debug
    expect(mockHistoryPush).toHaveBeenCalledWith('/');
    expect(mockRemoveUserSession).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith(getSignOutUser());
  });
})
