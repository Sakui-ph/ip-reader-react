import { Router, Request, Response } from "express";
import { hashPassword, validatePassword } from "../middleware/passwordHandler";
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

router.post("/login", validatePassword, async (req: Request, res: Response) => {
  res.send({ success: true, message: "Login Success" }).status(200);
});

export { router as UserRoutes };
