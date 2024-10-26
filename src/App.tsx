import { CSSProperties, useMemo } from "react";
import Game from "./event/event";
import Board from "./components/Board";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const containerStyle: CSSProperties = {
  width: 500,
  height: 500,
  border: "1px solid black",
};

const App = () => {
  const game = useMemo(() => new Game(), []);

  return (
    <div style={containerStyle}>
      <DndProvider backend={HTML5Backend}>
        <Board game={game} />
      </DndProvider>
    </div>
  );
};

export default App;
