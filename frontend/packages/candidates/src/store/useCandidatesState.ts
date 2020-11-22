import React from "react";
import { CandidatesContext } from "./candidatesProvider";

export const useCandidatesState = () => {
    const context = React.useContext(CandidatesContext);

    if (context === undefined) {
        throw new Error('useCandidatesState must be used within a CandidatesProvider');
    }

    return context;
};

export default useCandidatesState;