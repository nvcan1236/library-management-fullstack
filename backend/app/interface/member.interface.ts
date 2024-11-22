import { Document } from "mongoose";
import { IPerson } from "./person.interface";

export type MemberType = "student" | "other";

export interface IMember extends Document, IPerson {
  dateJoin: Date;
  type: MemberType;
}
