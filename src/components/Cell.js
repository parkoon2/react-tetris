import React from "react";
import { StyledCell } from "./styled/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color}>
    {console.log("re!")}
  </StyledCell>
);

export default React.memo(Cell);
