import { Request, Response } from "express";
import { LoanCreate } from "../../interface/request/loan";
import LoanModel from "../../models/loan.model";
import bookModel from "../../models/book.model";
import loanModel from "../../models/loan.model";

export const addLoan = async (req: Request, res: Response) => {
  try {
    const { member, book } = req.body as LoanCreate;

    const borowingBook = await bookModel.findOne({
      _id: book,
    });

    if (borowingBook && borowingBook.availableCopies === 0) {
      res.statusCode = 404;
      res.send("Book is not available");
      return;
    }

    const newLoan = new LoanModel({
      book,
      member,
      issueDate: new Date(),
      dueDate: new Date(Date.now() + 20 * 24 * 3600),
    });

    await bookModel.findOneAndUpdate(
      { _id: book },
      { $inc: { availableCopies: -1 } },
      { new: true }
    );

    const loan = await newLoan.save();
    res.send(loan);
  } catch (err) {
    console.log(err);
  }
};

export const returnLoan = async (req: Request, res: Response) => {
  try {
    const { member, book } = req.body as LoanCreate;

    const loan = await LoanModel.findOneAndUpdate(
      {
        book,
        member,
        status: "borrowing",
      },
      {
        status: "returned",
      }
    );

    if(!loan) {
      res.statusCode = 404;
      res.send("Loan is not available");
    }

    await bookModel.findOneAndUpdate(
      { _id: book },
      { $inc: { availableCopies: 1 } },
      { new: true }
    );

    res.send(loan);

  } catch (err) {
    console.log(err);
  }
};
