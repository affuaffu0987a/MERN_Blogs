const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/blogger')

const BlogsSchema = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    
    title:{
        type: String,
        required: true
    },

    blogs:{
        type:String,
        required:true
    }
})

const Blogger = mongoose.model('blogs',BlogsSchema)
module.exports = Blogger