import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import axios from "./axios";
import { BrowserRouter, Route, withRouter } from "react-router-dom";

import HomeScreen from './containers/HomeScreen';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import LoginScreen from './containers/LoginScreen';
import DetailScreen from './containers/DetailScreen';
library.add(faThumbsUp)
library.add(faDownload)

class App extends Component {
  state = {}
  // onLogin = () => {
  //   axios.post("/api/auth", {
  //     username: "admin",//.taget.value
  //     password: "123456"
  //   })
  //     .then(response => {
  //       this.setState({
  //         username: response.data.username,
  //         id: response.data.id,
  //         // username: "admin",
  //         // id:"12345",
  //         logined: true
  //       })
  //       // this.props.history.push("/");
  //       console.log(this.state)
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }
  setLogin = (data) => {
    this.setState({
      username: data.username,
      id: data._id,
      logined: true
    })
    this.props.history.push("/");
    console.log(this.state)
  }
  setLogout = () => {
    this.setState({
      username:"",
      id:"",
      logined:false
    })
    this.props.history.push("/");
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <Route exact path="/" render={(props) => {
          return <HomeScreen  {...props} username={this.state.username} setLogin={this.setLogin} id={this.state.id} setLogout={this.setLogout} />
        }} />
        <Route exact path="/api/post/*" render={(props) => {
          return <DetailScreen  {...props} username={this.state.username} setLogin={this.setLogin} id={this.state.id} setLogout={this.setLogout} />
        }} />
        {/* <Route exact path="/" render={(props) => {
            return <LoginScreen  {...props} username = {this.state.username} onLogin={this.onLogin}/>
          }} /> */}
      </div>
    );
  }
}
export default withRouter(App);
