import { MenuItem, Select, Typography } from '@material-ui/core';
import * as React from 'react';
import { fetchReferentialContracts, fetchReferentialPays, fetchReferentialSpecialite } from '../../utils/fetchServices/fetchService';
 


export const SelectField: React.FC<{label: string}> = ({label}) => {
    const [data, setData] = React.useState<Referential[]>([{label, value: label}]);

    React.useEffect(() => {
        const fetchData = fetchReferential(label);
        fetch(fetchData);
    }, [])

    const fetch = async (fetchData: () => Promise<Referential[]>) => {
        if('function' === typeof fetchData){
            const result = await fetchData();
            setData([...data, ...result]);
        }
    }

    return (
        <div style={{display: 'flex', flexGrow: 1, flexDirection: 'column'}}>
            <Typography color='textPrimary' variant='h6'>{label}</Typography>
                <Select labelId={label} id={label} label={label} variant='outlined' style={{marginTop: '8px', marginBottom: '8px'}} value={label}>
                    {
                        data && data.map((d,key)=><MenuItem value={d.value} key={key}>{d.label}</MenuItem>)
                    }    
                </Select>
        </div>
    )
}

type Referential = {
    label: string, 
    value: string
}


const fetchReferential = (label: string): () => Promise<Referential[]> => {
    const mapping: {[key: string]: () => Promise<Referential[]>} = {
                ['Pays']: fetchReferentialPays(),
                ['Specialite/emploi']:fetchReferentialSpecialite(),
                ['Type de contrat']: fetchReferentialContracts()
    };
    return mapping[label];
}


// const getData = async (label: string) => {

//     const mapping: {[key: string]: {data: Referentiel[]}} = {
//         ['Pays']: fakeDataPays,
//         ['Specialite/emploi']:fakeDataSpecialite,
//         ['Type de contrat']: fakeDataContracts
//     };
//     return mapping[label];
// }