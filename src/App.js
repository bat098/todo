import React from "react";
import {
  Router,
  Switch,
  Route,
  Link

} from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'
import Wrapper from "./components/wrapper/Wrapper";
import Home from "./pages/Home/Home";
import Todo from './pages/Todo/Todo'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
import LogoutBtn from "./components/logoutBtn/LogoutBtn";
import TodoItemsDetails from './components/todoItemDetails/TodoItemsDetails'
import Navbar from "./components/navbar/Navbar";
import history from "./helpers/history";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path='/' component={Home} />
            <ProtectedRoute exact path='/todo' component={Todo} />
            <ProtectedRoute path='/todo/:id' component={TodoItemsDetails} />
          </Switch>
        </Wrapper>
      </Router>
    </Provider>
  )
}

export default App;
