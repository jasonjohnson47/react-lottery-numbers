import ToggleButtonGroup from "./ToggleButtonGroup";
import ToggleButton from "./ToggleButton";

interface NumberPickerProps {
  qtyOfNums: number;
  selectMax: number;
  currSelectedNumbers: number[];
  setCurrSelectedNumbers: (nums: number[]) => void;
}

function NumberPicker(props: NumberPickerProps) {
  const {
    qtyOfNums,
    currSelectedNumbers,
    setCurrSelectedNumbers,
    selectMax
  } = props;

  function handleOnButtonClick(event: React.MouseEvent) {
    const numberButtonValue = Number((event.target as HTMLButtonElement).value);
    const isSelected = currSelectedNumbers.includes(numberButtonValue);
    if (currSelectedNumbers.length < selectMax && !isSelected) {
      setCurrSelectedNumbers([...currSelectedNumbers, numberButtonValue]);
    } else {
      if (isSelected) {
        setCurrSelectedNumbers(
          currSelectedNumbers.filter((num) => {
            return num !== numberButtonValue;
          })
        );
      } else {
        alert(
          "You have selected all your numbers. If you would like to choose a different number, deselect one of your current numbers first."
        );
      }
    }
  }

  function createNumberPickerButtons(num: number) {
    let numberPickerButtons = [];
    for (let i = 1; i <= num; i++) {
      numberPickerButtons.push(
        <ToggleButton
          key={i}
          value={`${i}`}
          pressed={currSelectedNumbers.includes(i)}
          onClick={handleOnButtonClick}
        />
      );
    }
    return numberPickerButtons;
  }

  return (
    <>
      <ToggleButtonGroup label="number picker" className="number-picker">
        {createNumberPickerButtons(qtyOfNums)}
      </ToggleButtonGroup>
      <p>Selected {currSelectedNumbers.length + " of " + selectMax}</p>
    </>
  );
}

export default NumberPicker;
