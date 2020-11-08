import { Request, Response } from "express";
import { HttpStatus } from "../utils/HttpStatus";
import { referentialService } from "./referentialService";

const findReferentials = async (req: Request, res: Response) => {
    const referential = req.params.name
    console.log(referential);
    try{
        const vacancies = await referentialService.findAll(referential);
        res.status(HttpStatus.CREATED).json(vacancies);
    }catch (error){
        res.status(HttpStatus.BAD_REQUEST).json({message: 'Bad Request'});
    }
}

const findOneReferential = async (req: Request, res: Response) => {
    const id = req.params.id;
    const referential = req.params.name
    // TODO Validation id

    try{
        const vacancyOutput = await referentialService.findOne(referential, id);
        if(null === vacancyOutput){
            res.status(HttpStatus.NOT_FOUND).json({message: 'Not Found'});
        }

        res.status(HttpStatus.CREATED).json(vacancyOutput);
    }catch (error){
        res.status(HttpStatus.BAD_REQUEST).json({message: 'Bad Request'});
    }
}

export const referentialController = {
    findReferentials,
    findOneReferential
}