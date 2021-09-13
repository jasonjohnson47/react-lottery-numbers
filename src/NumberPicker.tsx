import ToggleButtonGroup from "./ToggleButtonGroup";
import ToggleButton from "./ToggleButton";

interface NumberPickerProps {
  numbers: number;
  pickedNumbers: number[];
  setPickedNumbers: (nums: number[]) => void;
}

function createNumberPickerButtons(num: number) {
  let numberPickerButtons = [];
  for (let i = 1; i <= num; i++) {
    numberPickerButtons.push(<ToggleButton value={`${i}`} key={i} />);
  }
  return numberPickerButtons;
}

function NumberPicker(props: NumberPickerProps) {
  return (
    <ToggleButtonGroup label="number picker">
      {createNumberPickerButtons(props.numbers)}
    </ToggleButtonGroup>
  );
}

export default NumberPicker;
