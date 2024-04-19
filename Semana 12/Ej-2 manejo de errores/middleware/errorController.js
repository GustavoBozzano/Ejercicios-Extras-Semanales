const errorController = (err, req, res, next) => {
  console.log("este error:", err);

  res.status(err.httpStatus || 500).send({
    status: "Error..!!",
    message: err.message,
  });
};

export default errorController;
