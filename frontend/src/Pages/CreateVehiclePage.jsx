import React from 'react'
import CreateVehiclesComponent from "../Components/Vehicles/CreateVehicles/CreateVehiclesComponent"
import logoDrivezzy1 from "../assets/logoDrivezzy-nobg1.png"


const CreateVehiclePage = () => {
    return (
        <div>
            <img src={logoDrivezzy1} />
            <CreateVehiclesComponent />
        </div>
    )
}

export default CreateVehiclePage