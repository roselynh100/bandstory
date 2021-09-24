import React, { Component } from 'react';

const mountainthyme = new Audio('https://feeds.soundcloud.com/stream/1130216500-roselyn-huynh-mountain-thyme.mp3');

export class MountainThyme extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ Mountain Thyme'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            mountainthyme.play()
            this.setState( {
                play: false,
                title: '▶ Mountain Thyme'
            } )
        }
        else {
            mountainthyme.pause()
            mountainthyme.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ Mountain Thyme'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}