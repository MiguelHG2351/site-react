import React, { Component } from "react";
import { Link } from "react-router-dom";

// Images
import imgHeader from "./images/laravel.png";

class Layout extends Component {
  render() {
    return (
      <header className="header-site">
        <div className="img-header">
          <img src={imgHeader} alt="Hola Mundo" />
        </div>
        <nav className="nav">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/hola">Desarrollo web</Link>
            </li>
            <li>
              <Link to="/mundo">Hola</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Layout;