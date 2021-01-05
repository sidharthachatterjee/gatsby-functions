module.exports = (req, res) => {
  res.status(200).send({
    data: Date.now(),
  })
}
