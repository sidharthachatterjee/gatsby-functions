export default (req, res) => {
  res.status(200).send({
    data: Date.now(),
  })
}
