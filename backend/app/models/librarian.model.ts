import { model, Schema } from "mongoose";
import { ILibrariant } from "../interface/librarian.interface";

const librarianSchema = new Schema<ILibrariant>(
  {
    name: {
      type: "string",
      required: true
    },
    email: {
      type: "string",
      required: true
    },
    address: {
      type: "string",
      required: true
    },
    position: {
      type: "string",
      required: true
    }
  },
  { timestamps: true }
);

export default model<ILibrariant>("Librarian", librarianSchema);
