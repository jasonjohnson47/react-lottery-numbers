import { useState } from "react";

interface toggleButtonProps {
  value: string;
}

function ToggleButton(props: toggleButtonProps) {
  const { value } = props;

  const [pressed, setPressed] = useState<boolean>(false);

  function handleToggleButtonClick(event: React.MouseEvent) {
    setPressed(!pressed);
  }

  return (
    <button
      type="button"
      className="toggle-button"
      value={value}
      aria-pressed={pressed}
      onClick={handleToggleButtonClick}
    >
      {value}
    </button>
  );
}

export default ToggleButton;
