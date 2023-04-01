import express from "express";
import dotenv from "dotenv";

const server = express();
dotenv.config();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));


export { server };