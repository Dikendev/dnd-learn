import { CSSProperties } from "react";
import BoardSquare from "./BoardSquare";
import Piece from "./Piece";
import Game from "../event/event";

interface RenderSquareProps {
  i: number;
  position: [number, number];
  game: Game;
}

const squareStyle: CSSProperties = {
  width: "12.5%",
  height: "12.5%",
};

const RenderSquare = ({ i, position, game }: RenderSquareProps) => {
  const x = i % 8;
  const y = Math.floor(i / 8);

  const isKnightHere = x === position[0] && y === position[1];

  return (
    <div key={i} style={squareStyle}>
      <BoardSquare x={x} y={y} game={game}>
        <Piece isKnight={isKnightHere}></Piece>
      </BoardSquare>
    </div>
  );
};

export default RenderSquare;
