const mongoose = require('mongoose');


const TourSchema = mongoose.Schema({

    title: {
        type: 'String',
        required: [true, "Please provide a title"],
    },
    location: {
        type: 'String',
        unique: [true, "Please provide an unique location"],
        required: [true, "Please provide a tour location"],
    },
    description: String,
    price: Number,
    image: {
        type: 'String',
        required: true,
    },
    hotel: String,
    contact: String,
    ratings: Number,
    views: Number,
})
const Tour = mongoose.model('Tour', TourSchema);

module.exports = Tour;