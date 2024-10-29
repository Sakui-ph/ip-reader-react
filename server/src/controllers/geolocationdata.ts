import { Request, Response } from "express";
import { GeolocationData } from "../models/GeolocationData";
import GeolocationDataRepository from "../repositories/GeolocationDataRepository";

module.exports = {
  createGeolocationData: async (req: Request, res: Response): Promise<any> => {
    const newGeolocationData: GeolocationData = {
      city: req.body.city,
      region: req.body.region,
      country: req.body.country,
      loc: req.body.loc,
      org: req.body.org,
      postal: req.body.postal,
      timezone: req.body.timezone,
    };

    try {
      const result = await GeolocationDataRepository.create(newGeolocationData);
      return result;
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
      res.end("Error creating user").status(500);
    }
  },

  readGeolocationData: async (req: Request, res: Response): Promise<any> => {},
  updateGeolocationData: async (
    req: Request,
    res: Response
  ): Promise<any> => {},
};

export default module.exports;
