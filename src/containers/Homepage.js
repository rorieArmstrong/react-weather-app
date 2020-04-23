import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Search from '../components/Search';
import Image from '../components/Image';
import "./Styling.css"

class Homepage extends Component {
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

export default Homepage;