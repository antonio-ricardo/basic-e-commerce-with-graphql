import mongoose from 'mongoose'
import { TagType } from '../models'

const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const orderSchema = new Schema({
  buyer: {
    type: ObjectId,
    required: true,
    ref: 'Users'
  },
  status: {
    type: String,
    enum: ['CREATED', 'REQUESTED']
  },
  products: [
    {
      id: {
        type: ObjectId,
        required: true,
        ref: 'Products'
      },
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number,
        required: true
      },
      tag: {
        type: String,
        enum: TagType,
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

export default mongoose.model('Orders', orderSchema)
