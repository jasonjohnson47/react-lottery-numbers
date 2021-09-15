interface NumberPickerOptionsProps {
  selectMax: number;
  qtyOfNums: number;
  setSelectMax: (num: number) => void;
  setQtyOfNums: (num: number) => void;
}

function NumberPickerOptions(props: NumberPickerOptionsProps) {
  const { selectMax, qtyOfNums, setSelectMax, setQtyOfNums } = props;

  function createNumberSelectOptions(num: number) {
    let numberOptions = [];
    for (let i = 1; i <= num; i++) {
      numberOptions.push(
        <option key={`${i}`} value={`${i}`}>
          {i}
        </option>
      );
    }
    return numberOptions;
  }

  return (
    <div className="number-picker-options">
      Choose
      <label htmlFor="quanity-to-select" className="sr-only">
        How many numbers to choose?
      </label>
      <select
        id="quanity-to-select"
        value={selectMax}
        onChange={(event) => {
          setSelectMax(Number(event.target.value));
        }}
      >
        {createNumberSelectOptions(qtyOfNums)}
      </select>
      out of
      <label htmlFor="quanity-of-total-numbers" className="sr-only">
        How many total numbers in the lottery?
      </label>
      <select
        id="quanity-of-total-numbers"
        value={qtyOfNums}
        onChange={(event) => {
          setQtyOfNums(Number(event.target.value));
        }}
      >
        {createNumberSelectOptions(99)}
      </select>
      numbers
    </div>
  );
}

export default NumberPickerOptions;
