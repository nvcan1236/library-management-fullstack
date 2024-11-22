import { model, Schema } from "mongoose";
import { ILoan } from "../interface/loan.interface";

const loanShema = new Schema<ILoan>(
  {
    member: {
      type: "string",
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
      required: true,
    },
    status: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

export default model<ILoan>("Loan", loanShema);
