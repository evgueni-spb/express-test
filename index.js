const express=require("express")

const app=express()

app.get('/',(req,res)=>{
    res.send('<h2>hello, this is root!!?</h2>')
})

// using port 5000 by default

const PORT=process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})


