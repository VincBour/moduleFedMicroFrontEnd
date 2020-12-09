import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex', 
        flexGrow: 1, 
        flexDirection: 'column'
    },
    select: {
        marginTop: '8px', 
        marginBottom: '8px'
    }
}))