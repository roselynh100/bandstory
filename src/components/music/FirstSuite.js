import React, { Component } from 'react';

const firstsuite = new Audio('https://feeds.soundcloud.com/stream/1130211730-roselyn-huynh-first-suite.mp3');

export class FirstSuite extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ First Suite in E-Flat'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            firstsuite.play()
            this.setState( {
                play: false,
                title: '▶ First Suite in E-Flat'
            } )
        }
        else {
            firstsuite.pause()
            firstsuite.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ First Suite in E-Flat'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}