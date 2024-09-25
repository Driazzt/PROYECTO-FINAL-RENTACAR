import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomePage from './HomePage'
import { doLoginActions } from '../Components/User/UserActions'
import { doLoginFetch, createUser } from '../Core/Services/userFetch'

const LoginPage = () => {

    const user = useSelector((state) => state.userReducer.user)
    const dispatch = useDispatch()

    const [flagLogin, setFlagLogin] = useState(true) //true se ve el login y false se ve el register
    const [loginInfo, setLoginInfo] = useState({})
    const [registerInfo, setRegisterInfo] = useState({})

    const handlerLoginInfo = (name, value) => {
        setLoginInfo({
            ...loginInfo,
            [name]: value
        })
    }

    const handlerRegisterInfo = (name, value) => {
        setRegisterInfo({
            ...registerInfo,
            [name]: value
        })
    }

    const doRegister = async () => {
        const userInfo = await createUser(registerInfo)
        dispatch(doLoginActions({
            user: userInfo
        }))
    }

    const doLogin = async () => {
        const userInfo = await doLoginFetch(loginInfo.email, loginInfo.password)

        dispatch(doLoginActions({
            user: userInfo
        }))
    }

    return (
        <div>
            {
                !user ? (
                    flagLogin
                        ? (
                            <div>
                                <h1>Drivezy Rent A Car</h1>
                                <h2>Login</h2>
                                <div>
                                    <div>
                                        <span>Email</span>
                                        <input type="email" placeholder='Email address...' name="email" onChange={(e) => handlerLoginInfo(e.target.name, e.target.value)} />
                                    </div>
                                    <div>
                                        <span>Password</span>
                                        <input type="text" placeholder='Password...' name="password" onChange={(e) => handlerLoginInfo(e.target.name, e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <button onClick={doLogin}>Log in</button>
                                </div>
                                <div>
                                    <button onClick={() => setFlagLogin(false)}>Register</button>
                                </div>
                            </div>
                        )
                        : (
                            <div>
                                <h2>Sign Up!</h2>
                                <div>
                                    <div>
                                        <span>Name</span>
                                        <input type="text" placeholder="Name..." name="name" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}></input>
                                    </div>
                                    <div>
                                        <span>Username</span>
                                        <input type="text" placeholder="Username..." name="username" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}></input>
                                    </div>
                                    <div>
                                        <span>Email</span>
                                        <input type="email" placeholder="Email Address..." name="email" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}></input>
                                    </div>
                                    <div>
                                        <span>Password</span>
                                        <input type="password" placeholder="Password..." name="password" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}></input>
                                    </div>
                                    <div>
                                        <span>Birth Date</span>
                                        <input type="date" placeholder="Name..." name="birth_date" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)}></input>
                                    </div>
                                    <div>
                                        <button onClick={doRegister}>Sign up</button>
                                    </div>
                                    <div>
                                        <button onClick={() => setFlagLogin(true)}>Back to Login</button>
                                    </div>
                                </div>
                            </div>
                        )
                )
                    : (
                        <HomePage />
                    )
            }
        </div>
    )
}

export default LoginPage