//const answers = 6; //[1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1];
let metrics = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

const howCalc = [
  //1
  [
    [0, 0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 5, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, -1, 0, 0, 0, 4, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [5, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 3, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
    [3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
  ],
  //2
  [
    [0, 0, 0, 4, 0, 2, 0, 0, -1, 0, -1, 0],
    [0, 0, 0, 4, 0, 0, -1, 0, 0, 0, 0, 0],
    [4, 0, 0, 4, -1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 5, 0],
    [0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 0, 5, 4, 0, 0, 0],
    //
  ],
  //3
  [
    [3, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0],
    [0, 0, 4, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0],
    //
  ],
  // Это тот что есть (4) - лучше бы их написать попорядку, чтобы потом не путаться
  [
    [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0],
    [0, 3, 0, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 0, 0, 3, 4, 0, 0],
    [0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 3, 0, 0, 0, 0, 3, 0, 4, 0],
    [4, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 0, 3, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 5, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0],
    //
  ],
  //5
  [
    [0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0],
    [0, -1, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 5, 0],
    [-1, 0, 5, 0, -1, -1, 0, 5, 0, -1, 5, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 5, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
    [0, 4, 0, 0, 0, 5, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 5, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 4, 0, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 5, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 4, 0, 0],
    //
  ],
  //6
  [
    [-1, 0, 4, -1, 0, 0, -1, 0, 0, 0, -1, 0, 3, 0, 0],
    [3, 0, 3, 0, -1, 0, -1, 0, 0, 0, 0, 2, 0, 0, 0],
    [5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 4, 0, 0, 3, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
    [0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 5, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 4, 0, 0, 0, 5, 0],
    //
  ],
  //7
  [
    [3, 0, 0, -1, 0, 0, 0, 0, 3, 0, 0, 0, -1, 0],
    [2, 0, 0, 0, 0, 0, 0, -1, 2, 0, 0, 5, 5, 0],
    [0, 0, 0, 0, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 4, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 4, 0],
    [0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 4, 0, 0, 3, 0, 0, 0, 0, 0],
    [5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 5, 4, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0],
    //
  ],
  //8
  [
    [-1, 4, 0, 0, 0, 0, 0, -1, 0, 0, 0, 4, 0],
    [0, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [-1, 0, 4, 0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 4, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 0, 0, 5, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0],
    //
  ],
  //9
  [
    [0, 0, -1, -1, 0, 0, 0, 0, 4, 4, 0, 4, 0, 0, 0],
    [0, 0, -1, 0, 0, 0, -1, 5, 0, 5, 0, 4, 0, 0, 0],
    [-1, 0, 0, -1, 0, 0, 0, 4, 0, 0, 0, 0, 3, 4, 0],
    [0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
    [4, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 0, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 0, 4, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0],
  ],
  //10
  [
    [-1, 0, -1, 4, 0, -1, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 0, 4, -1, 0, -1, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 4, 0, 0, 5, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 4, 4, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 5, 0, 0, 0],
    [0, 0, 4, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0, 0],
  ],
  //11
  [
    [-1, 0, 4, 0, 0, 0, 3, -1, 3, 0, 0],
    [0, 0, 4, 0, 0, 0, 3, 0, 0, 0, 0],
    [-1, 0, 0, -1, 0, 0, 0, 0, 2, -1, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 4, 0, 0, 0, 0, 0, 4, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 4, 0, 4, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0],
    [3, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 0, 0, 3, 0],
    [3, 0, 0, 0, 3, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
  ],
  //12
  [
    [0, 0, 3, 4, 0, 0, -1, 0, 0, -1, 0, 0],
    [0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0],
    [-1, 5, 4, 0, 4, 0, 0, -1, 0, 0, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 5, 0],
    [4, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 3, 0],
    [5, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0],
    [3, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 4, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 3, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0],
  ],
  ////////////////////////////////////////////////////////////////////////////////////////////////////////
];

function calc(answ, numOfSquare) {
  for (let i = 0; i < howCalc[numOfSquare].length; i++) {
    // if (howCalc[index][i][answ - 1] === undefined) {
    //   continue;
    // }
    if (metrics[i] >= 0) {
      metrics[i] += howCalc[numOfSquare][i][answ - 1];
      console.log("#", numOfSquare, "=>", answ, "---", howCalc[numOfSquare][i][answ - 1]);
      continue;
    }
    if (howCalc[numOfSquare][i][answ - 1] < 0) {
      metrics[i] = -1;
      continue;
    }
  }
}

export function tabol(answers) {
  metrics = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    calc(Number(answers[i]), i);
  }
  metrics.forEach((el, index) => {
    if (el < 0) {
      metrics[index] = 0;
    }
  });
  return metrics;
}
