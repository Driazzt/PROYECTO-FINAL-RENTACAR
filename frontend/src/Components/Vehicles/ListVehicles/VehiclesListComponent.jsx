import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadVehicles } from './VehiclesActions'
import { getVehicles } from '../../../Core/Services/vehiclesFetch'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { doLogoutAction } from '../../User/UserActions'
import './VehicleListComponent.css'





const VehiclesListComponent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const vehicles = useSelector((state) => state.vehiclesReducer.vehicles)
    const user = useSelector((state) => state.userReducer.user)
    const loadVehiclesList = async () => {
        const vehiclesAux = await getVehicles()
        dispatch(
            loadVehicles({
                vehicles: vehiclesAux
            })
        )
    }

    const userRole = user.role
    console.log("userRole", userRole)

    const goCreateVehicles = () => {
        navigate("/create")
    }

    const goLogout = () => {
        localStorage.removeItem('token');

        dispatch(doLogoutAction())
        navigate("/")
    }

    const goHomePage = () => {
        navigate("/home")
    }

    const goContact = () => {
        navigate("/contact")
    }

    const goProfile = () => {
        navigate("/myProfile")
    }

    const goAllUsers = () => {
        navigate("/getAllUsers")
    }

    const goVehicleInfo = (vehicleId) => {
        navigate("/vehicleInfo", {
            state: {
                vehicleId
            }
        })
    }

    useEffect(() => {
        loadVehiclesList()
    }, [])

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                {userRole === "admin" && (
                    <button onClick={goCreateVehicles} className="btn btn-terciarie">
                        Create
                    </button>
                )}

                <button className="btn btn-terciarie" onClick={goContact}>
                    Contact
                </button>

                <button className="btn btn-terciarie" onClick={goProfile}>
                    My Profile
                </button>
                {userRole === "admin" && (
                    <button onClick={goAllUsers} className="btn btn-terciarie">
                        Get Users
                    </button>
                )}
            </div>

            <div className="mb-4">
                {!vehicles ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    <div className="row g-4">
                        {vehicles.map((v, idx) => (
                            <div
                                className="col-12 col-sm-6 col-md-4 col-lg-3"
                                key={idx}
                                onClick={() => goVehicleInfo(v._id)}
                                style={{ cursor: "pointer" }}
                            >
                                <div className="card h-100">
                                    <div className="card-body text-center d-flex flex-column align-items-center">
                                        <h5 className="card-title">{v.brand} {v.model}</h5>
                                        {/* <p className="text-warning mb-1">{v.engine_type}</p>
                                        <p className="text-warning mb-1">{v.transmission}</p>
                                        <p className="text-warning mb-1">{v.seats} seats</p>
                                        <p className="text-warning mb-1">{v.doors} doors</p>
                                        <p className="text-warning mb-1">{v.vehicle_type}</p>
                                        <p className="text-warning">{v.registration_year}</p> */}
                                        <p className="text-warning">{v.price_per_day} €/day</p>

                                        <img
                                            className="img-fluid mt-3"
                                            src={v.image}
                                            alt={`${v.brand} ${v.model}`}
                                            onClick={() => goVehicleInfo(v._id)}
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <button className="btn btn-terciarie" onClick={goLogout}>
                Logout
            </button>
            {/* <div className="d-flex justify-content-center">
                <button className="btn btn-secondary-home" onClick={goHomePage}>
                    Home
                </button>
            </div> */}
        </div>
    );
}

export default VehiclesListComponent;