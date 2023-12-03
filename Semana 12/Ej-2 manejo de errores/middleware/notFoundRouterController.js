const notFoundRouterController = async (req, res, next) => {
  res.status(404).json({ error: "Ruta no encontrada" });
};

export default notFoundRouterController;
