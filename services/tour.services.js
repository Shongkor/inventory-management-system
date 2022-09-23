const Tour = require("../models/tour.model")

exports.createTourService = async (data) => {
    const tour = await Tour.create(data);
    return tour;
}
exports.getAllTourServices = async (filter, query) => {
    const allTours = await Tour.find(filter).skip(query.skip).limit(query.limit).select(query.selectBy).sort(query.sortBy);
    return allTours;
}
exports.getCheapestTourServices = async () => {
    const cheapestTours = await Tour.find({}).sort({
        price: 1
    }).limit(3);
    return cheapestTours;
}
exports.getTrendingTourServices = async () => {
    const trendingTours = await Tour.find({}).sort({
        views: -1
    }).limit(3);
    return trendingTours;
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