import { useState } from "react";
import NumberPicker from "./NumberPicker";
import NumberPickerOptions from "./NumberPickerOptions";
import generateLotteryNumbers from "./generateLotteryNumbers";
import "./styles.css";

export default function App() {
  const [selectMax, setSelectMax] = useState<number>(6);
  const [qtyOfNums, setQtyOfNums] = useState<number>(44);
  const [pickedNumbers, setPickedNumbers] = useState<number[]>([]);

  function playLotto() {
    console.log(generateLotteryNumbers(selectMax, qtyOfNums));
  }

  return (
    <div className="App">
      <NumberPickerOptions
        selectMax={selectMax}
        setSelectMax={setSelectMax}
        qtyOfNums={qtyOfNums}
        setQtyOfNums={setQtyOfNums}
      />
      <NumberPicker
        numbers={qtyOfNums}
        selectedMax={selectMax}
        pickedNumbers={pickedNumbers}
        setPickedNumbers={setPickedNumbers}
      />
      <button type="button" onClick={playLotto}>
        Play
      </button>
    </div>
  );
}
