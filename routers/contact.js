const express=require("express");
const router=express.Router();
const Contact=require("../models/contact");

router.get("/",async(req,res)=>{
    try{
        const contacts = await Contact.find();
    res.json(contacts);
         //res.send("hhelloo");
    }catch(e){
        res.send(e);
    }

});

router.post("/", async(req,res)=>{
    const contacts=new Contact({
        userName: req.body.userName,
        userEmail:req.body.userEmail,
        userNumber: req.body.userNumber,
    });
    try{
        const conn_save=await contacts.save();
        res.json(conn_save);
        console.log(conn_save)
    }catch(e){
        console.log(e)
    }
});

router.get("/:id",async(req,res) => {
    try{
        const contact= await Contact.findById(req.params.id);
        res.json(contact);
    }
    catch(e){
        res.send(e);
    }
});
router.put("/:id",async(req,res)=>{
    try{
        const contact= await Contact.findById(req.params.id);
        contact.userName=req.body.userName;
        const a1= await contact.save();
        res.json(a1);
    }catch(e){
      res.send(e);
    }
  })
  router.delete("/:id",async(req,res)=>{
    try{
        const contact= await Contact.findByIdAndDelete(req.params.id);
        if(!del)
        throw Error("No User found!");
      res.status(200).json({success:true});
        
    }catch(e){
      res.send(e);
    }
  })
  module.exports = router;
