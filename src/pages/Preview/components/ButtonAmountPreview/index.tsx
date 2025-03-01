import { Minus, Plus } from "@phosphor-icons/react";
import { ButtonAmountContainer } from "./styles";

interface ButtonAmountPreviewProps {
  amountProduct: number,
  handleMinusAmountProduct: () => void,
  handlePlusAmountProduct: () => void,
}

export function ButtonAmountPreview({ 
  amountProduct,
  handleMinusAmountProduct,
  handlePlusAmountProduct
} : ButtonAmountPreviewProps ) {

  return (
    <ButtonAmountContainer>
      <button onClick={handleMinusAmountProduct} type="button">
        <Minus size={14} weight="bold"/>
      </button>
      <span> {amountProduct} </span>
      <button onClick={handlePlusAmountProduct} type="button">
        <Plus size={14} weight="bold"/>
      </button>
    </ButtonAmountContainer>
  )
}