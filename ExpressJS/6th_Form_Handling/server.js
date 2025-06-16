import express from 'express'

const app = express();
app.get('/',(req,res)=>{

})
const port = 3000;

app.listen(port,()=>console.log(`running ${port}`))