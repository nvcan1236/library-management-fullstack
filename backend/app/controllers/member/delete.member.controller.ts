import { Request, Response } from "express";
import MemberModel from "../../models/member.model";

export const deleteMember = async (req: Request, res: Response) => {
  try {
    const memberId = req.params.memberId;
    const member = MemberModel.findById(memberId);

    if (!member) {
      res.send(`Member ${memberId} not found`);
      return;
    }

    await MemberModel.findOneAndDelete(member);
    res.send(`Member ${memberId} has been deleted`);
  } catch (err) {
    console.log(err);
  }
};
