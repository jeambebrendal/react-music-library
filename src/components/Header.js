import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="App-header col-lg-6 col-md-6 col-sm-12 justify-content-start">
        <nav>
          <Link to="/" className="d-flex align-items-center">
            <img src="images/logo.png" alt="Music Library" />
            <h1 className="App-title">Music Library</h1>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
