import styled from "styled-components";

export const Container = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  padding: 0.2rem;
  background: var(--color-dark);

  color: #fff;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  height: ${(props) => props.height};
  width: 100%;

  display: flex;
`;
