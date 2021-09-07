import React, { Component } from 'react'
import { photoData } from '../data/photoData'




export default class Selector extends Component {
        
    state ={
        photos:photoData,
        radios:[
            {id:1,value:'Mariage'},
            {id:2,value:'Grossesse'},
            {id:3,value:'Bébé'},
            {id:4,value:'Famille'},
            {id:5,value:'Baptème'},
            {id:6,value:'Couple'},
            {id:7,value:'Portrait'},
        ],
        selectedRadio:'Mariage'
    };

    handleRadio =(event)=>{
        let radio= event.target.value;
        this.setState({selectedRadio : radio})
    }

    render() {
        let {photos, radios, selectedRadio} = this.state;
        return (
            <div className="selector">
                <ul className="radioDisplay">
                    {
                        radios.map((radio) =>{
                            return(
                                <li key={radio.id}>
                                    <input 
                                    type="radio"
                                    name="radio"
                                    checked={radio.value === selectedRadio}
                                    value={radio.value}
                                    id={radio.value}
                                    onChange={this.handleRadio} />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }
                   
                </ul>
                <div className="container-slider">                    
                    {
                        photos
                        .filter(item => item.categorie.includes(selectedRadio))
                        .map(item => {
                            return ( 
                                <div className="slide"
                                key={item.id}
                                >
                                    <img
                                    className="image"
                                    src={item.source}
                                    alt="" 
                                    />
                                    <div className="overlay">
                                        <div className="text">{item.name}</div>

                                    </div>
                                           
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


