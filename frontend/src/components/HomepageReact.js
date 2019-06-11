import React, { Component } from 'react'
import Like from './Like';
import Download from './Download';

export default class HomepageReact extends Component {

    render() {
        
        return (
            <div className="info col-6">
                <div className=" row text-center my-auto">
                    <div className="col">
                        <Like post={this.props.post} />
                    </div>
                    {/* <div className="col-6">
                        <Download />
                    </div> */}
                </div>
            </div>
        )
    }
}
