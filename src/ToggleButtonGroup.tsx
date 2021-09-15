interface ToggleButtonGroupProps {
  children: React.ReactNode;
  label: string;
  className: string;
}

function ToggleButtonGroup(props: ToggleButtonGroupProps) {
  var className = `toggle-button-group ${props.className}`;

  return (
    <div className={className} role="group" aria-label={props.label}>
      {props.children}
    </div>
  );
}

export default ToggleButtonGroup;
