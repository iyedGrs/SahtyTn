import { Router } from "express";
import { get_all_users, get_user_by_id } from "../controllers/user-controller";


const router = Router();

router.get("/users/:id", get_user_by_id);
router.get("/users", get_all_users);

export default router;