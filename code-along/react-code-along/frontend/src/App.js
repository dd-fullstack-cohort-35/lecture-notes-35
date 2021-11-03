import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import {Footer} from "./components/Footer";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <NavBar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
            </Switch>
            <Footer />
        </BrowserRouter>
    </div>
  );
}

export default App;
