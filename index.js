const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser');
const toursRoutes = require('./Routes/V1/tours.routes');
app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost:27017/tour-management-system-database").then(() => {
    console.log("Database Connect Successfully");
})



app.use('/api/v1/tours', toursRoutes);


app.get('/', (req, res) => {
    res.send("hello world!")
});

app.all('*', function (req, res) {
    res.send('No Route Found')
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}....`)
});