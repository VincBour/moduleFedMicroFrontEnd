import React from "react"
import { DropzoneArea } from 'material-ui-dropzone'
import { Grid, makeStyles, Typography } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
    dropZone : {
        minHeight: '175px'
    }
}))
export const Step2 = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <Typography component='h1' variant='h5' align="center">Votre CV</Typography>
                <DropzoneArea onChange={(files) => console.log('Files:', files)} dropzoneClass={classes.dropZone}/>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography component='h1' variant='h5' align="center">Votre lettre de motivation</Typography>
                <DropzoneArea onChange={(files) => console.log('Files:', files)} dropzoneClass={classes.dropZone}/>
            </Grid>
        </Grid>
    )
}