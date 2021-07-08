import React, { Component } from 'react'
import {
  BrowserRouter,
  Route
} from "react-router-dom";
import { NavbarComponent } from "./component";
import { Home, Sukses } from "./pages";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Route path="/" component={Home} exact/>
          <Route path="/Sukses" component={Sukses} exact/>
        </main>
      </BrowserRouter>
    )
  }
}
