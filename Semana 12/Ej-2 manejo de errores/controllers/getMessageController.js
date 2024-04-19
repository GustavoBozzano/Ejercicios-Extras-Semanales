import fs from "fs/promises";
import path from "path";

import notFoundMessageController from "../middleware/notFoundMessageController.js";
import errorController from "../middleware/errorController.js";

// Ruta absoluta al fichero donde se almacenan los mensajes.
const messagesPath = path.join(process.cwd(), "data", "messages.json");

const getMessageController = async (req, res, next) => {
  try {
    const messageId = req.params.messageId;

    const messageData = await fs.readFile(messagesPath);
    const messages = JSON.parse(messageData);
    const message = messages.find((msg) => msg.id === messageId);

    if (!message) {
      notFoundMessageController();
      // errorController();
    }

    res.json(message);
  } catch (error) {
    next(error);
  }
};

export default getMessageController;
