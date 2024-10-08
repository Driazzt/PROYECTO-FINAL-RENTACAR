import './App.css'
import { Provider } from 'react-redux'
import LoginPage from "./Pages/LoginPage"
import store from "./Core/Redux/Store/store"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateVehiclePage from './Pages/CreateVehiclePage'
import VehicleListPage from './Pages/VehicleListPage'
import ContactPage from "./Pages/ContactPage"
import VehiclesInfoPage from './Pages/VehiclesInfoPage'
import 'bootstrap/dist/css/bootstrap.min.css'
import MyProfileComponent from './Components/User/MyProfileComponent'
import UserComponent from './Components/User/UserComponent'
import CreateUserComponent from './Components/User/CreateUserComponent'


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<VehicleListPage />} />
          <Route path="/create" element={<CreateVehiclePage />} />
          <Route path="/vehicleList" element={<VehicleListPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/vehicleInfo" element={<VehiclesInfoPage />} />
          <Route path="/myProfile" element={<MyProfileComponent />} />
          <Route path="/createUser" element={<CreateUserComponent />} />
          <Route path="/myProfile/:userId" element={<MyProfileComponent />} />
          <Route path="/getAllUsers" element={<UserComponent />} />
        </Routes>
      </BrowserRouter>
    </Provider >
  )
}

export default App
