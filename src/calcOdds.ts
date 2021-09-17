/* 
x = matching numbers
k = picked numbers
n = possible numbers
! = factorial
*/

interface OddsObj {
  matchingNumbers: number;
  selectMax: number;
  qtyOfNums: number;
}

function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

function combinations(a: number, b: number) {
  return factorial(a) / (factorial(b) * factorial(a - b));
}

function calcOdds(oddsObj: OddsObj) {
  const { matchingNumbers: x, selectMax: k, qtyOfNums: n } = oddsObj;
  const probability =
    (combinations(k, x) * combinations(n - k, k - x)) / combinations(n, k);
  /*console.log(x, probability, 1 / probability);
  console.log(
    combinations(k, x) +
      " * " +
      combinations(n - k, k - x) +
      " = " +
      combinations(k, x) * combinations(n - k, k - x)
  );*/
  return 1 / probability;
}
/*
calcOdds({
  matchingNumbers: 6,
  selectMax: 6,
  qtyOfNums: 44
});
*/
export default calcOdds;
