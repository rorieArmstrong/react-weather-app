import React, { Component } from 'react';
import NavBar from '../components/NavBar';

class Homepage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="body">
                </div>
            </div>
        );
    }
}

export default Homepage;