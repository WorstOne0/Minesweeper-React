import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../../store/gameState";

import { Board } from "../../components";

import { AiFillSetting, AiFillClockCircle } from "react-icons/ai";
import { FaBomb } from "react-icons/fa";
import { BsArrowClockwise } from "react-icons/bs";

import * as S from "./styles";

const Landing = () => {
  const dispatch = useDispatch();

  const [timer, setTimer] = useState(0);
  const { flagCounter, firstClick } = useSelector((state) => state.gameState);

  useEffect(() => {
    let interval = null;

    if (firstClick) {
      interval = setTimeout(() => {
        setTimer((prev) => prev + 1);
      }, [1000]);
    } else {
      setTimer(0);
      clearInterval(interval);
    }
  }, [timer, firstClick]);

  const convertSeconds = (fullSeconds) => {
    var minutes = Math.floor((fullSeconds % 3600) / 60);
    var seconds = Math.floor((fullSeconds % 3600) % 60);

    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  const handleRestart = () => {
    dispatch(restart());
  };

  return (
    <S.Container>
      <S.SideBar>
        <S.SideBarHeader>
          <S.Title>Minesweeper</S.Title> <AiFillSetting className="Icon" />
        </S.SideBarHeader>
        <S.SideBarDivision>
          <S.Title>
            <AiFillClockCircle className="Icon" />
            Timer
          </S.Title>
          <S.Content>
            <S.Clock>{convertSeconds(timer)}</S.Clock>
          </S.Content>
        </S.SideBarDivision>
        <S.SideBarDivision>
          <S.Title>
            <FaBomb className="Icon" />
            Bombs
          </S.Title>
          <S.Content>
            <S.Clock>{flagCounter}</S.Clock>
          </S.Content>
        </S.SideBarDivision>
        <S.SideBarDivision>
          <S.Content hover={true} onClick={() => handleRestart()}>
            <BsArrowClockwise className="Icon" />
            Retry
          </S.Content>
        </S.SideBarDivision>
      </S.SideBar>
      <Board />
    </S.Container>
  );
};

export default Landing;
