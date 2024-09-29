import React from 'react'
import VehiclesListComponent from '../Components/Vehicles/ListVehicles/VehiclesListComponent'
import logoDrivezzy1 from "../assets/logoDrivezzy-nobg1.png"


const VehicleListPage = () => {
    return (
        <div>
            <img className="imgLogo" src={logoDrivezzy1} />
            <VehiclesListComponent />
        </div>
    )
}

export default VehicleListPage