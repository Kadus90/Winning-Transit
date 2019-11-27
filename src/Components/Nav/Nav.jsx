import React, { Component } from "react";
import { Link } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
// Styling
import "./Nav.css";

export default class Nav extends Component {
  state = {
    menuOpen: false
  };

  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });

    this.props.toggleBlue();
  }

  closeMenu() {
    this.setState({ menuOpen: false });
    this.props.toggleBlue();
  }

  render() {
    return (
      <div className="nav-container">
        <Link to="/" style={{ color: "#42be08" }}>
          <i className="fas fa-subway fa-3x"></i>
        </Link>
        <Menu
          {...this.props}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          closeMenu={this.closeMenu}
        >
          <Link className="menu-item" to="/" onClick={() => this.closeMenu()}>
            Home
          </Link>
          <Link
            to="/ride"
            className="menu-item"
            onClick={() => this.closeMenu()}
          >
            Ride
          </Link>
          <Link
            to="/rate"
            className="menu-item"
            onClick={() => this.closeMenu()}
          >
            Rate
          </Link>
          {/* <Link to="" className="menu-item" onClick={() => this.closeMenu()}>
            Feedback
          </Link> */}
        </Menu>
      </div>
    );
  }
}
