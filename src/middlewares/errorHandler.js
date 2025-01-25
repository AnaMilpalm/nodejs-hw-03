export const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: 'Someting went wrong',
    error: err.message,
  });
};
