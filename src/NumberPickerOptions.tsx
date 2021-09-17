import { useEffect } from "react";

interface NumberPickerOptionsProps {
  currSelectedNumbers: number[];
  selectMax: number;
  qtyOfNums: number;
  setSelectMax: (num: number) => void;
  setQtyOfNums: (num: number) => void;
  reset: () => void;
}

function NumberPickerOptions(props: NumberPickerOptionsProps) {
  const {
    currSelectedNumbers,
    selectMax,
    qtyOfNums,
    setSelectMax,
    setQtyOfNums,
    reset
  } = props;

  useEffect(() => {
    if (currSelectedNumbers.length > selectMax) {
      reset();
    }
  });

  function createNumberSelectOptions(minNum: number, maxNum: number) {
    let numberOptions = [];
    for (let i = minNum; i <= maxNum; i++) {
      numberOptions.push(
        <option key={`${i}`} value={`${i}`}>
          {i}
        </option>
      );
    }
    return numberOptions;
  }

  function handleSelectMax(event: React.ChangeEvent) {
    setSelectMax(Number((event.target as HTMLSelectElement).value));
  }

  function handleSelectQty(event: React.ChangeEvent) {
    setQtyOfNums(Number((event.target as HTMLSelectElement).value));
  }

  return (
    <div
      className="number-picker-options"
      role="group"
      aria-label="lottery options"
    >
      Choose
      <label htmlFor="quanity-to-select" className="sr-only">
        How many numbers to choose?
      </label>
      <select
        id="quanity-to-select"
        value={selectMax}
        onChange={handleSelectMax}
      >
        {createNumberSelectOptions(1, qtyOfNums - 1)}
      </select>
      out of
      <label htmlFor="quanity-of-total-numbers" className="sr-only">
        How many total numbers in the lottery?
      </label>
      <select
        id="quanity-of-total-numbers"
        value={qtyOfNums}
        onChange={handleSelectQty}
      >
        {createNumberSelectOptions(selectMax + 1, 99)}
      </select>
      numbers
    </div>
  );
}

export default NumberPickerOptions;
