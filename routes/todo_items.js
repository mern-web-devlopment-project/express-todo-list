const express=require('express')
const router=express.Router()

const {getALLToDoItems,createANewToDoItems,getAToDoItems,updateAtoDoItem,deleteATODoItem}=require('../controllers/todo_items')
router.route("/").get(getALLToDoItems).post(createANewToDoItems);
// router.route('/').post(createANewToDoItems);
router.route('/:id').get(getAToDoItems).patch(updateAtoDoItem).delete(deleteATODoItem);
module.exports=router