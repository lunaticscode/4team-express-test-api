import { Router } from "express";
import testRoute from "./test.route";
import llmRoute from "./llm.route";
const apiRoute = Router();
// /api/test
apiRoute.use("/test", testRoute);
apiRoute.use("/llm", llmRoute);

export default apiRoute;
