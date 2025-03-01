import { produce } from "immer";
import { ProductRequestes } from "../../contexts/CartContext";
import { ActionTypes } from "./actions";

// export interface CartState {
//   listProducts: ProductData[]
// }

export function CartReducer(state: ProductRequestes[], action: any) {
  switch (action.type) {
    case (ActionTypes.ADD_NEW_PRODUCT): {
      return produce(state, (draft) => {
        draft.push(action.payload.product)
      })
      }
    
    case (ActionTypes.EDIT_PRODUCT): {

      const currenteProductId = state.findIndex((item) => {
        return item.productId == action.payload.idProduct
      })
      return produce(state, (draft) => {
        draft[currenteProductId].productAmount = action.payload.newAmount
      })
    }

    case (ActionTypes.DELETE_PRODUCT): {

      return produce(state, (draft) => { 
        return draft.filter((item) => item.productId != action.payload.idProduct)
      })
    }
      default:
        return state
    }
  }
