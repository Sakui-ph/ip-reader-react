import { createAPIEndpoints } from "./axios";
import { USER_ENDPOINTS } from "./endpoints/endpoints";

export const CreateUser = () => {};

export const LoginUser = async (email: string, password: string) => {
  let result = false;
  try {
    await createAPIEndpoints(USER_ENDPOINTS.login)
      .post({ email, password })
      .then((response) => {
        if (response.data.success) {
          result = true;
          return true;
        }

        return false;
      });
  } catch (error) {
    console.log((error as Error).message);
    return false;
  }
  return result;
};
