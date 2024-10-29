import { queryDatabase } from "../database/db";
import { IPHistory, IPHistoryParams } from "../models/IPHistory";
class IPHistoryRepository {
  create = async (history: IPHistory) => {
    const query: string = `INSERT INTO ${IPHistoryParams.TABLE_NAME} SET ?`;
    const values = {
      date_submitted: history.date_submitted,
      geolocation_id: history.geolocation_id,
      user_id: history.user_id,
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

export default new IPHistoryRepository();
