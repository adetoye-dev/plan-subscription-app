import axios from "axios";

const KEY = "ccdb74cab3624298b51a1033b7d6f66c";

export default axios.create({
  baseURL: "https://emailvalidation.abstractapi.com/v1",
  params: {
    api_key: KEY,
  },
});
