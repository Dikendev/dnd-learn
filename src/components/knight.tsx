import { CSSProperties } from "react";
import { useDrag } from "react-dnd";
import PIECE_TYPE from "../constants/piece-type.constant";

const knightStyle: CSSProperties = {
  fontSize: 40,
  fontWeight: "bold",
  cursor: "move",
};

const Knight = () => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: PIECE_TYPE.KNIGHT,
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    []
  );
  return (
    <>
      <div
        ref={drag}
        style={{
          ...knightStyle,
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♘
      </div>
    </>
  );
};

export default Knight;
