import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Weather from '../components/Weather';
import Image from '../components/Image';
import "./Styling.css"


class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
          city: "",
          country: ""
        }
    }

    componentDidMount(){
        const str = this.props.match.params.city
        const arr = str.split('&')
        this.setState({
                city: arr[0],
                country: arr[1]
            })
    }

    render() {
        if(this.state.city !== "")
            {return (
                <div>
                    <NavBar/>
                    <div className="body">
                        <Weather city={this.state.city} country={this.state.country}/>
                        <Image search={this.state.city}/>
                    </div>
                </div>
            )
        }else {
            return (
                <div>
                    <NavBar/>
                    <div className="body">
                        <h3>Loading...</h3>
                    </div>
                </div>)
        }
    }
}

export default Results;