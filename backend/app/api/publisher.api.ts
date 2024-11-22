import express from "express";
import {
  addPublisher,
  getPublisher,
  getPublishers,
  updatePublisher,deletePublisher
} from "../controllers/publisher/index.publisher.controller";

const router = express.Router();

router.get("/", getPublishers);
router.post("/", addPublisher);
router.get("/:publisherId", getPublisher);
router.put("/:publisherId", updatePublisher);
router.delete("/:publisherId", deletePublisher);

export default router;
