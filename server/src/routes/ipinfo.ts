import { Router, Request, Response } from "express";
import IpInfoController from "../controllers/ipinfo";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  IpInfoController.getUserIP(req, res);
});

export { router as IpInfoRoutes };
