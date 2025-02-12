import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Login,Logout } from '../store/Slice/UserSlice'

const Testredux2 = () => {
    const user = {
        username: 'ggwp',
        password: '12314'
    }

    const dispatch = useDispatch();
    const handleLogin = ()=>{
        dispatch(Login(user))
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