import { ActionType, CandidatesStateType } from "./candidatesProvider";

export const reducer = (state: CandidatesStateType, action: ActionType): CandidatesStateType => {
    switch(action.type){
        default:
            return state;
    }
}