import React, { Component } from 'react'
import config from '../config'
import NgocTrinh from "../images/Ngoctrinh.jpg";

import Like from './Like';
import Download from './Download';
import HomepageReact from './HomepageReact';
import { BrowserRouter, Link, Route } from "react-router-dom";


export default class Postimage extends Component {

  render() {
    // console.log(this.props.img.comment);
    // const comments = this.props.img.comment ? this.props.img.comment.map(comment =>
    //   <p key={comment._id}><span class="font-weight-bold">{comment.createdBy.username}</span>: {comment.content}</p>) : ""

    return (
      <Link to="/jkjl">
        <div className="text-center hovereffect">
          <img className="img-fluid my-2 img-thumbnail" src={this.props.data.imageUrl} alt={this.props.data.descripstiondetail} />
          <div className="overlay">
            <h4 className="text-center">{this.props.data.descripstiondetail}</h4>
            <div>
              <HomepageReact/>
            </div>
            {/* {comments} */}
          </div>
        </div>
        {/* <div className="row">
          <div className="col text-left ml-2">
            69 <FontAwesomeIcon icon="thumbs-up" />
          </div>
          <div className="col">
            comments
          </div>
        </div> */}
      </Link>
    )
  }
}
