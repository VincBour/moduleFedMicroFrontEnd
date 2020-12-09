import { MenuItem, Select, Typography } from '@material-ui/core';
import * as React from 'react';
import { getReferential } from '../../store/actions';
import { DispatchType, useVacancyDispatch, useVacancyState } from '../../store/vacancyContextProvider';
import { useStyles } from './styles';
import { Referential } from './type';
 


export const SelectField: React.FC<{label: string}> = ({label}) => {
    const [data, setData] = React.useState<Referential[]>([{label, value: label}]);
    const classes = useStyles();
    const { referential } = useVacancyState();
    const dispatch = useVacancyDispatch();
    
    React.useEffect(() => {
        const dispatchData = getReferential(label);
        fetch(dispatchData);
    }, [])

    const fetch = async (dispatchData: (dispatch: DispatchType) => Promise<void>) => {
        if('function' === typeof dispatchData){
            await dispatchData(dispatch);
        }
    }

    const getData = (label: string) => {
        if(label==='Pays'){
            setData(referential.pays)
        }else if (label === 'Specialite/emploi'){
            setData(referential.specialite)
        }else if (label === 'Type de contrat'){
            setData(referential.contracts)
        }
    }

    React.useEffect(() => {
        getData(label);
    }, [referential])

    return (
        <div className={classes.root} data-testid='container-selectField'>
            <Typography color='textPrimary' variant='h6'>{label}</Typography>
                <Select labelId={label} id={label} label={label} variant='outlined' className={classes.select} value={label}>
                    <MenuItem value={label} key={-1}>{label}</MenuItem>
                    {
                        data && data.map((d,key)=><MenuItem value={d.value} key={key}>{d.label}</MenuItem>)
                    }    
                </Select>
        </div>
    )
}