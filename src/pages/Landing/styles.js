import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: var(--color-dark);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const GameModal = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(17, 25, 35, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: absolute;
  top: 0;

  z-index: 1;
`;

export const GameDisplay = styled.div`
  height: 30rem;
  width: 100%;
  background: rgba(11, 94, 205, 0.7);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  opacity: 1;
`;

export const GameTitle = styled.h1`
  padding: 1.5rem 0;

  color: #fff;
  font-size: 6.4rem;

  user-select: none;
`;

export const GameSubTitle = styled.h1`
  color: #fff;
  font-size: 1.8rem;

  user-select: none;
`;

export const GameCondition = styled.div`
  height: 30rem;
`;

export const SideBar = styled.div`
  height: 100%;
  width: 30rem;

  display: flex;
  flex-direction: column;
`;

export const SideBarHeader = styled.div`
  height: 10rem;
  width: 100%;
  padding: 0 2.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .Icon {
    color: var(--color-primary);
  }
`;

export const SideBarDivision = styled.div`
  width: 100%;
  padding: 7rem 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  padding: 1.5rem 0;

  display: flex;
  justify-content: center;
  align-items: center;

  color: var(--color-primary);
  font-size: 2.2rem;

  .Icon {
    margin-right: 1rem;
  }
`;

export const Content = styled.div`
  height: 8rem;
  width: 80%;
  border-radius: 0.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: inset 10px 10px 43px #0c121a, inset -10px -10px 43px #16202c;
  //box-shadow: inset 6px 6px 10px 0 #070a0e, inset -6px -6px 10px 0 #1b2838;

  color: var(--color-primary);
  font-size: 2.2rem;

  cursor: ${(props) => (props.hover ? "pointer" : "default")};

  .Icon {
    margin-right: 1rem;
  }

  :hover {
    box-shadow: ${(props) =>
      props.hover && "3px 3px 6px #070a0e,-3px -3px 6px #1b2838"};
  }
`;

export const Clock = styled.div`
  color: var(--color-primary);
  font-size: 3.2rem;
  font-family: "Graduate";
`;
