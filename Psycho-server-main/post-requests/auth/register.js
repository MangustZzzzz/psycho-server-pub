import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { validationResult } from "express-validator";

import connectToDB from "../../connection.js";
import additionalData from "../../additionalData.json" assert { type: "json" };

export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return res.status(400).json(errors.array());
  }

  try {
    console.log("try");

    const { password, ...regData } = req.body;
    if (!regData.agreement) {
      throw new Error("Соглашение");
    }
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(regData);
    const queryRegister = `INSERT INTO user (email, password,  login, birthday, agreement)
                           VALUES (?, ? ,?, ?, ?)`;
    const connection = await connectToDB();
    const [rows, fields] = await connection.query(queryRegister, [regData.email, passwordHash, regData.login, regData.birthday, +regData.agreement]);
    connection.end();

    const token = jwt.sign(
      {
        id: rows.insertId,
      },
      additionalData.secretKey
    );
    res.json({
      seccess: true,
      token,
    });
  } catch (error) {
    console.log("register.js ERROR");
    console.log(error);
    res.json({
      message: "Какая-то ошибка REGISTER",
    });
  }
};
