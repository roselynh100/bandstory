import React, { Component } from 'react';

const bylochandmountain = new Audio('https://feeds.soundcloud.com/stream/1130202463-roselyn-huynh-by-loch-and-mountain.mp3');

export class ByLochAndMountain extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ By Loch And Mountain'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            bylochandmountain.play()
            this.setState( {
                play: false,
                title: '▶ By Loch And Mountain'
            } )
        }
        else {
            bylochandmountain.pause()
            bylochandmountain.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ By Loch And Mountain'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}