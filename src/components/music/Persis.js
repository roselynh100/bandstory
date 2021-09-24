import React, { Component } from 'react';

const persis = new Audio('https://feeds.soundcloud.com/stream/1130213596-roselyn-huynh-persis.mp3');

export class Persis extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ Persis'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            persis.play()
            this.setState( {
                play: false,
                title: '▶ Persis'
            } )
        }
        else {
            persis.pause()
            persis.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ Persis'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}