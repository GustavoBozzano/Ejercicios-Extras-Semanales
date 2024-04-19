import fs from "fs/promises";
import crypto from "crypto";
import path from "path";

import notTextMessageController from "../middleware/notTextMessageController.js";

// Ruta absoluta al fichero donde se almacenan los mensajes.
const messagesPath = path.join(process.cwd(), "data", "messages.json");

const newMessageController = async (req, res) => {
  try {
    let messages = [];
    const { text } = req.body;
    if (!text.length) {
      notTextMessageController();
    }
    const messageData = await fs.readFile(messagesPath);
    messages = JSON.parse(messageData);
    let uuid = crypto.randomUUID();

    const newMessage = {
      id: uuid,
      text,
    };
    messages.push(newMessage);

    await fs.writeFile(messagesPath, JSON.stringify(messages, null, 4));
    res.json(newMessage);
  } catch (error) {
    console.error(error);
  }
};

export default newMessageController;
