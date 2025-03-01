import { 
  Bank, 
  CreditCard, 
  CurrencyDollar, 
  Money } from "@phosphor-icons/react";
import { 
  MethodPaymentContainer, 
  RadioGroupContainer, 
  RadioGroupItemContainer } from "./styles";
import { 
  Controller, 
  useFormContext } from "react-hook-form";

export function MethodPayment() {

  const { control } = useFormContext()

  return (
    <MethodPaymentContainer>
      <div>
        <CurrencyDollar size={22} />
        <div>
          <p>Pagamento</p>
          <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
        </div>
      </div>
        <Controller
          control={control}
          name="methodPay"
          render={({ field }) => {
            return (
              <RadioGroupContainer 
                onValueChange={field.onChange} 
                value={field.value}
                required={true} 
              >
                <RadioGroupItemContainer value="cartão de crédito" >
                  <CreditCard size={16} />
                  cartão de crédito
                </RadioGroupItemContainer>
                <RadioGroupItemContainer value="cartão de débito" >
                  <Bank size={16} />
                  Cartão de Débito
                </RadioGroupItemContainer>
                <RadioGroupItemContainer value="dinheiro" >
                  <Money size={16} />
                  Dinheiro
                </RadioGroupItemContainer>
              </RadioGroupContainer>
            )
          }}
        />
    </MethodPaymentContainer>
  )
}