import { Document } from "mongoose";
import { IBook } from "./book.interface";
import { IMember } from "./member.interface";

export type LoanStatus = "borrowing" | "returned" | "overdue";

export interface ILoan extends Document {
  member: IMember;
  book: IBook;
  issueDate: Date
  dueDate: Date;
  returnDate: Date
  status: LoanStatus;
}
