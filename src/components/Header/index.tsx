import { HeaderContainer } from './styles'
import logoCoffee from './../../assets/logo-coffee-delivery.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
        <div>
          <img src={logoCoffee} alt=""/>
        </div>
        <nav>
          <div>
            <MapPin size={22} weight='fill'/>
            <p>Porto Alegre, RS</p>
          </div>
          <NavLink to={"/preview"} title="Carrinho">
            <ShoppingCart size={22} weight='fill'/>
          </NavLink>
        </nav>
    </HeaderContainer>
  )
}