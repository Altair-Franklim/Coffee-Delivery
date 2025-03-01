import styled from "styled-components";

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};

  
  > div {
    display: flex;
    gap: 0.75rem;
  }

  p {
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  span {
    font-size: 0.875rem;
  }

  input {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme["base-button"]};
    background: ${(props) => props.theme["base-input"]};
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.875rem;
    
    &::placeholder {
      color: ${(props) => props.theme["base-label"]};
    }

    &:focus {
      border: 1px solid ${(props) => props.theme["yellow-dark"]};
    }
  }
`