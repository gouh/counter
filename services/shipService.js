const Events = require("events");
const EnviaClient = require("../clients/enviaClient");

class ShipService extends Events {
    static SHOW = 'ship.show';
    static UPDATED = 'ship.updated';
    static ERROR = 'ship.error';

    /**
     * Retrieves the instance of the ShipService class.
     *
     * @returns {ShipService} The instance of the ShipService class.
     */
    static getInstance() {
        if (!ShipService.instance) {
            ShipService.instance = new ShipService();
        }
        return ShipService.instance;
    }

    /**
     * Constructs a new instance of the class.
     *
     * @constructor
     *
     * @return {void} Returns nothing.
     */
    constructor() {
        super();
        this.trackingNumbers = [];
        this.enviaClient = EnviaClient.getInstance();
    }

    /**
     * Saves a ship's data.
     *
     * @param {object} data - The ship's data to be saved.
     */
    async saveShip(data) {
        try {
            const response = await this.enviaClient.shipGenerate(data);
            if (response.meta === 'error') {
                throw response.error;
            }
            const newTrackingNumbers = response.data.map(item => item.trackingNumber);
            this.trackingNumbers = Array.from(new Set([...this.trackingNumbers, ...newTrackingNumbers]));
            this.emit(ShipService.UPDATED, {trackingNumbers: this.trackingNumbers});
        } catch (err) {
            console.error('[ShipService] ', err);
            this.emit(ShipService.ERROR, {err});
        }
    }

    showShip() {
        this.emit(ShipService.SHOW, {trackingNumbers: this.trackingNumbers});
    }
}

module.exports = ShipService;