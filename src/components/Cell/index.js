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

  const control = {
    background: "",
    hover: "",
    shadow: false,
    display: "none",
    color: "var(--color-primary)",
  };

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

    if (square.type === 1) {
      control.color = "#1053E4";
    }
    if (square.type === 2) {
      control.color = "#5ECE4F";
    }
    if (square.type === 3) {
      control.color = "#E03616";
    }
    if (square.type === 4) {
      control.color = "#682D63";
    }
    if (square.type === 5) {
      control.color = "#AF9164 ";
    }
    if (square.type === 6) {
      control.color = "#A14EBF";
    }
    if (square.type === 7) {
      control.color = "#353531";
    }
    if (square.type === 8) {
      control.color = "#121212";
    }
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
      <S.Content display={control.display} color={control.color}>
        {square.type === "M" ? gameOver && <FaBomb /> : square.type}
      </S.Content>
    </S.Container>
  );
};

export default Cell;
