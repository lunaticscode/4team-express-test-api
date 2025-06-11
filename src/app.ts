import express from "express";
import { APP_PORT } from "./consts/config";
import apiRoute from "./routes/api.route";
const app = express();

app.use(express.json());
app.use("/api", apiRoute);
app.listen(APP_PORT, () => {
  console.log(`Express running on ${APP_PORT}`);
});
