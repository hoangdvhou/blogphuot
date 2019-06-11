import React, { Component } from 'react'
import Login from './Login';

import Logout from './Logout';
export default class ProfilePanel extends Component {
  render() {
    const display = this.props.username ? (
      <div>
        <Logout id={this.props.id }setLogout={this.props.setLogout}  username={this.props.username}/>
      </div>
    ) : (
        <div>
           <Login setLogin={this.props.setLogin} buttonLabel="Sign in"/>
        </div>
      );
    return (
      <div className="profile_panel text-center">
        {display}
      </div>
    )
  }
}
