import { createSlice } from "@reduxjs/toolkit";

import { createBoard, handleClick, checkWin } from "../utils/minesweeper";

const initialState = {
  board: createBoard(18, 18),
  // board: [
  //   ["E", "E", "E", "E", "E", "E", "E", "E"],
  //   ["E", "E", "E", "E", "M", "M", "E", "E"],
  //   ["E", "M", "E", "E", "E", "E", "E", "E"],
  //   ["E", "E", "E", "E", "E", "M", "E", "M"],
  //   ["E", "E", "E", "M", "E", "E", "E", "E"],
  //   ["E", "M", "E", "E", "M", "E", "E", "E"],
  //   ["E", "E", "E", "E", "E", "E", "E", "M"],
  //   ["E", "E", "E", "E", "E", "M", "E", "E"],
  // ],

  rowNumber: 18,
  columnNumber: 18,

  flagCounter: 40,

  gameOver: false,

  firstClick: false,
};

export const gameState = createSlice({
  name: "gameState",
  initialState,
  reducers: {
    // Left Click
    click: (state, action) => {
      const { row, column } = action.payload;

      if (state.board[row][column] === "B") return;

      if (state.board[row][column] === "M") {
        state.gameOver = true;
        return;
      }

      if (state.board[row][column] === "E") {
        if (!state.firstClick) state.firstClick = true;

        handleClick(
          state.board,
          row,
          column,
          state.rowNumber,
          state.columnNumber
        );
      }

      if (checkWin(state.board, state.rowNumber, state.columnNumber)) {
        console.log("You win!");
      }
    },
    setFlagCounter: (state, action) => {
      const { flag } = action.payload;

      flag ? state.flagCounter-- : state.flagCounter++;
    },
  },
});

export const { click, setFlagCounter } = gameState.actions;

export default gameState.reducer;
