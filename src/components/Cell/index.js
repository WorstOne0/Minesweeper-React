import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { click, setFlagCounter } from "../../store/gameState";

import { FaBomb, FaFlag } from "react-icons/fa";

import * as S from "./styles";

const Cell = ({ width = "12.5%", square, row, column }) => {
  const dispatch = useDispatch();
  const { gameOver } = useSelector((state) => state.gameState);

  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    if (!flag) dispatch(click({ row, column }));
  };

  const handleContextMenu = (event) => {
    event.preventDefault();

    dispatch(setFlagCounter({ flag: !flag }));
    setFlag(!flag);
  };

  const control = { background: "", hover: "", shadow: false, display: "none" };

  if (square === "E") {
    control.display = "none";
    control.background = "var(--color-primary)";
    control.hover = "#327fe2";
  } else if (square === "B") {
    control.display = "none";
    control.background = "var(--color-dark)";
    control.hover = control.background;
    control.shadow = true;
  } else if (square === "M") {
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
      {flag && square !== "B" && !gameOver && <FaFlag className="Flag" />}
      <S.Content display={control.display}>
        {square === "M" ? gameOver && <FaBomb /> : square}
      </S.Content>
    </S.Container>
  );
};

export default Cell;
