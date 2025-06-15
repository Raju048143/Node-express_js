import express from 'express'

const app = express();

// C = Create => POST(method)

// R = Read => GET(method)
// U = Upadete => PUT(method)
// D = Delete => DELETE(method)

app.get('/srk',(req,res)=>{
   res.send("SRK") 
})
app.post('/instagram_post',(req,res)=>{
    
})
const port = 3000;
app.listen(port,() => console.log(`server is running ${port}`))