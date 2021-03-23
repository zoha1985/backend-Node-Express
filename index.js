const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.send("Thanks you ver much zoha");
})

app.listen(4200, () => console.log('This is  port 4200'));