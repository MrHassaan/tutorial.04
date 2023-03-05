const express = require('express')
const app = express()
const port = 3000
const home = require("./routes/homerouter")

app.use(home)


app.listen(port,()=>{
    console.log('Server runing on 3000')
})