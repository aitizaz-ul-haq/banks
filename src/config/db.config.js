// including mongoose middleware
const mongoose = require('mongoose');

// adding mongoose uri
const uri = process.env.DB_URI

// adding options
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

// connecting database
mongoose.connect(uri , options)
.then(() => {
    console.log('db connection successful')
})
.catch((error) => {
    console.log(error)
})