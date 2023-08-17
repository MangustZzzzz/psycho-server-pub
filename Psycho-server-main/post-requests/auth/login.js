import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import connectToDB from "../../connection.js";
import additionalData from "../../additionalData.json" assert { type: "json" };

export const login = async (req, res) => {
  try {
    const user = req.body;

    const connection = await connectToDB();
    const query = "SELECT * FROM user WHERE email = ?";
    const [rows, fields] = await connection.query(query, [user.email]);
    connection.end();

    if (rows.length === 0) {
      return res.status(404).json({
        message: "Почта и/или пароль указаны не верно",
      });
    }
    const isValidPassword = await bcrypt.compare(user.password, rows[0].password);

    if (!isValidPassword) {
      return res.status(404).json({
        message: "Почта или пароль указаны не верно",
      });
    }

    const token = jwt.sign(
      {
        id: rows[0].id,
      },
      additionalData.secretKey,
      { expiresIn: "30d" }
    );
    res.json({
      seccess: true,
      token,
    });
  } catch (error) {
    console.log("Login.js ERROR");
    console.log(error);
    res.status(500).json({
      message: "Какая-то ошибка LOGIN",
    });
  }
};
