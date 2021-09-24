import React, { Component } from 'react';

const creed = new Audio('https://feeds.soundcloud.com/stream/1130189521-roselyn-huynh-creed.mp3');

export class SphealButton extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ Creed'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            console.log('ayo')
            creed.play()
            this.setState( {
                play: false,
                title: '▶ Creed'
            } )
        }
        else {
            console.log('yoooo')
            creed.pause()
            creed.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ Creed'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}