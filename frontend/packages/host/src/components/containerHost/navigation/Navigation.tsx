import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@material-ui/core"
import FolderIcon from '@material-ui/icons/Folder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ContactsIcon from '@material-ui/icons/Contacts';
import { useHistory } from 'react-router-dom';

export const Navigation: React.FC = () => {
    const history = useHistory();
    const [value, setValue] = React.useState(0);
    const goHome = () => {
        history.push('/');
    }
    const goCandidates = () => {
        history.push('/signin');
    }
    return (
        <nav>
            <Paper style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
                <Box component='span' m={1}>
                    Logo
                </Box>
                <BottomNavigation 
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="Offres" icon={<FolderIcon />} onClick={() => goHome()}/>
                    <BottomNavigationAction label="Espaces Candidats" icon={<PeopleAltIcon />} onClick={() => goCandidates()}/>
                    <BottomNavigationAction label="Contact" icon={<ContactsIcon />}/>
                </BottomNavigation>
            </Paper>
        </nav>
    );
};

export default Navigation;