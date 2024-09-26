import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import VehiclesListComponent from '../Components/Vehicles/ListVehicles/VehiclesListComponent'
// import CartComponent from "../Components/Cart/CartComponent"
import MenuComponent from '../Components/Menu/MenuComponent'


const HomePage = () => {

    const menuReducer = useSelector((state) => state.menuReducer)

    const loadComponent = () => {
        switch (menuReducer.menuOption) {
            case 0:
                return <VehiclesListComponent />
            // case 1:
            //     return <CartComponent />
        }
    }
    useEffect(() => { }, [menuReducer])

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <MenuComponent />
            <div>
                {
                    loadComponent()
                }
            </div>
        </div>
    )
}

export default HomePage