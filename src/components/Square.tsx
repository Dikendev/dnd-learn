import { PropsWithChildren } from "react";

interface SquareProps {
  black: boolean;
  children: React.ReactNode;
}

const Square = ({ children, black }: PropsWithChildren<SquareProps>) => {
  const fill = black ? "black" : "white";
  return <div style={{ backgroundColor: fill }}> {children} </div>;
};

export default Square;
