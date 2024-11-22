import { Request, Response } from "express";
import PublisherModel from "../../models/publisher.model";

export const addPublisher = async (req: Request, res: Response) => {
  try {
    const newPublisher = new PublisherModel(req.body)

    const publisher = await newPublisher.save()
    res.send(publisher);
  } catch (err) {
    console.log(err);
  }
};
