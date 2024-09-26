import React, { useEffect, useState } from 'react'
import VehiclesItemComponent from '../VehiclesItemComponent'
import { useSelector } from 'react-redux'

const MyVehicleListComponent = () => {

    const [myVehiclesList, setMyVehiclesList] = useState(undefined)
    const vehicles = useSelector((state) => state.vehiclesReducer.vehicles)
    const {
        cart
    } = useSelector((state) => state.userReducer.user)

    const matchProducts = async () => {
        const listVehicles = vehicles.filter(v => cart.find(c => c.vehiclesId == v.id))
        setMyVehiclesList(listVehicles)
    }

    useEffect(() => {
        matchProducts
    }, [])


    return (
        <div>
            {
                !myVehiclesList ? <div>Loading...</div>
                    : (
                        vehicles.map((v, idx) => {
                            <VehiclesItemComponent key={idx} vehicles={v} readOnly={true} />
                        })
                    )
            }
        </div>
    )
}

export default MyVehicleListComponent