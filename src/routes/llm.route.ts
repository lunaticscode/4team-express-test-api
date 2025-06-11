import { Router } from "express";
import { llmChatController } from "../controllers/llm.controller";

const llmRoute = Router();
llmRoute.post("/chat", llmChatController);

/**
 uri: http://backend/api/llm/chat 
 method: post
 body: {
    content: string
 }
*/

export default llmRoute;
