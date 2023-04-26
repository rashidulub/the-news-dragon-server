const  express = require("express");
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

const categories = require('./data/categoris.json')
 
app.get('/',(req,res)=>{
    res.send('dragon is running')
})

app.use(cors());

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.listen  (port ,()=>{
    console.log(`dragon API in runnning on port:${port}`);
})