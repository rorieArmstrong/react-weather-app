import React, { Component } from 'react';
import axios from "axios"

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
          city: '',
          country: ''
        };
        this.handleChange = this.handleChangeCity.bind(this);
        this.handleChange = this.handleChangeCountry.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        }

    handleChangeCountry(event) {
        event.preventDefault()
        this.setState({Country: event.target.value})
    };

    handleChangeCity(event) {
        event.preventDefault()
        this.setState({city: event.target.value})
    };

    handleSubmit(event) {
        event.preventDefault()
        const userQuery =  this.state.value
        console.log(userQuery)
        axios.get(`http://www.omdbapi.com/?s=${userQuery}&apikey=71ef6486`)
        .then(results => 
          {
              this.props.searchResults(results.data.Search)}
    )};

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="City" value={this.state.value} onChange={this.handleChangeCity} />
                <input type="text" placeholder="Country" value={this.state.value} onChange={this.handleChangeCountry} />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Search;