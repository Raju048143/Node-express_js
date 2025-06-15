import http from 'http'

const server = http.createServer((req,res)=>{
    res.end("You requested")
});

const port = 3000;

server.listen(port,()=> console.log(`server is running on port ${port}`))