import { TextField, Typography } from "@material-ui/core";
import React from "react"

export const Step3 = () => {
    const [value, setValue] = React.useState('Rédigez votre message');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
    return (
        <>
        <Typography component='h3' variant='h5' align='center' data-testid="application-step3">Pourquoi avez-vous décidé de postuler</Typography>
            <TextField
            id="outlined-multiline-flexible"
            multiline
            rowsMax={4}
            value={value}
            onChange={handleChange}
            variant="outlined"
            style={{width: '100%', marginTop: '8px'}}
        />
      </>
    )
}