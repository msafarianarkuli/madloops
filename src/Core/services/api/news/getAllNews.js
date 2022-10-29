import http from "../../interceptor/interceptor";
import config from "../../../../config.json";

const getAllNews = async () => {
  try {
    const result = await http.get(`${config.ApiUrl}news`);

    return result.data;
  } catch (error) {
    return error;
  }
};

// export default getAllNews;
