import React from "react";
import {
  Router,
  Switch,
  Route,
} from "react-router-dom";
import store from './redux/store'
import { Provider } from 'react-redux'
import Wrapper from "./components/wrapper/Wrapper";
import Home from "./pages/Home/Home";
import Todo from './pages/Todo/Todo'
import ProtectedRoute from './components/protectedRoute/ProtectedRoute'
import TodoItemsDetails from './components/todoItemDetails/TodoItemsDetails'
import Navbar from "./components/navbar/Navbar";
import history from "./helpers/history";
import NotFound from "./pages/NotFound/NotFound";

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Navbar />
        <Wrapper>
          <Switch>
            <Route exact path='/' component={Home} />
            <ProtectedRoute exact path='/todo' component={Todo} />
            <ProtectedRoute exact path='/todo/:id' component={TodoItemsDetails} />
            <Route component={NotFound} />
          </Switch>
        </Wrapper>
      </Router>
    </Provider>
  )
}

export default App;
