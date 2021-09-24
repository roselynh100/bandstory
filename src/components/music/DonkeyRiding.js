import React, { Component } from 'react';

const donkeyriding = new Audio('https://feeds.soundcloud.com/stream/1130198506-roselyn-huynh-donkey-riding.mp3');

export class DonkeyRiding extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ Donkey Riding'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            donkeyriding.play()
            this.setState( {
                play: false,
                title: '▶ Donkey Riding'
            } )
        }
        else {
            donkeyriding.pause()
            donkeyriding.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ Donkey Riding'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}