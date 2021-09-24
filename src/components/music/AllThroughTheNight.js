import React, { Component } from 'react';

const allthroughthenight = new Audio('https://feeds.soundcloud.com/stream/1130199745-roselyn-huynh-all-through-the-night.mp3');

export class AllThroughTheNight extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ All Through The Night'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            allthroughthenight.play()
            this.setState( {
                play: false,
                title: '▶ All Through The Night'
            } )
        }
        else {
            allthroughthenight.pause()
            allthroughthenight.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ All Through The Night'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}