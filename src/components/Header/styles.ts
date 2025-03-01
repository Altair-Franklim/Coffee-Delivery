import styled from 'styled-components';

export const HeaderContainer = styled.div`
  max-width: 90rem;
  margin: 0 auto 2rem;
  padding: 0 10rem 0;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 12px;
  }

  nav div {
    display: flex;
    gap: 0.25rem;

    justify-content: center;
    align-items: center;
    padding: 0.5rem;

    border-radius: 6px;

    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};

    font-size: 0.875rem;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;

    border-radius: 6px;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`
