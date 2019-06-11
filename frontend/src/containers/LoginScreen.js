import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import Login from '../components/LoginForm';
import axios from "../axios";
export default class LoginScreen extends Component {
    state = {
        images: [],
        searchString: "",
        username: ""
    }
    componentDidMount() {
        axios.get('/api/images')
            .then(dt => {
                console.log(dt.data);
                setTimeout(() => {
                    this.setState({
                        images: dt.data,
                    });
                }, 1000)

                // this.state.images=data.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <NavBar username={this.props.username} onSearchChanged={this.onSearchChanged} />
                <Login logined = {this.props.logined} onLogin={this.props.onLogin} />
            </div>
        )
    }
}
