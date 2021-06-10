import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'
import About from "./pages/About";
import Home from "./pages/Home";
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
import LogoutBtn from "./components/logoutBtn/LogoutBtn";



export const AppCtx = createContext()

const App = () => {
  const [appState, setAppState] = useState(false)
  return (
    <AppCtx.Provider value={appState, setAppState}>
      <Provider store={store}>
        <Router>
          <LogoutBtn />
          <Switch>
            <ProtectedRoute exact path='/about' component={About} />
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </AppCtx.Provider>
  )
}

export default App;
