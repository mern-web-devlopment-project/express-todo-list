const express=require('express')
const router=express.Router()

const {getALLToDoItems,createANewToDoItems}=require('../controllers/todo_items')
router.route("/").get(getALLToDoItems).post(createANewToDoItems);
// router.route('/').post(createANewToDoItems);
module.exports=router