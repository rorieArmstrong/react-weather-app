import React, { Component } from 'react';
import './Weather.css'

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
          city: this.props.city,
          country: this.props.country,
          data: null
        }
        this.getData = this.getData.bind(this);
    }

    getData() {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${this.state.country}&APPID=c0abf36037001046e84d8c4e775ceb72`)
        .then(response => response.json())
        .then(data => {return this.setState({data: data})})
        .catch(error => console.log(error))
    };

    componentDidMount(){
        this.getData()
    }

    render() {
        console.log(this.state)
        if (this.state.data === null){
            return (
                <div>
                    <h3>
                        Loading Data...
                    </h3>
                </div>
            )
        }
        return (
            <div className="container">
                <h3>Weather Report for {this.state.city}</h3>
                <p>Temprature: {Math.floor(this.state.data.main.temp-273.15)}</p>
                <p>Outlook: {this.state.data.weather[0].description}</p>
                <button onClick={() => window.location.reload()}>Refresh</button>
            </div>
        );
    }
}

export default Weather;