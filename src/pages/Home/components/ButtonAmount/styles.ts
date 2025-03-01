import styled from "styled-components";

export const ButtonSetAmountContainer = styled.div`
  display: flex;
  padding: 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme['base-button']};
  height: 2.5rem;

  span {
    font-size: 1rem;
    color: ${(props) => props.theme["base-title"]};
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: none;
    color: ${(props) => props.theme['purple']};
    cursor: pointer;

    :hover {
      color: ${(props) => props.theme['purple-dark']};
      transition: color 0.2s;
    }
  }
`