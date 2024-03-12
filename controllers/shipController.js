const ShipService = require("../services/shipService");
const controllerPrefix = "ship/";
const shipService = ShipService.getInstance();

const showShipEvent = async (io) => {
    shipService.on(ShipService.SHOW, function (data) {
        io.emit(ShipService.SHOW, data)
    })
};

const shipSavedEvent = async (io) => {
    shipService.on(ShipService.UPDATED, function (data) {
        io.emit(ShipService.UPDATED, data)
    })
};

const shipErrorEvent = async (io) => {
    shipService.on(ShipService.ERROR, function (data) {
        io.emit(ShipService.ERROR, data)
    })
};

const onConnectCall = async (socket) => {
    shipService.showShip();
};


const saveShipCall = async (socket) => {
    socket.on(controllerPrefix + "save", async (data) => {
        await shipService.saveShip(data);
    });
};

const setUpEvents = (io) => {
    showShipEvent(io);
    shipSavedEvent(io);
    shipErrorEvent(io);
};

const setUpCallRoutes = (socket, io) => {
    onConnectCall(socket);
    saveShipCall(socket);
};

module.exports = {
    setUpEvents,
    setUpCallRoutes,
};
