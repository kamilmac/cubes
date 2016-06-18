import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {CubeListView} from './cubeList';
import {CubePreview} from './cubePreview';
import {ComputeText} from './computeText';

@observer
export class Layout extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <a href='https://kamilmac.github.io' target='_blank'>KAMIL.MAC</a>
                </div>
                <div className='hero'>
                    <div className='hero__about'>
                        <ComputeText text='CUBES AND SQUARES' />
                    </div>
                </div>
                <div className='aboutCubes'>
                    <div>
                        <div className='aboutCubes__header'>3d abstract pretty things</div>
                        <div className='aboutCubes__desc'>My 3d works modelled with Blender + Octane Lua procedural scripting.</div>
                    </div>
                </div>
                <CubeListView/>
                <CubePreview/>
            </div>
        );
    }
};
