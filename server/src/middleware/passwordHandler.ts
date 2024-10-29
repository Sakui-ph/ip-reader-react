import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import UserRepository from "../repositories/UserRepository";

const SALT_ROUNDS = 15;
const PASSWORD_PROJECTION_STRING: string =
  "CONVERT(password using utf8) as password";

export const validatePassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.body.password === undefined || req.body.password === "") {
    res.send({ success: false, message: "no password provided" }).status(500);
    res.end();
    return;
  }

  const password = req.body.password;
  const hashedPassword = await UserRepository.find(
    [PASSWORD_PROJECTION_STRING],
    {
      email: req.body.email,
    }
  );

  if (hashedPassword === undefined) {
    res.send({ success: false, message: "Wrong account" }).status(500);
    res.end();
    return;
  }
  if (await bcrypt.compare(password, hashedPassword[0]["password"])) {
    next();
  } else {
    res.send({ success: false, message: "wrong password" }).status(500);
    res.end();
    return;
  }
};

export const hashPassword = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  if (req.body.password === undefined) {
    res.send({ success: false, message: "failed to create user" }).status(500);
    return;
  }

  const password = req.body.password;

  bcrypt.genSalt(SALT_ROUNDS, (err, salt) => {
    if (err) {
      throw Error("Error generating salt");
    }
    bcrypt.hash(password, salt, (err, hash) => {
      if (err) {
        if (err instanceof Error) {
        }
        throw Error("Error hashing password");
      }
      req.body.password = hash;
      next();
    });
  });
};
