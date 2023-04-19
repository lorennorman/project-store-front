const cartItems = JSON.parse(sessionStorage?.getItem('cart') || '[]')

export const
  isInCart = id => cartItems.indexOf(id) >= 0,

  addToCart = id => {
    if(isInCart(id)) { return }

    cartItems.push(id)
    sessionStorage?.setItem('cart', JSON.stringify(cartItems))
  }
