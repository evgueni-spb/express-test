const express=require("express")
const path=require("path")
const members=require("./Members")

const app=express()

// app.get('/',(req,res)=>{
//    // res.send('<h2>hello, this is root!!?</h2>')
//    res.sendFile(path.join(__dirname,'public','index.html'))
// })

const logger=(req,res,next)=>{
    console.log("logging")
    next()
}

app.use(logger)


app.get('/api/members',(req,res) => {
    res.json(members);
    //res.send("hello");
})

//set static folder
//app.use(express.static(path.join(__dirname,'public')))


// using port 5000 by default

const PORT=process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})


