import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { getReferential } from "../../../store/actions";
import { DispatchType, useVacancyDispatch, useVacancyState } from "../../../store/vacancyContextProvider";
import { getRefContractMock } from "../../../__mockData__/getRefContractMock";
import { getRefPaysMock } from "../../../__mockData__/getRefPaysMock";
import { getRefSpecialitesMock } from "../../../__mockData__/getRefSpecialitesMock";
import { SelectField } from "../SelectField";
import { Referential } from "../type";
import user from "@testing-library/user-event";

jest.mock('../../../store/VacancyContextProvider');
jest.mock('../../../store/actions');
type PropsType = {
    referential: {
        pays: Referential[],
        contracts: Referential[],
        specialite: Referential[],
    }
}
describe('VacanciesTop', () => {
    let dispatch: DispatchType;
    let props: PropsType;
    let dispatchData: (dispatch: DispatchType) => Promise<void>;
beforeEach(() => {
    dispatch = jest.fn();
    dispatchData = jest.fn();
    props = {
        referential: {
            pays: getRefPaysMock(),
            contracts: getRefContractMock(),
            specialite: getRefSpecialitesMock()
        }
    };
    (useVacancyState as jest.Mock).mockReturnValue(props);
    (useVacancyDispatch as jest.Mock).mockImplementation(
        () => dispatch
    );
    (getReferential as jest.Mock).mockReturnValue(dispatchData);
});
    it('should Referential Pays be in the document', () => {
        const { getByTestId } = render(<SelectField label='Pays'/>);
        expect(getByTestId('container-selectField')).toBeInTheDocument();
        expect(getReferential).toHaveBeenCalledWith('Pays');
        expect(dispatchData).toHaveBeenCalledWith(dispatch);
    });
    it('should Referential Contract be in the document', () => {
        const { getByTestId } = render(<SelectField label='Type de contrat'/>);
        expect(getByTestId('container-selectField')).toBeInTheDocument();
        expect(getReferential).toHaveBeenCalledWith('Type de contrat');
        expect(dispatchData).toHaveBeenCalledWith(dispatch);
    });
    it('should Referential Specialite be in the document', () => {
        const { getByTestId } = render(<SelectField label='Specialite/emploi'/>);
        expect(getByTestId('container-selectField')).toBeInTheDocument();
        expect(getReferential).toHaveBeenCalledWith('Specialite/emploi');
        expect(dispatchData).toHaveBeenCalledWith(dispatch);
    });
    it('should open Select Pays', () => {
        const { getByTestId } = render(<SelectField label='Pays'/>);
        
        expect(getByTestId('container-selectField')).toBeInTheDocument();

        user.click(screen.getByRole('button'));
        
        expect(screen.getByText('Australie')).toBeInTheDocument();
        expect(screen.getByText('Arabie Saoudite')).toBeInTheDocument();
        expect(screen.getByText('Belgique')).toBeInTheDocument();
        expect(screen.getByText('Brésil')).toBeInTheDocument();
    });

    it('should open Select Specialite', () => {
        const { getByTestId } = render(<SelectField label='Specialite/emploi'/>);
        
        expect(getByTestId('container-selectField')).toBeInTheDocument();

        user.click(screen.getByRole('button'));
        
        expect(screen.getByText('Achats')).toBeInTheDocument();
        expect(screen.getByText('Aménagement, peinture et composites')).toBeInTheDocument();
        expect(screen.getByText('Chaudronnerie')).toBeInTheDocument();
        expect(screen.getByText('Commerce, marketing')).toBeInTheDocument();
    });

    it('should open Select Contract', () => {
        const { getByTestId } = render(<SelectField label='Type de contrat'/>);
        
        expect(getByTestId('container-selectField')).toBeInTheDocument();

        user.click(screen.getByRole('button'));
        
        expect(screen.getByText('Contrat d\'alternance')).toBeInTheDocument();
        expect(screen.getByText('Durée déterminée')).toBeInTheDocument();
        expect(screen.getByText('Durée indéterminée')).toBeInTheDocument();
        expect(screen.getByText('Intérimaire')).toBeInTheDocument();
    });
})