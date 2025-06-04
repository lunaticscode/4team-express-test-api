import { AppController } from "../types";

const getTestDataController: AppController = (req, res) => {
  return res.json({
    isError: false,
    message: "get-test-controller's response",
  });
};
const getTestDataController2: AppController = (req, res) => {
  const { title, desc } = req.body;
  // service 로직 생략
  return res.status(201).json({
    isError: false,
    message: `${title} :: ${desc} :: from get-test-data-controller2`,
  });
};

export { getTestDataController, getTestDataController2 };
