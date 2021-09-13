interface ToggleButtonGroupProps {
  children: React.ReactNode;
  label: string;
}

function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  return (
    <div className="toggle-button-group" role="group" aria-label={props.label}>
      {props.children}
    </div>
  );
}

export default ToggleButtonGroup;
