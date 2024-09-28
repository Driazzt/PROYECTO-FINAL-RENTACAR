import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../Core/Services/userFetch';
import { doLogoutAction } from '../User/UserActions';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyProfileComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [profile, setProfile] = useState(null);
    const user = useSelector((state) => state.userReducer.user);

    const loadUserProfile = async () => {
        const userProfile = await getUser(user._id);
        setProfile(userProfile);
    };

    const goLogout = () => {
        localStorage.removeItem('token');
        dispatch(doLogoutAction());
        navigate("/");
    };

    const goHomePage = () => {
        navigate("/home")
    }

    const vehicleListPage = () => {
        navigate("/vehicleList")
    }

    useEffect(() => {
        if (user) {
            loadUserProfile();
        }
    }, [user]);

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <button className="btn btn-terciarie" onClick={goLogout}>
                    Logout
                </button>

                <button className="btn btn-secondary-home" onClick={vehicleListPage}>Vehicle List</button>
                <button className="btn btn-secondary-home" onClick={goHomePage}>Back Home</button>

            </div>

            <div className="mb-4">
                {!profile ? (
                    <div className="text-center">Loading...</div>
                ) : (
                    <div className="card h-100">
                        <div className="card-body text-center d-flex flex-column align-items-center">
                            <h5 className="card-title">{profile.name}</h5>
                            <p className="text-warning">{profile.username}</p>
                            <p className="text-warning">{profile.email}</p>
                            <p className="text-warning">{profile.birth_date}</p>
                            <p className="text-warning">{profile.role}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProfileComponent;
