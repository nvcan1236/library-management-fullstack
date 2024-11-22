import { ObjectId } from "mongoose";
import { IFine } from "../fine.interface";

export interface FineCreate extends Omit<IFine, "_id"| "status"> {}

export interface FineUpdate extends Omit<IFine, "_id"> {}
