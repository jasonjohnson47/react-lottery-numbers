interface ToggleButtonProps {
  value: string;
  pressed: boolean;
  onClick: (event: React.MouseEvent) => void;
}

function ToggleButton(props: ToggleButtonProps) {
  const { value, pressed, onClick } = props;

  return (
    <button
      type="button"
      className="toggle-button"
      value={value}
      aria-pressed={pressed}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default ToggleButton;
