import React from 'react'
import "./pages/style.css"
import Navbar from "./pages/components/navbar/Navbar";
import Footer from "./pages/components/footer/Footer";
import HomePage from "./pages/home/HomePage";
import Geschichte from "./pages/geschichte/Geschichte";
import McZukunft from "./pages/mczukunft/McZukunft";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import McAktuell from './pages/mcaktuell/McAktuell';
import Grundprinzipien from './pages/articles/mcvergangenheit/Grundprinzipien';
import MaturaArbeit from './pages/maturaarbeit/MaturaArbeit';
import Manipulation from './pages/articles/mcvergangenheit/Manipulation';
import McDonaldisierung from './pages/articles/mcvergangenheit/McDonaldisierung';
import SuperSizeMe from './pages/articles/mcvergangenheit/SuperSizeMe';

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
          <Route exact path="/MaturaArbeit/McVergangenheit">
            <Geschichte />
          </Route>
          <Route exact path="/MaturaArbeit/McZukunft">
            <McZukunft />
          </Route>
          <Route exact path="/MaturaArbeit/McVergangenheit/Grundprinzipien">
            <Grundprinzipien/>
          </Route>
          <Route exact path="/MaturaArbeit/McVergangenheit/Manipulation">
            <Manipulation/>
          </Route>
          <Route exact path="/MaturaArbeit/McVergangenheit/McDonaldisierung">
            <McDonaldisierung/>
          </Route>
          <Route exact path="/MaturaArbeit/McVergangenheit/SuperSize">
            <SuperSizeMe/>
          </Route>
          <Redirect to="/MaturaArbeit" />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
