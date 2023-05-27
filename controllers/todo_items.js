const getALLToDoItems = (req,res)=>{
  res.send("List of all todo_items")
}



const createANewToDoItems =(req,res)=>{
  // res.send("Creating New Items")
  res.status(200).json(req.body)
}

const getAToDoItems =(req,res)=>{
  // res.send("Creating New Items")
  res.send(`Displaying Item with id ${req.params.id}`)
}

const updateAtoDoItem =(req,res)=>{
  // res.send("Creating New Items")
  res.send(`Updating Item with id ${req.params.id}`)
}

const deleteATODoItem=(req,res)=>{
  // res.send("Creating New Items")
  res.send(`Deleting Item with id ${req.params.id}`)
}
module.exports={getALLToDoItems,createANewToDoItems,getAToDoItems,updateAtoDoItem,deleteATODoItem}