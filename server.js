import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
const CONNECTION_STRING = "mongodb+srv://famjam:famjamfj@cluster1.bu0bd.mongodb.net/famjam?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
app.use(express.json());
app.listen( process.env.PORT ||4000);