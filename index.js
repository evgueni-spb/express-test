const express=require("express")

const app=express()

app.get('/',(req,res)=>{
    res.send('<h2>hello, this is root!!?</h2>')
})

// using port 5000 by default
//comment added in experimental-1 branch!
//one more comment in the experimental-1 branch

//add comment in the master branch


const PORT=process.env.PORT || 5000

app.listen(PORT, ()=>{
    console.log(`Server is listening on ${PORT}`)
})


