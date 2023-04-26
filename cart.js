import { store, component } from 'https://cdn.jsdelivr.net/npm/reefjs@12/dist/reef.es.min.js'

const cartItems = store(JSON.parse(localStorage?.getItem('cart') || '[]'))

component('#cart-count', () => cartItems.length)

export const
  isInCart = id => cartItems.indexOf(id) >= 0,

  addToCart = id => {
    if(isInCart(id)) { return }

    cartItems.push(id)
    localStorage?.setItem('cart', JSON.stringify(cartItems))
  }
