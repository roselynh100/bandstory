import React, { Component } from 'react';

const andgoodnight = new Audio('https://feeds.soundcloud.com/stream/1130193712-roselyn-huynh-and-goodnight.mp3');

export class AndGoodnight extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ ...And Goodnight'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            andgoodnight.play()
            this.setState( {
                play: false,
                title: '▶ ...And Goodnight'
            } )
        }
        else {
            andgoodnight.pause()
            andgoodnight.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ ...And Goodnight'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}