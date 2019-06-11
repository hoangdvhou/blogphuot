import React, { Component } from 'react'


export default class Sitemap extends Component {

    render() {
        return (
            <div className="sitemap">
            <br></br>
                <div className="container">
                    <ul>
                        <li><a href="#home"><i class="fab fa-facebook fa-2x"></i></a></li>
                        <li><a href="#news"><i class="fab fa-google fa-2x"></i></a></li>
                        <li><a href="#contact"><i class="fab fa-instagram fa-2x"></i></a></li>
                        <li><a href="#about"><i class="fab fa-youtube fa-2x"></i></a></li>
                    </ul>
                    <br></br>
                    <p class="copyright"></p>
                    <p className="centersitemap">Toidi.net © - 2019  | <a href="http://toidi.net/sitemap_index.xml" rel="dofollow">Site Map</a>.</p>
                </div>
            </div>
        )
    }
}
