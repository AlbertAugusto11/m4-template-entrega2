import { Request, Response, NextFunction } from "express";
import { booksDatabase } from "../database/database";
import { AppError } from "../errors/AppError";

export class BooksIsRegistered{
    static execute(req: Request, res: Response, next: NextFunction){
        if(booksDatabase.some(book => book.name === req.body.name)){
            throw new AppError(409, "Book already registered.");
        }

        next();
    }
}