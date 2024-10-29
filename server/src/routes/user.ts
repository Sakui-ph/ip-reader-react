import express, { Router, Request, Response } from "express";
import { hashPassword } from "../middleware/passwordHandler";
import UserController from "../controllers/user";

const router = Router();

router.post("/create", hashPassword, async (req: Request, res: Response) => {
  try {
    const result = await UserController.createUser(req, res);
    if (result) {
      res.send("User Created").status(200);
    } else {
      res.send("Error Creating User").status(200);
    }
  } catch (e) {
    res.send("An error occured: " + (e as Error).message);
  }
});

router.post("/login");

export { router as UserRoutes };
