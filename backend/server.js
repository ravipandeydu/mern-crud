const express = require("express");

const app = express();

app.use("/", (req, res)=>{
    res.send("Home Page")
})

app.listen(8070, ()=>{
    console.log("listening to Port 8070")
})