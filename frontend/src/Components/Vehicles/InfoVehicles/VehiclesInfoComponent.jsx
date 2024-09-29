import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { loadVehicleId } from '../ListVehicles/VehiclesActions'
import { deleteVehicle, getVehicleById, modifyVehicles } from '../../../Core/Services/vehiclesFetch'
import IconManual from '../../Icons/IconManual/iconManual'
import GasIcon from '../../Icons/IconManual/GasIcon'
import SeatsIcon from '../../Icons/IconManual/SeatsIcon'
import DoorIcon from '../../Icons/IconManual/DoorIcon'
import * as Yup from "yup"

const VehiclesInfoComponent = () => {

    const dispatch = useDispatch()
    const vehicle = useSelector((state) => state.vehiclesReducer.vehicle)
    const user = useSelector((state) => state.userReducer.user)
    const userRole = user.role
    const navigate = useNavigate()
    const { state } = useLocation()
    const { vehicleId } = state
    const [vehicleInfo, setVehicleInfo] = useState(undefined)
    const [vehicleInit, setVehicleInit] = useState(undefined)
    const [newVehicleModify, setNewVehicleModify] = useState(undefined)
    const [isEdit, setIsEdit] = useState(undefined)

    //TODO:
    const initialValuesForm = {
        brand: "",
        model: "",
        image: "",
        engine_type: "",
        transmission: "",
        seats: 0,
        doors: 0,
        vehicle_type: "",
        registration_year: 0,
        price_per_day: 0,
    };

    const vehicleValidationSchema = Yup.object({
        brand: Yup.string().required("Brand is required"),
        model: Yup.string().required("Model is required"),
        image: Yup.string().url("Invalid URL").required("Image URL is required"),
        engine_type: Yup.string().required("Engine type is required"),
        transmission: Yup.string().required("Transmission is required"),
        seats: Yup.number().positive("Seats must be a positive number").integer().required("Seats are required"),
        doors: Yup.number().positive("Doors must be a positive number").integer().required("Doors are required"),
        vehicle_type: Yup.string().required("Vehicle type is required"),
        registration_year: Yup.number().min(2015, "Invalid year"),
        price_per_day: Yup.number().positive("Price must be positive").required("Price per day is required"),
    });


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
                                                            <select
                                                                name="engine_type"
                                                                className="form-control"
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            >
                                                                <option value="">Select engine type...</option>
                                                                <option value="Gasoline">Gasoline</option>
                                                                <option value="Diesel">Diesel</option>
                                                                <option value="Hybrid">Hybrid</option>
                                                            </select>
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Transmission</label>
                                                            <select
                                                                name="transmission"
                                                                className="form-control"
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            >
                                                                <option value="">Select transmission...</option>
                                                                <option value="Manual">Manual</option>
                                                                <option value="Automatic">Automatic</option>
                                                            </select>
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
                                                            <select
                                                                name="vehicle_type"
                                                                className="form-control"
                                                                onChange={(e) => vehicleModifyHandler(e.target.name, e.target.value)}
                                                            >
                                                                <option value="">Select vehicle type...</option>
                                                                <option value="Hatchback">Hatchback</option>
                                                                <option value="SUV">SUV</option>
                                                                <option value="Sedan">Sedan</option>
                                                                <option value="Cabrio">Cabrio</option>
                                                                <option value="Van">Van</option>
                                                            </select>
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

                                                        <button type="submit" className="btn btn-success" onClick={saveHandler}>Save Changes</button>
                                                    </form>
                                                ) : (
                                                    <div>
                                                        <h6 className="text-alert">{vehicle.brand} {vehicle.model}</h6>
                                                        <img src={vehicle.image} alt={vehicle.model} className="img-fluid mb-2" />
                                                        <h6 className="text-alert"><GasIcon />  {vehicle.engine_type}</h6>
                                                        <h6 className="text-alert"><IconManual /> {vehicle.transmission}</h6>
                                                        <h6 className="text-alert"><SeatsIcon />{vehicle.seats} <DoorIcon />{vehicle.doors}</h6>
                                                        <h6 className="text-alert">{vehicle.vehicle_type}</h6>
                                                        <h6 className="text-alert">{vehicle.registration_year}</h6>
                                                        <h6 className="text-terciarie">{vehicle.price_per_day}€ / day</h6>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    {userRole === 'admin' && (
                                        <div>
                                            <button onClick={() => setIsEdit(true)} className="btn btn-secondary-home">Edit Vehicle</button>
                                        </div>
                                    )}
                                </div>

                                {isEdit && (
                                    <div className="mb-4 d-flex justify-content-center">
                                        <button className="btn btn-warning me-3" onClick={cancelHandler}>Cancel</button>
                                        <button className="btn btn-success" onClick={saveHandler}>Save</button>
                                    </div>
                                )}

                                <div className="mb-4">
                                    {userRole === 'admin' && (
                                        <div>
                                            <button onClick={() => deleteHandler(vehicle._id)} className="btn btn-danger">Delete Vehicle</button>
                                        </div>
                                    )}
                                </div>

                                <div className="d-flex justify-content-center gap-3">
                                    <button className="btn btn-secondary-home" onClick={vehicleListPage}>Vehicle List</button>
                                    <button className="btn btn-secondary-home" onClick={goHomePage}>Back Home</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div >
    );
}

export default VehiclesInfoComponent