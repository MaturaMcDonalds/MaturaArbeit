import React from 'react'
import "./pages/style.css"
import Navbar from "./pages/components/navbar/Navbar";
import Footer from "./pages/components/footer/Footer";
import HomePage from "./pages/home/HomePage";
import Geschichte from "./pages/geschichte/Geschichte";
import Marketing from "./pages/marketing/Marketing";
import Zukunft from "./pages/zukunft/Zukunft";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import McAktuell from './pages/mcaktuell/McAktuell';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/MaturaArbeit">
            <HomePage />
          </Route>
          <Route exact path="/MaturaArbeit/McAktuell">
            <McAktuell />
          </Route>
          <Route exact path="/MaturaArbeit/Geschichte">
            <Geschichte />
          </Route>
          <Route exact path="/MaturaArbeit/Marketing">
            <Marketing />
          </Route>
          <Route exact path="/MaturaArbeit/Zukunft">
            <Zukunft />
          </Route>
          <Redirect to="/MaturaArbeit" />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
