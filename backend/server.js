const express = require("express")
const app = express()
const dotenv = require("dotenv")
const morgan = require("morgan")


dotenv.config({path:'.env'})

app.use(morgan("tiny"))

app.get('/', (req,res) =>{
     res.send("Crud application")
})

const port = process.env.PORT || 8080

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
 })