import express from "express";
import { APP_PORT } from "./consts/config";
import apiRoute from "./routes/api.route";
const app = express();

// WAS
// body-parser
app.use(express.json());
app.use("/api", apiRoute);
app.listen(APP_PORT, () => {
  console.log(`Express running on ${APP_PORT}`);
});

// 3 Layer
// Route ---> Controller ---> Service(외부 서버에 접근하는 애들)
