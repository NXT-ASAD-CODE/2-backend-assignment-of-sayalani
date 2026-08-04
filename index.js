const express = require("express")
const app = express();
const todo=require('./routes/todo');
app.use(express.urlencoded())
app.use(express.json())
const path = require("path");
const Filepath = path.join(process.cwd(),'public')
app.use(express.static(Filepath))
app.set("view engine","ejs")
app.set("views","views")
const form = require("./routes/form.js")
const port = 4000;
app.use('/form',form)
app.use('/todo',todo);
app.listen(port,()=>{
    console.log(`Backend is running on port ${port}`);
})