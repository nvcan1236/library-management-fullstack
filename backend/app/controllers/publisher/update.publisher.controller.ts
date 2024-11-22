import { Request, Response } from "express";
import PublisherModel from "../../models/publisher.model";

export const updatePublisher = async (req: Request, res: Response) => {
  try {
    const publisherId = req.params.publisherId;
    const publisher = await PublisherModel.findById(publisherId);

    if (!publisher) {
      res.send(`Publisher ${publisherId} not found`);
      return;
    }

    await PublisherModel.updateOne({
      "_id": publisherId
    }, req.body);
    res.send(`Publisher ${publisherId} has been updated`);
  } catch (err) {
    console.log(err);
  }
};
