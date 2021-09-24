import React, { Component } from 'react';

const awintercelebration = new Audio('https://feeds.soundcloud.com/stream/1130196955-roselyn-huynh-a-winter-celebration.mp3');

export class AWinterCelebration extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ A Winter Celebration'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            awintercelebration.play()
            this.setState( {
                play: false,
                title: '▶ A Winter Celebration'
            } )
        }
        else {
            awintercelebration.pause()
            awintercelebration.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ A Winter Celebration'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}