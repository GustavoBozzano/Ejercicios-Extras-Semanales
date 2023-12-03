const notFoundMessageController = (err, req, res, next) => {
  res.status(404).send({
    httpStatus: "404",
    status: "error",
    message: "ID no encontrado para el mensaje buscado",
  });
};

export default notFoundMessageController;
