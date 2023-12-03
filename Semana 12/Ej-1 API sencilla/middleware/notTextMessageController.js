const notTextMessageController = () => {
  throw {
    httpStatus: 404,
    code: "RESOURCE_NOT_FOUND",
    message: `falta TEXTO para crear el mensaje`,
  };
};

export default notTextMessageController;
