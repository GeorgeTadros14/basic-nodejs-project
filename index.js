const express=require('express');
const mongoose=require('mongoose');
const app=express();
const blogRouter=require('./routes/blog.route');
const config=require('./config/config');
const{errorHandler}=require('./middlewares/error')
mongoose
    .connect(config.dbConnection)
    .then(()=>{
        console.log('connection successful');
    })
    .catch((err)=>{
        console.error(err);
    });

app.use(express.json());
app.use(blogRouter);
app.use(errorHandler);
app.listen(config.port,()=>{
    console.log(`server is listening on port ${config.port}`);
});
