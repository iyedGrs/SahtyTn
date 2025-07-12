import express, { Router } from "express";
import { register, login, currentUser } from "../controllers/userController";
const router: Router = express.Router();

// REGISTER
router.post("/register", register);

// LOGIN
router.post("/login", login);

// current User

router.get("/me", currentUser);

export default router;
