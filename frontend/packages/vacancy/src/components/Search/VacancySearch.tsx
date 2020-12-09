import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as React from "react";
import { useHistory } from "react-router-dom";
import { SelectField } from "../SelectField/SelectField";
import useStyles from "./style";

const VacancySearch: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
      history.push(`/vacancies`)
  }
  return (
    <>
      <Typography variant="h4">Nos offres</Typography>
      <Accordion>
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
        >
          <Typography className={classes.heading}>Rechercher</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className={classes.root} noValidate autoComplete="off">
            <Grid container spacing={3}>
              <Grid item xs={12} md={6} lg={4}>
                <Typography color="textPrimary" variant="h6">
                  Mot-Clé
                </Typography>
                <TextField id="Mot-cle" label="Mot-clé" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <SelectField label="Specialite/emploi" />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <SelectField label="Type de contrat" />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <SelectField label="Pays" />
              </Grid>
              <Grid item xs={12} md={6} lg={4}>
                <SelectField label="Ville" />
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  size="large"
                  className={classes.button}
                  color="primary"
                  onClick={handleClick}
                  data-testid='search-button'
                >
                  Rechercher
                </Button>
              </Grid>
            </Grid>
          </form>
        </AccordionDetails>
      </Accordion>
      <Divider variant="middle" className={classes.divider} />
    </>
  );
};

export default VacancySearch;
