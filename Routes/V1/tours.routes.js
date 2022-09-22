const express = require('express');
const {
    viewCount
} = require('../../midlewares/additionalMidleware');
const router = express.Router();
const TourController = require('../../TourController/tour.controller')



router.route('/cheapest')
    .get(TourController.cheapestTours)
router.route('/trending')
    .get(TourController.trendingTours)

router.route('/')
    .get(TourController.allTours)
    .post(TourController.createTour)

router.route('/:id')
    .get(viewCount, TourController.getTourById)
    .patch(TourController.updateTourById)

module.exports = router;