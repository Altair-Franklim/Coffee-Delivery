import { 
  Coffee, 
  Package, 
  ShoppingCart, 
  Timer } from '@phosphor-icons/react'
import CupCoffee from './../../assets/cup-coffee.svg'
import BackgroundSection from '../../assets/background-section.svg'
import { 
  BackgroundContainer,
  HomeContainer, 
  IconContainer, 
  MainContainer, 
  SectionContainer } from './styles'
import { Card } from './components/Card'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
// import { useContext } from 'react'
// import { CartContext } from '../../contexts/CartContext'


// const PRODUCT_BASE: CardProps[] = [
//   {
//     id: 1,
//     category: ["Tradicional"],
//     type: "Expresso Tradicional",
//     description: "O tradicional café feito com água quente e grãos moídos",
//     price: 9.90,
//   },
//   {
//     id: 2,
//     category: ["Tradicional"],
//     type: "Expresso Americano",
//     description: "Expresso diluído, menos intenso que o tradicional",
//     price: 9.90,
//   },
//   {
//     id: 3,
//     category: ["Tradicional"],
//     type: "Expresso Cremoso",
//     description: "Café expresso tradicional com espuma cremosa",
//     price: 9.90,

//   },
//   {
//     id: 4,
//     category: ["Tradicional", "Gelado"],
//     type: "Expresso Tradicional",
//     description: "Bebida preparada com café expresso e cubos de gelo",
//     price: 9.90,
//   },
//   {
//     id: 5,
//     category: ["Tradicional", "Com leite"],
//     type: "Café com Leite",
//     description: "Meio a meio de expresso tradicional com leite vaporizado",
//     price: 9.90,
//   },
//   {
//     id: 6,
//     category: ["Tradicional", "Com Leite"],
//     type: "Latte",
//     description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
//     price: 9.90,
//   },
//   {
//     id: 7,
//     category: ["Tradicional", "Com Leite"],
//     type: "Capuccino",
//     description: "Bebida com canela feita de doses iguais de café, leite e espuma",
//     price: 9.90,
//   },
//   {
//     id: 8,
//     category: ["Tradicional", "Com Leite"],
//     type: "Macchiato",
//     description: "Café expresso misturado com um pouco de leite quente e espuma",
//     price: 9.90,
//   },
//   {
//     id: 9,
//     category: ["Tradicional", "Com Leite"],
//     type: "Mocaccino",
//     description: "Café expresso com calda de chocolate, pouco leite e espuma",
//     price: 9.90,
//   },
//   {
//     id: 10,
//     category: ["Especial", "Com Leite"],
//     type: "Chocolate Quente",
//     description: "Bebida feita com chocolate dissolvido no leite quente e café",
//     price: 9.90,
//   },
//   {
//     id: 11,
//     category: ["Especial", "Acoólico", "Gelado"],
//     type: "Cubano",
//     description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
//     price: 9.90,
//   },
//   {
//     id: 12,
//     category: ["Especial"],
//     type: "Havaiano",
//     description: "Bebida adocicada preparada com café e leite de coco",
//     price: 9.90,
//   },
//   {
//     id: 13,
//     category: ["Especial"],
//     type: "Árabe",
//     description: "Bebida preparada com grãos de café árabe e especiarias",
//     price: 9.90,
//   },
//   {
//     id: 14,
//     category: ["Especial", "Alcoólico"],
//     type: "Irlandês",
//     description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
//     price: 9.90,
//   },
// ] as const



export function Home() {
  
  const { products } = useContext(CartContext)

  return (
    <HomeContainer>
      <BackgroundContainer>
        <img src={BackgroundSection} alt="" />
        <SectionContainer>
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
            <section>
              <div>
                <IconContainer variant='yellow-dark'>
                  <ShoppingCart size={16} weight="fill" />
                </IconContainer>
                <p>Compra simples e segura</p>
              </div>
              <div>
                <IconContainer variant='base-text'>
                  <Package size={16} weight="fill" />
                </IconContainer>
                <p>Embalagem mantém o café intacto</p>
              </div>
              <div>
                <IconContainer variant='yellow'>
                  <Timer size={16} weight="fill" />
                </IconContainer>
                <p>Entrega rápida e rastreada</p>
              </div>      
              <div>
                <IconContainer variant='purple'>
                  <Coffee size={16} weight="fill" />
                </IconContainer>
                <p>O café chega fresquinho até você</p>
              </div>
            </section>
          </div>
          <img src={CupCoffee} alt="Copo de café com ilustrações" />
        </SectionContainer>
      </BackgroundContainer>
      <MainContainer>
        <h2>
          Nossos cafés
        </h2>
        <div>
          {products.map((product) => {
            return (
              <Card
                key={product.id}
                id={product.id} 
                category={product.category}
                type={product.type}
                description={product.description}
                price={product.price}
              />
            )
          })}
        </div>
      </MainContainer>
    </HomeContainer>
  )
}