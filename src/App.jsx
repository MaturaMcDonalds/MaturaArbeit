import React from 'react'
import "./pages/style.css"
import Navbar from "./pages/components/navbar/Navbar";
import Footer from "./pages/components/footer/Footer";
import Matura from "./pages/matura/Matura";
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

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/Matura">
            <Matura />
          </Route>
          <Route exact path="/Geschichte">
            <Geschichte />
          </Route>
          <Route exact path="/Marketing">
            <Marketing />
          </Route>
          <Route exact path="/Zukunft">
            <Zukunft />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
