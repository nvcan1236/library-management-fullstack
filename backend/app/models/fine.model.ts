import { model, Schema } from "mongoose";
import { IFine } from "../interface/fine.interface";

const fineShema = new Schema<IFine>(
  {
    loan: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    amount: {
      type: "number",
      required: true,
    },
    status: {
      type: "string",
      required: true,
    },
    fineDate: {
      type: "Date",
      required: true,
    },
  },
  { timestamps: true }
);

export default model<IFine>("Fine", fineShema);
