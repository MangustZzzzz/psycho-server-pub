import connectToDB from "../connection.js";

export const getTestsResults = async (req, res) => {
  const connection = await connectToDB();
  try {
    const query = `SELECT tested_person.nickname,tested_person.age, tested_person.gender,test_result.id, test_result.data, test_result.date, method.name as method 
                   FROM tested_person
                   JOIN test_result ON tested_person.id = test_result.id_tested_person
                   JOIN method ON test_result.id_method = method.id
                   WHERE tested_person.id_user = (?)
                  `;
    const [rows, fields] = await connection.query(query, [req.userId]);

    // if (rows.length === 0) {
    //   return res.status(404).json({
    //     message: "Мы не смогли найти ваши данные",
    //   });
    // }
    return res.json([...rows]);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Компьютерные мыши перегрызли наши связи (",
    });
  } finally {
    connection.end();
  }
};

export const saveTestResult = async (req, res) => {
  const connection = await connectToDB();

  try {
    console.log(req.body);
    const userId = Number(req.body.userId);
    const methodologyId = Number(req.body.methodologyId);
    console.log("req.body", req.body);

    const testedPersonNickname = req.body.testedPersonData.nickname.replace(/[^a-zA-Z0-9а-яА-Я]/g, "");
    const gender = req.body.testedPersonData.gender.replace(/[^a-z]/g, "");
    const testedPersonBirth = new Date(req.body.testedPersonData.birthPerson);
    const analysisResult = [];
    const personResponses = [];
    req.body.analysisResult.map((elem) => {
      // if (typeof elem.value !== "number") {
      //   throw new Error("Parameter is not a number!");
      // }

      const param = {
        name: elem.name.replace(/[^a-zA-Zа-яА-Я\s\(\)]/g, ""),
        value: elem.value,
      };
      analysisResult.push(param);
    });

    req.body.personResponses.map((elem) => {
      if (isNaN(Number(elem))) {
        throw new Error("Parameter is not a number!");
      }

      personResponses.push(elem);
    });

    const data = {
      analysisResult,
      personResponses,
    };

    await connection.beginTransaction();

    const [rows, fields] = await connection.execute("INSERT INTO tested_person (id_user, nickname, age, gender) VALUES (?, ?, ?, ?)", [userId, testedPersonNickname, testedPersonBirth, gender]);
    const personId = rows.insertId;

    await connection.execute("INSERT INTO test_result (id_method, id_tested_person, data, user_id) VALUES (?, ?, ?, ?)", [methodologyId, personId, JSON.stringify(data), userId]);

    await connection.commit();

    res.json({
      title: "Сохранение",
      content: "Сохранение прошло успешно",
    });
  } catch (error) {
    console.log(error);
    await connection.rollback();
    res.json({
      title: "Сохранение не удалось",
      content: "Во время сохранения произошла ошибка( Попробуйте еще раз",
    });
  } finally {
    connection.end();
  }
};

export const deleteSavedTest = async (req, res) => {
  const connection = await connectToDB();
  try {
    console.log(req.body);
    const query = `DELETE FROM test_result
                    WHERE id = ? AND user_id = ?
                  `;
    const [rows, fields] = await connection.query(query, [req.body.itemId, req.userId]);

    // if (rows.length === 0) {
    //   return res.status(404).json({
    //     message: "Мы не смогли найти ваши данные",
    //   });
    // }
    console.log(rows);
    return res.json({
      title: "Удаление записи",
      content: "Удаление выполнено успешно",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      title: "Удаление записи",
      content: "Во время удаления возникла ошибка (",
    });
  } finally {
    connection.end();
  }
};
