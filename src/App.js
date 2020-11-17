import React, {Component} from "react";
import './App.css';
import List from './List';
import Beranda from './page/beranda';
import Gallery from './page/gallery';
import Hari from './page/hari';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

    function App() {
      return (
        <Route>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <h2><a class="navbar-brand nav-link disabled" href="#">Adiwiyata</a></h2>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-item nav-link active" href="/beranda">Beranda <span class="sr-only">(current)</span></a>
              <a class="nav-item nav-link" href="/gallery">Gallery</a>
              <a class="nav-item nav-link" href="/hari">Hari Besar</a>
            </div>
          </div>
        </nav>
        <Switch>
        <Route path="/beranda">
          <Beranda />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/hari">
          <Hari />
        </Route>
      </Switch>
</Route>

      );
    }


export default App;
