import jwt from "jsonwebtoken";

import additionalData from "../../additionalData.json" assert { type: "json" };

export default (req, res, next) => {
  console.log("check");
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (!token) {
    return res.status(403).json({
      message: "У вас нет доступа к этой странице );",
    });
  } else {
    try {
      const decoded = jwt.verify(token, additionalData.secretKey, { expiresIn: "30d" });
      req.userId = decoded.id;
      next();
    } catch (error) {
      return res.status(403).json({
        message: "У вас нет доступа к этой странице );",
      });
    }
  }
};
