import { createSlice } from "@reduxjs/toolkit";

import {
  createBoard,
  handleClick,
  handleNumberClick,
  checkWin,
} from "../utils/minesweeper";

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

      if (state.board[row][column].flag) return;

      if (state.board[row][column].type === "B") return;

      if (state.board[row][column].type === "M") {
        state.gameOver = true;
        return;
      }

      if (state.board[row][column].type === "E") {
        if (!state.firstClick) state.firstClick = true;

        handleClick(
          state.board,
          row,
          column,
          state.rowNumber,
          state.columnNumber
        );

        return;
      }

      state.gameOver = handleNumberClick(
        state.board,
        row,
        column,
        state.rowNumber,
        state.columnNumber
      );
    },
    setFlag: (state, action) => {
      const { row, column } = action.payload;

      if (!state.board[row][column].flag) {
        state.board[row][column].flag = true;
        state.flagCounter--;
      } else {
        state.board[row][column].flag = false;
        state.flagCounter++;
      }
    },
    restart: (state, action) => {
      state.board = createBoard(18, 18);
      state.flagCounter = 40;
      state.gameOver = false;
      state.firstClick = false;
    },
  },
});

export const { click, setFlag, restart } = gameState.actions;

export default gameState.reducer;
