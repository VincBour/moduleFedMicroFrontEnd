import React from 'react';
import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FolderSharedIcon from '@material-ui/icons/FolderShared';

import { useHistory } from 'react-router-dom';
import { getSignOutUser } from '../../store/actionCreator';
import { useCandidatesDispatch } from '../../store/candidatesProvider';
import useCandidatesState from '../../store/useCandidatesState';
import BottomSignOut from './BottomSignOut';
const useStyles = makeStyles({
    root: {
      width: 500,
      position: 'fixed'
    },
  });
export const Navigation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { session } = useCandidatesState();
    const user = session.getUser();
    let history = useHistory();
    const dispatch = useCandidatesDispatch();
    const handleClick = (dest: string) => {
        const map : {[key: string]: () => void} = {
            ['signin']: () => history.push('/signin'),
            ['home']: () => history.push('/'),
            ['myspace']: () => history.push('/myspace'),
            ['signup']: () => history.push('/signup'),
            ['signout']: () => {
                session.removeUserSession(); 
                dispatch(getSignOutUser());
                history.push('/')
            }
        }
        map[dest]();
    }

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Home" icon={<HomeIcon />} onClick={() => handleClick('home')}/>
            <BottomNavigationAction label="SignUp" icon={<PersonAddIcon />} onClick={() => handleClick('signup')} />
            {!user ? <BottomNavigationAction label="SignIn" icon={<LockOpenIcon />} onClick={() => handleClick('signin')}/> : null}
            {/* {user ? <BottomNavigationAction label="SignOut" icon={<LockIcon />} onClick={() => handleClick('signout')}/> : null} */}
            {user ? <BottomSignOut /> : null}
            {user ? <BottomNavigationAction label="MySpace" icon={<FolderSharedIcon />} onClick={() => handleClick('myspace')}/> : null}
        </BottomNavigation>
    )
}