const joi =require('joi');
const ApiError=require('./../utils/ApiError');
const validate=(schema)=>(req,res,next)=>{
    const keys = ['params','body','query'];
    const object=keys.reduce((obj,key)=>{
        if(Object.prototype.hasOwnProperty.call(req,key)){
            obj[key]=req[key];
        }
        return obj;
    },{});
    const {value,error}=joi.compile(schema).validate(object);
    console.log(object);
    if(error){
        const errors=error.details.map((detail)=>{
            return{ key:detail.context.key,message:detail.message};
        });
       next(new ApiError(400,errors));
    }
return next();
};
module.exports=validate;