/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

const BASE_URL: string = "http://localhost:3001";

export const createAPIEndpoints = (endpoint: string) => {
  axios.defaults.headers.common = {
    "Content-Type": "application/x-www-form-urlencoded",
    Accept: "application/json",
  };

  const url = `${BASE_URL}/${endpoint}`;

  return {
    post: (data: any) =>
      axios.post(url, data, {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }),
    get: (params?: Record<string, any>) =>
      axios.get(url, params).catch((e) => console.log(e.message)),
  };
};
