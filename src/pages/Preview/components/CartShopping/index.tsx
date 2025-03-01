import { 
  ButtonRemoveContainer, 
  ButtonsContainer, 
  CartShoppingContainer } from "./styles";
import Expresso from '../../../../assets/type-expresso.svg'
import { Trash } from "@phosphor-icons/react";
import { CartContext, ProductRequestes } from "../../../../contexts/CartContext";
import { ButtonAmountPreview } from "../ButtonAmountPreview";
import { useContext } from "react";
import { priceFormatter } from "../../../../utils/formatter";

export function CartShopping({
  productId, 
  productType,
  productPrice,
  productAmount}: ProductRequestes) {

  const { 
    editProductCart,
    deleteProductCart } = useContext(CartContext)
  
  function handleMinusAmountProduct() {
    if (productAmount > 1) {
      const newAmount = productAmount - 1
      editProductCart(productId, newAmount)
    }
  }

  function handlePlusAmountProduct() {
    const newAmount = productAmount + 1
    editProductCart(productId, newAmount)
  }

  function handleDeleteProductCart() {
    deleteProductCart(productId)
  }

  return (
    <CartShoppingContainer>
      <div>
        <img src={Expresso} alt="Copo de café com ilustrações" />
        <div>
          <p> {productType} </p>
          <ButtonsContainer>
            <ButtonAmountPreview 
              amountProduct={productAmount}
              handleMinusAmountProduct={handleMinusAmountProduct}
              handlePlusAmountProduct={handlePlusAmountProduct} 
            />
            <ButtonRemoveContainer onClick={handleDeleteProductCart}>
              <Trash size={16}/>
              <span> remover </span>
            </ButtonRemoveContainer>
          </ButtonsContainer>
        </div>
      </div>
      <span> 
        {priceFormatter.format(productPrice * productAmount)} 
      </span>
    </CartShoppingContainer>
  )
}