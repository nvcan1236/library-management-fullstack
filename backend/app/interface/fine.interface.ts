import { Document } from "mongoose";
import { ILoan } from "./loan.interface";

export type FineStatus = "paid" | "not paid" 

export interface IFine extends Document {
  loan: ILoan;
  amount: number;
  status: FineStatus;
  fineDate: Date;
}
