import React, { Component } from 'react';

const rhythmdanse = new Audio('https://feeds.soundcloud.com/stream/1130217460-roselyn-huynh-rhythm-danse.mp3');

export class RhythmDanse extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ Rhythm Danse'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            rhythmdanse.play()
            this.setState( {
                play: false,
                title: '▶ Rhythm Danse'
            } )
        }
        else {
            rhythmdanse.pause()
            rhythmdanse.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ Rhythm Danse'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}