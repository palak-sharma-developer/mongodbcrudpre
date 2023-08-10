const express = require("express")
const PORT = 8002
const app = express()
const mongoose = require("./db/connect")
const  user = require("./models/product")

//middleware
app.use(express.json())

app.get("/",(req, res)=>{
    res.send("welcome to the home page")
})
app.listen(PORT,()=>{
    console.log(`connected on port no ${PORT}`)
})

