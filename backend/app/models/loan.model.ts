import { model, Schema } from "mongoose";
import { ILoan } from "../interface/loan.interface";

const loanShema = new Schema<ILoan>(
  {
    member: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    book: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    issueDate: {
      type: "Date",
      required: true,
    },
    dueDate: {
      type: "Date",
      required: true,
    },
    returnDate: {
      type: "Date",
    },
    status: {
      type: "string",
      default: "borrowing"
    },
  },
  { timestamps: true }
);

export default model<ILoan>("Loan", loanShema);
