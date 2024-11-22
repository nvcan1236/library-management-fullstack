import { model, Schema } from "mongoose";
import { IBook } from "../interface/book.interface";

const bookShema = new Schema<IBook>(
  {
    title: {
      required: true,
      type: "string",
    },
    author: {
      type: Schema.ObjectId,
      required: true,
    },
    language: {
      type: "string",
      default: "vi",
    },
    publishDate: {
      type: "Date",
      default: new Date(),
    },
    publisher: {
      type: Schema.ObjectId,
      required: true,
    },

    category: {
      type: "string",
      required: true,
    },
    coverImage: {
      type: "string",
      required: true,
    },
    numberOfCopies: {
      type: "number",
      required: true,
    },
    availableCopies: {
      type: "number",
      default: 0,
    },
    status: {
      type: "string",
      default: "published"
    }
  },
  { timestamps: true }
);

export default model<IBook>("Book", bookShema);
