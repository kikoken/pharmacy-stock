import { Schema, model } from 'mongoose'

const stockSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    }
})

export default model('Message', stockSchema)