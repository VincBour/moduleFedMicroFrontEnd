import { render, screen } from "@testing-library/react";
import React from "react";
import { Step2 } from "../Step2";

describe('Step2', () => {
    it('should be in the document', () => {
        const { getByText } = render(<Step2 />);
        
        expect(getByText('Votre CV')).toBeInTheDocument();
        expect(getByText('Votre lettre de motivation')).toBeInTheDocument();
    });
})