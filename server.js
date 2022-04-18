import express from 'express';
// const express = require('express');
// const cors = require('cors');
// const mongoose = require('mongoose')
import cors from 'cors';
import mongoose from "mongoose";
import expenseController from "./controllers/expense-controller.js";
// const expenseController = require("./controllers/expense-controller");
const CONNECTION_STRING = "mongodb+srv://famjam:famjamwd@cluster1.bu0bd.mongodb.net/famjam?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
expenseController(app);
app.use(express.json());
// expenseController(app);
app.listen( process.env.PORT ||4000);