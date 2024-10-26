import Knight from "./Knight";

interface PieceProps {
  isKnight: boolean;
}

const Piece = ({ isKnight }: PieceProps) => {
  return <div>{isKnight ? <Knight /> : null}</div>;
};

export default Piece;
