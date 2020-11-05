const express = require('express');
let app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/./public'))
app.use(express.json())

app.get('/bundle', function (req, res) {
    res.sendFile(__dirname + '/./client/dist/bundle.js');
});


let port = 3000;

app.listen(port, function () {
    console.log(`listening on port ${port}`);
});