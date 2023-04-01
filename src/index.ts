import { server } from "./configs/server";

const SERVER_PORT = process.env.SERVER_PORT ?? 8080;

server.listen(SERVER_PORT, () => {

    console.log(SERVER_PORT, "Server is running...");
});