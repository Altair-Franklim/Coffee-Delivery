import styled from "styled-components";

export const PreviewContainer = styled.main`
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 0 10rem;
  gap: 1rem;
`

export const ClientDetailsContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CartDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 28rem;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1.5rem;
    border-radius: 6px 44px;
    background: ${(props) => props.theme["base-card"]};
    padding: 2.5rem;
  }

  hr {
    background-color: ${(props) => props.theme["base-button"]};
    height: 1px;
    border: none;
}
`

export const ResumeShoppingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  p {
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
  }

  span {
    color: ${(props) => props.theme["base-text"]};
    font-size: 1rem;
  }

  div:last-child {
    p, span {
      color: ${(props) => props.theme["base-subtitle"]};
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`

export const ButtonConfirmContainer = styled.button`
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  color: ${(props) => props.theme.white};
  border: none;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${(props) => props.theme["yellow-dark"]};
    transition: background-color 0.2s;
    }
`
