import styled from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";


export const MethodPaymentContainer = styled.div`
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

  svg {
      color: ${(props) => props.theme.purple}
    }
`

export const RadioGroupContainer =styled(RadioGroup.Root)`
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
`

export const RadioGroupItemContainer = styled(RadioGroup.Item)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.75rem;
    flex: 1;
    padding: 1rem;
    border-radius: 6px;
    border: 1px solid transparent;
    background: ${(props) => props.theme["base-button"]};
    text-transform: uppercase;
    color: ${(props) => props.theme["base-text"]};
    font-size: 0.75rem;
    line-height: 160%;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["base-hover"]};
      color: ${(props) => props.theme["base-subtitle"]};
      transition: background-color 0.2s;
    }

    &[data-state = 'checked']{
      background: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme["purple"]};
    }
`