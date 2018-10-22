import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class Header extends Component {
  render() {
    return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <span href="#" className="navbar-brand mb-0 h1">          
          <img height="30" className="d-inline-block align-top" alt="Logo" src="https://static.netshow.me/production/assets/logo/full-default-e31dcdcffb9dc5f4c6e984b8b8299bac5c4733c31ef5c3e1eda25bc6f3c5f0ac.png" />
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Dashboard <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="#">
              Live
            </a>
            <a className="nav-item nav-link" href="#">
              Vídeos
            </a>
            <a className="nav-item nav-link" href="#">
              Play
            </a>
          </div>
        </div>
      </nav>;
  }
}

export default Header;
