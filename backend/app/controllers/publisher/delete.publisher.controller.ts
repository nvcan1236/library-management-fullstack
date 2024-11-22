import { Request, Response } from "express";
import PublisherModel from "../../models/publisher.model";

export const deletePublisher = async (req: Request, res: Response) => {
  try {
    const publisherId = req.params.publisherId;
    const publisher = PublisherModel.findById(publisherId);

    if (!publisher) {
      res.send(`Publisher ${publisherId} not found`);
      return;
    }

    await PublisherModel.findOneAndDelete(publisher);
    res.send(`Publisher ${publisherId} has been deleted`);
  } catch (err) {
    console.log(err);
  }
};
