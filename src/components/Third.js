import React, { Component } from 'react';

import { AnOriginalSuite } from './music/AnOriginalSuite';
import { TheNutcrackerSuite } from './music/TheNutcrackerSuite';
import { Persis } from './music/Persis';

export class Third extends Component {
    render() {
        return(
            <div className="card">
                <img src="https://i.ibb.co/q01bq2p/sunset-Cropped.jpg" className="image" alt=""/>
                <div className="cardText">
                    <h3>Grade 11</h3>
                    <AnOriginalSuite />
                    <TheNutcrackerSuite />
                    <Persis />
                </div>
            </div>
        )
    }
}