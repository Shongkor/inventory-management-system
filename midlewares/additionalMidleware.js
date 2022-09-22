const {
    getTourByIdService,
    updateTourByIdService
} = require("../services/tour.services");


exports.viewCount = async (req, res, next) => {
    const {
        id
    } = req.params;
    console.log(id);
    const foundedTour = await getTourByIdService(id);
    console.log(foundedTour);
    let views = foundedTour.views + 1;
    console.log(views);
    await updateTourByIdService(id, updateBy = {
        views
    })
    next();
}