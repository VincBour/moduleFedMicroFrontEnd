import { Request, Response } from "express";
import { HttpStatus } from "../../utils/HttpStatus";
import { applicationService } from "../Service/applicationService";

const createApplication = async (req: Request, res: Response) => {
    const vacancyInput = req.body;

    // TODO Validation vacancyInput

    const vacancyOutput = await applicationService.createApplication(vacancyInput);
    res.status(HttpStatus.CREATED).json(vacancyOutput);
}

export const applicationController = {
    createApplication
}