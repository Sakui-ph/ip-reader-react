export interface User {
  user_id?: number;
  email: string;
  password: string; // binary (60)
}

export const UserParams = {
  TABLE_NAME: "user",
  //   ID: "user_id",
  //   EMAIL: "email",
  //   PASSWORD: "password",
};
