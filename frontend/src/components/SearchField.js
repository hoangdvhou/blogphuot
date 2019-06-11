import React, { Component } from 'react'

export default class SearchField extends Component {
  handleTextChange = event=> {
    this.props.setSearchString(event.target.value);
  }
  handleSubmit=(event)=>{
    event.preventDefault();
  }
  render() {
    return (
        <form>
            <input onSubmit={this.handleSubmit} onChange={this.handleTextChange} className="form-control" type="text" placeholder="Search"/>
        </form>
    )
  }
}
