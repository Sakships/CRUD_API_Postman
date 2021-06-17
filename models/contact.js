
const mongoose=require("mongoose");
const contactSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    userEmail:{
        type:String,
        required:true,
    },
    userNumber:{
        type:Number,
        required:true,
    }
});
module.exports=mongoose.model("Contact",contactSchema);