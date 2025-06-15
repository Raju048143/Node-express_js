import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("You are requested for home route")
})
app.get('/srk',(req,res)=>{
   res.send("SRK") 
})
const port = 3000;
app.listen(port,() => console.log(`server is running ${port}`))