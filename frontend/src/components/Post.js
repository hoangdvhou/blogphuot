import React, { Component } from 'react'
import Girlimage from './Postimage';
import HomepageReact from './HomepageReact';
import { BrowserRouter, Link, Route } from "react-router-dom";
import Postimage from './Postimage';
export default class Post extends Component {

  render() {
    const data = []
    for (let index = 0; index < this.props.post.listimages.length; index++) {
      data.push({
        imageUrl: this.props.post.listimages[index].images,
        descripstiondetail: this.props.post.descripstionnew[index].descripstiondetail
      })
    }
    const allPostImage = data.map((data, index) =>
      <div key={index} className="d-flex">
        <Postimage data={data} />;
          </div>
    )
    return (
      <div className="post">
        <div className="text-center hovereffect">
        <Link to={`/api/posts/${this.props.post._id}`}>
            <img className="img-fluid my-2 img-thumbnail" src={this.props.post.listimages[0].images} alt={this.props.post.title} />
          </Link>
          <div className="overlay">
          <Link to={`/api/post/${this.props.post._id}`}>
              <h4 className="text-center">{this.props.post.title}</h4>
            </Link>
            <div>
              <HomepageReact post={this.props.post} />
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

      </div>
    )
  }
}
