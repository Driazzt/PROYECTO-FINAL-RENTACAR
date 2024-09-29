import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, getUser, modifyProfile } from '../../Core/Services/userFetch';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doLogoutAction, loadInfoActions } from '../User/UserActions';
import logoDrivezzy1 from "../../assets/logoDrivezzy-nobg1.png"

const UserComponent = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useSelector((state) => state.userReducer.users);

    const loadUserList = async () => {
        const usersAux = await getAllUsers();
        dispatch(
            loadInfoActions({
                users: usersAux
            })
        );
    };

    const goVehicleList = () => {
        navigate("/vehicleList")
    }

    const goLogout = () => {
        localStorage.removeItem('token');
        dispatch(doLogoutAction());
        navigate("/");
    };

    const goProfile = async (userId) => {
        const selectedUser = await getUser(userId);
        dispatch(
            loadInfoActions({
                selectedUser: selectedUser,
            })
        );
        navigate(`/myProfile/${userId}`);
    };

    const myProfile = () => {
        navigate("/myProfile")
    }

    const createUserHandler = () => {
        navigate("/createUser")
    }

    const goHomePage = () => {
        navigate("/home");
    };

    useEffect(() => {
        loadUserList();
    }, []);

    return (
        <div className="mb-4">
            <img className="imgLogo" src={logoDrivezzy1} />
            <div className="d-flex justify-content-between align-items-center mb-4">
                <button className="btn btn-terciarie" onClick={goHomePage}>
                    Home
                </button>
                <button className="btn btn-terciarie" onClick={myProfile}>
                    My profile
                </button>
                <button className="btn btn-terciarie" onClick={createUserHandler}>
                    Create User
                </button>
            </div>
            {!users ? (
                <div className="text-center">Loading...</div>
            ) : (
                <div className="row g-4">
                    {users.map((u, idx) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={idx}>
                            <div className="card h-100">
                                <div className="card-body text-center d-flex flex-column align-items-center" style={{ cursor: "pointer" }} onClick={() => goProfile(u._id)}>
                                    <h5 className="card-title">{u.name} {u.username}</h5>
                                    <p className="text-warning">{u.email}</p>
                                    <p className="text-warning">{u.birth_date}</p>
                                    <p className="text-warning">{u.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                    <button className="btn btn-terciarie" onClick={goLogout}>
                        Logout
                    </button>

                </div>

            )}
        </div>
    );
};

export default UserComponent;