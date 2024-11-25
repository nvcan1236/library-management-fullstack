import express from "express";
import {
  addLoan,
  getLoanInforByMember,
  returnLoan
} from "../controllers/loan/index.loan.controller";

const router = express.Router();

router.post("/", addLoan);
router.post("/return", returnLoan);
router.get("/:userId", getLoanInforByMember);
// router.post("/", addPublisher);
// router.get("/:publisherId", getPublisher);
// router.put("/:publisherId", updatePublisher);
// router.delete("/:publisherId", deletePublisher);

export default router;
