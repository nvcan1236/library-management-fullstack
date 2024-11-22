import { Request, Response } from "express";
import memberModel from "../../models/member.model";
import { isValidObjectId } from "mongoose";

export async function getMembers(req: Request, res: Response): Promise<void> {
  try {
    const members = await memberModel.find();
    res.send(members);
  } catch (err) {
    console.log(err);
  }
}

export async function getMember(req: Request, res: Response): Promise<void> {
  try {
    const memberId = req.params.memberId
    if(!isValidObjectId(memberId)) {
      res.send(`${memberId} is not id's format.`)
      return;
    } 

    const member = await memberModel.findOne({
      "_id": memberId
    });

    res.send(member);

  } catch (err) {
    console.log(err);
  }
}
