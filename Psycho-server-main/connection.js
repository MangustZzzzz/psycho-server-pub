import mysql2 from "mysql2/promise";
import { createConnection } from "mysql2";

import dataConnect from "./dbKeys.json" assert { type: "json" };

async function connectToDB() {
  try {
    const conn = await mysql2.createConnection({
      host: dataConnect.host,
      user: dataConnect.user,
      database: dataConnect.databaseName,
      password: dataConnect.password,
    });

    conn.connect((err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("DB connected");
    });

    return conn;
  } catch (error) {
    console.error(error);
    return;
  }
}

export default connectToDB;

export const db = (() => {
  const conn = createConnection({
    host: dataConnect.host,
    user: dataConnect.user,
    database: dataConnect.databaseName,
    password: dataConnect.password,
  });

  conn.connect((err) => {
    if (err) {
      return err;
    }
    console.log("DB connected");
  });
  return conn;
})();
