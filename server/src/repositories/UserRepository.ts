import { queryDatabase } from "../database/db";
import { convertSearchByToString } from "../helpers/databaseHelpers";
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
  find = async (projection: string[], searchBy: Record<string, any>) => {
    const searchParams: string = convertSearchByToString(searchBy);
    const result = await queryDatabase(
      `SELECT ${projection.join(", ")} FROM ${
        UserParams.TABLE_NAME
      } WHERE ${searchParams}`,
      []
    );
    return result[0];
  };
}

export default new UserRepository();
