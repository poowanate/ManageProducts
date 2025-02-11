import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Login,Logout } from '../store/UserSlice'

const Testredux2 = () => {

    const dispatch = useDispatch();
    const handleLogin = ()=>{
        dispatch(Login())
    }
    const handleLogout = ()=>{
        dispatch(Logout())
    }

  return (
    <>
    <div>component2</div>
    <button onClick={handleLogin}>Login</button>
    <button onClick={handleLogout}>Logout</button>
    </>
  )
}

export default Testredux2