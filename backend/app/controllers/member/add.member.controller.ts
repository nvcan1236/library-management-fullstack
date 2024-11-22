import { Request, Response } from "express";
import MemberModel from "../../models/member.model";

export const addMember = async (req: Request, res: Response) => {
  try {
    const newMember = new MemberModel(req.body)

    const member = await newMember.save()
    res.send(member);
  } catch (err) {
    console.log(err);
  }
};
