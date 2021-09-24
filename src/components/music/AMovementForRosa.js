import React, { Component } from 'react';

const amovementforrosa = new Audio('https://feeds.soundcloud.com/stream/1130207266-roselyn-huynh-a-movement-for-rosa.mp3');

export class AMovementForRosa extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ A Movement For Rosa'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            amovementforrosa.play()
            this.setState( {
                play: false,
                title: '▶ A Movement For Rosa'
            } )
        }
        else {
            amovementforrosa.pause()
            amovementforrosa.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ A Movement For Rosa'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}