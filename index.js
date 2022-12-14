const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.listen(3000, ()=>{
    console.log('app listening on port 3000')
})

app.get('/', (req,res) =>{
    const ipaddress = req.socket.remoteAddress;
    res.sendFile(path.resolve(__dirname, 'mainpage.html'))
    console.log("incoming request from:" + ipaddress);
})

app.get('/l1', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'mainpage3.html'))
})