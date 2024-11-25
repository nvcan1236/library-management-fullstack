import { Request, Response } from "express";
import loanModel from "../../models/loan.model";
import mongoose from "mongoose";

export async function getLoanInforByMember(
  req: Request,
  res: Response
): Promise<void> {
  const userId = new mongoose.Types.ObjectId(req.params.userId);
  const statistics = await loanModel.aggregate([
    {
      $match: { member: userId },
    },
    {
      $group: {
        _id: "$status", // Nhóm theo status
        count: { $sum: 1 }, // Đếm số sách trong từng trạng thái
      },
    },
    {
      $project: {
        status: "$_id", // Chuyển _id (status) ra ngoài
        count: 1,
        _id: 0, // Ẩn trường _id
      },
    },
  ]);

  res.send(statistics);
}
