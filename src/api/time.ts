export default (req, res) => {
  res.status(200).json({
    status: `ok`,
    data: {
      time: Date.now(),
    },
  })
}
