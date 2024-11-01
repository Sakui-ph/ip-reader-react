import dotenv from "dotenv";

dotenv.config();
export const connectionString: string | undefined =
  process.env.DB_CONNECTION_STRING;
