type Player = "X" | "O" | "Match nul" | null;

const Square = ({
  winner,
  onClick,
  value,
}: {
  winner: Player;
  value: Player;
  onClick: () => void;
}) => {
  if (!value) {
    return (
      <button className="square" onClick={onClick} disabled={Boolean(winner)} />
    );
  }
  return (
    <button className={`square square_${value.toLowerCase()}`} disabled>
      {value}
    </button>
  );
};

export default Square;
