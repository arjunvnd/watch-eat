import axios from "axios";

export const axiosJsonPlaceHolder = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/posts"
});
