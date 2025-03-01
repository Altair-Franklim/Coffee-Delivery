import Expresso from './../../../../assets/type-expresso.svg'
import { ButtonAddCart, CardContainer } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { ButtonAmount } from '../ButtonAmount'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { priceFormatter } from '../../../../utils/formatter'

export interface CardProps {
  id: number,
  category: string[],
  type: string,
  description: string,
  price: number,
}

interface NewProductData {
  productId: number,
  productType: string,
  productPrice: number,
  productAmount: number,
}

export function Card({
  id,
  category, 
  type, 
  description, 
  price}: CardProps) {

  const { cart, createProductCart, editProductCart } = useContext(CartContext)
    
  const [ amountProduct, setAmountProduct ] = useState(0)

  const newProduct : NewProductData = {
    productId: id,
    productType: type,
    productPrice: price,
    productAmount: amountProduct,
  }

  function handleMinusAmountProduct() {
    setAmountProduct((state) =>  state ? state - 1 : 0)}

  function handlePlusAmountProduct() {
    setAmountProduct((state) => state + 1)
  }

  function handleCreateProductCart(product: NewProductData) {
    const isNewProduct = !!cart.find((cart) => cart.productId == product.productId)
    
    if (isNewProduct) {
      editProductCart(product.productId, amountProduct)
    } else {
      createProductCart(product)
    }
  }
    
  const isAddDisabled = !!!amountProduct

  return (
    <CardContainer>
      <figure>
        <img src={Expresso} alt="Xícara de café expresso" />
        <div>
          {category.map((item) => {
            return (
              <label key={category.indexOf(item)}>
                {item}
              </label>
            )
          })}
        </div>
      </figure>
      <h3> 
        {type}
      </h3>
      <p>
        {description}
      </p>
      <fieldset>
        <h3>
          {priceFormatter.format(price)}
        </h3>
        <div>
          <ButtonAmount 
          amountProduct={amountProduct} 
          handleMinusAmountProduct={handleMinusAmountProduct}
          handlePlusAmountProduct={handlePlusAmountProduct}
          />
          <ButtonAddCart 
          onClick={() => handleCreateProductCart(newProduct)} 
          disabled={isAddDisabled} 
          type="button">
            <ShoppingCart size={22} weight="fill" />
          </ButtonAddCart>
        </div>
      </fieldset>
    </CardContainer>
  )
}