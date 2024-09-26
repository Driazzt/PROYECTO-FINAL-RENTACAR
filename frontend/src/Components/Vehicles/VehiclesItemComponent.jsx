//! TODO EN DESUSO POR AHORA!



import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { loadInfoActions } from '../User/UserActions'
// import { addVehiclesToCart, getUser } from '../../Core/Services/userFetch'

const VehiclesItemComponent = (props) => {

    const { vehicles } = props
    const navigate = useNavigate();


    const goCreateVehicles = () => {
        navigate("/createVehiclePage")
    }


    //! COSAS PARA EL CART
    // const user = useSelector((state) => state.userReducer.user)
    // const dispatch = useDispatch()

    // const addToCart = async () => {
    //     console.log("vehicles._id", vehicles._id)

    //     await addVehiclesToCart(user._id, vehicles._id)
    //     const userUpdated = await getUser(user._id)
    //     console.log("userUpdated", userUpdated)

    //     dispatch(
    //         loadInfoActions({
    //             user: userUpdated
    //         })
    //     )
    // }



    return (
        <div >
            <div>
                <div>
                    <img src={vehicles.image} />
                </div>

                <div>
                    <span>{vehicles.brand}</span>
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
                {/* <div>
                {
                    !readOnly && <button onClick={addToCart}>Add to my Cart</button>
                }
            </div> */}
            </div>
            <div>
                <button style={{ marginRight: 20 }} onClick={goCreateVehicles}>Create Vehicle</button>
                {/* <button style={{ marginLeft: 20 }} onClick={goHomePage}>Home</button> */}
            </div>
        </div>

    )
}

export default VehiclesItemComponent