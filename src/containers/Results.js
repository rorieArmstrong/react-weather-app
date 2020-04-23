import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Weather from '../components/Weather';
import Image from '../components/Image';
import "./Styling.css"


class Results extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="body">
                    <Weather city={this.props.match.params.city}/>
                    <Image search={this.props.match.params.city}/>
                </div>
            </div>
        );
    }
}

export default Results;