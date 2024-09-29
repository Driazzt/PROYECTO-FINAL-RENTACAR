import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createVehicles } from '../../../Core/Services/vehiclesFetch'
import 'bootstrap/dist/css/bootstrap.min.css'



const CreateVehiclesComponent = () => {

    const navigate = useNavigate()

    const [newVehicle, setNewVehicle] = useState({
        brand: '',
        model: '',
        engine_type: '',
        transmission: '',
        seats: 0,
        doors: 0,
        vehicle_type: '',
        registration_year: 2010,
        price_per_day: 0,
        image: ''
    });
    const newVehicleHandler = (fieldName, fieldValue) => {
        setNewVehicle({
            ...newVehicle,
            [fieldName]: fieldValue
        })
    }

    const goHomePage = () => {
        navigate('/home')
    }

    const vehicleListPage = () => {
        navigate("/vehicleList")
    }

    const createHandler = async () => {
        try {
            const response = await createVehicles(newVehicle)
            if (response) {
                navigate("/vehicleList")
            }
        } catch (error) {
            console.error("error", error)
        }
    }


    return (
        <div className="container mt-4">
            <div className="text-center">
                <h2>Create a new Vehicle</h2>
                <h4 className="mt-2">Fill this form to create a new vehicle:</h4>
            </div>

            <div className="mt-4">
                <div className="d-flex flex-column align-items-center gap-3">

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Brand</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Brand..."
                            name="brand"
                            onChange={(e) => newVehicleHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Model</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Model..."
                            name="model"
                            onChange={(e) => newVehicleHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Engine Type</label>
                        <select
                            className="form-control"
                            placeholder="Engine type..."
                            name="engine_type"
                            onChange={(e) => newVehicleHandler(e.target.name, e.target.value)}
                        >
                            <option value="">Select engine type...</option>
                            <option value="Gasoline">Gasoline</option>
                            <option value="Diesel">Diesel</option>
                            <option value="Hybrid">Hybrid</option>
                        </select>
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Transmission</label>
                        <select
                            className="form-control"
                            placeholder="Transmission..."
                            name="transmission"
                            onChange={(e) => newVehicleHandler(e.target.name, e.target.value)}
                        >
                            <option value="">Select transmission...</option>
                            <option value="Manual">Manual</option>
                            <option value="Automatic">Automatic</option>
                        </select>
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Seats</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Seats..."
                            name="seats"
                            onChange={(e) => newVehicleHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Doors</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Doors..."
                            name="doors"
                            onChange={(e) => newVehicleHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Vehicle Type</label>
                        <select
                            className="form-control"
                            placeholder="Vehicle type..."
                            name="vehicle_type"
                            onChange={(e) => newVehicleHandler(e.target.name, e.target.value)}
                        >
                            <option value="">Select vehicle type...</option>
                            <option value="Hatchback">Hatchback</option>
                            <option value="SUV">SUV</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Cabrio">Cabrio</option>
                            <option value="Van">Van</option>
                        </select>
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Registration Year</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Registration year..."
                            name="registration_year"
                            min="2010"
                            onChange={(e) => newVehicleHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Price per day</label>
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Price per day..."
                            name="price_per_day"
                            onChange={(e) => newVehicleHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Image</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="URL Image..."
                            name="image"
                            onChange={(e) => newVehicleHandler(e.target.name, e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-4 mb-4">
                <button className="btn btn-success ms-2" onClick={createHandler}>Create</button>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary-home me-2" onClick={vehicleListPage}>Vehicle List</button>
                <button className="btn btn-secondary-home ms-2" onClick={goHomePage}>Home</button>
            </div>
        </div>
    );
}

export default CreateVehiclesComponent