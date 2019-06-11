import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Download extends Component {
    render() {
        return (
            
            <div className="text-center">
                <button aria-label="Download"className="downloadbtn btn btn-block">
                     <FontAwesomeIcon icon="download" />
                 </button>
            </div>
        )
    }
}
