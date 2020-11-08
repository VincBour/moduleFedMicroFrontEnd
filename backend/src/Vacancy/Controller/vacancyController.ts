import { Request, Response } from "express";
import { HttpStatus } from "../../utils/HttpStatus";
import { VacancyType } from "../Model/VacancyModel";
import { vacancyService } from '../Service/vacancyService';

const createVacancy = async (req: Request, res: Response) => {
    const vacancyInput: VacancyType = req.body;

    // TODO Validation vacancyInput

    try{
        const vacancyOutput = await vacancyService.createVacancy(vacancyInput);
        res.status(HttpStatus.CREATED).json(vacancyOutput);
    }catch (error){
        res.status(HttpStatus.BAD_REQUEST).json({message: 'Bad Request'});
    }
}


const findAllVacancy = async (req: Request, res: Response) => {
    try{
        const vacancies = await vacancyService.findAllVacancy();
        res.status(HttpStatus.CREATED).json(vacancies);
    }catch (error){
        res.status(HttpStatus.BAD_REQUEST).json({message: 'Bad Request'});
    }
}

const findOneVacancy = async (req: Request, res: Response) => {
    const id = req.params.id;

    // TODO Validation id

    try{
        const vacancyOutput = await vacancyService.findOneVacancy(id);
        if(null === vacancyOutput){
            res.status(HttpStatus.NOT_FOUND).json({message: 'Not Found'});
        }

        res.status(HttpStatus.CREATED).json(vacancyOutput);
    }catch (error){
        res.status(HttpStatus.BAD_REQUEST).json({message: 'Bad Request'});
    }
}


export const vacancyController = {
    createVacancy,
    findAllVacancy,
    findOneVacancy
}