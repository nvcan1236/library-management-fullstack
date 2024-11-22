import { Document } from "mongoose";
import { IAuthor } from "./author.interface";
import { IPublisher } from "./publisher.interface";

export type BookCategory = "comic" | "science";

export type Language = "vi" | "en";

export type BookStatus = "published" | "unpublished" | "deleted"

export interface IBook extends Document{
  title:string,
  category: BookCategory;
  author: IAuthor;
  coverImage: string;
  publisher: IPublisher;
  publishDate: Date;
  language: Language;
  numberOfCopies: number;
  availableCopies: number;
  status: BookStatus
}