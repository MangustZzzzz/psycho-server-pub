export function childAnxietyAndNeurosis(answersSrt) {
  const answers = answersSrt.map((el) => Number(el));
  const decodeData = [
    {
      maxSumAnswers: 4,
      result: "Отклонения несущественны или отражают возвратные, преходящие особенности ребенка",
    },
    {
      maxSumAnswers: 9,
      result: "Есть предрасположенность к возникновению нервного расстройства, необходимо внимательнее относиться к ребенку",
    },
    {
      maxSumAnswers: 19,
      result: "Невроз был или будет в ближайшее время",
    },
    {
      maxSumAnswers: 30,
      result: "Невроз у ребенка несомненен",
    },
  ];

  const sumAnswers = answers.reduce((acc, val) => acc + Number(val));
  console.log(sumAnswers);
  const decode = decodeData.find((el) => el.maxSumAnswers >= sumAnswers);
  return [sumAnswers, decode.result];
}
