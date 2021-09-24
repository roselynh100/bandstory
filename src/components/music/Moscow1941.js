import React, { Component } from 'react';

const moscow1941 = new Audio('https://feeds.soundcloud.com/stream/1130199751-roselyn-huynh-moscow-1941.mp3');

export class Moscow1941 extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ Moscow, 1941'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            moscow1941.play()
            this.setState( {
                play: false,
                title: '▶ Moscow, 1941'
            } )
        }
        else {
            moscow1941.pause()
            moscow1941.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ Moscow, 1941'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}