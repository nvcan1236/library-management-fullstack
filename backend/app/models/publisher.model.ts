import { model, Schema } from "mongoose";
import { IPublisher } from "../interface/publisher.interface";

const publisherShema = new Schema<IPublisher>(
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
  },
  { timestamps: true }
);

export default model<IPublisher>("Publisher", publisherShema);
