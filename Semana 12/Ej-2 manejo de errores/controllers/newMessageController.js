import fs from "fs/promises";
import randomUUID from "crypto";
import notTextMessageController from "../middleware/notTextMessageController.js";

const newMessageController = async (req, res) => {
  try {
    let messages = [];
    const { text } = req.body;
    if (!text.length) {
      notTextMessageController();
    }
    const messageData = await fs.readFile("./data/messages.json", "utf8");
    messages = JSON.parse(messageData);
    let uuid = crypto.randomUUID();

    const newMessage = {
      id: uuid,
      text,
    };
    messages.push(newMessage);

    await fs.writeFile("./data/messages.json", JSON.stringify(messages));
    res.json(newMessage);
  } catch (error) {
    console.error(error);
  }
};

export default newMessageController;
