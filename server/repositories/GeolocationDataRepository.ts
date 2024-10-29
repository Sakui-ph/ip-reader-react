import { queryDatabase } from "../database/db";
import {
  GeolocationData,
  GeolocationDataParams,
} from "../models/GeolocationData";

class GeolocationDataRepository {
  create = async (geolocation: GeolocationData) => {
    const query: string = `INSERT INTO ${GeolocationDataParams.TABLE_NAME} SET ?`;
    const values = {
      city: geolocation.city,
      region: geolocation.region,
      country: geolocation.country,
      loc: geolocation.loc,
      org: geolocation.org,
      postal: geolocation.postal,
      timezone: geolocation.timezone,
    };

    try {
      const result = await queryDatabase(query, values);
      return result;
    } catch (e) {
      console.log((e as Error).message);
    }
    return;
  };
}

export default new GeolocationDataRepository();
