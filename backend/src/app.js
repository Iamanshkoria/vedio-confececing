import express from "express";

import { createServer } from "node:http";

import { Server } from "Socket.io";

import mongoose from "mongoose";

import cors from "cors";

const app = express();
const server = createServer(app);
const io = new Server(server);

app.set("port",(process.env.port || 8000))
app.get("/home", (req, res) => {
  return res.jason({ Hello: "world" });
});

const start = async () => {
  app.listen(8000, () => {
    console.log("Listing on POrt 8000");
  });
};

start();
