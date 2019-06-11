import React, { Component } from 'react'
import axios from "../axios";
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import '../Css/style.css';

export default class NewHome extends Component {
    state = {
        images: [],
        image3: []
    }

    componentDidMount() {
        axios.get( "/api/post")
            .then(dt => {
                setTimeout(() => {
                    this.setState({
                        images: dt.data,
                    });
                }, 1000)
            })
            .catch(function (error) {
                console.log(error);
        });
    }

    render() {
        const startlist = this.state.images.length - 3;
        const endlist = this.state.images.length;
        const displayimages = this.state.images.slice(startlist, endlist);
        console.log(displayimages[0]);
        return (
            <div>
                <Slider autoplay="10">
                    {displayimages.map((article, index) => <div key={index}>
                        <span class="helper"></span>
                        <img className="background" src={displayimages[index].listimages[0].images}></img>
                        <h2 className="center">{article.title}</h2>
                        {/* <div>{article.description}</div> */}
                    </div>)}
                </Slider>
            </div>
        )
    }
}
