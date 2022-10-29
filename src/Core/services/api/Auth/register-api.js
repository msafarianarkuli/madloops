import http from "../../interceptor/interceptor";
import config from "../../../../config.json";

const RegisterApi = async (obj) => {
  try {
    const result = await http.post(`${config.ApiUrl}auth/register`, obj);
    return result.data;
  } catch (error) {
    return error;
  }
};

export default RegisterApi;
