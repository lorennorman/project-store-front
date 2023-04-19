const cartItems = JSON.parse(localStorage?.getItem('cart') || '[]')

export const
  isInCart = id => cartItems.indexOf(id) >= 0,

  addToCart = id => {
    if(isInCart(id)) { return }

    cartItems.push(id)
    localStorage?.setItem('cart', JSON.stringify(cartItems))
  }
