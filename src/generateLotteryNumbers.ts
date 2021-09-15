function generateLotteryNumbers(qty: number, range: number) {
  function lotteryNum() {
    return Math.ceil(Math.random() * range);
  }

  function recordNumber(newNumber: number, numbers: number[]) {
    if (!numbers.includes(newNumber)) {
      numbers = numbers.slice();
      numbers.push(newNumber);
    }
    return numbers;
  }

  var luckyLotteryNumbers: number[] = [];

  while (luckyLotteryNumbers.length < qty) {
    luckyLotteryNumbers = recordNumber(lotteryNum(), luckyLotteryNumbers);
  }

  return luckyLotteryNumbers.sort((a, b) => a - b);
}

export default generateLotteryNumbers;
