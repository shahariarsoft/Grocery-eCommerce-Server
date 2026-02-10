import express from 'express'
import {
    loginUser,
    registerUser,
    logoutUser,
} from '../controller/user.controller.js';
import { authUser } from './../middlewares/authUser.js';


const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", authUser, logoutUser);



export default router;