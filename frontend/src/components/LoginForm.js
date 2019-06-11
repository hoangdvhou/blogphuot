import React from 'react';
import { Button, Form, FormGroup, Label, Input, } from 'reactstrap';

export default class LoginForm extends React.Component {
    state={
        username:"",
        password:""
    }
    onChangeUsername=(event)=>{
        this.setState({
            username:event.target.value
        })
        this.props.setLoginData(event.target.value,this.state.password)
    }
    onChangePassword=(event)=>{
        this.setState({
            password:event.target.value
        })
        this.props.setLoginData(this.state.username,event.target.value)
    }
    handleSubmit=(event)=>{
        event.preventDefault();
    }
    render() {
        return (
            // <div className="">
            <div className="container-flruid col-12" >
                <Form  onSubmit={this.handleSubmit} className="bg-white float-left rounded col-12">
                    <FormGroup>
                        <Label className="font-weight-bold" for="exampleEmail">Username</Label>
                        <Input onChange={this.onChangeUsername} type="text" name="email" id="username" placeholder="username" />
                    </FormGroup>
                    <FormGroup>
                        <Label className="font-weight-bold" for="examplePassword">Password</Label>
                        <Input  onChange={this.onChangePassword} type="password" name="password" id="password" placeholder="password" />
                    </FormGroup>
                </Form>
            </div>
            // </div>
        );
    }
}