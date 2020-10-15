import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/HomePage/Home/Home';
import Login from './components/LoginPage/Login';
import UserDashboard from './components/UserDashboardPage/UserDashboard/UserDashboard';
import OrderedServices from './components/UserDashboardPage/UserDashboard/OrderedServices';
import Review from './components/UserDashboardPage/UserDashboard/Review';
import AllServiceList from './components/AdminDashboardPage/AdminDashboard/AllServiceList';
import AddService from './components/AdminDashboardPage/AdminDashboard/AddService';
import MakeAdmin from './components/AdminDashboardPage/AdminDashboard/MakeAdmin';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const  UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
       <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" >
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/userDashboard/:title">
            <UserDashboard></UserDashboard>
          </PrivateRoute>
          <Route path="/orderedServices">
            <OrderedServices></OrderedServices>
          </Route>
          <Route path="/review">
            <Review></Review>
          </Route>
          <Route path="/adminDashboard">
            <AllServiceList></AllServiceList>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
