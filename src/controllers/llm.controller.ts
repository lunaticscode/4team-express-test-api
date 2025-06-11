import { HttpStatusCode } from "axios";
import { AppController } from "../types";
import { llmApi } from "../utils/api";
import { OEPNROUTER_LLM_MODEL } from "../consts/config";

const llmChatController: AppController = async (req, res) => {
  const { prompt = "" } = req.body;
  if (!prompt) {
    res.status(HttpStatusCode.BadRequest).json({ isError: true });
  }
  // prompt -----> openrouter.ai
  try {
    const llmReq = await llmApi.post("/chat/completions", {
      model: OEPNROUTER_LLM_MODEL,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `${prompt}\n단, 마크다운 문법없이 일반 텍스트 형태로 답변해줘.`,
            },
          ],
        },
      ],
    });
    if (llmReq.status === HttpStatusCode.Ok) {
      const { content } = llmReq.data.choices[0].message;
      return res.json({ content });
    } else {
      return res
        .status(HttpStatusCode.InternalServerError)
        .json({ isError: true });
    }
  } catch (err) {
    return res
      .status(HttpStatusCode.InternalServerError)
      .json({ isError: true });
  }
};
export { llmChatController };
