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
        this.handleChangeCity = this.handleChangeCity.bind(this);
        this.handleChangeCountry = this.handleChangeCountry.bind(this);
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
        console.log(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=c0abf36037001046e84d8c4e775ceb72`)
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=c0abf36037001046e84d8c4e775ceb72`)
        .then(response => response.json())
        .then(response => console.log(response))
        .then(data => {return this.setState({data: data})})
        .catch(error => console.log(error))
        .then(console.log(this.state))
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