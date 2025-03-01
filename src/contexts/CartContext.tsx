import { 
  createContext,
  ReactNode, 
  useEffect, 
  useReducer,
  useState} from "react"
import { CartReducer } from "../reducers/cart/reducer"
import { 
  addProductCartAction, 
  editProductCartAction,
  deleteProductCartAction } from "../reducers/cart/actions"

interface CartProviderProps {
  children: ReactNode
}

interface CartContextType {
  cart: ProductRequestes[],
  products: Products[],
  createProductCart: (product: ProductRequestes) => void, 
  editProductCart: (idProduct: string, newAmount: number) => void,
  deleteProductCart: (idProduct: string) => void 
}

export interface ProductRequestes {
  productId: string,
  productType: string,
  productPrice: number,
  productAmount: number,
}

interface Products {
  id: string,
  category: string[],
  type: string,
  description: string,
  price: number,
}


export const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }:CartProviderProps) {

  const [ products, setProducts ] = useState<Products[]>([])

  async function loadProducts() {
    const response = await fetch('http://localhost:3333/products')
    const products = await response.json()

    setProducts(products)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  const [ cart, dispatch ] = useReducer(
    CartReducer, 
    [],
    () => {
      const storedStateJSON = localStorage.getItem('@ignite-coffee-delivery:cart-1.0.0')
      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }
    })

  useEffect(() => {
    const stateJSON = JSON.stringify(cart)
    localStorage.setItem('@ignite-coffee-delivery:cart-1.0.0', stateJSON)
  }, [cart])

  function createProductCart(product: ProductRequestes) {
    dispatch(addProductCartAction(product))
  }

  function editProductCart(idProduct: string, newAmount: number) {
    dispatch(editProductCartAction(idProduct, newAmount))
  }

  function deleteProductCart(idProduct: string) {
    dispatch(deleteProductCartAction(idProduct))
  }

  return (
    <CartContext.Provider value={{
      cart,
      products, 
      createProductCart,
      editProductCart,
      deleteProductCart}}>
      {children}
    </CartContext.Provider>
  )
}