import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Knight from "./components/knight.tsx";
import Square from "./components/Square.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Square black={true}>
      <Knight />
    </Square>
  </StrictMode>
);
