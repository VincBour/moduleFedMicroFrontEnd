import { Request, Response } from "express";
import { HttpStatus } from "../../utils/HttpStatus";
import { ApplicantType } from "../Model/applicantModel";
import { applicantService } from "../Service/applicantService";


const createApplicant = async (req: Request, res: Response) => {
    const applicantInput: ApplicantType = req.body;

    // TODO Validation vacancyInput

    const applicantOutput = await applicantService.createApplicant(applicantInput);
    res.status(HttpStatus.CREATED).json(applicantOutput);
}

export const applicantController = {
    createApplicant
}