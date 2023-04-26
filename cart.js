import { store, component } from 'https://cdn.jsdelivr.net/npm/reefjs@12/dist/reef.es.min.js'




export const
  cartItems = store(JSON.parse(localStorage?.getItem('cart') || '[]')),

  isInCart = id => cartItems.indexOf(id) >= 0,

  addToCart = id => {
    if(isInCart(id)) { return }

    cartItems.push(id)
    localStorage?.setItem('cart', JSON.stringify(cartItems))
  },

  removeFromCart = id => {
    if(!isInCart(id)) { return }

    cartItems.splice(cartItems.indexOf(id), 1)
    localStorage?.setItem('cart', JSON.stringify(cartItems))
  }


component('#cart-count', () => cartItems.length)
