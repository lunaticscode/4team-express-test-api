import axios from "axios";
import { OPENROUTER_AI_BASEURL, OPENROUTER_AI_KEY } from "../consts/config";

export const llmApi = axios.create({
  baseURL: `${OPENROUTER_AI_BASEURL}/api/v1`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${OPENROUTER_AI_KEY}`,
  },
});
