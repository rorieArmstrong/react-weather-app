import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Search from '../components/Search';

class Homepage extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className="body">
                    <Search/>
                </div>
            </div>
        );
    }
}

export default Homepage;