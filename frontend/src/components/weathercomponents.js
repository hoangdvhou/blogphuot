import React, { Component } from 'react'
import axios from "../axios";
import "../Css/style.css";

export default class weathercomponents extends Component {
    state = {
        data: [],
        dataday: []
    }

    componentDidMount() {
        axios.get( "/api/weather/hanoi/day")
            .then(dt => {
                setTimeout(() => {
                    this.setState({
                        data: dt.data,
                    });
                }, 1000)
                // console.log(dt.data);
            })
            .catch(function (error) {
                console.log(error);
            });
        axios.get("/api/weather/hanoi/oneday")
            .then(dt => {
                setTimeout(() => {
                    this.setState({
                        dataday: dt.data,
                    });
                }, 1000)
            }).catch(function(err) {
                console.log(err);
            });
        }

  render() {
    return (
      <div>
        <div className="sitemapnew">
            <br></br>
                <div className="container">
                    <ul>
                        {this.state.data.map((data, index) => {
                            console.log(data);
                            console.log(data.weather);                           // var src = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
                            return (
                                <li>
                                    {/* <i>{data.dt}</i> */}
                                    <br></br>
                                    <i className="container">{data.dt_txt.split(" ")[0]}</i>
                                    <hr/>
                                    <strong className="container">{parseInt(data.main.temp) - 273}</strong>
                                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}></img>
                                    <hr/>
                                    <i className="container">{data.weather[0].description}</i>

                                </li>
                            )
                        })}
                    </ul>
                    <br></br>
                    <ul>
                        {this.state.dataday.map((data, index) => {
                            return (
                                <li>
                                    {/* <i>{data.dt}</i> */}
                                    <i className="container">{data.dt_txt.split(" ")[0]}</i>
                                    <br></br>
                                    <i className="container">{data.dt_txt.split(" ")[1]}</i>
                                    <hr/>
                                    <strong className="container">{parseInt(data.main.temp) - 273}</strong>
                                    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}></img>
                                    <hr/>
                                    <i className="container">{data.weather[0].description}</i>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
      </div>
    )
  }
}
