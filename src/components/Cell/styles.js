import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: ${(props) => props.width};
  border: 0.2rem solid var(--color-dark);
  border-radius: 0.8rem;
  background: ${(props) => props.background};

  color: var(--color-primary);

  box-shadow: ${(props) =>
    props.shadow &&
    "inset 15px 15px 30px 0 #070a0e, inset -15px -15px 30px 0 #1b2838"};

  //box-shadow: inset 6px 6px 10px 0 #084494, inset -6px -6px 10px 0 #0e78ff;

  :hover {
    background: ${(props) => props.hover};
  }

  .Flag {
    position: relative;

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    color: #e63946;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;

  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;

  color: ${(props) => props.color};
  font-weight: bold;

  user-select: none;
`;
