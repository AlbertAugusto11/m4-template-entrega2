import express, { json } from "express";
import { HandleErrors } from "./errors/handleErrors.middleware";
import { booksRouter } from "./routes/books.routes";

export const app = express();

app.use(json())

app.use("/books", booksRouter)

app.use(HandleErrors.execute)


