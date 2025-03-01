import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonSetAmountContainer } from "./styles";

interface ButtonAmountProps {
  amountProduct: number,
  handleMinusAmountProduct: () => void,
  handlePlusAmountProduct: () => void,
}

export function ButtonAmount({ 
  amountProduct, 
  handleMinusAmountProduct,
  handlePlusAmountProduct } : ButtonAmountProps ) {

  return (
    <ButtonSetAmountContainer>
      <button onClick= {handleMinusAmountProduct} type="button">
        <Minus size={14} weight="bold"/>
      </button>
      <span> {amountProduct} </span>
      <button onClick={handlePlusAmountProduct} type="button">
        <Plus size={14} weight="bold"/>
      </button>
    </ButtonSetAmountContainer>
  )
}