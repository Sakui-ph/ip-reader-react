import { createAPIEndpoints } from "./axios";
import { IPINFO_ENDPOINTS } from "./endpoints/endpoints";

export const IpGet = async () => {
  try {
    const response = await createAPIEndpoints(IPINFO_ENDPOINTS.getIp).get();
    return response?.data;
  } catch (e) {
    console.log((e as Error).message);
  }
};

export const IpSearch = async (ipAddress: string = "") => {
  try {
    const response = await createAPIEndpoints(IPINFO_ENDPOINTS.getIp).get({
      ip: ipAddress,
    });
    return response?.data;
  } catch (e) {
    console.log((e as Error).message);
  }
};
