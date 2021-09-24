import React, { Component } from 'react';

import { AMovementForRosa } from './music/AMovementForRosa';
import { FirstSuite } from './music/FirstSuite';

export class Fourth extends Component {
    render() {
        return(
            <div className="card">
                <img src="https://i.ibb.co/fGfhdW6/moonn-Cropped.jpg" className="image" alt=""/>
                <div className="cardText">
                    <h3>Grade 12</h3>
                    <FirstSuite />
                    <AMovementForRosa />
                </div>
            </div>
        )
    }
}