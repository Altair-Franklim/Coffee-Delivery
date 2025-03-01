import styled from 'styled-components';

export const CardContainer = styled.article`

    width: 16rem;
    padding: 0rem 1.25rem 1.25rem 1.25rem;
    
    background: ${(props) => props.theme['base-card']};

    border-radius: 6px 36px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

  img {
    margin-top: -1.25rem;
    margin-bottom: 1rem;
  }

  figure div {
    display: flex;
    justify-content: center;
    gap: 0.25rem;
  }

  fieldset {
    border: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h3 {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
      color: ${(props) => props.theme['base-text']};
    }

    div {
      display: flex;
      gap: 0.54rem;
    }
  }
  
  label {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    padding: 0.25rem 0.5rem;
    background: ${(props) => props.theme['yellow-light']};
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1.25rem;
    color: ${(props) => props.theme['yellow-dark']};
  }

  h3 {
    font-family: "Baloo 2";
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    color: ${(props) => props.theme['base-subtitle']}; 
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
  }
`

export const ButtonAddCart = styled.button`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};
  border: none;
  cursor: pointer;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['purple']};
    transition: background-color 0.2s;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed
  }
`
