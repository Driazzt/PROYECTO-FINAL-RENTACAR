import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMenuOption } from './MenuActions'

const MenuComponent = () => {

    const {
        user,
        isOnline
    } = useSelector((state) => state.userReducer)

    // const dispatch = useDispatch()
    // useEffect(() => { }, [user])

    // const handlerMenuOption = (option) => {
    //     dispatch(changeMenuOption({
    //         menuOption: option
    //     }))
    // }

    return (
        <div className="d-flex justify-content-around align-items-center flex-wrap p-3">
            <div className="d-flex justify-content-center align-items-center">
                <h6 className="font-weight-bold mb-0" style={{ margin: 10 }}>{user.username}</h6>
                <button className="btn btn-primary ml-2">My Profile</button>
            </div>
            <div className="text-center">
                <span className={`badge ${isOnline ? 'bg-success' : 'bg-secondary'} mt-2`}>
                    Status: {isOnline ? "Online" : "Offline"}
                </span>
            </div>
            {/* <div className="text-center">
                <span>Items on Cart: ({user.cart?.length || 0})</span>
                <button className="btn btn-secondary mt-2" onClick={() => handlerMenuOption(1)}>My Cart</button>
            </div> */}
        </div>
    )
}

export default MenuComponent