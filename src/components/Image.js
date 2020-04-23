import React, { Component } from 'react';
import "./Image.css"

class Image extends Component {    
    render() {
        return (
            <div>
                <img src={"https://source.unsplash.com/featured/?" + this.props.search} alt={this.props.search}/> 
            </div>
        );
    }
}

export default Image;