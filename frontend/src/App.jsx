import './App.css'
import { Provider } from 'react-redux'
import LoginPage from "./Pages/LoginPage"
import store from "./Core/Redux/Store/store"

function App() {

  return (
    <>
      <Provider store={store}>
        <LoginPage />
      </Provider>
    </>
  )
}

export default App
