import { useEffect } from "react";
import findMatchingNumbers from "./findMatchingNumbers";
import "animate.css";

interface WinningNumbersProps {
  winningNumbers: number[];
  playedNumbers: number[];
  isMakingSelections: boolean;
  setIsMakingSelections: (bol: boolean) => void;
}

function WinningNumbers(props: WinningNumbersProps) {
  const {
    winningNumbers,
    playedNumbers,
    isMakingSelections,
    setIsMakingSelections
  } = props;

  const matchingNumbers = findMatchingNumbers(playedNumbers, winningNumbers);

  useEffect(() => {
    setIsMakingSelections(true);
  });

  function generateRandomKey() {
    return Math.floor(Math.random() * 99999);
  }

  function printWinningNumbers() {
    return winningNumbers.map((num, index) => {
      const className = `winning-number animate__animated animate__jackInTheBox animate__faster${
        matchingNumbers.includes(num) ? " matching-number" : ""
      }`;
      const style = {
        animationDelay: `${index * 0.5}s`
      };
      return (
        <div
          className={className}
          style={style}
          key={isMakingSelections ? num : generateRandomKey()}
        >
          {num}
        </div>
      );
    });
  }

  return <div className="winning-numbers">{printWinningNumbers()}</div>;
}

export default WinningNumbers;
