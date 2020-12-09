import { render, screen } from "@testing-library/react";
import React from "react";
import { Informations } from "../Informations";

describe('Information step1', () => {
    it('should be in the document', () => {
        const { getByText } = render(<Informations />);
        
        expect(getByText('First Name')).toBeInTheDocument();
        expect(getByText('Last Name')).toBeInTheDocument();
        expect(getByText('Email Address')).toBeInTheDocument();
        expect(getByText('Phone number')).toBeInTheDocument();
    });
})
