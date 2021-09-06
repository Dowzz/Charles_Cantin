import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Prestation from './pages/Prestation';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';





function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Galerie" exact component={Gallery}/>
        <Route path="/Prestations" exact component={Prestation}/>
        <Route path="/Me_contacter" exact component={Contact}/>
        <Route component={NotFound} />

      </Switch>
    </BrowserRouter></>
    

    
  );
}

export default App;
