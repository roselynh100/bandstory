import React, { Component } from 'react';

const cajunfolksongs = new Audio('https://feeds.soundcloud.com/stream/1130215975-roselyn-huynh-cajun-folk-songs.mp3');

export class CajunFolkSongs extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            play: true,
            title: '▷ Cajun Folk Songs'
        }
        this.onClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        if (this.state.play) {
            cajunfolksongs.play()
            this.setState( {
                play: false,
                title: '▶ Cajun Folk Songs'
            } )
        }
        else {
            cajunfolksongs.pause()
            cajunfolksongs.currentTime = 0
            this.setState ({
                play: true,
                title: '▷ Cajun Folk Songs'
            })
        }
    }
    
    render() {
        return(
        <p onClick={this.onClick}>{ this.state.title }</p>
        )
    }
}