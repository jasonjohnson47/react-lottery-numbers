interface ActionButtonProps {
  reset: () => void;
  quickPick: () => void;
  playLotto: () => void;
  currSelectedNumbers: number[];
  selectMax: number;
}

function ActionButtons(props: ActionButtonProps) {
  const { reset, quickPick, playLotto, currSelectedNumbers, selectMax } = props;

  return (
    <div className="action-buttons">
      <button type="button" className="btn" onClick={reset}>
        Reset
      </button>
      <button type="button" className="btn" onClick={quickPick}>
        Quick Pick
      </button>
      <button
        type="button"
        className="btn"
        onClick={playLotto}
        disabled={currSelectedNumbers.length !== selectMax}
      >
        Play
      </button>
    </div>
  );
}

export default ActionButtons;
