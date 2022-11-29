"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if (d > 0) {
    arr.push ((-b + Math.sqrt(d) ) / (2 * a));
    arr.push ((-b - Math.sqrt(d) ) / (2 * a));
  } else if (d === 0) {
    arr.push (-b / (2 * a));
  }
  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmont;
  let monthlyPayment;
  let monthPercent = percent / 100 / countMonths; 
  let loanBody = amount - contribution;

  if (isNaN(percent)){
    alert(`«Параметр <percent> содержит неправильное значение ».${percent}`);
  } else if (isNaN(contribution) === false){
    alert(`«Параметр <contribution> содержит неправильное значение ».${contribution}`);
  } else if (isNaN(amount) === false){
    alert(`«Параметр <amount> содержит неправильное значение ».${amount}`);
  };

  monthlyPayment = loanBody * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths) - 1)));
  totalAmont = parseFloat((monthlyPayment * countMonths).toFixed(2));
  return totalAmont;
}
