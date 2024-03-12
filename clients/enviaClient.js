const axios = require("axios");
const {apiUrl, apiToken} = require("../config/config");

class EnviaClient {
    /**
     * Returns the single instance of the EnviaClient class.
     *
     * @returns {EnviaClient} The EnviaClient instance.
     */
    static getInstance() {
        if (!EnviaClient.instance) {
            EnviaClient.instance = new EnviaClient();
        }
        return EnviaClient.instance;
    }

    /**
     * This constructor initializes an instance of the class.
     * It creates an HTTP client using axios library with specific configurations.
     * The created client is used to send HTTP requests to 'https://api-test.envia.com/'.
     * The client sets 'Content-Type' and 'Authorization' headers in each request.
     *
     * @constructor
     * @return {void} This constructor does not return any value.
     */
    constructor() {
        this.httpClient = axios.create({
            baseURL: apiUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiToken
            },
            maxBodyLength: Infinity
        });
    }

    /**
     * Generates a ship using the provided data.
     *
     * @param {Object} data - The data needed to generate the ship.
     * @returns {Promise<any>} - A promise that resolves to the generated ship.
     * @throws {Error} - If an error occurs during the ship generation process.
     */
    async shipGenerate(data) {
        try {
            const response = await this.httpClient.post('ship/generate/', data);
            return response.data;
        } catch (e) {
            console.error('[EnviaClient] ' + e);
            throw e;
        }
    }
}

module.exports = EnviaClient;