import React, { Component } from 'react';

const thenutcrackersuite = new Audio('https://feeds.soundcloud.com/stream/1130213623-roselyn-huynh-the-nutcracker-suite.mp3');

export class TheNutcrackerSuite extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ The Nutcracker Suite'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            thenutcrackersuite.play()
            this.setState( {
                play: false,
                title: '▶ The Nutcracker Suite'
            } )
        }
        else {
            thenutcrackersuite.pause()
            thenutcrackersuite.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ The Nutcracker Suite'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}