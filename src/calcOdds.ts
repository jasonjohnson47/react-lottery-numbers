interface OddsObj {
  matchingNumbers: number;
  selectMax: number;
  qtyOfNums: number;
}

/*function factorial(n: number): number {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}*/

// using recursion normally was causing stack overflow
// homemade 'trampoline' utility function
function trampoline(fn: any) {
  return function trampolined(...args: any[]) {
    var result = fn(...args);
    while (typeof result === "function") {
      result = result();
    }
    return result;
  };
}

const factorial = trampoline(function factorial(n: number, acc = 1) {
  if (n <= 1) return acc;
  return () => factorial(n - 1, n * acc);
});

function combinations(a: number, b: number) {
  return factorial(a) / (factorial(b) * factorial(a - b));
}

function calcOdds(oddsObj: OddsObj) {
  const { matchingNumbers: x, selectMax: k, qtyOfNums: n } = oddsObj;
  const probability =
    (combinations(k, x) * combinations(n - k, k - x)) / combinations(n, k);
  return 1 / probability;
}

/* 
x = matching numbers
k = picked numbers
n = possible numbers
*/

/*
calcOdds({
  matchingNumbers: 6,
  selectMax: 6,
  qtyOfNums: 44
});
*/

export default calcOdds;
