import { createContext, useReducer, Dispatch, ReactNode } from 'react';
import Cookies from 'js-cookie';

interface CartItem {
  name: string;
  cat: string;
  img: string;
  id: number;
  p1: string;
  h1: string;
  price: string;
  qty: number;
}

interface ShippingData {
  
}

interface InitialState {
  cart: {
    cartItems: CartItem[];
    shippingData: ShippingData;
    paymentMethod?: string;
  };
}

type Action =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'SAVE_SHIPPING_DATA'; payload: ShippingData }
  | { type: 'SAVE_PAYMENT_METHOD'; payload: string }
  | { type: 'DECREMENT_QUANTITY'; payload: { id: number } }
  | { type: 'INCREMENT_QUANTITY'; payload: { id: number } };

  const initialState: InitialState = {
    cart: Cookies.get('cart')
      ? JSON.parse(Cookies.get('cart')!)
      : { cartItems: [], shippingData: {}, paymentMethod: undefined },
  };
const Store = createContext<{ state: InitialState; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

function reducer(state: InitialState, action: Action): InitialState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const newItem = action.payload;

      const existingItem = state.cart.cartItems.find((item) => item.id === newItem.id);

      const cartItems = existingItem
        ? state.cart.cartItems.map((item) => (item.id === existingItem.id ? newItem : item))
        : [...state.cart.cartItems, newItem];

      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));

      return { ...state, cart: { ...state.cart, cartItems } };
    }

    case 'REMOVE_ITEM': {
      const cartItems = state.cart.cartItems.filter((item) => item.id !== action.payload.id);

      Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }));

      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case 'INCREMENT_QUANTITY': {
        const { id } = action.payload;
        const updatedCartItems = state.cart.cartItems.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      
        Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems: updatedCartItems }));
      
        return { ...state, cart: { ...state.cart, cartItems: updatedCartItems } };
      }
      case 'DECREMENT_QUANTITY': {
        const { id } = action.payload;
        const updatedCartItems = state.cart.cartItems.map((item) =>
          item.id === id ? { ...item, qty: Math.max(item.qty - 1, 0) } : item
        );
      
        Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems: updatedCartItems }));
      
        return { ...state, cart: { ...state.cart, cartItems: updatedCartItems } };
      }
            

    case 'SAVE_SHIPPING_DATA':
      return {
        ...state,
        cart: {
          ...state.cart,
          shippingData: { ...state.cart.shippingData, ...action.payload },
        },
      };

    case 'SAVE_PAYMENT_METHOD':
      return {
        ...state,
        cart: {
          ...state.cart,
          paymentMethod: action.payload,
        },
      };

    default:
      return state;
  }
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };

  return <Store.Provider value={value}>{children}</Store.Provider>;
}

export default Store;
