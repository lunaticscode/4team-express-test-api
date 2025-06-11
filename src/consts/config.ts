import { config } from "dotenv";
config();
const APP_PORT = process.env.APP_PORT;
const OPENROUTER_AI_BASEURL = "https://openrouter.ai";
const OPENROUTER_AI_KEY = process.env.OPENROUTER_AI_KEY;
const OEPNROUTER_LLM_MODEL = "meta-llama/llama-4-maverick:free";

export {
  APP_PORT,
  OPENROUTER_AI_BASEURL,
  OPENROUTER_AI_KEY,
  OEPNROUTER_LLM_MODEL,
};
