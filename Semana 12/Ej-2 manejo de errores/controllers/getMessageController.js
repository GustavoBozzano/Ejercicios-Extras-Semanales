import fs from "fs/promises";
import notFoundMessageController from "../middleware/notFoundMessageController.js";

const getMessageController = async (req, res, next) => {
  try {
    const messageId = req.params.messageId;

    const messageData = await fs.readFile("./data/messages.json", "utf8");
    const messages = JSON.parse(messageData);
    const message = messages.find((msg) => msg.id === messageId);

    if (!message) {
      notFoundMessageController();
    }

    res.json(message);
  } catch (error) {
    next(error);
  }
};

export default getMessageController;
