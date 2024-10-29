import { queryDatabase } from "../database/db";
import { User, UserParams } from "../models/User";

class UserRepository {
  create = async (user: User) => {
    const query: string = `INSERT INTO ${UserParams.TABLE_NAME} SET ?`;
    const values = {
      email: user.email,
      password: user.password,
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

export default new UserRepository();
