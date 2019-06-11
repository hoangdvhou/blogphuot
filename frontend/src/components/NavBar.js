import React, { Component } from 'react'
import SearchField from "./SearchField";
import logo from "../images/techkids.png";
import ProfilePanel from "./ProfilePanel";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Logout from './LogoutButton';



export default class NavBar extends Component {
  state = {
    visible: false
  }
  onClick = () => this.setState({
    visible: this.state.visible === true ? false : true
  })
  render() {
    return (

      <div className="navbar  fixed-top">
      <div className=" container flex-column flex-md-row p-1 ">
        <div className="text-md-left text-center hvr-float-shadow col col-md-4 mb-3 mb-md-0 ">
          <Link to={`/`}>
            <img className=" col-6 col-md-12 " src={logo} alt="techkid" />
          </Link>
        </div>
        <div className="flex-row col col-md-8 m-0 p-0 text-center">
          <div className="hvr-float-shadow mr-3  text-left col-9 ">
            <SearchField setSearchString={this.props.setSearchString} />
          </div>
          <div className="row hvr-float-shadow ">
            <ProfilePanel id={this.props.id} setLogout={this.props.setLogout} setLogin={this.props.setLogin} onClick={this.onClick} username={this.props.username} />
          </div>
        </div>
      </div>
    </div>

    )
  }
}
