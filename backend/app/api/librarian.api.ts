import express from "express";
import {
  addLibrarian,
  getLibrarian,
  getLibrarians,
  updateLibrarian,deleteLibrarian
} from "../controllers/librarian/index.librarian.controller";

const router = express.Router();

router.get("/", getLibrarians);
router.post("/", addLibrarian);
router.get("/:librarianId", getLibrarian);
router.put("/:librarianId", updateLibrarian);
router.delete("/:librarianId", deleteLibrarian);

export default router;
