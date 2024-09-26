import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import HomePage from './HomePage'
import { doLoginActions } from '../Components/User/UserActions'
import { doLoginFetch, createUser } from '../Core/Services/userFetch'
import logoDrivezzy1 from "../assets/logoDrivezzy-nobg1.png"
// import './LoginPage.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const LoginPage = () => {

    const user = useSelector((state) => state.userReducer.user)
    const dispatch = useDispatch()

    const [flagLogin, setFlagLogin] = useState(true)
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
        <div className='container d-flex flex-column align-items-center justify-content-center min-vh-100'>
            <img src={logoDrivezzy1} className="img-fluid mb-4" alt="Drivezzy Logo" style={{ maxWidth: "150px" }} />
            {
                !user ? (
                    flagLogin
                        ? (
                            <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
                                <h2 className="text-center mb-4">Login</h2>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder='Email address...' name="email" onChange={(e) => handlerLoginInfo(e.target.name, e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder='Password...' name="password" onChange={(e) => handlerLoginInfo(e.target.name, e.target.value)} />
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-success" onClick={doLogin}>Log in</button>
                                    <button className="btn btn-primary" onClick={() => setFlagLogin(false)}>Sign Up</button>
                                </div>
                            </div>
                        )
                        : (
                            <div className="card p-4 w-100" style={{ maxWidth: '400px' }}>
                                <h2 className="text-center mb-4">Sign Up</h2>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" placeholder="Name..." name="name" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <input type="text" className="form-control" placeholder="Username..." name="username" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" placeholder="Email Address..." name="email" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" placeholder="Password..." name="password" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="birth_date" className="form-label">Birth Date</label>
                                    <input type="date" className="form-control" placeholder="Birth Date..." name="birth_date" onChange={(e) => handlerRegisterInfo(e.target.name, e.target.value)} />
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary" onClick={doRegister}>Sign up</button>
                                    <button className="btn btn-secondary" onClick={() => setFlagLogin(true)}>Back to Login</button>
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