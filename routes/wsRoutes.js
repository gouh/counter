const qrController = require('../controllers/shipController');

const setUpEvents = (io) => {
    qrController.setUpEvents(io);
}

const setUpCallRoutes = (socket) => {
    qrController.setUpCallRoutes(socket);
}

module.exports = {
    setUpEvents,
    setUpCallRoutes,
};
