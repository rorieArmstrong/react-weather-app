import React, { Component } from 'react';
import './Search.css'

class Search extends Component {
    constructor() {
        super();
        this.state = {
          city: '',
          country: '',
          data: null
        }
        this.handleChange = this.handleChangeCity.bind(this);
        this.handleChange = this.handleChangeCountry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeCountry(event) {
        event.preventDefault()
        return this.setState({Country: event.target.value})
    };

    handleChangeCity(event) {
        event.preventDefault()
        return this.setState({city: event.target.value})
    };

    handleSubmit(event) {
        event.preventDefault()
        fetch(`api.openweathermap.org/data/2.5/weather?q=London`)
        .then(response => response.json)
        .then(data => {return this.setState({data: data})})
    };

    render() {
        return (
            <div className="container">
                <h3>Weather Report</h3>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="City" value={this.state.value} onChange={this.handleChangeCity} />
                    <input type="text" placeholder="Country" value={this.state.value} onChange={this.handleChangeCountry} />
                    <input type="submit" value="Search" />
                </form>
            </div>
        );
    }
}

export default Search;