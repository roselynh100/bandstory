import React, { Component } from 'react';

const mars = new Audio('https://feeds.soundcloud.com/stream/1130207308-roselyn-huynh-mars.mp3');

export class Mars extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ Mars'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            mars.play()
            this.setState( {
                play: false,
                title: '▶ Mars'
            } )
        }
        else {
            mars.pause()
            mars.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ Mars'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}