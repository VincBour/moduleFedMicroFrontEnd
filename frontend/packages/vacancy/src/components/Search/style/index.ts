import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        display: 'flex',

      },
    },
  }),
);

export default useStyles;