import React, { Component } from 'react';

const chasingsunlight = new Audio('https://feeds.soundcloud.com/stream/1130207284-roselyn-huynh-chasing-sunlight.mp3');

export class ChasingSunlight extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ Chasing Sunlight'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            chasingsunlight.play()
            this.setState( {
                play: false,
                title: '▶ Chasing Sunlight'
            } )
        }
        else {
            chasingsunlight.pause()
            chasingsunlight.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ Chasing Sunlight'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}