
import LogoutButton from './LogoutButton';
import React, { Component } from 'react'
import SearchField from "./SearchField";
import logo from "../images/techkids.png";
import ProfilePanel from "./ProfilePanel";
import { BrowserRouter, Link, Route } from "react-router-dom";
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
} from 'reactstrap';
export default class Logout extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div >
                
                <UncontrolledDropdown setActiveFromChild>
                    <DropdownToggle tag="a" className="nav-link" caret>
                    welcom, {this.props.username}
                    </DropdownToggle>
                    <DropdownMenu  right>
                        <LogoutButton id={this.props.id} setLogout={this.props.setLogout} />
                    </DropdownMenu>
                </UncontrolledDropdown>
            </div>

        );
    }
}