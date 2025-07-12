import express, { Request, Response, Router } from "express";
import { IContactRequest } from "../types";
import { contactController } from "../controllers/contactController";

const router: Router = express.Router();

// Contact route
router.post("/", contactController);

export default router;
