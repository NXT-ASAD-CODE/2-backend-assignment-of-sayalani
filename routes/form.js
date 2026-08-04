const express = require("express")
const path = require("path");
const Filepath = path.join(process.cwd(),'views','form.ejs') // here from.ejs and form.html both are allowed
const router = express.Router();
router.get("/",(req,res)=>{
res.sendFile(Filepath)
})
router.post("/submit",(req,res)=>{
const data = req.body;
console.log(data);
res.send("data received")

})
module.exports = router;