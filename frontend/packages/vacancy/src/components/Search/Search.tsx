import { 
    Button,
    Grid,
    TextField,
    Typography 
} from '@material-ui/core';
import * as React from 'react';
import { SelectField } from '../SelectField/SelectField';
import useStyles from './style';

const Search: React.FC = () => {
    const classes = useStyles();
    return (
        <>
        <Typography variant='h3'>Nos offres</Typography>
            <form className={classes.root} noValidate autoComplete="off">      
                <Grid container spacing={3} >
                    <Grid item xs={12} md={6} lg={4}>
                        <Typography color='textPrimary' variant='h6'>Mot-Clé</Typography>
                        <TextField id='Mot-cle'  label='Mot-clé' variant='outlined' />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <SelectField label='Specialite/emploi'/>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <SelectField label='Type de contrat' />
                    </Grid>  
                    <Grid item xs={12} md={6} lg={4}>
                        <SelectField label='Pays' />
                    </Grid>  
                    <Grid item xs={12} md={6} lg={4}>
                        <SelectField label='Ville' />
                    </Grid>  
                    <Grid item xs={12} md={6} lg={4} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button variant='outlined' size="large" style={{flexGrow: 1, marginTop: '24px'}}>Rechercher</Button>
                    </Grid>
                </Grid> 
            </form>
            </>
    )
} 

export default Search;