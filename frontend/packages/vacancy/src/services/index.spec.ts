import Services from './index';

describe('Services', () => {
    beforeEach(() => {
        const mockSuccessResponse = {};
        const mockJsonPromise = Promise.resolve(mockSuccessResponse);
        const mockFetchPromise = Promise.resolve({
            json: () => mockJsonPromise,
        } as unknown as Promise<Response>);
        global.fetch = jest.fn().mockImplementation(() => mockFetchPromise);
    });
    afterEach(() => {
        jest.clearAllMocks();
    });
    it('should call fetchReferentialPays with correct url', async () => {
        await Services.fetchReferentialPays();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.BACK_URL}/api/referential/pays`);
    });
    it('should call fetchReferentialContracts with correct url', async () => {
        await Services.fetchReferentialContracts();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.BACK_URL}/api/referential/contracts`);
    });
    it('should call fetchReferentialSpecialite with correct url', async () => {
        await Services.fetchReferentialSpecialite();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.BACK_URL}/api/referential/specialite`);
    });
    it('should call fetchVacanciesTop with correct url', async () => {
        await Services.fetchVacanciesTop();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.BACK_URL}/api/vacancies/top`);
    });
    it('should call fetchVacancies with correct url', async () => {
        await Services.fetchVacancies();

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(global.fetch).toHaveBeenCalledWith(`${process.env.BACK_URL}/api/vacancies`);
    });
});