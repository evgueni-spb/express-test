const express=require("express")
const members=require("../../Members")
const uuid=require("uuid")
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


//create member
router.post('/',(req,res)=>{
    const newMember={
        "id":uuid.v4(),
        "name":req.body.name,
        "age":req.body.age
    }

    if(req.body.name==null || req.body.age==null){
        res.status(400).json({"msg":"Name and Age are required"})
        return
    }

    members.push(newMember)
    res.json(members)
})

//update member
router.put('/:id',(req,res)=> {

    const found=members.some(member => member.id === parseInt(req.params.id))
    if(found){
        const updatedMember=req.body
        members.forEach( function(member) {
            if(member.id === parseInt(req.params.id)){
                member.name=member.name === updatedMember.name ? updatedMember.name:member.name
                member.age=member.age === updatedMember.age ? updatedMember.age:member.age

                res.json({"msg":"Member was updated","member":member})
                return
            }
        });
    }else{
        res.status(400).json({message: `No member with ${req.params.id} can be found`})
    }
}
)

//delete member
router.delete('/:id',(req,res)=> {
    //res.send(req.params.id)

    const found=members.some(member => member.id === parseInt(req.params.id))
    if(found){
        res.json({msg:'Member deleted',mems:members.filter(member => member.id !== parseInt(req.params.id))})
    }else{
        res.status(400).json({message: `No member with ${req.params.id} can be found`})
    }
}
)



module.exports=router