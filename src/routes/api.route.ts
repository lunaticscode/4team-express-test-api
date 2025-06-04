import { Router } from "express";
import testRoute from "./test.route";

const apiRoute = Router();
// /api/test
apiRoute.use("/test", testRoute);
//

export default apiRoute;
