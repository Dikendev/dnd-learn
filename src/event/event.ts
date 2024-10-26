export type Position = [number, number];
export type PositionObserver = ((position: Position) => void) | null;

class Game {
  knightPosition: Position = [1, 7];
  private observers: PositionObserver[] = [];

  public observe = (o: PositionObserver): (() => void) => {
    this.observers.push(o);
    this._emitChange();

    return (): void => {
      this.observers = this.observers.filter((t) => t !== o);
    };
  };

  public moveKnight = (toX: number, toY: number): void => {
    this.knightPosition = [toX, toY];
    this._emitChange();
  };

  public canMoveKnight = (toX: number, toY: number): boolean => {
    // actual position of the knight
    const [x, y] = this.knightPosition;

    // i need to calculate the difference between
    // the actual position and the final position on the board
    const dx = toX - x;
    const dy = toY - y;

    // The knight can move 2 squares in one direction
    // and 1 square in the perpendicular direction

    // The knight can only move in a L shape

    // 2 squares in one direction and 1 square in the perpendicular direction
    return (
      (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
      (Math.abs(dx) === 1 && Math.abs(dy) === 2)
    );
  };

  private _emitChange = () => {
    const pos = this.knightPosition;
    this.observers.forEach((o) => o && o(pos));
  };
}

export default Game;
