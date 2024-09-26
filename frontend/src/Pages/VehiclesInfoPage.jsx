import React from 'react'
import VehiclesInfoComponent from '../Components/Vehicles/InfoVehicles/VehiclesInfoComponent'
import logoDrivezzy1 from "../assets/logoDrivezzy-nobg1.png"


const VehiclesInfoPage = () => {
    return (
        <div>
            <img src={logoDrivezzy1} />
            <VehiclesInfoComponent />
        </div>
    )
}

export default VehiclesInfoPage