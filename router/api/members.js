const express=require("express")
const members=require("../../Members")

const router=express.Router()

router.get('/',(req,res) => {
    res.json(members);
    //res.send("hello");
})

router.get('/:id',(req,res)=> {
    //res.send(req.params.id)

    const found=members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({message: `No member with ${req.params.id} can be found`})
    }
}
)

module.exports=router