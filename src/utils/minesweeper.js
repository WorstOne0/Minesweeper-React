const createBoard = (rows, columns) => {
  const board = [];

  for (let i = 0; i < rows; i++) {
    board.push([]);
    for (let j = 0; j < columns; j++) {
      board[i].push("E");
    }
  }

  // Add mines
  for (let i = 0; i < 40; i++) {
    let randomRow = Math.floor(Math.random() * (17 - 0 + 1)) + 0;
    let randomColumn = Math.floor(Math.random() * (17 - 0 + 1)) + 0;

    if (board[randomRow][randomColumn] !== "M") {
      board[randomRow][randomColumn] = "M";
    } else {
      i--;
    }
  }

  return board;
};

const handleClick = (board, row, column, rowNumber, columnNumber) => {
  const rowIndex = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
  const columnIndex = [-1, 0, 1, -1, 0, 1, -1, 0, 1];

  let mineCount = 0;

  for (let i = 0; i < rowIndex.length; i++) {
    const newRow = row + rowIndex[i];
    const newColumn = column + columnIndex[i];

    if (
      newRow >= 0 &&
      newRow < rowNumber &&
      newColumn >= 0 &&
      newColumn < columnNumber
    ) {
      if (board[newRow][newColumn] === "M") mineCount++;
    }
  }

  if (!mineCount) {
    board[row][column] = "B";

    for (let i = 0; i < rowIndex.length; i++) {
      const newRow = row + rowIndex[i];
      const newColumn = column + columnIndex[i];

      if (
        newRow >= 0 &&
        newRow < rowNumber &&
        newColumn >= 0 &&
        newColumn < columnNumber
      ) {
        if (board[newRow][newColumn] === "E") {
          handleClick(board, newRow, newColumn, rowNumber, columnNumber);
        }
      }
    }
  } else {
    board[row][column] = mineCount;
  }
};

const checkWin = (board, rowNumber, columnNumber) => {
  for (let i = 0; i < rowNumber; i++) {
    for (let j = 0; j < columnNumber; j++) {
      if (board[i][j] === "E") return false;
    }
  }

  return true;
};

export { createBoard, handleClick, checkWin };
