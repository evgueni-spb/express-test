const express=require("express")
const path=require("path")

const app=express()

// app.get('/',(req,res)=>{
//    // res.send('<h2>hello, this is root!!?</h2>')
//    res.sendFile(path.join(__dirname,'public','index.html'))
// })

//set static folder
app.use(express.static(path.join(__dirname,'public')))


// using port 5000 by default

const PORT=process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})


