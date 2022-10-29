import http from "../../interceptor/interceptor";
import config from "../../../../config.json";
import { setItem } from "../../storage/storage";

const LoginApi = async (obj) => {
  try {
    const result = await http.post(`${config.ApiUrl}auth/login`, obj);
    const token = result.data.result.jwtToken;
    const user = result.data.result.studentModel;
    console.log(result.status);
    setItem("loginToken", token);
    setItem("user", JSON.stringify(user));

    return result.data;
  } catch (error) {
    return error.response.data;
  }
};

export default LoginApi;
