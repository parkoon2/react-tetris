import { useState, useEffect } from "react";
import { createStage } from "../gameHelpers";

export const useStage = (player, resetPlayer) => {
  const [stage, setStage] = useState(createStage());

  useEffect(() => {
    console.log("use-effect in use stage");
    const updateStage = prevStage => {
      // First flush the stage
      const newStage = prevStage.map(row =>
        row.map(cell => (cell[1] === "clear" ? [0, "clear"] : cell))
      );

      // Then draw the tetromino
      player.tetromino.forEach((row, y) => {
        row.forEach((val, x) => {
          if (val !== 0) {
            newStage[y + player.pos.y][x + player.pos.x] = [
              val,
              `${player.collided ? "merged" : "clear"}`
            ];
          }
        });
      });

      // Then check if we collided
      if (player.collided) {
        resetPlayer();
      }

      return newStage;
    };

    setStage(prev => updateStage(prev));
  }, [player, resetPlayer]);

  return [stage, setStage];
};
