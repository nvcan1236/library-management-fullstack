import { model, Schema } from "mongoose";
import { IMember } from "../interface/member.interface";

const memberShema = new Schema<IMember>(
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
    type: {
      type: "string",
      required: true
    }
  },
  { timestamps: true }
);

export default model<IMember>("Member", memberShema);
