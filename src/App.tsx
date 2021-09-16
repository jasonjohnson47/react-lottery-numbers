import { useState } from "react";
import NumberPicker from "./NumberPicker";
import NumberPickerOptions from "./NumberPickerOptions";
import WinningNumbers from "./WinningNumbers";
import generateLotteryNumbers from "./generateLotteryNumbers";
import "animate.css";
import "./styles.css";

export default function App() {
  const [selectMax, setSelectMax] = useState<number>(6);
  const [qtyOfNums, setQtyOfNums] = useState<number>(44);
  const [pickedNumbers, setPickedNumbers] = useState<number[]>([]);
  const [winningNumbers, setWinningNumbers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  function playLotto() {
    setWinningNumbers(generateLotteryNumbers(selectMax, qtyOfNums));
    setShowResults(true);
  }

  function findMatchingNumbers(nums1: number[], nums2: number[]) {
    let matchingNumbers: number[] = nums1.filter((num) => {
      return nums2.includes(num);
    });
    return matchingNumbers.sort((a, b) => a - b);
  }

  function printGameMessage() {
    const matchingNumbers = findMatchingNumbers(pickedNumbers, winningNumbers);
    const matchingNumberElems = matchingNumbers.map((number, index) => {
      return (
        <span key={number}>
          {number}
          {index !== matchingNumbers.length - 1 ? ", " : ""}
        </span>
      );
    });
    if (matchingNumbers.length) {
      return (
        <>
          <strong>Matching Numbers: </strong> {matchingNumberElems}
        </>
      );
    } else {
      if (winningNumbers.length === 0) {
        return `Pick ${selectMax} numbers and play!`;
      } else {
        return "Sorry, no matching numbers.";
      }
    }
  }

  function reset() {
    setPickedNumbers([]);
    setWinningNumbers([]);
    setShowResults(false);
  }

  return (
    <div className="App">
      <NumberPickerOptions
        pickedNumbers={pickedNumbers}
        selectMax={selectMax}
        setSelectMax={setSelectMax}
        qtyOfNums={qtyOfNums}
        setQtyOfNums={setQtyOfNums}
        reset={reset}
      />
      <NumberPicker
        numbers={qtyOfNums}
        selectedMax={selectMax}
        pickedNumbers={pickedNumbers}
        setPickedNumbers={setPickedNumbers}
      />
      <div className="action-buttons">
        <button type="button" className="btn" onClick={reset}>
          Reset
        </button>
        <button
          type="button"
          className="btn"
          onClick={playLotto}
          disabled={pickedNumbers.length !== selectMax}
        >
          Play
        </button>
      </div>
      {showResults ? <WinningNumbers numbers={winningNumbers} /> : null}
      <div className="matching-numbers">
        <p>{printGameMessage()}</p>
      </div>
    </div>
  );
}
