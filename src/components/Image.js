import React, { Component } from 'react';

class Image extends Component {
    constructor(props){
        super(props);
        this.state = {
            src: ""
        }
        this.getImage = this.getImage.bind(this)
    }

    getImage(){
        fetch("https://raw.githubusercontent.com/fatima03598/-portfolio-project-react/rorie-update/Rorie.json")
        .then(response => response.json())
        .then(data => {return this.setState({data: data})})
        .catch(error => console.log(error))
    }

    componentDidMount(){
        this.getImage()
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default Image;