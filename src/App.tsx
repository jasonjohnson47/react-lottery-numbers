import { useState } from "react";
import NumberPicker from "./NumberPicker";
import NumberPickerOptions from "./NumberPickerOptions";
import ActionButtons from "./ActionButtons";
import WinningNumbers from "./WinningNumbers";
import GameMessage from "./GameMessage";
import Odds from "./Odds";
import generateLotteryNumbers from "./generateLotteryNumbers";
import "animate.css";
import "./styles.css";

export default function App() {
  const [selectMax, setSelectMax] = useState<number>(6);
  const [qtyOfNums, setQtyOfNums] = useState<number>(44);
  const [currSelectedNumbers, setCurrSelectedNumbers] = useState<number[]>([]);
  const [playedNumbers, setPlayedNumbers] = useState<number[]>([]);
  const [winningNumbers, setWinningNumbers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isMakingSelections, setIsMakingSelections] = useState(true);

  function playLotto() {
    setPlayedNumbers(currSelectedNumbers);
    setWinningNumbers(generateLotteryNumbers(selectMax, qtyOfNums));
    setShowResults(true);
    setIsMakingSelections(false);
  }

  function quickPick() {
    setCurrSelectedNumbers(generateLotteryNumbers(selectMax, qtyOfNums));
  }

  function reset() {
    setCurrSelectedNumbers([]);
    setWinningNumbers([]);
    setShowResults(false);
  }

  return (
    <div className="App">
      <NumberPickerOptions
        currSelectedNumbers={currSelectedNumbers}
        selectMax={selectMax}
        qtyOfNums={qtyOfNums}
        setSelectMax={setSelectMax}
        setQtyOfNums={setQtyOfNums}
        reset={reset}
      />
      <NumberPicker
        qtyOfNums={qtyOfNums}
        selectMax={selectMax}
        currSelectedNumbers={currSelectedNumbers}
        setCurrSelectedNumbers={setCurrSelectedNumbers}
      />
      <ActionButtons
        reset={reset}
        quickPick={quickPick}
        playLotto={playLotto}
        currSelectedNumbers={currSelectedNumbers}
        selectMax={selectMax}
      />
      {showResults ? (
        <WinningNumbers
          winningNumbers={winningNumbers}
          playedNumbers={playedNumbers}
          isMakingSelections={isMakingSelections}
          setIsMakingSelections={setIsMakingSelections}
        />
      ) : null}
      <GameMessage
        playedNumbers={playedNumbers}
        winningNumbers={winningNumbers}
        selectMax={selectMax}
      />
      <Odds selectMax={selectMax} qtyOfNums={qtyOfNums} />
    </div>
  );
}
