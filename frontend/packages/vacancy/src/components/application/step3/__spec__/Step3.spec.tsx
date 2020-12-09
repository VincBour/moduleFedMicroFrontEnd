import { render, screen } from "@testing-library/react";
import React from "react";
import { Step3 } from "../Step3";

describe('Step3', () => {
    it('should be in the document', () => {
        const { container } = render(<Step3 />);
        
        expect(container).toBeInTheDocument();
    });
})