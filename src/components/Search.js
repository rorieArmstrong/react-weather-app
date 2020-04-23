import React, { Component } from 'react';
import './Search.css'
import {Link} from "react-router-dom";

class Search extends Component {
    constructor() {
        super();
        this.state = {
          city: '',
          country: '',
          data: null
        }
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeCountry(event) {
        event.preventDefault()
        return this.setState({country: event.target.value})
    };

    handleChangeCity(event) {
        event.preventDefault()
        return this.setState({city: event.target.value})
    };

    handleSubmit(event) {
        event.preventDefault()
        return <Link to={`/search/${this.state.city}&${this.state.country}`}/>
    };

    render() {
        return (
            <div className="container">
                <h3>Weather Report</h3>
                <form onSubmit={this.handleSubmit} data-testid="search-form">
                    <div className="inputs">
                        <input type="text" placeholder="City" value={this.state.value} onChange={this.handleChangeCity} />
                        <input type="text" placeholder="Country" value={this.state.value} onChange={this.handleChangeCountry} />
                    </div>
                    <Link className="link" to={`/search/${this.state.city}&${this.state.country}`}>Search</Link>
                </form>
            </div>
        );
    }
}

export default Search;