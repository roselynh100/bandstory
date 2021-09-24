import React, { Component } from 'react';

import { ByLochAndMountain } from './music/ByLochAndMountain';
import { Mars } from './music/Mars';
import { ChasingSunlight } from './music/ChasingSunlight';
import { CajunFolkSongs } from './music/CajunFolkSongs';
import { MountainThyme } from './music/MountainThyme';
import { RhythmDanse } from './RhythmDanse';

export class Second extends Component {
    render() {
        return(
            <div className="card">
                <img src="https://i.ibb.co/7vKhg4k/sky-Cropped.jpg" className="image" alt=""/>
                <div className="cardText">
                    <h3>Grade 10</h3>
                    <ByLochAndMountain />
                    <Mars />
                    <ChasingSunlight />
                    <CajunFolkSongs />
                    <MountainThyme />
                    <RhythmDanse />
                </div>
            </div>
        )
    }
}