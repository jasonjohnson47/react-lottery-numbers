import findMatchingNumbers from "./findMatchingNumbers";

interface GameMessageProps {
  playedNumbers: number[];
  winningNumbers: number[];
  selectMax: number;
}

function GameMessage(props: GameMessageProps) {
  const { playedNumbers, winningNumbers, selectMax } = props;

  function printGameMessage() {
    const matchingNumbers = findMatchingNumbers(playedNumbers, winningNumbers);
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

  return (
    <div className="matching-numbers">
      <p>{printGameMessage()}</p>
    </div>
  );
}

export default GameMessage;
