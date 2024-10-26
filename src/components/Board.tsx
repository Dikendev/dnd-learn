import { CSSProperties, useEffect, useState } from "react";
import RenderSquare from "./RenderSquare";
import Game, { Position } from "../event/event";

interface BoardProps {
  game: Game;
}

const boardStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "flex",
  flexWrap: "wrap",
};

const Board = ({ game }: BoardProps) => {
  const [[knightX, knightY], setKnightPosition] = useState<Position>(
    game.knightPosition
  );

  useEffect(() => game.observe(setKnightPosition), [game]);

  const squares = new Array(64).fill(null).map((_, i) => {
    return <RenderSquare i={i} position={[knightX, knightY]} game={game} />;
  });

  return <div style={boardStyle}>{squares}</div>;
};

export default Board;
