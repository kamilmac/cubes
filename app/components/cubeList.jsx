import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Services} from '../services'

const CubeView = ({cube}) => 
    <div>
        <span> Title: {cube.title} </span>
        <span> Suffix: {cube.url} </span>
    </div>;

@observer
export class CubeListView extends Component {
    componentWillMount() {
        this.cubes = Services.cubes;
    }
    render() {
        return (
            <div>
                { this.cubes.get.map((cube, index) => 
                    <CubeView key={index} cube={cube} />) }
            </div>
        );
     }
};
