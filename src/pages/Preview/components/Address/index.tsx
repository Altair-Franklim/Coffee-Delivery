import { MapPinLine } from "@phosphor-icons/react";
import { AddressContainer } from "./styles";
import { useFormContext } from "react-hook-form";

export function Address() {

  const { 
    register,
  } = useFormContext()

  return (
    <AddressContainer >
      <div>
        <MapPinLine size={22} color="#C47F17"/>
        <div>
          <p>Endereço de Entrega</p>
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </div>
      </div>
      <input 
        required
        type="text" 
        placeholder="CEP"
        {...register('cep')}
      />
      <input 
        required
        type="text" 
        placeholder="Rua"
        {...register('street')}
      />
      <div>
        <input 
          type="text" 
          placeholder="Número"
          {...register('number')}
        />
        <input 
          type="text" 
          placeholder="Complemento"
          {...register('complement')}
        />
      </div>
      <div>
        <input 
          required
          type="text" 
          placeholder="Bairro"
          {...register('neighborhood')}
        />
        <input 
          required
          type="text" 
          placeholder="Cidade"
          {...register('city')}
        />
        <input 
          required
          type="text" 
          placeholder="UF"
          {...register('distrit')}
        />
      </div>
    </AddressContainer>
  )
}