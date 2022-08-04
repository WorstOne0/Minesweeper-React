import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { click, setFlag } from "../../store/gameState";

import { FaBomb, FaFlag } from "react-icons/fa";

import * as S from "./styles";

const Cell = ({ width = "12.5%", square, row, column }) => {
  const dispatch = useDispatch();
  const { gameOver } = useSelector((state) => state.gameState);

  const handleClick = () => {
    dispatch(click({ row, column }));
  };

  const handleContextMenu = (event) => {
    event.preventDefault();

    dispatch(setFlag({ row, column }));
  };

  const control = { background: "", hover: "", shadow: false, display: "none" };

  if (square.type === "E") {
    control.display = "none";
    control.background = "var(--color-primary)";
    control.hover = "#327fe2";
  } else if (square.type === "B") {
    control.display = "none";
    control.background = "var(--color-dark)";
    control.hover = control.background;
    control.shadow = true;
  } else if (square.type === "M") {
    gameOver ? (control.display = "flex") : (control.display = "none");
    gameOver
      ? (control.background = "#e63946")
      : (control.background = "var(--color-primary)");
    gameOver ? (control.hover = "#e63946") : (control.hover = "#327fe2");
  } else {
    control.display = "flex";
    control.background = "var(--color-dark)";
    control.hover = control.background;
    control.shadow = true;
  }

  return (
    <S.Container
      width={width}
      background={control.background}
      hover={control.hover}
      shadow={control.shadow}
      onClick={() => handleClick()}
      onContextMenu={(event) => handleContextMenu(event)}
    >
      {square.flag && square.type !== "B" && !gameOver && (
        <FaFlag className="Flag" />
      )}
      <S.Content display={control.display}>
        {square.type === "M" ? gameOver && <FaBomb /> : square.type}
      </S.Content>
    </S.Container>
  );
};

export default Cell;
