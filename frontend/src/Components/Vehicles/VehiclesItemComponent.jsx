import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadInfoActions } from '../User/UserActions'
import { addVehiclesToCart, getUser } from '../../Core/Services/userFetch'

const VehiclesItemComponent = (props) => {

    const { vehicles, readOnly } = props
    const user = useSelector((state) => state.userReducer.user)
    const dispatch = useDispatch()

    const addToCart = async () => {

        await addVehiclesToCart(user.id, vehicles.id)
        const userUpdated = await getUser(user.id)

        dispatch(
            loadInfoActions({
                user: userUpdated
            })
        )
    }

    return (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'row' }}>
            <div>
                <img src={vehicles.image} alt="" />
            </div>

            <div>
                <span>{vehicles.model}</span>
            </div>

            <div>
                <span>{vehicles.engine_type}</span>
            </div>

            <div>
                <span>{vehicles.transmission}</span>
            </div>

            <div>
                <span>{vehicles.seats}</span>
            </div>

            <div>
                <span>{vehicles.doors}</span>
            </div>

            <div>
                <span>{vehicles.vehicle_type}</span>
            </div>

            <div>
                <span>{vehicles.registration_year}</span>
            </div>

            <div>
                <span>{vehicles.price_per_day}</span>
            </div>
            <div>
                {
                    !readOnly && <button onClick={addToCart}>Add to my Cart</button>
                }
            </div>
        </div>
    )
}

export default VehiclesItemComponent