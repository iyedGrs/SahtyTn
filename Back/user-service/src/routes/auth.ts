import express, {Router } from "express";
import { register, login } from "../controllers/auth-controller"; 
const router: Router = express.Router();

// REGISTER
router.post("/register",register);

// LOGIN
router.post("/login",login);

export default router;
