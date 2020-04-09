const express = require('express');
const app = express();


app.get('/', (req, res) =>{
    res.send("aa");
})
app.listen(3333);