import express from "express";
import {getAllMainChar} from "../controllers/mainCharController.js";

const router = express.Router();

router.get("/", getAllMainChar);

export default router;