import { Request, Response } from "express";
import { LoanCreate } from "../../interface/request/loan";
import LoanModel from "../../models/loan.model";

export const addLoan = async (req: Request, res: Response) => {
  try {
    const { member, book } = req.body as LoanCreate;

    const newLoan = new LoanModel({
      book,
      member,
      issueDate: new Date(),
      dueDate: new Date(Date.now() + 20 * 24 * 3600),
    });

    const loan = await newLoan.save();
    res.send(loan);
  } catch (err) {
    console.log(err);
  }
};
