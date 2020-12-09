import React from 'react';
import { BottomNavigation, BottomNavigationAction, makeStyles } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import { useHistory } from 'react-router-dom';
import { useCandidatesState } from '../../context/CandidatesProvider';
import BottomSignOut from './BottomSignOut';
import { useStyles } from './style';

export const Navigation = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const { session } = useCandidatesState();
    const user = session.getUser();
    let history = useHistory();

    const handleClick = (dest: string) => {
        const map : {[key: string]: () => void} = {
            ['signin']: () => history.push('/signin'),
            ['home']: () => history.push('/'),
            ['myspace']: () => history.push('/myspace'),
            ['signup']: () => history.push('/signup')
        }
        map[dest]();
    }

    return (
        <BottomNavigation
            data-testid='nav-container'
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
            {user ? <BottomSignOut /> : null}
            {user ? <BottomNavigationAction label="MySpace" icon={<FolderSharedIcon />} onClick={() => handleClick('myspace')}/> : null}
        </BottomNavigation>
    )
}