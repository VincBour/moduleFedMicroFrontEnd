import { MenuItem, Select, Typography } from '@material-ui/core';
import * as React from 'react';
import { getReferential } from '../../store/actions';
import { DispatchType, useVacancyDispatch, useVacancyState } from '../../store/vacancyProvider';
import { Referential } from './type';
 


export const SelectField: React.FC<{label: string}> = ({label}) => {
    const [data, setData] = React.useState<Referential[]>([{label, value: label}]);

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
        <div style={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
            <Typography color='textPrimary' variant='h6'>{label}</Typography>
                <Select labelId={label} id={label} label={label} variant='outlined' style={{marginTop: '8px', marginBottom: '8px'}} value={label}>
                    <MenuItem value={label} key={-1}>{label}</MenuItem>
                    {
                        data && data.map((d,key)=><MenuItem value={d.value} key={key}>{d.label}</MenuItem>)
                    }    
                </Select>
        </div>
    )
}