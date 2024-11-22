export interface Book {
  _id: string;
  title: string;
  author: string;
  language: string;
  publishDate: string;
  publisher: string;
  category: string;
  coverImage: string;
  numberOfCopies: number;
  availableCopies: number;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface Member {
  name: string
  email: string
  address: string
  type: string
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}

export interface Librarian {
  name: string
  email: string
  address: string
  position: string
  _id: string
  createdAt: string
  updatedAt: string
  __v: number
}

export type Object = "librarian" | "book" | "member";
