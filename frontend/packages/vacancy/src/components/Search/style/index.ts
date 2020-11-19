import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      '& .MuiTextField-root': {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1),
        display: 'flex',

      },
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
      color: theme.palette.secondary.dark
    },
  }),
);

export default useStyles;