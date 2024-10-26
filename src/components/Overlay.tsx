import OverlayType from "../@types/overlay-type.enum";

interface OverlayProps {
  type: OverlayType;
}
const Overlay = ({ type }: OverlayProps) => {
  const getOverlayColor = (type: OverlayType) => {
    switch (type) {
      case OverlayType.IllegalMoveHover:
        return "red";
      case OverlayType.LegalMoveHover:
        return "green";
      case OverlayType.PossibleMove:
        return "yellow";
    }
  };
  const color = getOverlayColor(type);

  return (
    <div
      className="overlay"
      role="type"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        zIndex: 1,
        opacity: 0.5,
        backgroundColor: color,
      }}
    ></div>
  );
};

export default Overlay;
