export interface User {
  id: number;
  email: string;
  password: string; // binary (60)
}

export const UserParams = {
  ID: "id",
  EMAIL: "email",
  PASSWORD: "password",
};
