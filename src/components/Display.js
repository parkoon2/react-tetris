import React from "react";
import { StyledDisplay } from "./styled/StyledDisplay";

const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;
