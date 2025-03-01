import { 
  ClientDetailsContainer, 
  CartDetailsContainer, 
  PreviewContainer, 
  ResumeShoppingContainer,
  ButtonConfirmContainer} from "./styles";

import { Address } from "./components/Address";
import { CartShopping } from "./components/CartShopping";
import { MethodPayment } from "./components/MethodPayment";
import { z } from "zod";
import { 
  FormProvider, 
  useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { priceFormatter } from "../../utils/formatter";

const cartFormSchema = z.object({
  cep: z.string().optional(),
  street: z.string().optional(),
  number: z.string().optional(),
  complement: z.string().optional(),
  neighborhood: z.string().optional(),
  city: z.string().optional(),
  distrit: z.string().optional(),
  methodPay: z.string().optional()
})

type CartFormInputs = z.infer<typeof cartFormSchema>

export function Preview() {

  const {cart} = useContext(CartContext)

  const newAddressForm = useForm<CartFormInputs>({
    resolver: zodResolver(cartFormSchema),
    defaultValues: {
      cep: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      distrit: '',
      methodPay: 'dinheiro'
    }
  })

  const { 
    formState, 
    handleSubmit, 
    reset } = newAddressForm

  const { isSubmitting } = formState

  const cartSummary = cart.reduce((acc, cartItem) => {
    acc.total += cartItem.productPrice * cartItem.productAmount
    return acc 
  }, 
  {
    total: 0
  })

  function handleAddress(data: CartFormInputs) {
    // await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(data)
    reset()
  }

  const deliveryRate = 5

  return (
    <PreviewContainer>
      <FormProvider {...newAddressForm}>
        <ClientDetailsContainer 
          id="address-form" 
          onSubmit={handleSubmit(handleAddress)}
        >
          <h3> Complete o seu pedido </h3>
          <Address />
          <MethodPayment />
        </ClientDetailsContainer>
        <CartDetailsContainer>
          <h3> Cafés selecionados </h3>
          <div>
            {cart && cart.map((product) => {
              return (
                <>
                  <CartShopping
                    productId={product.productId}
                    productType={product.productType}
                    productPrice={product.productPrice} 
                    productAmount={product.productAmount}
                  />
                  <hr />
                </>
              )
            })}
            <ResumeShoppingContainer>
              <div>
                <p>Total de itens</p>
                <span>{priceFormatter.format(cartSummary.total)}</span> 
              </div>
              <div>
                <p>Entrega</p>
                <span>
                  {cart.length == 0 ? 
                    priceFormatter.format(0) 
                    : priceFormatter.format(deliveryRate)
                  }
                </span>
              </div>
              <div>
                <p>Total</p>
                <span>{priceFormatter.format(cartSummary.total + deliveryRate)}</span>
              </div>
            </ResumeShoppingContainer>
            <ButtonConfirmContainer 
              form="address-form" 
              type="submit"
              disabled={isSubmitting}
            >
              confirmar pedido
            </ButtonConfirmContainer>
          </div>
        </CartDetailsContainer>
      </FormProvider>
    </PreviewContainer>
  )
}