import React, { Component } from 'react';


export class Photo extends Component {
    state={
        showInfo:false
    }
    handleInfo =()=>{
        this.setState({
            showInfo:!this.state.showInfo
        })
    }
    render() {
        let {name, source, info}=this.props.item;
        return (
            <div className="photo">
                <img src={source} alt="" onClick={this.handleInfo}/>
                <h3>{name}</h3> 
                {
                    this.state.showInfo && (
                        <div className="showInfos">
                            <div className="infosContent">
                                <div className="head">
                                    <img src={source} alt="" />
                                    <h2>{name}</h2>
                                    <p className="text">{info}</p>
                                    <div className="button return" onClick={this.handleInfo}>Fermer</div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Photo
