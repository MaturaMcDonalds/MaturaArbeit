import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
//Functional
import ScrollToTop from './ScrollToTop';

//Styling
import "./pages/style.css"

//Components
import Navbar from "./pages/components/navbar/Navbar";
import Footer from "./pages/components/footer/Footer";

//Overviews
import HomePage from "./pages/home/HomePage";
import Geschichte from "./pages/geschichte/Geschichte";
import McZukunft from "./pages/mczukunft/McZukunft";
import McAktuell from './pages/mcaktuell/McAktuell';
import MaturaArbeit from './pages/maturaarbeit/MaturaArbeit';

//Articles
import Grundprinzipien from './pages/articles/mcvergangenheit/Grundprinzipien';
import Manipulation from './pages/articles/mcvergangenheit/Manipulation';
import McDonaldisierung from './pages/articles/mcvergangenheit/McDonaldisierung';
import SuperSizeMe from './pages/articles/mcvergangenheit/SuperSizeMe';

import KeinFleischMehr from './pages/articles/mczukunft/KeinFleischMehr';
import Digitalisierung from './pages/articles/mczukunft/Digitalisierung';
import Forschung from './pages/articles/mczukunft/Forschung';
import KlimaVeraenderung from './pages/articles/mczukunft/KlimaVeraenderung';
import Gesundheitsexpansion from './pages/articles/mczukunft/Gesundheitsexpansion';
import Individualisierung from './pages/articles/mczukunft/Individualisierung';
import Werbevideo from './pages/articles/mczukunft/Werbevideo';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <ScrollToTop />
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
          <Route exact path="/MaturaArbeit/McZukunft/KeinFleischMehr">
            <KeinFleischMehr />
          </Route>
          <Route exact path="/MaturaArbeit/McZukunft/Digitalisierung">
            <Digitalisierung />
          </Route>
          <Route exact path="/MaturaArbeit/McZukunft/Forschung">
            <Forschung />
          </Route>
          <Route exact path="/MaturaArbeit/McZukunft/Gesundheitsexpansion">
            <Gesundheitsexpansion />
          </Route>
          <Route exact path="/MaturaArbeit/McZukunft/Individualisierung">
            <Individualisierung />
          </Route>
          <Route exact path="/MaturaArbeit/McZukunft/KlimaVeraenderung">
            <KlimaVeraenderung />
          </Route>
          <Route exact path="/MaturaArbeit/McZukunft/Werbevideo">
            <Werbevideo />
          </Route>
          <Redirect to="/MaturaArbeit" />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
