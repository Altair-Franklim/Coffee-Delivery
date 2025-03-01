import styled from "styled-components";

export const CartShoppingContainer = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    width: 4rem;
    height: 4rem;
  }

  > div {
    display: flex;
    gap: 1.25rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  > span {
    font-size: 1rem;
    color: ${(props) => props.theme["base-text"]};
    font-weight: 700;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.75rem;
`

export const ButtonRemoveContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  padding: 0 0.5rem;
  border-radius: 6px;
  border: transparent;
  font-size: 0.75rem;
  text-transform: uppercase;
  line-height: 160%;
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["purple"]};
  cursor: pointer;
  
  span {
    color: ${(props) => props.theme["base-text"]};
  }

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
    background: ${(props) => props.theme["base-hover"]};
    transition: color 0.2s, background-color 0.2s;

    span {
    color: ${(props) => props.theme["base-subtitle"]};
    }
  }
`