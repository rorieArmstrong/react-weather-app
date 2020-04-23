import React, { Component } from 'react';
import "./Styling.css"


class Results extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="body">
                    <Search/>
                    <Image search="weather"/>
                </div>
            </div>
        );
    }
}

export default Results;