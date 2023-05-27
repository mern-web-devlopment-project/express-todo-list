const express=require('express')
const app=express();
const PORT = 4500;
const todo_items= require('./routes/todo_items.js')

app.get('/',(req,res)=>{
  res.send("Working");
})
app.use('/api/v1',todo_items)
app.listen(PORT,console.log(`Server runs at http://localhost:${PORT}`));