import { tabol } from "../methodology-handlers/tobol.js";
import { onr } from "../methodology-handlers/ONR-Si.js";
import { cmas } from "../methodology-handlers/CMAS.js";
import { childAnxietyAndNeurosis } from "../methodology-handlers/child-anxiety-and-neurosis.js";
import { spielbergerKhanin } from "../methodology-handlers/spielberger-khanin.js";

export const calculationMethodology = (req, res) => {
  console.log(req.body);
  const { methodologyId, answers, age, gender } = { ...req.body };
  let result = [];
  switch (methodologyId) {
    case "3":
      result = onr(answers);
      break;
    case "4":
      result = tabol(answers);
      break;
    case "5":
      console.log(answers)
      result = cmas(answers, age, gender);
      break;
    case "6":
      result = childAnxietyAndNeurosis(answers);
      break;
    case "7":
      result = spielbergerKhanin(answers);
      break;
    default:
      break;
  }
  res.json({
    seccess: true,
    result,
  });
};
