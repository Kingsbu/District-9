let express = require('express');
let app = express();
const mongoose = require('mongoose');
let userRoute = require('./routes/user');
let lawyerRoute = require('./routes/lawyer');
let path = require('path');
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(userRoute);
app.use(lawyerRoute);
app.use(express.static('public'));

// Handler for 404 - Resource Not Found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost!')
})

// Handler for 500 
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.sendFile(path.join(__dirname, '../public/500.html'))
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

