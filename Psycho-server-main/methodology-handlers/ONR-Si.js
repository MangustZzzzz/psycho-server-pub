export function onr(answers) {
  let metrics = [];
  const howCalc = [
    [1, 4, 21, 24, 41, 44, 61, 71, 81, 84, 101, 104, 121, 124],
    [2, 22, 42, 62, 75, 82, 122],
    [16, 36, 56, 64, 76, 96, 112, 116, 118, 126],
    [19, 39, 79, 99, 119],
    [5, 25, 45, 65, 85, 105, 125],
    [6, 26, 46, 66, 72, 86, 102, 106],
    [7, 27, 47, 67, 87, 107, 137],
    [8, 28, 48, 68, 88, 108, 128, 138],
    [12, 18, 32, 38, 52, 58, 78, 92],
    [10, 30, 50, 73, 130],
    [17, 37, 57, 77, 97, 117],
    [15, 35, 55, 90, 95, 110, 115],
    [3, 9, 11, 13, 14, 20, 23, 29, 31, 33, 34, 40, 43, 49, 51, 53, 54, 59, 60, 63, 69, 70, 74, 80, 83, 89, 91, 93, 94, 98, 100, 103, 109, 111, 113, 114, 120, 123, 127, 129, 131, 132, 133, 134, 135, 136],
  ];

  const countAnswer = (num) => {
    if (num == 0) return 0;
    if (num == 1) return 4;
    if (num == 2) return 5;
    return 7;
  };

  for (let i = 0; i < howCalc.length; i++) {
    metrics.push(
      howCalc[i].reduce((accumulator, numOfQuestion) => {
        return accumulator + countAnswer(answers[numOfQuestion - 1]);
      }, 0)
    );
  }
  metrics.push(metrics.reduce((sum, el) => sum + el));
  console.log(metrics);
  return metrics;
}
