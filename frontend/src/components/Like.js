import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from '../axios'
export default class Like extends Component {
    constructor(props){
        super(props);
        this.state={
            like:this.props.post.like
        }
    }


    incLike = () => {
        axios.put(`/api/post/update=${this.props.post._id}`, {
            like: this.state.like
        })
            .then(response => {
                this.setState({
                    like: this.state.like + 1
                })
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    handleSubmit = (event) => {
        event.preventDefault();
    }
    render() {
        let currentLike = this.state.like
        return (
            <div >
                <button
                    className="likebtn btn btn-block text-center"
                    alt="Like"
                    onClick={this.incLike}
                >
                    {currentLike}  <FontAwesomeIcon icon="thumbs-up" />
                </button>
            </div>
        )
    }
}
