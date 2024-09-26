import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadVehicles } from '../VehiclesActions'
import VehiclesItemComponent from '../VehiclesItemComponent'
import { getVehicles } from '../../../Core/Services/vehiclesFetch'

const VehiclesListComponent = () => {

    const dispatch = useDispatch()
    const vehicles = useSelector((state) => state.vehiclesReducer.vehicles)
    const loadVehiclesList = async () => {
        const vehiclesAux = await getVehicles()
        dispatch(
            loadVehicles({
                vehicles: vehiclesAux
            })
        )
    }

    useEffect(() => {
        loadVehiclesList()
    }, [])

    return (
        <div>
            {
                !vehicles ? <div>Loading...</div>
                    : (
                        vehicles.map((v, idx) => (
                            <VehiclesItemComponent key={idx} vehicles={v} />
                        ))
                    )
            }
        </div>
    )
}

export default VehiclesListComponent