import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLogin } from '../redux/auth/authActions'

const Home = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state.auth.data)
    console.log(user)

    return (
        <div>
            <button onClick={() => dispatch(fetchLogin())}>Click</button>
        </div>
    )
}

export default Home
