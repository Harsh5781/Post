const mongoose = require('mongoose')
const {Schema} = mongoose
const textSchema = new Schema({
    text:{
        type:String,
        maxlength: 120,
        required: true
    }
})

module.exports = mongoose.models.Text || new mongoose.model('Text', textSchema)