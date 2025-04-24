const mongoose = require('mongoose')

const viedoSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:{type:String,required:true},
    description:{type:String,required:true},
    user_id:{type:String,required:true},
    videoUrl:{type:String,required:true},
    videoId:{type:String,required:true},
    thumbnailUrl:{type:String,required:true},
    thumbnailId:{type:String,required:true},
    catergory:{type:String,required:true},
    tags:[{type:String}],
    likes:{type:Number,default:0},
    dislikes:{type:Number,default:0},
    views:{type:Number,default:0},
    likedby:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    dislikedby:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}],
    //viewedBy:[{type:mongoose.Schema.Types.ObjectId,ref:'User'}]

},{timestamps:true})
module.exports = mongoose.model('video',viedoSchema)