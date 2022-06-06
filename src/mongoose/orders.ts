import mongoose from 'mongoose'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  buyer: {
    type: String,
    required: true
  },
  products: [
    {
      productId: {
        type: ObjectId,
        required: true,
        ref: 'Products'
      },
      quantity: {
        type: Number,
        required: true
      },
      value: {
        type: Number,
        required: true
      },
      createdAt: {
        type: Date,
        required: true
      },
      updatedAt: {
        type: Date,
        required: true
      }
    }
  ],
  total: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('Orders', userSchema)
