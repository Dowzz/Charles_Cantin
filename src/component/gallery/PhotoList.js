import React, { Component } from 'react'
import {photoData} from '../../data/photoData'
import Photo from './Photo';


export class PhotoList extends Component {
    state= {
        photos:photoData,
        radios: [
            {id:1, value:'Portrait'},
            {id:2, value:'Mariage'},
            {id:3, value:'Grossesse'},
            {id:4, value:'Bébé'},
            {id:5, value:'Famille'},
            {id:6, value:'Bapteme'},
            {id:7, value:'Couple'},
        ],
        selectedRadio:'Portrait'
    };

    handleRadio=(event)=>{
        let radio = event.target.value;
        this.setState({selectedRadio : radio})
    }

    render() {
        let {photos, radios, selectedRadio}=this.state;
        return (            
            <div className="photoListContent">
            <ul className="radioDisplay">
                    {
                         radios.map((radio) =>{
                            return(
                                <li key={radio.id}>
                                    <input
                                    type= "radio"
                                    name= "radio"
                                    checked ={radio.value === selectedRadio}
                                    value = {radio.value}
                                    id={radio.value}
                                    onChange={this.handleRadio}
                                    />
                                    <label htmlFor={radio.value}>{radio.value}</label>
                                </li>
                            )
                        })
                    }


                </ul>
                
                <div className="photos">
                    {
                        photos.filter(item => item.categorie.includes(selectedRadio))
                        .map(item =>{
                            return(
                                <Photo
                                    key = {item.id}
                                    item = {item}

                               />
                            )
                        })
                    }
                </div>                
            </div>
        )
    }
}

export default PhotoList
