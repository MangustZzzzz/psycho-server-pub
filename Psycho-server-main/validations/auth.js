import { body } from "express-validator";

export const registerValidation = [
  body("email", "С введенными вами данными что-то не так ); Пожалуйста, проверьте их и попробуйте еще раз").isEmail(),
  body("password", "С введенными вами данными что-то не так ); Пожалуйста, проверьте их и попробуйте еще раз").isLength({ min: 6, max: 25 }),
  body("login", "С введенными вами данными что-то не так ); Пожалуйста, проверьте их и попробуйте еще раз").isLength({ min: 3, max: 20 }),
];
