import ToggleButtonGroup from "./ToggleButtonGroup";
import ToggleButton from "./ToggleButton";

interface NumberPickerProps {
  numbers: number;
  selectedMax: number;
  pickedNumbers: number[];
  setPickedNumbers: (nums: number[]) => void;
}

function NumberPicker(props: NumberPickerProps) {
  const { numbers, pickedNumbers, setPickedNumbers, selectedMax } = props;

  function handleOnButtonClick(event: React.MouseEvent) {
    const numberButtonValue = Number((event.target as HTMLButtonElement).value);
    const isSelected = pickedNumbers.includes(numberButtonValue);
    if (pickedNumbers.length < selectedMax && !isSelected) {
      setPickedNumbers([...pickedNumbers, numberButtonValue]);
    } else {
      if (isSelected) {
        setPickedNumbers(
          pickedNumbers.filter((num) => {
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
          pressed={pickedNumbers.includes(i)}
          onClick={handleOnButtonClick}
        />
      );
    }
    return numberPickerButtons;
  }

  return (
    <>
      <ToggleButtonGroup label="number picker" className="number-picker">
        {createNumberPickerButtons(numbers)}
      </ToggleButtonGroup>
      <p>Selected {pickedNumbers.length + " of " + selectedMax}</p>
    </>
  );
}

export default NumberPicker;
