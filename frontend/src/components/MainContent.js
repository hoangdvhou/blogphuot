import React, { Component } from 'react'
import GirlImage from './Postimage';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Post from './Post';
export default class MainContent extends Component {
  render() {
    const allPosts = this.props.posts? this.props.posts.map(post =>
      <div key={post._id} className="col-lg-4 col-md-6 row"
      //  style={{ display: 'flex',
      //   flexDirection:'row',height:'100px',width:'auto'}}
      >

          <Post post={post} />

      </div>

    ) : ""

    return (
      <div className="container mt-5 pt-5 pt-md-0" >
        <div className=" row align-items-start" style={{justifyContent: "space-around"}}>
          {allPosts}
        </div>
      </div>
    )
  }
}
