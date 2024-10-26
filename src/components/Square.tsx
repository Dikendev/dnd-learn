import { CSSProperties, PropsWithChildren } from "react";

interface SquareProps {
  black: boolean;
  children?: React.ReactNode;
}

const squareStyle: CSSProperties = {
  width: "100%",
  height: "100%",
};

const Square = ({ children, black }: PropsWithChildren<SquareProps>) => {
  const backgroundColor = black ? "black" : "white";
  const color = black ? "white" : "black";

  return (
    <div
      style={{
        ...squareStyle,
        backgroundColor,
        color,
      }}
    >
      {children}
    </div>
  );
};

export default Square;
