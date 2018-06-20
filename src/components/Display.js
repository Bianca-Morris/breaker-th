import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

class Display extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    render() {
        let ep = this.props.getEp();
        return (
            <div>
                {/* <h1>Now Playing...</h1>
                <h3>{ep.title}</h3>
                <h3>{ep.show.name}</h3> */}

                <div className="Curr-ep-cont">
                    <div className="Curr-ep">
                    {
                        ep === undefined ? "Loading your episode data..." :
                            <img src={ep.image_url} />
                    }
                    </div>
                    <div className="Curr-ep-tools">
                        <Link to="/edit" id="Edit-button">
                            <i className="fa fa-edit"></i>
                        </Link>
                        <h3>{ep.title}</h3>
                        <h3>{ep.show.name}</h3>
                    </div>
                </div>
                <div className="Curr-ep-cont" style={{textAlign: 'center'}}>
                    <p>{ep.description}</p>
                </div>
            </div>
        );
    }
}

export default Display;
