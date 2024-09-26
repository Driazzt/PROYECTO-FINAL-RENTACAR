import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeMenuOption } from './MenuActions'

const MenuComponent = () => {

    const {
        user,
        isOnline
    } = useSelector((state) => state.userReducer)

    const dispatch = useDispatch()
    useEffect(() => { }, [user])

    const handlerMenuOption = (option) => {
        dispatch(changeMenuOption({
            menuOption: option
        }))
    }

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <div>
                <span style={{ fontWeight: 'bold', fontSize: 24 }}>{user.username}</span>
                <button>My Profile</button>
            </div>
            <div>
                <span style={{ fontWeight: 'bold', fontSize: 42 }}>Drivezy Rent A Car</span>
            </div>
            <div>
                <span style={{ borderRadius: 20, margin: 20 }}>{isOnline ? "Online" : "Offline"}</span>
            </div>
            <div>
                <span>Items on Cart: ({user.cart?.length || 0})</span>
                <button onClick={() => handlerMenuOption(1)}>My Cart</button>
            </div>
        </div>
    )
}

export default MenuComponent