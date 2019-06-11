import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,ButtonGroup } from 'reactstrap';
import LoginForm from './LoginForm';
import axios from '../axios';

class Login extends React.Component {
  state = {
    modal: false,
    username: "",//.taget.value
    password: ""
  };
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }
  onLogin = () => {
    console.log(this.state)
    axios.post("/login", {
      username: this.state.username,//.taget.value
      password: this.state.password
    })
      .then(response => {
        this.props.setLogin(response.data)
      })
      .catch((error)=>{
      });
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
  }
  setLoginData = (username, password) => {
    this.setState({
      username: username,
      password: password
    })
  }
  render() {
    return (
      <div>
        <button
          className="iologbtn btn btn-primary btn-block"
          onClick={this.toggle}
        >
          Sign in
           </button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Login</ModalHeader>
          <ModalBody>
            <LoginForm setLoginData={this.setLoginData} />
          </ModalBody>
          <ModalFooter>
            <ButtonGroup className="col-6">
              <Button className="iologbtn col" color="primary" onClick={this.onLogin}   >Login</Button>
              <Button  className="cancel col" color="danger" onClick={this.toggle}>Cancel</Button>
            </ButtonGroup>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Login;
