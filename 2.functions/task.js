function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++){
    if (max < arr[i]){
      max = arr[i];
    } else if (min > arr[i]){
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = parseFloat((sum / arr.length).toFixed(2))
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length > 0){
    const sumWithInitial = arr.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    return sumWithInitial;
  } else {
    return 0;
  }
}

function differenceMaxMinWorker(...arr) {
  if (arr.length > 0) {
    return Math.max(...arr) - Math.min(...arr);
  } else {
    return 0;
  }
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  
  if (arr.length > 0){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0){
        sumEvenElement += arr[i];
      } else {
        sumOddElement += arr[i];
      }
    }
    return sumEvenElement - sumOddElement;
  } else {
    return 0;
  }
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0; 
  if (arr.length > 0){
    for (let i = 0; i < arr.length; i++){
      if (arr[i] % 2 == 0){
        sumEvenElement += arr[i];
        countEvenElement ++;
      }
    }
    return sumEvenElement / countEvenElement;
  } else {
    return 0;
  }   
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  const result = [];

  for (let i = 0; i < arrOfArr.length; i++){
    result.push(func(...arrOfArr[i]));
  } if (Math.max(...result) > maxWorkerResult) {
    maxWorkerResult = Math.max(...result)
  }
  return maxWorkerResult;
}
