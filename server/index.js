const WebSocket = require("ws");

const webSocketServer = new WebSocket.Server({ port: 8082 });

webSocketServer.on("connection", ws => {
    console.log("Client connected.");

    ws.on("message", data => {
        console.log(`Client has sent us: ${data}`);
    });

    ws.on("close", () => {
        console.log("Client has disconnected.");
    });
});
