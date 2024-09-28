import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createUserFetch } from '../../Core/Services/userFetch';

const CreateUserComponent = () => {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        birth_date: '',
        role: 'user',
    });

    const newUserHandler = (fieldName, fieldValue) => {
        setNewUser({
            ...newUser,
            [fieldName]: fieldValue,
        });
    };

    const goHomePage = () => {
        navigate('/home');
    };

    const userListPage = () => {
        navigate('/getAllUsers');
    };

    const createHandler = async () => {
        try {
            const response = await createUserFetch(newUser);
            navigate('/home');
            if (response) { }
        } catch (error) {
            console.error('Error creating user', error);
        }
    };

    return (
        <div className="container mt-4">
            <div className="text-center">
                <h2>Create a new User</h2>
                <h4 className="mt-2">Fill this form to create a new user:</h4>
            </div>

            <div className="mt-4">
                <div className="d-flex flex-column align-items-center gap-3">

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Name..."
                            name="name"
                            onChange={(e) => newUserHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Username..."
                            name="username"
                            onChange={(e) => newUserHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email..."
                            name="email"
                            onChange={(e) => newUserHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Password..."
                            name="password"
                            onChange={(e) => newUserHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Birth Date</label>
                        <input
                            type="date"
                            className="form-control"
                            name="birth_date"
                            onChange={(e) => newUserHandler(e.target.name, e.target.value)}
                        />
                    </div>

                    <div className="mb-3 w-100">
                        <label className="form-label fw-bold">Role</label>
                        <select
                            className="form-control"
                            name="role"
                            onChange={(e) => newUserHandler(e.target.name, e.target.value)}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center mt-4 mb-4">
                <button className="btn btn-success ms-2" onClick={createHandler}>Create</button>
            </div>

            <div className="d-flex justify-content-center">
                <button className="btn btn-secondary-home me-2" onClick={userListPage}>User List</button>
                <button className="btn btn-secondary-home ms-2" onClick={goHomePage}>Home</button>
            </div>
        </div>
    );
};

export default CreateUserComponent;