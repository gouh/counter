class ShipClient {
    constructor() {
        this.controllerPrefix = 'ship/';
        this.wsClient = SocketClient.getInstance();
    }

    /**
     * Saves a ship by sending data to the server.
     *
     * @param {Object} data - The data of the ship to be saved.
     * @returns {Promise<void>} - A promise that resolves when the ship is saved successfully. Throws an error if there is an issue with saving the ship.
     */
    async saveShip(data) {
        try {
            await this.wsClient.sendData({path: this.controllerPrefix + 'save', fireAndForget: true, params: data});
        } catch (e) {
            console.error(`[GuideClient] error: ${e}`);
            throw e;
        }
    }

    on(event, listener) {
        this.wsClient.subscribe(event, listener);
    }

    off(event, listener) {
        this.wsClient.unsubscribe(event, listener);
    }
}
