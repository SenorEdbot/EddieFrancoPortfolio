const { Contact } = require('../models')

module.exports = {
  async contact (req, res) {
    try {
      const form = await Contact.create(req.body)
      res.send(form)
    } catch (err) {
      res.status(400).send({
        error: 'The form did not post.'
      })
    }
  }
}
