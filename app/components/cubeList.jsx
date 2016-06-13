import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Services} from '../services'

class CubeView extends Component {
    componentWillMount() {
        this.cube = this.props.cube;
    }
    setPreview() {
        Services.ui.setActivePreview(this.cube.url);
    }
    render() {
        return(
            <div className='cube' onClick={this.setPreview.bind(this)}>
                <div className='cube__img' style={ {backgroundImage: 'url(' + this.cube.url + ')'} }></div>
                <div className='cube__overlay'>{ this.cube.title }</div>
            </div>
        );
    }
}

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
