interface ToggleButtonProps {
  value: string;
  pressed: boolean;
  onClick: (event: React.MouseEvent) => void;
}

function ToggleButton(props: ToggleButtonProps) {
  const { value } = props;

  return (
    <button
      type="button"
      className="toggle-button"
      value={value}
      aria-pressed={props.pressed}
      onClick={props.onClick}
    >
      {value}
    </button>
  );
}

export default ToggleButton;
