import "animate.css";

interface WinningNumbersProps {
  numbers: number[];
}

function WinningNumbers(props: WinningNumbersProps) {
  const { numbers } = props;

  function generateRandomKey() {
    return Math.floor(Math.random() * 99999);
  }

  function printWinningNumbers() {
    return numbers.map((num, index) => {
      const className = `winning-number animate__animated animate__jackInTheBox animate__faster`;
      const style = {
        animationDelay: `${index * 0.5}s`
      };
      return (
        <div className={className} style={style} key={generateRandomKey()}>
          {num}
        </div>
      );
    });
  }

  return <div className="winning-numbers">{printWinningNumbers()}</div>;
}

export default WinningNumbers;
