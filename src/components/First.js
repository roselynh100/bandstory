import React, { Component } from 'react';

import { Creed } from './music/Creed'
import { AndGoodnight } from './music/AndGoodnight'
import { AWinterCelebration } from './music/AWinterCelebration'
import { DonkeyRiding } from './music/DonkeyRiding'
import { AllThroughTheNight } from './music/AllThroughTheNight'
import { Moscow1941 } from './music/Moscow1941'

export class First extends Component {
    render() {
        return(
            <div className="card">
                <img src="https://i.ibb.co/8K9PG9z/sunrise-Cropped.jpg" className="image" alt=""/>
                <div className="cardText">
                    <h3>Grade 9</h3>
                    <Creed />
                    <AndGoodnight />
                    <AWinterCelebration />
                    <DonkeyRiding />
                    <AllThroughTheNight />
                    <Moscow1941 />
                </div>
            </div>
        )
    }
}