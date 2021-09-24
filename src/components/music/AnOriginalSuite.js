import React, { Component } from 'react';

const anoriginalsuite = new Audio('https://feeds.soundcloud.com/stream/1130213641-roselyn-huynh-an-original-suite.mp3');

export class AnOriginalSuite extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ An Original Suite'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            anoriginalsuite.play()
            this.setState( {
                play: false,
                title: '▶ An Original Suite'
            } )
        }
        else {
            anoriginalsuite.pause()
            anoriginalsuite.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ An Original Suite'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}