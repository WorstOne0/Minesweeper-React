import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Cell } from "../../components";

import * as S from "./styles";

const Board = ({ height = "90rem", width = "90rem" }) => {
  const { board, rowNumber, columnNumber } = useSelector(
    (state) => state.gameState
  );

  return (
    <S.Container height={height} width={width}>
      {board.map((row, indexRow) => (
        <S.Row height={`${100 / rowNumber}%`}>
          {row.map((square, indexColumn) => (
            <Cell
              width={`${100 / columnNumber}%`}
              square={square}
              row={indexRow}
              column={indexColumn}
            />
          ))}
        </S.Row>
      ))}
    </S.Container>
  );
};

export default Board;
