// import { ReactNode } from 'react';
import styled, { css } from 'styled-components';


export const HomeContainer = styled.div`
  max-width: 90rem;
  margin: auto;
`

export const SectionContainer = styled.div`
  margin: 5.75rem auto;
  padding: 0 10rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;

  div {
    width: 100%;
  }

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;

    color: ${(props) => props.theme['base-title']};

    line-height: 130%;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-subtitle']};
    line-height: 130%;
    margin-bottom: 4.125rem;
  }

  section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  section div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    line-height: 0%;
  }

  p {
    font-size: 1rem;
  }
`

export const BackgroundContainer = styled.div`
  max-width: 90rem;

  img:first-child {
    position: absolute;
  }
`

export const MainContainer = styled.main`
  padding: 2rem 10rem;
  
  div {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: space-between;
  }


  h2 {
    font-family: "Baloo 2";
    font-size: 2rem;
    font-weight: 800;
    margin-bottom: 3rem;
  }
`

const STATUS_COLOR = {
  'yellow-dark': 'yellow-dark',
  'base-text': 'base-text',
  'yellow': 'yellow',
  'purple': 'purple',
} as const

interface IconContainerProps {
  variant: keyof typeof STATUS_COLOR
  // children: ReactNode
}

export const IconContainer = styled.span<IconContainerProps>`
  border-radius: 50%;
  padding: 0.5rem;

  color: ${(props) => props.theme['base-backkground']};

  background: ${(props) => props.theme[STATUS_COLOR[props.variant]]};

  /* ${(props) => props.variant == 'yellow-dark' && css`
    background: ${props.theme['yellow-dark']};
  `}

  ${(props) => props.variant == 'base-text' && css`
    background: ${props.theme['base-text']};
  `}

  ${(props) => props.variant == 'yellow' && css`
    background: ${props.theme['yellow']};
  `}

  ${(props) => props.variant == 'purple' && css`
    background: ${props.theme['purple']};
  `} */
`
