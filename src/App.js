import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ImagesCart from './components/ImagesCart/ImagesCart';
import Header from './components/Header/Header';
import VideosCart from './components/VideosCart/VideosCart';

function App() {
  

  return (
    <Router>
      <Header />
      <Switch>
          <Route path="/image">
            <ImagesCart />
          </Route>
          <Route path="/video">
            <VideosCart />
          </Route>
          <Route exact path="/">
            <ImagesCart />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
