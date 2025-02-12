import React from 'react'
import CartForm from './CartForm'
import CartList from './CartList'

const Cart = () => {
  return (
    <>
    <h1 className='text-2xl font-bold p-3'>ระบบจัดการตะกร้าสินค้า</h1>
      <CartList />
      <CartForm />
      </>
  )
}

export default Cart