import { Document } from "mongoose";
import { IPerson } from "./person.interface";

export interface IPublisher extends Document, IPerson {
  
}
