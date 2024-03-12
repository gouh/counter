const {Server} = require("socket.io");
const {setUpCallRoutes, setUpEvents} = require("../routes/wsRoutes");

const createSocketServer = (httpServer) => {
    const io = new Server(httpServer, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"],
        },
    });

    io.on("connection", (socket) => {
        socket.on("disconnect", () => {
        });
        setUpCallRoutes(socket, io);
    });
    setUpEvents(io);

    return io;
}


module.exports = createSocketServer;
