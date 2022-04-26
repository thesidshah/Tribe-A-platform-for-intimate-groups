import express from 'express';
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import fetch from "node-fetch";
import {google} from 'googleapis';

import usersController from "./controllers/users-controller.js";
import expenseController from "./controllers/expense-controller.js";
import todoController from "./controllers/todos-controller.js";
const CONNECTION_STRING = "mongodb+srv://famjam:famjamwd@cluster1.bu0bd.mongodb.net/famjam?retryWrites=true&w=majority"
mongoose.connect(CONNECTION_STRING);
const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
expenseController(app);
todoController(app);
usersController(app);


const oauth2Client = new google.auth.OAuth2(
    "908457627339-nuu917mjc3h6c9544rvqrv9cjvpgp5rc.apps.googleusercontent.com",
    "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",
    "http://localhost:4000/handleGoogleRedirect" // server redirect url handler
);



app.post("/createAuthLink", cors(), (req, res) => {
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: [
            "https://www.googleapis.com/auth/userinfo.profile",
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/admin.directory.user.readonly",
            //calendar api scopes]
            "https://www.googleapis.com/auth/calendar",
        ],
        prompt: "consent",
    });
    res.send({ url });
});

app.get("/handleGoogleRedirect", async (req, res) => {
    // get code from url
    const code = req.query.code;
    console.log("server 36 | code", code);
    // get access token
    oauth2Client.getToken(code, (err, tokens) => {
        if (err) {
            console.log("server 39 | error", err);
            throw new Error("Issue with Login", err.message);
        }
        const accessToken = tokens.access_token;
        const refreshToken = tokens.refresh_token;

        res.redirect(
            `http://localhost:3000?accessToken=${accessToken}&refreshToken=${refreshToken}`
        );
    });
});

app.post("/getValidToken", async (req, res) => {
    try {
        const request = await fetch("https://www.googleapis.com/oauth2/v4/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                client_id:"908457627339-nuu917mjc3h6c9544rvqrv9cjvpgp5rc.apps.googleusercontent.com",
                client_secret:"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",
                refresh_token: req.body.refreshToken,
                grant_type: "refresh_token",
            }),
        });

        const data = await request.json();
        console.log("server 74 | data", data.access_token);

        res.json({
            accessToken: data.access_token,
        });
    } catch (error) {
        res.json({ error: error.message });
    }
});

app.listen(process.env.PORT || 4000, () => {
    console.log("listening on port 4000");
});




