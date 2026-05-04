const Blog=require('../models/blog.model');
const catchAsync = require('../utils/catchAsync');
const createBlog =catchAsync(async(req,res)=>{
  
      
        await Blog.createe(req.body);
        res.send({success:true,message:"blog created"});
   
});
const getBlogs= catchAsync(async(req,res)=>{
    try{
        const blogs =await Blog.find({});
        res.json(blogs);
    }
    catch(error){
        res.end({error:true,message:error.message})
    }
});
module.exports={
    createBlog,getBlogs
}