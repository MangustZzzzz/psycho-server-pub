import connectToDB from "../connection.js";

export const getStartedData = async (req, res) => {
  const connection = await connectToDB();

  try {
    const query = "SELECT * FROM method";
    console.log("getStartedData");
    const [rows, fields] = await connection.query(query);

    res.json({
      seccess: true,
      result: rows,
    });
  } catch (error) {
    console.log(error);
    res.status(503).json({
      title: "Error",
      content: "error",
    });
    return error;
  } finally {
    connection.end();
  }
};
