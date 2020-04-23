import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './NavBar.css'
import Homepage from '../containers/Homepage.js'

class NavBar extends Component {
    render() {
        return (
            <Router>
                <div className="navbar">
                    <Link to="/" className="styledLink">Home</Link>
                </div>
                <Switch>
                    <Route path="/home">
                        <Homepage />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default NavBar