import { ReactNode } from "react";
import Square from "./Square";
import { useDrop } from "react-dnd";
import PIECE_TYPE from "../constants/piece-type.constant";
import Game from "../event/event";
import Overlay from "./Overlay";
import OverlayType from "../@types/overlay-type.enum";

interface BoardSquareProps {
  x: number;
  y: number;
  game: Game;
  children: ReactNode;
}

const BoardSquare = ({ x, y, game, children }: BoardSquareProps) => {
  const isBlack = (x + y) % 2 === 1;
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: PIECE_TYPE.KNIGHT,
    canDrop: () => game.canMoveKnight(x, y),
    drop: () => game.moveKnight(x, y),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
      }}
      role="Space"
      data-testid={`${x},${y}`}
    >
      <Square black={isBlack}> {children} </Square>
      {isOver && !canDrop && <Overlay type={OverlayType.IllegalMoveHover} />}
      {isOver && canDrop && <Overlay type={OverlayType.LegalMoveHover} />}
      {!isOver && canDrop && <Overlay type={OverlayType.PossibleMove} />}
    </div>
  );
};

export default BoardSquare;
