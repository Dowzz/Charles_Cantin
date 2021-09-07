import React, { Component } from 'react';


export class Photo extends Component {
    render() {
        let {name, source}=this.props.item;
        return (
            <div className="photo">
                <img src={source} alt=""/>
                <h3>{name}</h3> 
            </div>
        )
    }
}

export default Photo
