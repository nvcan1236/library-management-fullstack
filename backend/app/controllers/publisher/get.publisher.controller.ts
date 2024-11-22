import { Request, Response } from "express";
import publisherModel from "../../models/publisher.model";
import { isValidObjectId } from "mongoose";

export async function getPublishers(req: Request, res: Response): Promise<void> {
  try {
    const publishers = await publisherModel.find();
    res.send(publishers);
  } catch (err) {
    console.log(err);
  }
}

export async function getPublisher(req: Request, res: Response): Promise<void> {
  try {
    const publisherId = req.params.publisherId
    if(!isValidObjectId(publisherId)) {
      res.send(`${publisherId} is not id's format.`)
      return;
    } 

    const publisher = await publisherModel.findOne({
      "_id": publisherId
    });

    res.send(publisher);

  } catch (err) {
    console.log(err);
  }
}
