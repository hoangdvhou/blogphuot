import React, { Component } from 'react'
import NavBar from '../components/NavBar';
import MainContent from '../components/MainContent';
import axios from "../axios";
import NewHome from './NewHome';
import Sitemap from './Sitemap';
import DetailScreen from './DetailScreen';
import Login from './LoginScreen';
import DetailImage from './DetailScreen';

export default class HomeScreen extends Component {
    state = {
        posts: [],
        searchString: "",
        username: ""
    }
    componentDidMount() {
        axios.get( "/api/post")
            .then(dt => {
                console.log(dt.data);
                setTimeout(() => {
                    this.setState({
                        posts: dt.data,
                    });
                }, 1000)

                // this.state.images=data.data;
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    setSearchString = (text)=> {
        axios
        .get("/api/post/search=" + text)
        .then(res => {
          this.setState({posts: res.data})
        })
    }
    render() {
        const displayedPosts = this.state.posts
        //.filter(post => post.title.includes(this.state.searchString) )
        //  ||  pos.description.includes(this.state.searchString))

        return (
            <div>
                <NavBar id={this.props.id} setLogout={this.props.setLogout} setLogin={this.props.setLogin} logined={this.props.logined} username={this.props.username} setSearchString={this.setSearchString} />
                <NewHome></NewHome>
                <MainContent  posts={this.state.posts}/>
                <Sitemap></Sitemap>
                {/* <DetailImage></DetailImage> */}
            </div>
        )
    }
}
