import { ObjectId } from "mongoose";
import { IBook } from "../book.interface";
import { ILoan } from "../loan.interface";

export interface LoanCreate extends Pick<ILoan, "member" | "book"> {}

// export interface BookUpdate extends Omit<IBook, "_id"> {}
