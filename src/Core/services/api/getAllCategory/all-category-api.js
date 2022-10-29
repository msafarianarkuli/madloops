import http from "../../interceptor/interceptor";

const getAllCategory = async () => {
  try {
    const result = await http.get(`${MainUrl}category/getall`);

    return result.data.result;
  } catch (error) {
    return false;
  }
};

// export default getAllCategory;
