import { Request, Response } from 'express';

async function addExpense(req: Request, res: Response) {
    const expense = req.body
}

async function updateExpense(req: Request, res: Response) {

}

async function removeExpense(req: Request, res: Response) {

}

export default {
    addExpense,
    updateExpense,
    removeExpense
}