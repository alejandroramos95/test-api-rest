const mongoose = require('mongoose')

const productosSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: String, required: true },
  thumbnail: { type: String, required: true },
})

module.exports = mongoose.model('productos', productosSchema)
