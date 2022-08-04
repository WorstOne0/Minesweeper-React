const createBoard = (rows, columns) => {
  const board = [];

  for (let i = 0; i < rows; i++) {
    board.push([]);
    for (let j = 0; j < columns; j++) {
      board[i].push({
        type: "E",
        flag: false,
      });
    }
  }

  // Add mines
  for (let i = 0; i < 40; i++) {
    let randomRow = Math.floor(Math.random() * (17 - 0 + 1)) + 0;
    let randomColumn = Math.floor(Math.random() * (17 - 0 + 1)) + 0;

    if (board[randomRow][randomColumn].type !== "M") {
      board[randomRow][randomColumn].type = "M";
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
      if (board[newRow][newColumn].type === "M") mineCount++;
    }
  }

  if (!mineCount) {
    board[row][column].type = "B";

    for (let i = 0; i < rowIndex.length; i++) {
      const newRow = row + rowIndex[i];
      const newColumn = column + columnIndex[i];

      if (
        newRow >= 0 &&
        newRow < rowNumber &&
        newColumn >= 0 &&
        newColumn < columnNumber
      ) {
        if (board[newRow][newColumn].type === "E") {
          handleClick(board, newRow, newColumn, rowNumber, columnNumber);
        }
      }
    }
  } else {
    board[row][column].type = mineCount;
  }

  if (checkWin(board, rowNumber, columnNumber)) {
    console.log("You win!");
  }
};

const handleNumberClick = (board, row, column, rowNumber, columnNumber) => {
  const rowIndex = [-1, -1, -1, 0, 0, 0, 1, 1, 1];
  const columnIndex = [-1, 0, 1, -1, 0, 1, -1, 0, 1];

  let flagCount = 0;

  for (let i = 0; i < rowIndex.length; i++) {
    const newRow = row + rowIndex[i];
    const newColumn = column + columnIndex[i];

    if (
      newRow >= 0 &&
      newRow < rowNumber &&
      newColumn >= 0 &&
      newColumn < columnNumber
    ) {
      if (board[newRow][newColumn].flag === true) flagCount++;
    }
  }

  if (flagCount === board[row][column].type) {
    for (let i = 0; i < rowIndex.length; i++) {
      const newRow = row + rowIndex[i];
      const newColumn = column + columnIndex[i];

      if (
        newRow >= 0 &&
        newRow < rowNumber &&
        newColumn >= 0 &&
        newColumn < columnNumber
      ) {
        if (board[newRow][newColumn].type === "E")
          handleClick(board, newRow, newColumn, rowNumber, columnNumber);

        if (
          board[newRow][newColumn].type === "M" &&
          board[newRow][newColumn].flag === false
        )
          return true;
      }
    }
  }

  if (checkWin(board, rowNumber, columnNumber)) {
    console.log("You win!");
  }

  return false;
};

const checkWin = (board, rowNumber, columnNumber) => {
  for (let i = 0; i < rowNumber; i++) {
    for (let j = 0; j < columnNumber; j++) {
      if (board[i][j].type === "E") return false;
    }
  }

  return true;
};

export { createBoard, handleClick, handleNumberClick, checkWin };
