import express from "express";

import newMessageController from "./controllers/newMessageController.js";
import getMessageController from "./controllers/getMessageController.js";
import notFoundRouterController from "./middleware/notFoundRouterController.js";
import notFoundMessageController from "./middleware/notFoundMessageController.js";
import errorController from "./middleware/errorController.js";

const router = express.Router();
const app = express();

app.use(express.json());

const newMessage = router.post("/messages", newMessageController);
const getMessage = router.get("/messages/:messageId", getMessageController);
app.use(newMessage);
app.use(getMessage);
app.use(notFoundRouterController);
// app.use(errorController);
app.use(notFoundMessageController);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`servidor escuchando en port ${port}`);
});
