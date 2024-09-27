import React from 'react'
import VehiclesListComponent from '../Components/Vehicles/ListVehicles/VehiclesListComponent'
import logoDrivezzy1 from "../assets/logoDrivezzy-nobg1.png"

// import CartComponent from "../Components/Cart/CartComponent"


const HomePage = () => {

    return (
        <div>
            <img src={logoDrivezzy1} />
            <VehiclesListComponent />
        </div>
    )
}

export default HomePage