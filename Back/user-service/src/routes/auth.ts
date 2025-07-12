import express, { Router } from "express";
import { register, login } from "../controllers/auth-controller";
const router: Router = express.Router();

// REGISTER
router.post("/register", register);

// LOGIN
router.post("/login", login);

// current User

router.get("/me", currentUser);

export default router;
