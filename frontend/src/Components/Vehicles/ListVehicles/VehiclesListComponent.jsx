import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadVehicles } from './VehiclesActions'
import { getVehicles } from '../../../Core/Services/vehiclesFetch'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'



const VehiclesListComponent = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const vehicles = useSelector((state) => state.vehiclesReducer.vehicles)
    const loadVehiclesList = async () => {
        const vehiclesAux = await getVehicles()
        dispatch(
            loadVehicles({
                vehicles: vehiclesAux
            })
        )
    }
    const goCreateVehicles = () => {
        navigate("/create")
    }

    const goHomePage = () => {
        navigate("/")
    }

    const goContact = () => {
        navigate("/contact")
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
        <div className="container mt-4">
            <div className="d-flex justify-content-between mb-4">
                <button className="btn btn-secondary" onClick={goHomePage}>Back Home</button>
                <button className="btn btn-success" onClick={goCreateVehicles}>Create a Vehicle</button>
                <button className="btn btn-primary" onClick={goContact}>Contact Us!</button>
            </div>

            <div className="mb-4">
                {!vehicles
                    ? <div>Loading...</div>
                    : (
                        <div className="row g-4">
                            {vehicles.map((v, idx) => (
                                <div
                                    className="col-12 col-sm-6 col-md-4 col-lg-3"
                                    key={idx}
                                    onClick={() => goVehicleInfo(v._id)}
                                    style={{ cursor: "pointer", padding: "20px", border: "1px solid #D6D8D9", borderRadius: "20px" }}
                                >
                                    <div className="d-flex flex-column align-items-center">
                                        <span className="fw-bold">{v.brand} {v.model}</span>
                                        <span className="text-warning fw-bold">{v.engine_type}</span>
                                        <span className="text-warning fw-bold">{v.transmission}</span>
                                        <span className="text-warning fw-bold">{v.seats} seats</span>
                                        <span className="text-warning fw-bold">{v.doors} doors</span>
                                        <span className="text-warning fw-bold">{v.vehicle_type}</span>
                                        <span className="text-warning fw-bold">{v.registration_year}</span>
                                        <span className="text-warning fw-bold">{v.price_per_day} €/day</span>

                                        <div className="mt-2">
                                            <img
                                                className="img-fluid"
                                                src={v.image}
                                                alt={`${v.model}`}
                                                style={{ maxHeight: "150px", objectFit: "contain" }}
                                                onClick={() => goVehicleInfo(v._id)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary" onClick={goHomePage}>Home</button>
            </div>
        </div>
    );
}

export default VehiclesListComponent;