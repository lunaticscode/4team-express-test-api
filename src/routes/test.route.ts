import { Router } from "express";
import {
  getTestDataController,
  getTestDataController2,
} from "../controllers/test.contoller";

const testRoute = Router();
testRoute.get("/", getTestDataController);
testRoute.post("/", getTestDataController2);

export default testRoute;
