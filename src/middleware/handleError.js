const logError = (err, req, res, next) => {
  console.log('log error')
  next(err)
}

const handleError = (err, req, res, next) => {
  res.status(500).json({
    menssage: err.message,
    stack: err.stack
  })
}

const boomError = (err, req, res, next) => {
  if (err.isBoom) {
    const { output } = err
    res.status(output.statusCode).json(output.payload)
  }
  next(err)
}

module.exports = { logError, handleError, boomError }
