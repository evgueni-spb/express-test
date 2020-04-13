const express=require("express")
const path=require("path")
const logger=require("./middleware/logger")

const app=express()

// app.get('/',(req,res)=>{
//    // res.send('<h2>hello, this is root!!?</h2>')
//    res.sendFile(path.join(__dirname,'public','index.html'))
// })

app.use('/api/members',require('./router/api/members'))

app.use(logger)



//set static folder
//app.use(express.static(path.join(__dirname,'public')))


// using port 5000 by default

const PORT=process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})


