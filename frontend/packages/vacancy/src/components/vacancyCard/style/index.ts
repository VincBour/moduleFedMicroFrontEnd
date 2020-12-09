import { makeStyles } from "@material-ui/core";

export const useStyle = makeStyles((theme) => ({
    paper: {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap:'wrap',
        justifyContent:'space-between',
        height: '150px'
      },
      containerImage: {
        width: '20%',
        marginLeft: '16px'
      },
      image: {
        height: '100%'
      },
      containerInfo: {
        flexGrow: 2
      },
      button: {
        marginRight: '16px',
        width: '10%',
        height: '35%'
      }
}))