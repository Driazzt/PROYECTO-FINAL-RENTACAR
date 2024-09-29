import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteUser, getAllUsers, getUser, modifyProfile } from '../../Core/Services/userFetch';
import { doLogoutAction, loadInfoActions } from '../User/UserActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import logoDrivezzy1 from "../../assets/logoDrivezzy-nobg1.png"


const MyProfileComponent = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.userReducer.user);
    const { userId } = useParams()

    const [profile, setProfile] = useState(null);
    const [editedProfile, setEditedProfile] = useState({});
    const [isEdit, setIsEdit] = useState(false);

    const loadUserProfile = async () => {
        const idToFetch = userId || user._id;
        const userProfile = await getUser(idToFetch);
        setProfile(userProfile);
        setEditedProfile(userProfile);
    };

    const goLogout = () => {
        localStorage.removeItem('token');
        dispatch(doLogoutAction());
        navigate("/");
    };

    const goHomePage = () => {
        navigate("/home")
    }

    const goCreateUser = () => {
        navigate("/createUser")
    }

    const vehicleListPage = () => {
        navigate("/vehicleList")
    }

    const handleEditClick = () => {
        setIsEdit(true);
    };

    const saveHandler = async () => {
        await modifyProfile(profile._id, editedProfile);
        setIsEdit(false);
        setProfile(editedProfile);
    };

    const cancelHandler = () => {
        setIsEdit(false)
        setEditedProfile(profile)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile({
            ...editedProfile,
            [name]: value,
        });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await modifyProfile(user._id, editedProfile);
        loadUserProfile();
    };

    const loadUserList = async () => {
        const usersAux = await getAllUsers();
        dispatch(
            loadInfoActions({
                users: usersAux
            })
        );
    };

    useEffect(() => {
        if (user) {
            loadUserProfile();
        }
        loadUserList()
    }, [user]);


    const deleteHandler = (profile) => {
        deleteUser(profile)
        loadUserProfile
        navigate("/getAllUsers")
    }

    return (
        <div className="container-fluid mt-4">
            <img src={logoDrivezzy1} />
            <div className="d-flex justify-content-between align-items-center mb-4">
                <button className="btn btn-terciarie" onClick={goHomePage}>Back Home</button>
                <button className="btn btn-terciarie" onClick={goLogout}>Logout</button>
            </div>

            <div className="mb-4">
                {!profile ? (
                    <div className="text-center">Loading...</div>
                ) : isEdit ? (
                    <form onSubmit={handleFormSubmit}>
                        <div className="form-group">
                            <label>Name:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                value={editedProfile.name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Username:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                value={editedProfile.username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={editedProfile.email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input
                                type="password"
                                className="form-control"
                                name="password"
                                value={editedProfile.password}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Birth Date:</label>
                            <input
                                type="date"
                                className="form-control"
                                name="birth_date"
                                value={editedProfile.birth_date}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Role:</label>
                            {user.role === 'admin' ? (
                                <input
                                    type="text"
                                    className="form-control"
                                    name="role"
                                    value={editedProfile.role}
                                    onChange={handleInputChange}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="form-control"
                                    name="role"
                                    value={editedProfile.role}
                                    readOnly
                                />
                            )}
                        </div>
                        <button type="submit" className="btn btn-primary mt-3" onClick={saveHandler}>
                            Save Changes
                        </button>
                        <button className="btn btn-primary mt-3" onClick={cancelHandler}>Cancel</button>

                    </form>
                ) : (
                    <div className="card h-100" onClick={handleEditClick}>
                        <div className="card-body text-center d-flex flex-column align-items-center">
                            <h5 className="card-title">{profile.name}</h5>
                            <p className="text-warning">{profile.username}</p>
                            <p className="text-warning">{profile.email}</p>
                            <p className="text-warning">{profile.birth_date}</p>
                            <p className="text-warning">{profile.role}</p>
                        </div>
                        <div>
                            <button onClick={() => deleteHandler(profile._id)} className="btn btn-danger">Delete User</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MyProfileComponent;
