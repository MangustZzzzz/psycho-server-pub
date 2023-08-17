export function spielbergerKhanin(answersStr) {
  const answers = answersStr.map((el) => Number(el));

  const decodData = [
    {
      maxSum: 30,
      note: "Низкая тревожность",
    },
    {
      maxSum: 45,
      note: "Средняя тревожность",
    },
    {
      maxSum: 1000,
      note: "Высокая тревожность",
    },
  ];

  const situationalAnxietyFirst = [3, 4, 6, 7, 9, 12, 13, 14, 17, 18].reduce((acc, val) => acc + answers[val - 1]);
  const situationalAnxietySecond = [1, 2, 5, 8, 10, 11, 15, 16, 19, 20].reduce((acc, val) => acc + answers[val - 1]);

  const personalAnxietyFirst = [22, 23, 24, 25, 28, 31, 32, 34, 35, 37, 38, 40].reduce((acc, val) => acc + answers[val - 1]);
  const personalAnxietySecond = [21, 26, 27, 30, 33, 36, 39].reduce((acc, val) => acc + answers[val - 1]);

  const situationalAnxiety = situationalAnxietyFirst - situationalAnxietySecond;
  const personalAnxiety = personalAnxietyFirst - personalAnxietySecond + 35;

  console.log("personalAnxiety", answers);

  const resultSituationalAnxiety = decodData.find((el) => el.maxSum >= situationalAnxiety);
  const resultPersonalAnxiety = decodData.find((el) => el.maxSum >= personalAnxiety);

  return [situationalAnxiety, resultSituationalAnxiety.note, personalAnxiety, resultPersonalAnxiety.note];
}
