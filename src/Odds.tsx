import calcOdds from "./calcOdds";

interface OddsProps {
  selectMax: number;
  qtyOfNums: number;
}

function formatOdds(value: number) {
  if (value < 9) {
    return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
  } else {
    return Math.round(value).toLocaleString();
  }
}

function Odds(props: OddsProps) {
  const { selectMax, qtyOfNums } = props;

  function createRows(selectMax: number) {
    let rows = [];
    for (let i = selectMax; i >= 1; i--) {
      rows.push(
        <tr key={i}>
          <th scope="row">{i}</th>
          <td>
            1 in{" "}
            {formatOdds(
              calcOdds({
                matchingNumbers: i,
                selectMax,
                qtyOfNums
              })
            )}
          </td>
        </tr>
      );
    }
    return rows;
  }

  return (
    <table className="table odds-table">
      <caption>Odds of Winning</caption>
      <thead>
        <tr>
          <th scope="col">Match</th>
          <th scope="col">Odds</th>
        </tr>
      </thead>
      <tbody>{createRows(selectMax)}</tbody>
    </table>
  );
}

export default Odds;
