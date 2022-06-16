const express = require("express")
const app = express()
const dotenv = require("dotenv")
const morgan = require("morgan")
<<<<<<< HEAD
const mongoose = require('mongoose');
const cors = require('cors')

const corsOptions ={
  origin: "*"
}

app.use(cors(corsOptions));
=======
>>>>>>> parent of 437fe0e (backend: authentifcation and crud user)


dotenv.config({path:'.env'})

app.use(morgan("tiny"))

app.get('/', (req,res) =>{
     res.send("Crud application")
})

const port = process.env.PORT || 8080

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
 })