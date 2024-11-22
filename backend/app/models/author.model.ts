import { model, Schema } from "mongoose";
import { IBook } from "../interface/book.interface";
import { IAuthor } from "../interface/index.interface";

const authoShema = new Schema<IAuthor>(
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
    }
  },
  { timestamps: true }
);

export default model<IAuthor>("Author", authoShema);
