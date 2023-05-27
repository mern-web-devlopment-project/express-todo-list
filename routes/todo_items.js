const express=require('express')
const router=express.Router()

const {getALLToDoItems}=require('../controllers/todo_items')
router.route("/").get(getALLToDoItems);
module.exports=router