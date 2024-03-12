class SocketClient {
    static getInstance() {
        if (!SocketClient.instance) {
            SocketClient.instance = new SocketClient();
        }
        return SocketClient.instance;
    }

    constructor() {
        this._io = io('http://localhost:3000');
    }

    async sendData({path, params, fireAndForget = false, timeout = 2000}) {
        return new Promise((resolve, reject) => {
            try {
                let callback;
                if (!fireAndForget) {
                    const timeoutId = setTimeout(() => {
                        reject(new Error('timeout'));
                    }, timeout);

                    callback = (response) => {
                        clearTimeout(timeoutId);
                        resolve(response);
                    }
                }
                const args = [path];
                if (params) {
                    args.push(params);
                }
                if (callback) {
                    args.push(callback);
                }
                this._io.emit(...args);
                if (fireAndForget) {
                    resolve();
                }
            } catch (e) {
                reject(e);
            }
        });
    }

    disconnect() {
        this._io.disconnect();
    }

    subscribe(eventName, callback) {
        this._io.on(eventName, callback);
    }

    unsubscribe(eventName, callback) {
        this._io.off(eventName, callback);
    }
}

