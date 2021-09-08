import React, { Component } from 'react'
import ScrollToTop from 'react-scroll-up';
import { photoData } from '../data/photoData'
import styled, { keyframes } from 'styled-components'
import { fadeIn  } from 'react-animations'


const fading = keyframes`${fadeIn}`;

const Fadein= styled.div`
animation:3s ${fading}`

export default class Selector extends Component {
        
    state ={
        photos:photoData,
        radios:[
            {id:1,value:'Mariage'},
            {id:2,value:'Grossesse'},
            {id:3,value:'Bébé'},
            {id:4,value:'Famille'},
            {id:5,value:'Bapteme'},
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
                    <div>
                        <ScrollToTop
                        
                        showUnder={100}
                        duration= {1000}
                        >
                            <button><svg className="scrollup" width="30" height="30" viewBox="0 0 2048 2048" xmlns="http://www.w3.org/2000/svg"><path d="M1523 1440q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23zm0-384q0 13-10 23l-50 50q-10 10-23 10t-23-10l-393-393-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23z"/></svg></button>
                        </ScrollToTop>
                    </div>
                <div className="container-slider">                    
                    {
                        
                        photos
                        .filter(item => item.categorie.includes(selectedRadio))
                        .map(item => {
                            return (
                                <Fadein key={item.id}  >
                                <div className="slide"
                                key={item.id}
                                >
                                    <img
                                    src={item.source}
                                    alt="" 
                                    />
                                     <div className="text">{item.name}</div>
  
                                </div>
                                </Fadein>
                                )
                            }   
                        )
                    }         
                </div>
            </div>
        )
    }
}


