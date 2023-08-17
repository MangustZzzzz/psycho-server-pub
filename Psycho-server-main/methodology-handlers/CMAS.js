export function cmas(answersStr, age, gender) {
  let answers = answersStr.map((el) => Number(el));
  console.log(age, gender);
  const stenDecode = [
    {
      value: 2,
      characteristic: "Состояние тревожности испытуемому не свойственно",
      note: "Подобное «чрезмерное спокойствие» может иметь и не иметь защитного характера",
    },
    {
      value: 6,
      characteristic: "Нормальный уровень тревожности",
      note: "Необходим для адаптации и продуктивной деятельности",
    },
    {
      value: 8,
      characteristic: "Несколько повышенная тревожность",
      note: "Часто бывает связана с ограниченным кругом ситуаций, определенной сферой жизни",
    },
    {
      value: 9,
      characteristic: "Явно повышенная тревожность",
      note: "Обычно носит «разлитой», генерализованный характер",
    },
    {
      value: 10,
      characteristic: "Очень высокая тревожность",
      note: "Группа риска",
    },
  ];

  const decodingWoman = [
    {
      maxAge: 7,
      maxValuesForStens: [2, 4, 7, 10, 14, 18, 21, 25, 29, 1000],
    },
    {
      maxAge: 9,
      maxValuesForStens: [0, 3, 7, 11, 15, 19, 22, 26, 30, 1000],
    },
    {
      maxAge: 11,
      maxValuesForStens: [3, 7, 10, 14, 18, 21, 25, 28, 32, 1000],
    },
    {
      maxAge: 1000,
      maxValuesForStens: [6, 9, 13, 16, 20, 23, 27, 30, 33, 1000],
    },
  ];

  const decodingMan = [
    {
      maxAge: 7,
      maxValuesForStens: [3, 6, 9, 12, 15, 18, 21, 24, 26, 1000],
    },
    {
      maxAge: 9,
      maxValuesForStens: [1, 4, 7, 11, 14, 17, 20, 23, 26, 1000],
    },
    {
      maxAge: 11,
      maxValuesForStens: [2, 6, 9, 13, 16, 20, 23, 27, 30, 1000],
    },
    {
      maxAge: 1000,
      maxValuesForStens: [5, 8, 11, 14, 17, 20, 22, 25, 28, 1000],
    },
  ];

  const subscale = [
    { numOfQuestion: 5, value: true },
    { numOfQuestion: 10, value: false },
    { numOfQuestion: 17, value: true },
    { numOfQuestion: 21, value: true },
    { numOfQuestion: 30, value: true },
    { numOfQuestion: 34, value: true },
    { numOfQuestion: 36, value: true },
    { numOfQuestion: 41, value: false },
    { numOfQuestion: 47, value: false },
    { numOfQuestion: 49, value: false },
    { numOfQuestion: 52, value: false },
  ];

  const scale = [1, 2, 3, 4, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 35, 37, 38, 39, 40, 42, 43, 44, 45, 46, 48, 50, 51, 53];

  let accSubscale = 0;
  let accScale = 0;

  for (let i = 0; i < subscale.length; i++) {
    const numOfQuestion = subscale[i].numOfQuestion - 1;
    const valueOfAnswer = subscale[i].value;

    if (answers[numOfQuestion] == valueOfAnswer) {
      accSubscale++;
    }
  }

  for (let i = 0; i < scale.length; i++) {
    const numOfQuestion = scale[i] - 1;

    if (answers[numOfQuestion]) {
      accScale++;
    }
  }

  if (gender == "male") {
    const { maxValuesForStens } = decodingMan.find((elem) => elem.maxAge >= age);
    const sten = maxValuesForStens.findIndex((val) => val >= accScale) + 1;
    const { value, ...data } = stenDecode.find((elem) => elem.value >= sten);
    const result = Object.entries(data).map((el) => el[1]);
    return [accScale, sten, ...result];
  } else if (gender == "female") {
    const { maxValuesForStens } = decodingWoman.find((elem) => elem.maxAge >= age);
    const sten = maxValuesForStens.findIndex((val) => val >= accScale) + 1;
    const { value, ...data } = stenDecode.find((elem) => elem.value >= sten);
    const result = Object.entries(data).map((el) => el[1]);
    return [accScale, sten, ...result];
  } else {
    return -1;
  }
}
