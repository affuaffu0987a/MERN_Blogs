const Blogger = require("../Database/blogs-db");


const userBlogs = async(req,res)=>{
    try {
       const {username,title,blogs} = req.body 
        const createBlogs = await Blogger.create({
            username,
            title,
            blogs
        })
        res.status(200).json({msg:"Blog Submitted"})
    } catch (error) {
        console.log(error);
    }
}

const getBlogsData = async(req,res)=>{
    try {
        const getAllBlogs = await Blogger.find()
        if(getAllBlogs && getAllBlogs.length !== 0 ){
            return res.status(200).json({data:getAllBlogs})
        }
        else{
           return res.status(404).json({data:"No Data Found"})
        }
    } catch (error) {
        console.log(error);
    }
}

const RemovedBlog = async(req,res)=>{
    try {
        const BlogId = req.params.id
        const deleteThisBlog = await Blogger.deleteOne({_id:BlogId})
        res.status(202).json({msg:"Deleted Successfull"})
    } catch (error) {
        console.log(error);
    }
}

const GetSingleData = async(req,res)=>{
    try {
        const blogsId = req.params.id
        const DataForUpdate = await Blogger.findOne({_id:blogsId})
        if(DataForUpdate){
            return res.status(200).json({data:DataForUpdate})
        }
    } catch (error) {
        console.log(error);
    }
}

const BlogsUpdated = async(req,res)=>{
    try {
        const blogUpdatedId = req.params.id
        const UpdatedBlogsData = req.body
        const Updated = await Blogger.updateOne(
            {
            _id:blogUpdatedId
            },
            {
                $set:UpdatedBlogsData
            })
        if(Updated){
            return res.status(200).json({
                data:Updated,
                msg:"SuccessFully Updated"
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {userBlogs,getBlogsData,RemovedBlog,GetSingleData,BlogsUpdated}