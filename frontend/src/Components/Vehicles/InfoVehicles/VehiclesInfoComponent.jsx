import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { loadVehicleId } from '../ListVehicles/VehiclesActions'
import { deleteVehicle, getVehicleById, modifyVehicles } from '../../../Core/Services/vehiclesFetch'

const VehiclesInfoComponent = () => {

    const dispatch = useDispatch()
    const vehicle = useSelector((state) => state.vehiclesReducer.vehicle)

    const navigate = useNavigate()
    const { state } = useLocation()
    const { vehicleId } = state
    const [vehicleInfo, setVehicleInfo] = useState(undefined)
    const [vehicleInit, setVehicleInit] = useState(undefined)
    const [newVehicleModify, setNewVehicleModify] = useState(undefined)
    const [isEdit, setIsEdit] = useState(undefined)


    const saveHandler = () => {
        modifyVehicles(vehicleId, newVehicleModify)
        setIsEdit(false)
        setVehicleInit(vehicleInfo)

        dispatch(
            loadVehicleId({
                vehicle: (vehicleId, newVehicleModify)
            })
        )
    }

    const cancelHandler = () => {
        setIsEdit(false)
        setVehicleInfo(vehicleInit)
    }

    const vehicleModifyHandler = (fieldName, fieldValue) => {
        setNewVehicleModify({
            ...newVehicleModify,
            [fieldName]: fieldValue
        })
    }

    const goHomePage = () => {
        navigate("/home")
    }

    const vehicleListPage = () => {
        navigate("/vehicleList")
    }

    const load = async () => {
        const vehicleAux = await getVehicleById(vehicleId)

        dispatch(
            loadVehicleId({
                vehicle: vehicleAux
            })
        )
    }

    useEffect(() => {
        load();
    }, [])


    const deleteHandler = (vehicleId) => {
        deleteVehicle(vehicleId)
        loadVehicleId
        navigate("/vehicleList")
    }



    return (
        <div className="container mt-4">
            <div>
                <div>
                    {!vehicle
                        ? <div>Loading...</div>
                        : (
                            <div className="d-flex flex-column align-items-center gap-4 text-center fw-bold text-black">
                                <div>
                                    {isEdit && <></>}
                                </div>

                                <div className="container mt-5">
                                    <div className="card shadow">
                                        <div className="card-header">
                                            <h5 className="mb-0">{isEdit ? "Edit Vehicle" : "Vehicle Details"}</h5>
                                        </div>
                                        <div className="card-body">
                                            <div className="mb-4">
                                                {isEdit ? (
                                                    <form>
                                                        <div className="mb-3">
                                                            <label className="form-label">Brand</label>
                                                            <input
                                                                type="text"
                                                                name="brand"
                                                                className="form-control"
                                                                placeholder="Fill with a brand..."
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Model</label>
                                                            <input
                                                                type="text"
                                                                name="model"
                                                                className="form-control"
                                                                placeholder="Fill with a model..."
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Image URL</label>
                                                            <input
                                                                type="text"
                                                                name="image"
                                                                className="form-control"
                                                                placeholder="Fill with an URL image..."
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Engine Type</label>
                                                            <input
                                                                type="text"
                                                                name="engine_type"
                                                                className="form-control"
                                                                placeholder="Fill with an engine type..."
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Transmission</label>
                                                            <input
                                                                type="text"
                                                                name="transmission"
                                                                className="form-control"
                                                                placeholder="Fill with a transmission..."
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Seats</label>
                                                            <input
                                                                type="number"
                                                                name="seats"
                                                                className="form-control"
                                                                placeholder="Fill with number of seats..."
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Doors</label>
                                                            <input
                                                                type="number"
                                                                name="doors"
                                                                className="form-control"
                                                                placeholder="Fill with number of doors..."
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Vehicle Type</label>
                                                            <input
                                                                type="text"
                                                                name="vehicle_type"
                                                                className="form-control"
                                                                placeholder="Fill with the vehicle type..."
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Registration Year</label>
                                                            <input
                                                                type="number"
                                                                name="registration_year"
                                                                className="form-control"
                                                                placeholder="Fill with the registration year..."
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Price per Day (€)</label>
                                                            <input
                                                                type="number"
                                                                name="price_per_day"
                                                                className="form-control"
                                                                placeholder="Fill with the price per day..."
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            />
                                                        </div>

                                                        <button type="submit" className="btn btn-primary">Save Changes</button>
                                                    </form>
                                                ) : (
                                                    <div>
                                                        <h6 className="text-primary  ">{vehicle.brand} {vehicle.model} </h6>
                                                        <img src={vehicle.image} alt={vehicle.model} className="img-fluid mb-2" />
                                                        <h6 className="text-alert">{vehicle.engine_type}</h6>
                                                        <h6 className="text-alert">{vehicle.transmission}</h6>
                                                        <h6 className="text-alert">{vehicle.seats} seats</h6>
                                                        <h6 className="text-alert">{vehicle.doors} doors</h6>
                                                        <h6 className="text-alert">{vehicle.vehicle_type}</h6>
                                                        <h6 className="text-alert">{vehicle.registration_year}</h6>
                                                        <h6 className="text-success  ">{vehicle.price_per_day}€/day</h6>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <button className="btn btn-primary" onClick={() => setIsEdit(true)}>EDIT VEHICLE</button>
                                </div>

                                {isEdit && (
                                    <div className="mb-4 d-flex justify-content-center">
                                        <button className="btn btn-warning me-3" onClick={cancelHandler}>Cancel</button>
                                        <button className="btn btn-success" onClick={saveHandler}>Save</button>
                                    </div>
                                )}

                                <div className="mb-4">
                                    <button className="btn btn-danger" onClick={() => deleteHandler(vehicle._id)}>DELETE</button>
                                </div>

                                <div className="d-flex justify-content-center gap-3">
                                    <button className="btn btn-secondary" onClick={vehicleListPage}>Vehicle List</button>
                                    <button className="btn btn-secondary" onClick={goHomePage}>Back Home</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default VehiclesInfoComponent