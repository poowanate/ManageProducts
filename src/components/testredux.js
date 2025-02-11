import React from 'react'
import { useSelector } from 'react-redux';

const Testredux = () => {

    const component1 = useSelector((state)=>({...state.UserStore })) 
  console.log(component1.value)

  return (
    <>
    <div>component1</div>
    <div>store = {component1.value}</div>
    </>
  )
}

export default Testredux