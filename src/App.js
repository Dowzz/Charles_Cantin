import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Prestation from './pages/Prestation';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import SignUpPage from "./pages/SignupPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import AuthProvider from "./contexts/AuthContext";
import PrivateRoute from "./component/PrivateRoute";
import ForgotPassword from "./component/ForgotPassword";
import UpdateProfile from "./component/UpdateProfile"

function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
      <AuthProvider>
        <Route path="/" exact component={Home}/>
        <Route path="/Galerie" exact component={Gallery}/>
        <Route path="/Prestations" exact component={Prestation}/>
        <Route path="/Me_contacter" exact component={Contact}/>
        <Route path="/signupPage" exact component={SignUpPage}/>
        <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        <PrivateRoute exact path="/update-profile" component={UpdateProfile}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/forgot-password" exact component={ForgotPassword}/>
        </AuthProvider>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter></>
    

    
  );
}

export default App;
