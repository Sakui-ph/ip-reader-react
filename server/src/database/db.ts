import mysqlPromise from "mysql2/promise";
import { connectionString } from "../config/dbConfig";

export const makeConnection = async () => {
  let connection = null;
  if (connectionString !== undefined) {
    try {
      connection = await mysqlPromise.createConnection(
        connectionString as string
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  } else {
    throw new Error("Connection string is undefined");
  }

  return connection;
};

export async function queryDatabase(query: string, params: any): Promise<any> {
  const connection = await makeConnection();
  if (connection != null) {
    try {
      // query db and return the result
      let result = await connection.query(query, params);
      connection?.end();
      return result;
    } catch (e: unknown) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
  }
  connection?.end();
  return;
}
