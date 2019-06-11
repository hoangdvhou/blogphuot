import React, { Component } from 'react'
import Like from './Like';
import Comment from './Comment';
import Download from './Download';

export default class PostReact extends Component {

    render() {

        const comments=[];

        for (let index = 1; index <5; index++) {
            comments.push(
            <div className="ml-3">
                <span className="font-weight-bold mr-2">
                    RichKid:
                </span>
                nice!
            </div>)
        }

        return (
            <div >
                <div >
                    <div className="row">
                        <Like />
                        <Downl/>
                    </div>
                    {comments}
                    <div className="row my-2 ">
                        <div className="ml-4 text-left">A:</div>
                        <input className="ml-1 col-10" placeholder="type your comment"></input>
                    </div>
                </div>


            </div>

        )
    }
}
