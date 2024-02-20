const mongoose=require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    id:{type:Number,required:
    true},
    name: { type: String, required: true },
    date: { type: String, required: true },
    info: { type: String, required: true },
    image: { type: String, required: true },
})

const User = mongoose.model('user',UserSchema)
module.exports=User