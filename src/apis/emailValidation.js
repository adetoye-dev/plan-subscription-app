import axios from "axios";

export default axios.create({
  baseURL: "https://emailvalidation.abstractapi.com/v1",
  params: {
    api_key: import.meta.env.VITE_EMAILVALIDATION_API_KEY,
  },
});
