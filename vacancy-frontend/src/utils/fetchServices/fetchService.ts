const baseUrl = "http://localhost:8080"; 

export const fetchReferentialPays = () => async () => {
    const result = await fetch(`${baseUrl}/api/referential/pays`);
    const data = await result.json();
    return data;
}

export const fetchReferentialContracts = () => async () => {
    const result = await fetch(`${baseUrl}/api/referential/contracts`);
    const data = await result.json();
    return data;
}

export const fetchReferentialSpecialite = () => async () => {
    const result = await fetch(`${baseUrl}/api/referential/specialite`);
    const data = await result.json();
    return data;
}