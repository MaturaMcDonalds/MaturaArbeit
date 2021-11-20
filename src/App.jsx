import React from 'react'
import "./pages/style.css"
import Navbar from "./pages/components/navbar/Navbar";
import Footer from "./pages/components/footer/Footer";
import HomePage from "./pages/home/HomePage";
import Geschichte from "./pages/geschichte/Geschichte";
import Marketing from "./pages/marketing/Marketing";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import McAktuell from './pages/mcaktuell/McAktuell';
import Grundprinzipien from './pages/articles/grundprinzipien/Grundprinzipien';
import MaturaArbeit from './pages/maturaarbeit/MaturaArbeit';

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
          <Route exact path="/MaturaArbeit/Matura">
            <MaturaArbeit />
          </Route>
          <Route exact path="/MaturaArbeit/Geschichte">
            <Geschichte />
          </Route>
          <Route exact path="/MaturaArbeit/Marketing">
            <Marketing />
          </Route>
          <Route exact path="/MaturaArbeit/Grundprinzipien">
            <Grundprinzipien/>
          </Route>
          <Redirect to="/MaturaArbeit" />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
