import axios from "axios";
import { config } from "../configUrl";

const http = axios.create({
  baseURL: config.api,

  headers: {
    "Content-Type": "application/json",
  },
});

export { http };
