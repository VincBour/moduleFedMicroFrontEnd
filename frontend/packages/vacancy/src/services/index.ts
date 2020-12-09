const baseUrl = process.env.BACK_URL; 

const fetchReferentialPays = async () => {
    const result = await fetch(`${baseUrl}/api/referential/pays`);
    const data = await result.json();
    return data;
}

const fetchReferentialContracts = async () => {
    const result = await fetch(`${baseUrl}/api/referential/contracts`);
    const data = await result.json();
    return data;
}

const fetchReferentialSpecialite = async () => {
    const result = await fetch(`${baseUrl}/api/referential/specialite`);
    const data = await result.json();
    return data;
}

const fetchVacanciesTop = async () => {
    const result = await fetch(`${baseUrl}/api/vacancies/top`);
    const data = await result.json();
    return data;
}

const fetchVacancies = async () => {
    const result = await fetch(`${baseUrl}/api/vacancies`);
    const data = await result.json();
    return data;
}

export default {
    fetchReferentialContracts,
    fetchReferentialSpecialite,
    fetchReferentialPays,
    fetchVacanciesTop,
    fetchVacancies
}

