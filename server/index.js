const express = require('express')
const app = express()
const cors = require('cors')
const routers = require('./Routers/routers')

const corsOptions ={
    origin:"http://localhost:5173",
    methods:'POST,UPDATE,GET,DELETE,PATCH',
    credentials:true
}

app.use(cors(corsOptions))
app.use(express.json())
app.use('/v1/users',routers)

let PORT = 5000
app.listen(PORT,()=>{
    console.log(`Server run On ${PORT}`);
})