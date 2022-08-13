import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { restart } from "../../store/gameState";

import { Board } from "../../components";

import { AiFillSetting, AiFillClockCircle } from "react-icons/ai";
import { FaBomb } from "react-icons/fa";
import { BsArrowClockwise } from "react-icons/bs";

import * as S from "./styles";

const Landing = () => {
  // Redux Toolkit
  const dispatch = useDispatch();

  // Timer
  const [timer, setTimer] = useState(0);
  // Modal
  const [isModalOpen, setModal] = useState(false);

  // Redux - Game State
  const { flagCounter, firstClick, gameOver, youWin } = useSelector(
    (state) => state.gameState
  );

  // useEffect - Timer
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

  // useEffect - Game Over
  useEffect(() => {
    if (gameOver) setModal(true);
  }, [gameOver]);

  // Convert seconds to "00:00" format
  const convertSeconds = (fullSeconds) => {
    var minutes = Math.floor((fullSeconds % 3600) / 60);
    var seconds = Math.floor((fullSeconds % 3600) % 60);

    return `${minutes < 10 ? "0" + minutes : minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`;
  };

  // Restart Game
  const handleRestart = () => {
    dispatch(restart());
  };

  // Open/Closes Modal
  const handleModal = () => {
    setModal(false);
  };

  return (
    <S.Container>
      {isModalOpen && (
        <S.GameModal onClick={() => handleModal()}>
          <S.GameDisplay>
            {youWin ? (
              <>
                <S.GameTitle>You Won !!</S.GameTitle>
                <S.GameSubTitle>Click anywhere to exit</S.GameSubTitle>
              </>
            ) : (
              <>
                <S.GameTitle>You Lost !! Better Luck Next Time</S.GameTitle>
                <S.GameSubTitle>Click anywhere to exit</S.GameSubTitle>
              </>
            )}
          </S.GameDisplay>
        </S.GameModal>
      )}

      <S.SideBar>
        <S.SideBarHeader>
          <S.Title>Minesweeper</S.Title>
          <AiFillSetting className="Icon" />
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
