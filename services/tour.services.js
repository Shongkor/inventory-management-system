const Tour = require("../models/tour.model")

exports.createTourService = async (data) => {
    const tour = await Tour.create(data);
    return tour;
}
exports.getAllTourServices = async () => {
    const allTours = await Tour.find();
    return allTours;
}
exports.getCheapestTourServices = async () => {
    const cheapestTours = await Tour.find({}).sort({
        price: 1
    }).limit(3);
    return cheapestTours;
}
exports.getTourByIdService = async (id) => {
    const selectedTour = await Tour.findById(id);
    return selectedTour;
}
exports.updateTourByIdService = async (id, updateTour) => {
    const selectedTour = await Tour.findByIdAndUpdate(id, updateTour, {
        runValidators: true,
        new: true,
    });
    return selectedTour;
}