import React from 'react';
import { BottomNavigation, BottomNavigationAction, Box, Paper } from "@material-ui/core"
import FolderIcon from '@material-ui/icons/Folder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import ContactsIcon from '@material-ui/icons/Contacts';
import { useHistory } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import image from '../../../images/Panda.png';


export const Navigation: React.FC = () => {
    const history = useHistory();
    const [value, setValue] = React.useState(0);
    const pushHistory = (url: string) => {
        history.push(url);
    }

    return (
        <nav>
            <Paper style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignItems:'center'}}>
                <Box component='span' m={1}>
                    <img src={image} style={{width: '80px'}}/>
                </Box>
                <BottomNavigation 
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    showLabels
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon fontSize='large'/>} onClick={() => pushHistory('/')}/>
                    <BottomNavigationAction label="Offres" icon={<FolderIcon fontSize='large'/>} onClick={() => pushHistory('/vacancies')}/>
                    <BottomNavigationAction label="Espaces Candidats" icon={<PeopleAltIcon fontSize='large'/>} onClick={() => pushHistory('/signin')}/>
                    <BottomNavigationAction label="Contact" icon={<ContactsIcon fontSize='large'/>}/>
                </BottomNavigation>
            </Paper>
        </nav>
    );
};

export default Navigation;