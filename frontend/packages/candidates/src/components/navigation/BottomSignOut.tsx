import React from 'react';
import { getSignOutUser } from "../../store/actionCreator";
import { useCandidatesDispatch } from "../../store/candidatesProvider";
import { useHistory } from 'react-router-dom';
import { BottomNavigationAction } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import useCandidatesState from '../../store/useCandidatesState';

export const BottomSignOut = () => {
    let history = useHistory();
    const { session } = useCandidatesState();
    const dispatch = useCandidatesDispatch();
    const handleClick = () => {
        session.removeUserSession(); 
        dispatch(getSignOutUser());
        history.push('/')

    }
    return (
        <BottomNavigationAction label="SignOut" icon={<LockIcon />} onClick={handleClick} />
    )
}
export default BottomSignOut;