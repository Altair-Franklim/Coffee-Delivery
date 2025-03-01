// import { useContext } from "react";
import { ProductRequestes } from "../../contexts/CartContext";

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  EDIT_PRODUCT = 'EDIT_PRODUCT',
  DELETE_PRODUCT = 'DELETE_PRODUCT'
}

export function addProductCartAction(product: ProductRequestes) {
    return {
      type: ActionTypes.ADD_NEW_PRODUCT,
      payload: {
        product,
      }
    }
  }

export function editProductCartAction(idProduct: string, newAmount: number) {
  return {
    type: ActionTypes.EDIT_PRODUCT,
    payload: {
      idProduct,
      newAmount,
    }
  }
}

export function deleteProductCartAction( idProduct: string) {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: {
      idProduct
    }
  }
}