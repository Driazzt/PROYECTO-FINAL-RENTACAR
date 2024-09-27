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


function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/create" element={<CreateVehiclePage />} />
          <Route path="/vehicleList" element={<VehicleListPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/vehicleInfo" element={<VehiclesInfoPage />} />
        </Routes>
      </BrowserRouter>
    </Provider >
  )
}

export default App
