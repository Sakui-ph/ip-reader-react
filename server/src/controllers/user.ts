import { Request, Response } from "express";
import { User } from "../models/User";
import UserRepository from "../repositories/UserRepository";

module.exports = {
  createUser: async (req: Request, res: Response): Promise<any> => {
    const newUser: User = {
      email: req.body.email,
      password: req.body.password,
    };

    try {
      const result = await UserRepository.create(newUser);
      return result;
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
      res.end("Error creating user").status(500);
    }
  },

  readUser: async (req: Request, res: Response): Promise<any> => {},
  updateUser: async (req: Request, res: Response): Promise<any> => {},
};

export default module.exports;
