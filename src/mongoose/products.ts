import mongoose from 'mongoose'

const Schema = mongoose.Schema

const postSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    enum: ['CLOTHES', 'TOYS', 'FOOD', 'OTHERS'],
    required: true
  },
  value: {
    type: Number,
    required: true
  }
})

export default mongoose.model('Products', postSchema)
