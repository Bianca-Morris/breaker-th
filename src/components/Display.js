import React, { Component } from 'react';

import '../App.css';

class Display extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            {
                this.props.ep === undefined ? "Loading your episode data..." :
                <div>
                    <img src={this.props.ep.image_url} />
                    <form>
                        Display form
                    </form>
                </div>
            }
            </div>
        );
    }
}

export default Display;
