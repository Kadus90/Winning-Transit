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
  }

  render() {
    return (
      <div className="nav-container">
        <div className="navLink">
          <Link to="/ride">RIDE</Link>
        </div>
        <Link to="/" className="navIcon" style={{ color: "#42be08" }}>
          <i className="fas fa-subway fa-2x"></i>
        </Link>
        <div className="navLink">
          <Link to="/rate">RATE</Link>
        </div>
        <div className="nav-content">
          {/* <div className="navLink">
            <Link to="/">Home</Link>
          </div> */}
        </div>
        {/* <Menu
          {...this.props}
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
          closeMenu={this.closeMenu}
        > */}
        {/* <Link to="" className="menu-item" onClick={() => this.closeMenu()}>
            Feedback
          </Link> */}
        {/* </Menu> */}
      </div>
    );
  }
}
