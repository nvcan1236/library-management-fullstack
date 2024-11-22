import express from "express";
import {
  addMember,
  getMember,
  getMembers,
  updateMember,deleteMember
} from "../controllers/member/index.member.controller";

const router = express.Router();

router.get("/", getMembers);
router.post("/", addMember);
router.get("/:memberId", getMember);
router.put("/:memberId", updateMember);
router.delete("/:memberId", deleteMember);

export default router;
