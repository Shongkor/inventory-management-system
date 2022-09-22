const {
    viewCount
} = require("../midlewares/additionalMidleware");
const {
    createTourService,
    getAllTourServices,
    getTourByIdService,
    updateTourByIdService,
    getCheapestTourServices,
    getTrendingTourServices
} = require("../services/tour.services");




module.exports.allTours = async (req, res) => {
    try {
        const allTours = await getAllTourServices();
        res.status(200).json(allTours);
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message,
        })
    }
}
module.exports.cheapestTours = async (req, res) => {
    try {
        const cheapestTours = await getCheapestTourServices();
        res.status(200).json(cheapestTours);
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message,
        })
    }
}
module.exports.trendingTours = async (req, res) => {
    try {
        const cheapestTours = await getTrendingTourServices();
        res.status(200).json(cheapestTours);
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message,
        })
    }
}

module.exports.createTour = async (req, res) => {
    try {
        const tourData = req.body;
        const data = await createTourService(tourData);
        res.status(200).json({
            status: "success",
            data: data,
        });
    } catch (err) {
        res.status(500).json({
            status: "fail",
            message: err.message,
        })
    }

}
module.exports.getTourById = async (req, res) => {
    try {
        const {
            id
        } = req.params;

        // console.log(id);
        const selectedIdTour = await getTourByIdService(id);

        res.status(200).json({
            status: "success",
            data: selectedIdTour,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "fail",
            message: err.message,
        })
    }

}
module.exports.updateTourById = async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const updateTour = req.body;
        // console.log(id);
        const selectedIdTour = await updateTourByIdService(id, updateTour);
        res.status(200).json({
            status: "success",
            data: selectedIdTour,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            status: "fail",
            message: err.message,
        })
    }

}