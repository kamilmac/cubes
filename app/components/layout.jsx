import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {CubeListView} from './cubeList';

@observer
export class Layout extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <div className='title'>Cubes and Squares</div>
                </div>
                <CubeListView/>
            </div>
        );
    }
};
