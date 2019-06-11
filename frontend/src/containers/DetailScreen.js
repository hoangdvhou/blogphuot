import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../Css/style.css';
import axios from "../axios";
import Weathercomponents from '../components/weathercomponents';

class DetailScreen extends Component {
    state = {
        images: [],
        descripstion: [],
        author: "",
        comment: [],
        title: "",
        userauthor: ""
    }

    componentDidMount() {
        axios.get(`/api/post/id=${window.location.pathname.split("/")[3]}`)
            .then(dt => {
                    this.setState({
                        images: dt.data.listimages,
                        descripstion: dt.data.descripstionnew,
                        author: dt.data.author,
                        comment: dt.data.comment,
                        title: dt.data.title
                    }, () => console.log(this.state));
                // console.log(this.state.author);
            })
            .catch(function (error) {
                console.log(error);
        });

        // axios.get(`api/user/id=${this.state.author}`)
        //     .then(dt => {
        //         setTimeout(() => {
        //             this.setState({
        //                 userauthor: dt.data
        //             });
        //         }, 100)
        //         console.log(dt.data)
        //     }).catch(function(err) {
        //         console.log(err);
        //     })
    }

    render() {
        const displayimages = this.state.images;
        const displaydescripstion = this.state.descripstion;
        const authorpost = this.state.userauthor;
        const comment = this.state.comment;
        // console.log(authorpost);
        return (
            <div>
                <br></br>
                <h1 className="container">{this.state.title}</h1>
                <br></br>
                <hr/>
                <Slider>
                    {displayimages.map((article, index) => <div key={index}>
                        <span class="helper"></span>
                        <img className="background" src={article.images}></img>
                    </div>)}
                </Slider>
                <hr/>
                {displaydescripstion.map((article, index) => <div>
                    <h1>{article.descripstiondetail}</h1>
                    <i>{article.descripstiontitle}</i>
                </div>)}
                <hr/>
                <Weathercomponents></Weathercomponents>
                <hr/>
                {comment.map((article, index) => <div>
                    <h1>{article.createdBy}</h1>
                    <i>{article.content}</i>
                    <i>{article.createdAt}</i>
                </div>)}
            </div>
        );
    }
}

export default DetailScreen;