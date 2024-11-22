import { Request, Response } from "express";
import MemberModel from "../../models/member.model";

export const updateMember = async (req: Request, res: Response) => {
  try {
    const memberId = req.params.memberId;
    const member = await MemberModel.findById(memberId);

    if (!member) {
      res.send(`Member ${memberId} not found`);
      return;
    }

    await MemberModel.updateOne({
      "_id": memberId
    }, req.body);
    res.send(`Member ${memberId} has been updated`);
  } catch (err) {
    console.log(err);
  }
};
