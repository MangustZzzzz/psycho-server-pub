import connectToDB from "../../connection.js";

export default async (req, res) => {
  try {
    console.log("auth");
    const query = "SELECT * FROM user WHERE id = ?";
    const connection = await connectToDB();
    const [rows, fields] = await connection.query(query, [req.userId]);
    connection.end();
    if (rows.length === 0) {
      return res.status(404).json({
        message: "Мы не смогли найти ваши данные",
      });
    }
    const { password, ...userData } = rows[0];
    return res.json({
      ...userData,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Компьютерные мыши перегрызли наши связи (",
    });
  }
};
