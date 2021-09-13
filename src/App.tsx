import { useState } from "react";
import NumberPicker from "./NumberPicker";
import "./styles.css";

export default function App() {
  const [pickedNumbers, setPickedNumbers] = useState<number[]>([]);

  return (
    <div className="App">
      <NumberPicker
        numbers={69}
        pickedNumbers={pickedNumbers}
        setPickedNumbers={setPickedNumbers}
      />
    </div>
  );
}
