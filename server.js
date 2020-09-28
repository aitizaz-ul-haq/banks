
const express = require('express');
const app = express();
const dotenv = require('dotenv');

const bodyParser = require('body-parser');
const cors = require('cors');

//including enviroment file
dotenv.config();

// including datbase configuration
require('./src/config/db.config');



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json({ limit: '10mb' }))

//adding cors
app.use(cors())

const port = process.env.PORT || 2000;

app.listen(port , () => {
    console.log(`Server is running on port ${port}`);
})

app.get('/' , (req, res) => {
    res.send({
        status: true,
        message: 'welcome to banks api'
    });
})

require('./src/app/routes/banks.route')(app);
require('./src/app/routes/user.route')(app);