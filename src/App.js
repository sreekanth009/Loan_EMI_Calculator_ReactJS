import React from 'react';
import './App.scss';
import LandingPage from "./components/pages/landing-page";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path={'/'} component={LandingPage} />
    </Router>
  );
}

export default App;
