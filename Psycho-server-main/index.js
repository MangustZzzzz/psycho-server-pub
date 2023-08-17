import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

import { getStartedData } from "./post-requests/serviceData.js";
import { calculationMethodology } from "./post-requests/calcutationMethodology.js";

import { registerValidation } from "./validations/auth.js";

import { login } from "./post-requests/auth/login.js";
import { register } from "./post-requests/auth/register.js";
import checkAuth from "./post-requests/auth/checkAuth.js";
import getUserData from "./post-requests/auth/getUserData.js";
import { saveTestResult, getTestsResults, deleteSavedTest } from "./post-requests/userData.js";

const app = express();

app.use(express.json()); //Создает body у req от запросов

app.use(
  cors({
    origin: [process.env.CORS_URL_ACCESS, "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.post("/started-data", (req, res) => {
  getStartedData(req, res);
});

app.post("/calulation", (req, res) => {
  calculationMethodology(req, res);
});

//////////////////-------- auth START --------/////////////////////////

app.post("/auth/register", registerValidation, (req, res) => {
  register(req, res);
});

app.post("/auth/login", (req, res) => {
  login(req, res);
});

app.post("/auth/me", checkAuth, (req, res) => {
  getUserData(req, res);
});

//////////////////-------- auth END --------/////////////////////////

//////////////////-------- user Requests START --------/////////////////////////

app.post("/user/save", checkAuth, (req, res) => {
  saveTestResult(req, res);
});

app.post("/user/get-saved-tests", checkAuth, (req, res) => {
  getTestsResults(req, res);
});

app.post("/user/delete-test", checkAuth, (req, res) => {
  deleteSavedTest(req, res);
});

//////////////////-------- user Requests END --------/////////////////////////

//////////////////-------- user Messages START --------/////////////////////////

app.post("/send/message/to-developers", checkAuth, async (req, res) => {
  try {
    const themeOfMessage = req.body.themeOfMesage;
    const message = req.body.message;
    console.log(req.body);
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "phycho.master.service@gmail.com",
        pass: "caelhqzspejjshhr",
      },
    });
    await transporter.sendMail({
      from: "Psychology Master",
      to: "phycho.master.service@gmail.com",
      subject: themeOfMessage,
      text: message,
      html: "",
    });
    res.json({
      title: "Ваше обращение было принято!",
      content: "Вы получите обратную связь в течении 24 часов на почту, указанную при регистрации. Спасибо за сотрудничество : )",
    });
  } catch (error) {
    console.log(error);
    res.status(502).json({
      title: "Во время отправки возникла ошибка ) ;",
      content: "Попробуйте повторить отправку позже",
    });
  }
});

//////////////////-------- user Messages END --------/////////////////////////

app.get("/*", (req, res) => {
  res.send("Hello World");
});
app.post("/*", (req, res) => {
  res.send("Post Hello World");
});

app.listen(process.env.PORT || 3333, (err) => {
  if (err) {
    return console.log("========", err);
  }
  console.log("Server is started ...");
});
