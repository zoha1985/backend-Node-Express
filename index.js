const express = require('express');
const  cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
app.use(cors())
app.use(bodyParser.json())

// Get method creation
const users = ['rofiq', 'jabber', 'korerm','borkot','salam'];
app.get('/', (req, res) => {
    const frute ={
        procuct: 'banana',
        price: 400
    }
    res.send(frute);
});
app.get('/coumputer/mous', (req,res) =>{
    res.send({digital:'coumputer',quentity:20, price:3000});
});
app.get('/user/:id', (req,res) =>{
    const id = req.params.id;
    const name = users[id];
    res.send({id, name});
    
});

// Post creation
app.post('/addUser', (req,res) => {
    // save to database
    const user = req.body;
    user.id = 2;
    res.send(user);
})

app.listen(4200, () => console.log('This is  port 4200'));