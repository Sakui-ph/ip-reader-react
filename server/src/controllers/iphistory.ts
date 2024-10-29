import { Request, Response } from "express";
import IPHistoryRepository from "../repositories/IPHistoryRepository";
import { IPHistory } from "../models/IPHistory";

module.exports = {
  createIPHistory: async (req: Request, res: Response): Promise<any> => {
    const newHistory: IPHistory = {
      date_submitted: req.body.date_submitted,
      geolocation_id: req.body.geolocation_id,
      user_id: req.body.user_id,
    };

    try {
      const result = await IPHistoryRepository.create(newHistory);
      return result;
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
      res.end("Error creating user").status(500);
    }
  },

  readIPHistory: async (req: Request, res: Response): Promise<any> => {},
  updateIPHistory: async (req: Request, res: Response): Promise<any> => {},
};

export default module.exports;
